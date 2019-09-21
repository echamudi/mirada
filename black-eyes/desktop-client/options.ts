import { writeFileSync } from 'fs'
import * as gui from 'gui'
import { File, knownSupportedReadWriteImageFormats, mainSync } from 'magica'
import { int } from 'misc-utils-of-mine-generic'
import { basename } from 'path'
import { StateComponent, CommonProps } from "./abstractComponent"
import { buildBuffers } from './state'

export class Options extends StateComponent<CommonProps> {
  protected view: gui.Browser = null as any;

  render() {
    this.view = gui.Browser.create({})
    this.view.setStyle({ width: '100%', height: '100%', flex: 1 })
    this.view.setBindingName('app1')
    this.view.addBinding('handleRotate', value => this.handleRotate(value))
    this.view.addBinding('handleOpen', () => this.handleOpen())
    this.view.addBinding('handleSave', () => this.handleSave())
    this.view.addBinding('handleApply', () => this.handleApply())
    this.view.addBinding('handleResize', (width, height) => this.handleResize(width, height))
    this.view.addBinding('handleOnMouseMove', (value: boolean) => this.handleOnMouseMove(value))
    this.renderOptions()
    return this.view
  }

  protected handleApply() {
    throw new Error('Method not implemented.')
  }

  protected handleOnMouseMove(onMouseMove: boolean) {
    console.log('handleOnMouseMove', onMouseMove)
    this.setState({ options: { ...this.state.options, onMouseMove } })
  }

  protected handleOpen(): void {
    const dialog = gui.FileOpenDialog.create()
    dialog.setOptions(gui.FileDialog.optionShowHidden)
    dialog.setFilters([
      { description: 'Images', extensions: knownSupportedReadWriteImageFormats },
    ])
    if (dialog.runForWindow(this.props.win)) {
      this.setState(buildBuffers(dialog.getResult()))
    }
  }

  protected handleSave(): void {
    const dialog = gui.FileSaveDialog.create()
    dialog.setOptions(gui.FileDialog.optionShowHidden)
    dialog.setFilters([
      { description: 'Images', extensions: knownSupportedReadWriteImageFormats },
    ])
    if (dialog.runForWindow(this.props.win)) {
      const result = mainSync({
        command: `convert output.miff '${basename(dialog.getResult())}'`,
        inputFiles: [new File('output.miff', this.state.magicaBuffer)],
      })
      if (result.outputFiles.length) {
        writeFileSync(dialog.getResult(), result.outputFiles[0].content)
      }
      this.setState({
        working: undefined,
        time: result.times ? result.times.total : 0
      })
    }
  }

  protected renderOptions() {
    const html = `
<button onClick="app1.handleOpen()">Open</button><br/>
<button onClick="app1.handleSave()">Save</button><br/>
<button onClick="app1.handleApply()">Apply</button><br/>
Rotate:<br/>
<input type="range" value="22" onchange="app1.handleRotate(this.value)" min="0" max="360"/>
Width:<br/>
<input step="20" type="number" value="${this.state.imageSize.width}" onchange="app1.handleResize(this.value, undefined)" />
Height:<br/>
<input step="10" type="number" value="${this.state.imageSize.height}" onchange="app1.handleResize(undefined, this.value)" />
<label>Commands: <select>${this.state.options.commands.map(c => `<option selected="${this.state.options.command === c.name}" value="${c.name}">${c.name}</option>`).join('\n    ')}
</select></label>
<label><input type="checkbox" value="${this.state.options.onMouseMove}" onchange="app1.handleOnMouseMove(this.value)"/>On Mouse Move</label>
    `
    this.view.loadHTML(html, 'http://localhost')
  }

  protected handleRotate(value = int(0, 360)) {
    const result = mainSync({
      command: `convert output.miff -rotate ${value} output.jpg`,
      inputFiles: [new File('output.miff', this.state.magicaBuffer)],
    })
    this.setState({
      currentBuffer: result.outputFiles[0].content,
      working: undefined,
      time: result.times ? result.times.total : 0
    })
  }

  protected handleResize(width: number, height: number) {
    this.setState({
      working: 'Processing...',
    })
    const result = mainSync({
      command: ['convert', 'output.miff', '-scale', `!${width || this.state.imageSize.width}x${height || this.state.imageSize.height}`, `output.jpg`],
      inputFiles: [new File('output.miff', this.state.magicaBuffer)],
    })
    this.setState({
      currentBuffer: result.outputFiles[0].content,
      working: undefined,
      time: result.times ? result.times.total : 0
    })
  }
}

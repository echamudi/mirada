import { readFileSync } from 'fs'
import * as gui from 'gui'
import { StateComponent } from "./abstractComponent"
import { State } from './state'
import { mainSync, File } from 'magica'
import { basename } from 'path'

interface CP {
  win: gui.Window
}

type RP = 'currentBuffer'

export class Canvas extends StateComponent<CP> {
  protected view: gui.Scroll = null as any
  protected relevantProperties: RP[] = ['currentBuffer']
  protected win: gui.Window = null as any
  protected canvas: gui.Canvas = null as any
  protected image: gui.Image = null as any
  protected canvasContainer: gui.Container = null as any

  render() {
    this.view = gui.Scroll.create()
    this.view.setStyle({ flex: 1, flexGrow: 1, width: '100%', height: '100%', flexDirection: 'column' })
    this.view.setBackgroundColor('#ffffff')
    this.canvasContainer = gui.Container.create()
    this.canvasContainer.setBackgroundColor('#ffffff')
    this.canvasContainer.onMouseMove=(self, event)=>{
      const command = `convert output.miff -matte -virtual-pixel transparent -distort Barrel '-0.4 0.7 0.2 0.5 ${event.positionInView.x} ${event.positionInView.y}' output.jpg`
      const result = mainSync({
        command,
        inputFiles: [new File('output.miff', this.state.magicaBuffer)],
      });
      this.setState({
        currentBuffer: result.outputFiles[0].content,
        working: undefined,
        time: result.times ? result.times.total : 0
      });
    }
    this.view.setContentView(this.canvasContainer)
    this.drawImage(readFileSync(this.state.image))
    this.canvasContainer.onDraw = (self: gui.Container, painter: gui.Painter, dirty: gui.RectF) => {
      painter.drawCanvasFromRect(this.canvas, dirty, dirty)
    }
    return this.view
  }

  drawImage(p: ArrayBuffer | ArrayBufferView) {
    this.image = gui.Image.createFromBuffer(p, 1)
    const size = this.image.getSize()
    this.view.setContentSize(size)
    this.canvas = gui.Canvas.create(size, 1)
    this.canvas.getPainter().drawImage(this.image, { x: 0, y: 0, ...size })
    this.canvasContainer.schedulePaint()
  }

  protected stateChanged(names: RP[], s: Partial<State>) {
    this.drawImage(s.currentBuffer!)
  }
}

import * as React from 'react'
import { SketchPicker, ColorChangeHandler, RGBColor, ColorResult } from 'react-color';
interface P extends S {
  onChange: (c: RGBColor) => void;
  targetEl?: () => Promise<HTMLCanvasElement>
  selectButton?: boolean
}

interface S {
  value: RGBColor;
  displayColorPicker?: boolean;
  selectActive?: boolean
}

export class Color extends React.Component<P, S> {
  picker: SketchPicker | null = null

  constructor(p: P, s: S) {
    super(p, s);
    this.onSelect = this.onSelect.bind(this)
    this.onSelectListener = this.onSelectListener.bind(this)
    this.state = {
      displayColorPicker: false,
      selectActive: false,
      value: p.value || {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      }
    };
  }

  protected async onSelectListener(e: MouseEvent) {
    const el = this.props.targetEl && await this.props.targetEl()!
    if (el) {
      const p = { x: e.offsetX - el.offsetLeft, y: e.offsetY - el.offsetTop }
      const [r, g, b, a] = document.querySelector<HTMLCanvasElement>('#inputCanvas')!.getContext('2d')!.getImageData(p.x, p.y, 1, 1).data
      const value = { r, g, b, a }
      this.setState({ value })
      this.props.onChange && this.props.onChange(value)
      if (this.props.selectButton) {
        el.removeEventListener('click', this.onSelectListener)
      }
    }
  }

  protected async onSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.currentTarget.checked
    const el = this.props.targetEl && await this.props.targetEl()
    if (el) {
      if (checked || this.props.selectButton) {
        el.addEventListener('click', this.onSelectListener)
      } else {
        el.removeEventListener('click', this.onSelectListener)
      }
    }
    this.setState({ selectActive: e.currentTarget.checked })
  }

  protected handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  protected handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  protected handleChange = (color: ColorResult) => {
    this.setState({ value: color.rgb });
    this.props.onChange(color.rgb);
  };

  render() {
    return (<>
      
      <div style={this.styles().swatch} onClick={this.handleClick}>
        <div style={this.styles().color} />
      </div>
      {this.props.targetEl ?
        this.props.selectButton ? <button style={{ marginLeft: 10, display: 'inline-block', verticalAlign: 'super' }} onClick={this.onSelect as any}>Select</button> :
          <label style={{ marginLeft: 10, display: 'inline-block', verticalAlign: 'super' }}> <input style={{  display: 'inline-block', verticalAlign: 'super' }} type="checkbox" checked={this.state.selectActive} onChange={this.onSelect} />Select</label> : ''}
      {this.state.displayColorPicker ? <div style={this.styles().popover}>
        <div style={this.styles().cover} onClick={this.handleClose} />
        <SketchPicker color={this.state.value}  onChange={this.handleChange} ref={c => this.picker = c} />
      </div> : null}
    </>);
  }

  protected styles() {
    return {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${this.state.value.r}, ${this.state.value.g}, ${this.state.value.b}, ${this.state.value.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: 2,
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      }
    } as {
      [s: string]: React.CSSProperties;
    };
  }
}

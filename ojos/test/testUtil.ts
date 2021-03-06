import Jimp from 'jimp'
import { asImageData, installFormatProxy, JimpCodec, loadFormatProxies, loadOpencv, LoadOptions, Mat, toRgba } from 'mirada'

let loaded = false

export async function loadMirada() {
  await loadMirada2()
}
export async function loadMirada2(o?: LoadOptions) {
  if (!loaded) {
    loaded = true
    await installFormatProxy(() => new JimpCodec(Jimp))
    await loadFormatProxies()
    await loadOpencv(o)
  }
}

export async function write(img: Mat, s: string) {
  const i = await toRgba(img)
  const d = asImageData(i)
  const j = new Jimp(d.width, d.height, '#FF00FF')
  j.bitmap = { ...d, data: Buffer.from(d.data.buffer) }
  j.write(s)
}

// export function createCanvas(width = 200, height = 200): Canvas {
//   getGlobal().HTMLCanvasElement = Canvas
//   getGlobal().ImageData = ImageData
//   getGlobal().HTMLImageElement = Image
//   getGlobal().Image = Image
//   var el = createCanvas_(width, height) as any
//   return el
// }

// interface DomRepresentation<T extends HTMLElement = HTMLElement> {
//   window: DOMWindow;
//   document: Document
//   el: T
// }

// export function loadDOM<T extends HTMLElement = HTMLElement>(body = '', selector?: string): DomRepresentation {
//   const html = `
// <!DOCTYPE html><html>  <head>    <title>test</title>  </head>  <body>  ${body}  </body></html>`.trim()
//   const dom = new JSDOM(html, { virtualConsole: new VirtualConsole() })
//   const window = dom.window
//   getGlobal().document = window.document
//   getGlobal().atob = window.atob
//   getGlobal().btoa = window.btoa
//   getGlobal().FileReader = (window as any).FileReader
//   getGlobal().Image = require('canvas').Image
//   const document = window.document
//   const d: DomRepresentation = { window, document, el: document.querySelector<T>(selector || 'body') || document.body }
//   return d
// }


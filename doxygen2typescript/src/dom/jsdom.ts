import { DOMWindow, JSDOM, VirtualConsole, ConstructorOptions } from "jsdom"

export function createXMLDom(s: string, debug = false) {
  const o:ConstructorOptions = {}
  // if (debug) {
    // const vc = new VirtualConsole()
    // vc.sendTo(console)
    // o.virtualConsole = vc
    // Object.assign(o, { virtualConsole: vc })
  // }
  const dom = new JSDOM('', { virtualConsole: new VirtualConsole()})
  window = dom.window
  const { DOMParser, Node } = window
  const parser = new DOMParser()
  doc = parser.parseFromString(s, "text/xml")
  document = doc.documentElement
  return { doc, document, window, parser, Node }
}
/** the last created documentElement with createXMLDom */
export let document: HTMLElement
/** the last created document with createXMLDom */
export let doc: Document
/** the last created window with createXMLDom */
export let window: DOMWindow
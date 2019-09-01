import 'babel-polyfill'
import { CanvasCodec, installFormatProxy, loadFormatProxies, loadOpencv } from 'mirada'
import { sleep } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.css'
import { setExample, start } from './app/dispatcher'
// import { setExample, start } from './app/dispatcher'
import { getInitialState } from './app/state'
import { getStore, _setStore } from './app/store'
import './styles.css'
import { App } from './ui/app'
import { createUrl, loadUrl, urlHasState } from './util/urlState'

async function main() {
  var s = await getInitialState()
  _setStore(s)
  render(<App />, document.getElementById('main'))
  if (urlHasState()) {
    await loadUrl()
  }
  else {
    await setExample(s.example)
  }
  getStore().add(() => {
    createUrl()
  })
  await sleep(10)
  await installFormatProxy(() => new CanvasCodec())
  await loadFormatProxies()
  await loadOpencv()
  await start()
}

main()


var Nanocomponent = require('choo/component')
var html = require('choo/html')
var css = require('sheetify')

css('./index.scss')

class Component extends Nanocomponent {
  constructor (state, emit) {
    super()
    this.page = 'weight'
    this.unHeightFix = true
    this.state = state
    this.emit = emit
  }

  createElement () {
    return html`
      <main class='w-100 flex flex-column flex-auto items-center bg-dz'>
        <header class='w-100 tc purple-blue f4 bold05 bg-white pv2 tracked'>称重记录</header>
      </main>
    `
  }

  update () {
    return true
  }
}

module.exports = Component

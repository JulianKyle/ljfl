var html = require('choo/html')
var css = require('sheetify')

const { navigate } = require('../util')

module.exports = Component => {
  return (state, emit) => {
    var component = new Component(state, emit)

    return html`
      <body class='${component.unHeightFix ? 'min-vh-100' : 'h-100 overflow-hidden'} flex flex-column bg-n-white'>
        ${ component.render() }
        <footer
          class='bg-white w-100 pv012 tc flex justify-around'>
          <i class='icon ${component.page === 'polling' ? 'icon_polling_active animated pulse' : 'icon_polling'}'
            onclick=${navigate(state, emit, '#polling')}></i>
          <i class='icon icon_add ${component.page === 'record' ? 'icon_record_active animated pulse' : 'icon_record'}'
            onclick=${navigate(state, emit, '#record')}></i>
          <i class='icon icon_line ${component.page === 'weight' ? 'icon_weight_active animated pulse' : 'icon_weight'}'
            onclick=${navigate(state, emit, '#weight')}></i>
          <i class='icon icon_setting ${component.page === 'wecord' ? 'icon_wecord_active animated pulse' : 'icon_wecord'}'
            onclick=${navigate(state, emit, '#wecord')}></i>
        </footer>
      </body>
    `
  }
}

const Vue = require('vue')
const store = require('./store')
const type = require('../mutation-types')
const Player = require('./Player.vue')

const ipcRenderer = require('electron').ipcRenderer

new Vue({
  el: '#player',
  store,
  render: h => h(Player),
  created () {
    ipcRenderer.on(types.COMMIT, (event, typeName, payload) => {
      this.$store.commit(typeName, JSON.parse(payload))
    })
  }
})

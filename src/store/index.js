import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const metricsType = {
  FCP: "fcp",
  TTFB: "ttfb",
  domLoad: "domLoad",
  windowLoad: "windowLoad"
}

export default new Vuex.Store({
  state: {
    metrics: {
      fcp: [],
      ttfb: [],
      domLoad: [],
      windowLoad: [],
    }
  },
  getters: {
    getMetrics: state => state.metrics
  },
  mutations: {
    setMetrics(state, data) {
      Object.values(data).forEach(item => {
        const { fcp, ttfb, domLoad, windowLoad } = item
        switch (item.type) {
          case metricsType.fcp:
            state.metrics.fcp.push([fcp.time, fcp.value, { type: fcp.type.toUpperCase() }])
          case metricsType.ttfb:
            state.metrics.ttfb.push([ttfb.time, ttfb.value, { type: ttfb.type.toUpperCase() }])
          case metricsType.windowLoad:
            state.metrics.windowLoad.push([windowLoad.time, windowLoad.value, { type: windowLoad.type.toUpperCase() }])
          case metricsType.domLoad:
            state.metrics.domLoad.push([domLoad.time, domLoad.value, { type: domLoad.type.toUpperCase() }])
          default:
            [['Sun', 32], ['Mon', 46], ['Tue', 28]]
            break
        }
      })
    }
  },
  actions: {
    async handleMetrics({ commit }) {
      const response = await fetch('https://perfanalyzerapi.firebaseio.com/metrics.json').then(item => item.json())
      commit("setMetrics", response)
    }
  },
})

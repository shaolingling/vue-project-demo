import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    rootObj: {
      layerList: []
    },
    currentNode: {
    },
    parentNode: {

    }
  },
  // this.rootObj.layerList.push({ testList: [], areaList: [] })
  mutations: {
    updateData (state, node) {
      state.currentNode = node
    }
    // deleteLayer (state, index) {
    //   state.rootObj.layerList.splice(index, 1)
    // },
    // addTest (state, item) {
    //   if (item.areaList.length > 0) return false

    //   item.testList.push('实验')
    //   console.log(state.rootObj)
    // },
    // addArea (state, item) {
    //   if (item.testList.length > 0) return false

    //   item.areaList.push({ layerList: [] })
    // }
    // deleteTest (index, testList) {
    //   testList.splice(index, 1)
    // },
    // deleteArea (index, areaList) {
    //   areaList.splice(index, 1)
    // }
  },
  actions: {
    updateData ({ commit }, node) {
      commit('updateData', node)
    },
    deleteLayer ({ commit }, index) {
      commit('deleteLayer', index)
    },
    addTest ({ commit }, item) {
      commit('addTest', item)
    }
    // addArea ({ commit }, item) {
    //   commit('addArea', item)
    // }
    // deleteTest (index, testList) {
    //   testList.splice(index, 1)
    // },
    // deleteArea (index, areaList) {
    //   areaList.splice(index, 1)
    // }
  }
//   getters: {
//     rootObj (state) {
//       return state.rootObj
//     }
//   }
})

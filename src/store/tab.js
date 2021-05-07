export default {
    state: {
        menu: [],
        currentMenu: null
    },
    mutations: {
        selectMenu(state, val) {
           val.label === '首页' ? state.currentMenu = null : state.currentMenu = val
        }
    },
    actions: {}
}
const preloader = {
    namespaced: true,
    state: {
        preloader: {
            text: "Are you sure to cancel?",
            show: false,
        }
    },
    actions: {
        set_preloader({ commit }, payload) {
            commit('SET_PRELOADER', payload)
        },
        set_state({ commit }, payload) {
            commit('SET_CONFIRM', payload)
        }

    },
    getters: {
        get_preload_state: (state) => {
            return state.preloader;
        },
    },
    mutations: {
        SET_PRELOADER(state, dd) {
            state.preloader.text = dd.txt
            state.preloader.show = dd.show
        },
        SET_CONFIRM(state, dd) {
            state.preloader.show = dd
        }
    }
}

export default preloader
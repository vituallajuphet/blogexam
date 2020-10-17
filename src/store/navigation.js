

const navigation = {
    namespaced: true,
    state: {
        header_page: {
            name: "guest",
            auth: false,
        }
    },
    actions: {
        // get_all_data({ commit }) {
        //     return new Promise((resolve, reject) => {
        //         axios.get(burl + 'hosting/getall').then((response) => {
        //             if (response.data.code == 200) {
        //                 setTimeout(() => {
        //                     commit('SET_HOSTING', response.data)
        //                     resolve(response.data)

        //                 }, 1000);

        //             } else {
        //                 reject(response.data)
        //             }
        //         })
        //     })
        // }
        set_login_text({ commit }, payload) {
            commit('SET_PAGE', payload)
        }

    },
    getters: {
        get_page_name: (state) => {
            return state.header_page.name
        },
        get_pages: (state) => {
            return state.header_page
        },
    },
    mutations: {
        SET_PAGE(state, dd) {
            state.header_page.name = dd.link_name
            state.header_page.auth = dd.is_auth
        }
    }
}

export default navigation
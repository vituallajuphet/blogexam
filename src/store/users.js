

const users = {
    namespaced: true,
    state: {
        users: [
            { user_id: 1, username: "user", password: "12345" },
            { user_id: 2, username: "user2", password: "12345" },
        ],
        is_logged: false,
        logged_user: {}
    },
    actions: {
        login_account({ commit, state }, payload) {
            return new Promise((resolve, reject) => {
                let res = state.users.find(user => (user.username == payload.username && user.password == payload.password));
                if (res != undefined) {
                    state.is_logged = true;
                    state.logged_user = { user_id: res.user_id }
                    commit('LOGIN_ACCOUNT', res.user_id)
                    resolve({ status: "success" })
                } else {
                    reject({ status: "Incorrect username or password" })
                }

            })
        },
        logout_account({ commit }) {
            commit('LOGOUT_ACCOUNT')
        }

    },
    getters: {
        is_auth: (state) => {
            return state.is_logged;
        },
        get_logged: (state) => {
            return state.logged_user;
        },

    },
    mutations: {
        LOGIN_ACCOUNT(state, payload) {
            state.is_logged = true;
            state.logged_user = { user_id: payload }
        },
        LOGOUT_ACCOUNT(state) {
            state.is_logged = false;
            state.logged_user = {}
        },
    }
}

export default users


const users = {
    namespaced: true,
    state: {
        users: [
            { user_id: 1, username: "sample@sample.com", password: "12345" },
            { user_id: 2, username: "test@test.com", password: "12345" },
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
        register_account({ commit, state }, payload) {
            return new Promise((resolve, reject) => {
                console.log(payload)
                let res = state.users.find(user => (user.username == payload.username));
                if (res == undefined) {
                    commit('REGISTER_ACCOUNT', payload)
                    resolve({ status: "success" })
                } else {
                    reject({ status: "email address is already used!" })
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
        REGISTER_ACCOUNT(state, payload) {
            let new_user = {
                user_id: users.length + 1,
                username: payload.username,
                password: payload.password,
            }
            state.users.push(new_user)
        },
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
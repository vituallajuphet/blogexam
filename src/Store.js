import Vue from 'vue'
import Vuex from 'vuex'

import navigation from '@/store/navigation.js';
import posts from '@/store/posts.js';
import users from '@/store/users.js';

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        navigation,
        posts,
        users
    }

})
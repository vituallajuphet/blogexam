<template>
  <div id="breadcrumbs">
    <div class="wrapper">
      <div class="bread_cont">
        <div class="wrapper2">
          <ul>
            <li>
              <router-link :to="{ path: is_auth ? '/admin-home' : '/' }" replace
                >Home</router-link
              >
              <span class="sparator">&gt;</span>
            </li>
            <li class="pst_name">{{ get_post_name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sub_breadcrubms",
  data() {
    return {
      post: {},
    };
  },
  methods: {},
  mounted() {
    if (this.$route.name != "create_post") {
      let id = this.$route.params.id;
      this.post = this.$store.getters["posts/get_post"]([id]);
    }
  },
  computed: {
    get_post_name() {
      if (Object.keys(this.post).length === 0) {
        return "Create New Post";
      } else {
        return this.post.post_title;
      }
    },
    is_auth() {
      return this.$store.getters["users/is_auth"];
    },
  },
};
</script>

<style scoped>
#breadcrumbs {
  margin: 99px 0 0;
  font-weight: normal;
}
.bread_cont {
  min-height: 80px;
  background: #f5f5f5;
  padding: 31px 0 0;
}
#breadcrumbs ul {
  font-size: 14px;
  letter-spacing: 3px;
}
#breadcrumbs ul li {
  display: inline-block;
  vertical-align: top;
}
.sparator {
  margin: 0 10px;
  font-size: 23px;
}
#breadcrumbs ul li a {
  color: #111;
}
#breadcrumbs ul li a:hover {
  text-decoration: underline;
}
.pst_name {
  text-transform: none;
}
</style>


<template>
  <div>
    <main id="main_area">
      <div class="wrapper2">
        <div class="main_cont">
          <div class="main_top">
            <h1 class="h1_title">{{ heading_title }}</h1>
            <div class="create_post_cont" v-if="is_auth">
              <router-link :to="{ path: '/admin-newpost' }" replace
                >Create Post</router-link
              >
            </div>
          </div>
          <div class="post_container">
            <transition-group name="fade">
              <div
                class="post_data"
                @click="view_post(post.post_id)"
                v-for="post in get_posts"
                :key="post.post_id"
              >
                <img :src="get_src_img(post.img)" alt="post image" />
                <div class="content_txt">
                  <span class="cont_date">{{
                    convert_date(post.post_date)
                  }}</span>
                  <p>{{ post.post_title }}</p>
                </div>
              </div>
            </transition-group>
          </div>
          <div class="load_more_cont">
            <button :disabled="reach_limit" @click="update_limitation()">
              Load More
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "appcontent",
  data() {
    return {
      heading_title: "News",
      post_show_limit: 6,
      img_path: "/assets/images/",
      posts: [],
    };
  },
  methods: {
    get_src_img(img) {
      if (img.search("blob") != -1) {
        return img;
      } else {
        return require("@/assets/images/" + img);
      }
    },
    update_limitation() {
      if (this.post_show_limit + 6 <= this.posts.length) {
        this.post_show_limit += 6;
      } else {
        this.post_show_limit = this.posts.length;
      }
    },
    view_post(id) {
      if (!this.is_auth) {
        this.$router.push({ name: "viewpost", params: { id: id } });
      } else {
        this.$router.push({ name: "admin_viewpost", params: { id: id } });
      }
    },
    convert_date(dte, sep = ".") {
      let dt = new Date();
      if (dte != undefined) {
        dt = new Date(dte);
      }
      return (
        dt.getFullYear() +
        sep +
        (dt.getMonth() + 1) +
        sep +
        (dt.getDate().toString().length == 1
          ? "0" + dt.getDate()
          : dt.getDate())
      );
    },
  },
  mounted() {
    this.posts = this.$store.getters["posts/get_all_posts"];
  },
  computed: {
    get_posts() {
      return this.post_show_limit
        ? this.posts.slice(0, this.post_show_limit)
        : this.post_show_limit;
    },
    reach_limit() {
      return this.post_show_limit == this.posts.length;
    },
    is_auth() {
      return this.$store.getters["users/is_auth"];
    },
  },
};
</script>

<style scoped>
.create_post_cont {
  text-align: right;
  position: relative;
  top: -113px;
}
.create_post_cont a {
  color: #111;
}
.create_post_cont a:hover {
  text-decoration: underline;
}
</style>
<template>
  <div>
    <appheader />
    <breadcrumbs />

    <div class="the_post">
      <div class="wrapper">
        <div class="post_container">
          <div class="wrapper2">
            <div class="edit_btn_div">
              <router-link :to="{ path: '/admin-editpost/' + post_id }"
                >Edit Post</router-link
              >
            </div>
            <div class="post_date">{{ convert_date(post.post_date) }}</div>
            <div class="post_content">{{ post.post_title }}</div>
            <figure>
              <img :src="get_img_link(post.img)" alt="img" />
            </figure>
            <div class="post_datas">
              <p>{{ post.post_content }}</p>
            </div>
            <comments :postid="$route.params.id" />
          </div>
        </div>
      </div>
    </div>

    <appfooter />
  </div>
</template>

<script>
import appheader from "@/components/includes/Header";
import appfooter from "@/components/includes/Footer";
import breadcrumbs from "@/components/includes/subcomponents/Breadcrumbs";
import comments from "@/components/includes/subcomponents/Comments";

export default {
  name: "viewpost",
  data() {
    return {
      post: {},
      post_id: "",
    };
  },
  components: {
    appheader,
    appfooter,
    breadcrumbs,
    comments,
  },
  mounted() {
    let id = this.$route.params.id;
    this.post_id = id;
    this.post = this.$store.getters["posts/get_post"](id);
  },
  computed: {
    get_post_name() {
      return this.post.post_content;
    },
  },
  methods: {
    get_img_link(imgs) {
      let link = "";
      if (imgs == undefined) {
        return;
      }
      if (imgs.search("blob") != -1) {
        link = imgs;
      } else {
        link = require("@/assets/images/" + imgs);
      }
      return link;
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
};
</script>

<style  scoped>
.post_container {
  font-weight: normal;
}
.post_date {
  font-size: 20px;
  margin: 116px 0 33px;
}
.post_content {
  font-size: 35px;
  line-height: 60px;
  font-weight: bold;
  margin: 0px 0 36px;
}
.post_datas {
  margin: 45px 0 90px;
  line-height: 34px;
}
.edit_btn_div {
  text-align: right;
  text-align: right;
  position: relative;
  top: 83px;
  font-weight: bold;
  text-transform: none;
}
.edit_btn_div a {
  color: #111;
  font-size: 20px;
}
.edit_btn_div a:hover {
  text-decoration: underline;
}
</style>
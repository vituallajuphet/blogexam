<template>
  <div>
    <footer>
      <div class="wrapper">
        <div class="ftr_cont">
          <div class="ftr_top">
            <div class="wrapper2">
              <div class="ftr_txt">
                <figure>
                  <img src="@/assets/images/logo2.png" alt="logo" />
                </figure>
                <p>
                  サンプルテキストサンプル
                  ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
                </p>
              </div>
              <span class="bck_top"
                >Top <img src="@/assets/images/arr-top.png" alt="arrow"
              /></span>
            </div>
          </div>
          <div class="ftr_btm">
            <div class="wrapper2">
              <span class="copyright">{{ copyright }}</span>
            </div>
          </div>
        </div>
        <div class="ftr_fixed"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "appfooter",
  data() {
    return {
      copyright: "Copyright©2017-2019 Blog Inc.",
    };
  },
  methods: {
    get_src_img(img) {
      return require("@/assets/images/" + img);
    },
    update_limitation() {},
  },
  computed: {
    get_posts() {
      return this.post_show_limit
        ? this.posts.slice(0, this.post_show_limit)
        : this.post_show_limit;
    },
  },
};
</script>
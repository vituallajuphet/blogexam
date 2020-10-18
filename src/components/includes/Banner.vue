<template>
  <div>
    <div id="banner">
      <div class="wrapper">
        <div class="brn_cont">
          <div class="slider_cont">
            <transition-group name="fade">
              <figure
                v-for="item in banner_imgs"
                v-show="is_current(item.id)"
                :key="item.id"
              >
                <img :src="get_src_img(item.filename)" alt="woman smiling" />
              </figure>
            </transition-group>
          </div>
          <div class="brn_info">
            <p>
              <span>サンプルテキスト</span>
              <span>サンプル ルテキスト</span>
              <span>サンプルテキスト</span>
            </p>
            <div class="date_cont">
              {{ cur_date }}
            </div>
          </div>
          <div class="page_div">
            <a
              class="arr_btn left-btn"
              @click.prevent="click_navigation('prev')"
              :class="current_slide == 1 ? 'disabled' : ''"
              ><img src="@/assets/images/left-arr.png" alt="left arrow"
            /></a>
            <a
              @click.prevent="click_navigation('next')"
              class="arr_btn right-btn"
              :class="current_slide == banner_imgs.length ? 'disabled' : ''"
              ><img src="@/assets/images/right-arr.png" alt="right arrow"
            /></a>
          </div>
          <div class="btn_navs">
            <ul>
              <li
                @click="click_navigation(undefined, item.id)"
                class="tab_bullet"
                :class="item.id == current_slide ? 'active' : ''"
                v-for="item in banner_imgs"
                :key="item.filename"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appbanner",
  data() {
    return {
      current_slide: 1,
      banner_imgs: [
        { filename: "bnr1.png", id: 1 },
        { filename: "bnr2.png", id: 2 },
        { filename: "bnr3.png", id: 3 },
      ],
      cur_date: "2019.06.19",
    };
  },
  methods: {
    click_navigation(typ, slide_id) {
      this.run_slide(typ, slide_id);
    },

    run_slide(typ, slide_id) {
      let total_count = this.banner_imgs.length;
      if (typ != undefined) {
        if (typ == "next") {
          if (this.current_slide + 1 <= total_count) {
            this.current_slide++;
          }
        } else {
          if (this.current_slide - 1 > 0) {
            this.current_slide--;
          }
        }
      }

      if (slide_id != undefined) {
        this.current_slide = slide_id;
      }
    },
    is_current(slide_id) {
      return this.current_slide == slide_id;
    },
    get_src_img(img) {
      return require("@/assets/images/" + img);
    },
  },
  computed: {},
};
</script>

<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
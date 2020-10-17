<template>
  <div id="comments">
    <div class="wrapper">
      <div class="comments_cont">
        <div class="wrapper2">
          <h2>Comments</h2>
          <div class="comment_con">
            <div
              class="comment_sect"
              v-for="item in comments"
              :key="item.comment_id"
            >
              <p>{{ item.comment_content }}</p>
              <div class="comment_date">
                {{ time_since(item.comment_date) }}
              </div>
            </div>
            <div class="no_comment" v-if="comments.length == 0">
              No comments on this post...
            </div>
          </div>
        </div>
      </div>
      <div class="comment_form">
        <form action="" @submit.prevent="submit_comment()">
          <textarea
            v-model="comment_txt"
            required
            placeholder="Write Comment"
          ></textarea>
          <div class="btn_container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import timesince from "@/libs/mydate.js";

export default {
  name: "sub_comments",
  data() {
    return {
      comments: [],
      comment_txt: "",
    };
  },
  props: ["postid"],
  methods: {
    get_comments() {
      this.comments = this.$store.getters["posts/get_comments"](this.postid);
    },
    submit_comment() {
      let post_id = this.postid;
      const comment_data = {
        post_id: post_id,
        comment: this.comment_txt,
        c_date: this.convert_date(),
      };

      this.$store.dispatch("posts/set_comment", comment_data);
      setTimeout(() => {
        this.get_comments();
      }, 1000);
      this.comment_txt = "";
    },

    time_since(dte) {
      return timesince(new Date(dte)) + " Ago";
    },

    convert_date(dte) {
      let dt = new Date();
      if (dte != undefined) {
        dt = new Date(dte);
      }
      return (
        dt.getFullYear() +
        "-" +
        (dt.getMonth() + 1) +
        "-" +
        (dt.getDate().toString().length == 1
          ? "0" + dt.getDate()
          : dt.getDate())
      );
    },
  },
  mounted() {
    this.get_comments();
  },
  computed: {},
};
</script>

<style scoped>
.no_comment {
  margin: 0 0 78px;
  color: #c10c0c;
}
#comments {
  padding: 100px 0 0;
  border-top: 1px solid #222;
}
#comments h2 {
  font-size: 50px;
  font-weight: bold;
  line-height: 100%;
  margin: 0 0 88px;
}
.comment_con {
  padding: 0 48px 0px;
}
.comment_date {
  font-weight: bold;
  margin: 29px 0px 0;
}
.comment_sect {
  line-height: 38px;
  margin: 0 0 129px;
}
.comment_form {
}
.comment_form textarea {
  width: 100%;
  border: 1px solid #111;
  padding: 45px 40px;
  font-family: inherit;
  font-size: 18px;
  min-height: 200px;
  font-style: italic;
  resize: none;
}
.comment_form button {
  width: 210px;
  height: 70px;
  font-family: inherit;
  background: #111;
  color: #fff;
  font-size: 21px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
}
.btn_container {
  text-align: right;
  margin: 39px 0 134px;
}
</style>


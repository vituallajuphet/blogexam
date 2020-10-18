<template>
  <div>
    <appheader />
    <breadcrumbs />

    <div class="create_post" @dragover.prevent @drop.prevent>
      <div class="wrapper">
        <div class="post_container">
          <div class="wrapper2">
            <div class="btn_container">
              <a href="javascript:;" @click="update_post()">Save Post</a>
              <a href="javascript:;" @click="cancel_post()">Cancel</a>
            </div>
            <div class="form_post_cont">
              <div class="dates">{{ post_date }}</div>
              <textarea
                name="title"
                v-model="title"
                placeholder="Title"
              ></textarea>
              <div
                class="file_container"
                @drop="handleFileDrop"
                @dragleave="fileDragOut"
                @dragover="fileDragIn"
              >
                <div
                  class="file-wrapper"
                  :class="is_drop_in ? 'dragover ' : ''"
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="file-input"
                    id="file-input"
                    @change="handleFileInput"
                  />
                  <label for="file-input">Upload Image</label>
                  <span
                    v-if="url != ''"
                    class="remove_file"
                    @click="removeUrl()"
                    >Remove</span
                  >
                  <figure class="fig_pic" v-if="url != ''">
                    <img :src="get_img_url" alt="" />
                  </figure>
                </div>
              </div>
              <textarea
                id="post_data"
                v-model="content"
                name="content"
                placeholder="content"
              ></textarea>
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
  name: "create_post",
  data() {
    return {
      files: [],
      is_drop_in: false,
      url: "",
      title: "",
      content: "",
      post: {},
      post_date: "",
    };
  },
  components: {
    appheader,
    appfooter,
    breadcrumbs,
    comments,
  },
  mounted() {
    this.set_post_data();
  },
  methods: {
    set_post_data() {
      let id = this.$route.params.id;
      this.post_id = id;
      this.post = this.$store.getters["posts/get_post"](id);
      setTimeout(() => {
        this.title = this.post.post_title;
        this.url = this.post.img;
        console.log(this.url);
        this.post_date = this.convert_date(this.post.post_date);
        this.content = this.post.post_content;
      }, 500);
    },
    update_post() {
      let self = this;
      if (self.title == "" || self.content == "" || self.url == "") {
        alert("Please fill up the form!");
        return;
      }
      let dta = {
        post_id: this.$route.params.id,
        title: self.title,
        content: self.content,
        image_url: self.url,
        post_date: this.convert_date(new Date(), "-"),
      };

      this.$store.dispatch("posts/update_post", dta).then((res) => {
        console.log(res);
        let post_id = this.$route.params.id;
        this.$router.push({
          name: "admin_viewpost",
          params: { id: post_id },
        });
      });
    },
    cancel_post() {
      this.$store.dispatch("preloader/set_preloader", {
        txt: "Are you sure to discard?",
        show: true,
      });
    },
    removeUrl() {
      this.url = "";
    },
    handleFileDrop(e) {
      const file2 = e.dataTransfer.files[0];
      if (!this.is_image(file2.name)) {
        alert("Please upload image only!");
        return;
      } else {
        this.url = URL.createObjectURL(file2);
      }
    },
    handleFileInput(e) {
      const file2 = e.target.files[0];
      if (!this.is_image(file2.name)) {
        alert("Please upload image only!");
        return;
      } else {
        this.url = URL.createObjectURL(file2);
      }
    },
    removeFile(fileKey) {
      this.files.splice(fileKey, 1);
    },
    fileDragIn() {
      this.is_drop_in = true;
    },
    fileDragOut() {
      this.is_drop_in = false;
    },

    is_image(file) {
      var r = /.+\.(.+)$/.exec(file);

      let res = r ? r[1] : null;
      let ret = false;

      if (res != null) {
        if (
          res.toLowerCase() != "png" &&
          res.toLowerCase() != "jpg" &&
          res.toLowerCase() != "jpeg"
        ) {
          ret = false;
        } else {
          ret = true;
        }
      }
      return ret;
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
  computed: {
    get_img_url() {
      let link = "";
      if (this.url != "") {
        if (this.url.search("blob") != -1) {
          link = this.url;
        } else {
          link = require("@/assets/images/" + this.url);
        }
      }
      return link;
    },
  },
};
</script>

<style  scoped>
#post_data {
  margin: 39px 0 0;
  min-height: 395px;
  font-size: 20px;
}
.create_post {
  margin: 0 0 161px;
}
.fig_pic {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.remove_file {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: bold;
  z-index: 12;
  background: #090808;
  display: block;
  padding: 5px 10px;
  font-size: 11px;
  color: #fff;
}

.post_container {
  font-weight: normal;
}
.dragover {
  background: #777 !important;
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
.btn_container {
  text-align: right;
  text-align: right;
  position: relative;
  top: 66px;
  font-weight: bold;
  text-transform: none;
}
.btn_container a {
  color: #111;
  font-size: 20px;
  display: inline-block;
  vertical-align: top;
  margin-left: 25px;
}
.btn_container a:hover {
  text-decoration: underline;
}
.hasbg {
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.form_post_cont {
  margin: 94px 0 90px;
}
.dates {
  font-size: 20px;
  line-height: 100%;
  margin: 0 0 25px;
}

.form_post_cont textarea {
  width: 100%;
  border: 1px solid #111;
  height: 150px;
  font-family: inherit;
  font-size: 40px;
  padding: 20px;
  font-weight: 500;
  resize: none;
}

.file-wrapper {
  text-align: center;
  position: relative;
  background: #d7d7d7;
  height: 540px;
}

.file-wrapper input {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  opacity: 0;
  height: 100%;
  width: 100%;
}
.file_container {
  width: 100%;
  background: #d6d6d6;
  margin: 38px 0 0;
}
.file_container label {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 258px;
  display: block;
  padding: 16px 7px;
  background: #222;
  color: #fff;
  font-weight: bold;
}
</style>
<template>
  <div v-if="preloader_state.show">
    <div class="pre_loader">
      <div class="pre_cont">
        <span class="pre_text">{{ preloader_state.text }}</span>
        <div class="btn_confirm">
          <button @click="confirm_alert(true)">Yes</button>
          <button @click="confirm_alert(false)">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "preloader",
  data() {
    return {
      pre_txt: "Please Wait...",
    };
  },
  methods: {
    confirm_alert(res) {
      if (res) {
        this.$router.push({
          name: "admin_home",
        });
      }
      this.$store.dispatch("preloader/set_state", false);
    },
  },
  mounted() {},
  computed: {
    preloader_state() {
      return this.$store.getters["preloader/get_preload_state"];
    },
  },
};
</script>

<style scoped>
.btn_confirm {
  position: absolute;
  bottom: 33px;
  left: 0;
  right: 0;
}
.pre_text {
  font-size: 23px;
}
.btn_confirm button {
  display: inline-block;
  vertical-align: top;
  width: 100px;
  border: none;
  font-family: inherit;
  border: none;
  padding: 7px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 5px;
  margin: 0 10px 0;
}
.btn_confirm button:hover {
  opacity: 0.5;
}
</style>
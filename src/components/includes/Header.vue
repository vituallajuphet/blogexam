<template>
  <div>
    <header>
      <div class="wrapper2">
        <div class="header_cont">
          <div class="logo_cont">
            <img src="@/assets/images/logo.png" alt="logo" />
          </div>
          <div class="login_btn">
            <a href="javascript:;" @click.prevent="redirect_page()">{{
              get_page_name
            }}</a>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "appheader",

  data() {
    return {
      login_txt: "",
    };
  },
  mounted() {
    this.set_name();
  },
  methods: {
    set_name() {
      let link_name = "Login";
      let is_auth = false;

      if (this.is_auth) {
        link_name = "Logout";
        is_auth = true;
      } else {
        if (this.$route.name != "register" && this.$route.name != "login") {
          link_name = "Login";
        } else {
          link_name = "Close";
        }
      }

      this.$store.dispatch("navigation/set_login_text", {
        link_name: link_name,
        is_auth: is_auth,
      });
    },
    redirect_page() {
      if (this.is_auth) {
        // logout
        this.$store.dispatch("navigation/set_login_text", {
          link_name: "Login",
          is_auth: false,
        });
        this.$store.dispatch("users/logout_account");
        this.$router.push({ name: "login" });
      } else {
        this.$router.push({ name: this.get_login_link });
      }
    },
  },

  computed: {
    is_auth() {
      return this.$store.getters["users/is_auth"];
    },

    get_login_link: function () {
      let link = "home";
      if (this.get_page_name == "Login") {
        link = "login";
      } else if (this.get_page_name == "Logout") {
        link = "logout";
      }
      return link;
    },

    get_page_name() {
      return this.$store.getters["navigation/get_page_name"];
    },
  },
};
</script>
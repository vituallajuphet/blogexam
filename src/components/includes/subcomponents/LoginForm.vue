<template>
  <div id="login_cont">
    <div class="form_cont">
      <form action="#" @submit.prevent="submit_form()">
        <h2>Login</h2>
        <div class="err" v-if="err != ''">{{ err }}</div>
        <div class="frm_group">
          <label for="">Email</label>
          <input v-model="username" type="text" required />
        </div>
        <div class="frm_group">
          <label for="">Passord</label>
          <input v-model="password" type="password" required />
        </div>
        <button type="submit" class="login_btn">Login</button>
        <div class="login_frm_ftr">
          <span
            >No account yet?
            <router-link to="register">Register Here</router-link></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "sub_login",
  data() {
    return {
      username: "",
      password: "",
      err: "",
    };
  },
  methods: {
    submit_form() {
      let self = this;
      let fdata = {
        username: this.username,
        password: this.password,
      };

      this.$store
        .dispatch("users/login_account", fdata)
        .then(() => {
          self.set_login_txt();
          this.$router.push({ name: "admin-home" });
        })
        .catch((err) => {
          self.err = err.status;
        });
    },
    set_login_txt() {
      this.$store.dispatch("navigation/set_login_text", {
        link_name: "Logout",
        is_auth: true,
      });
    },
  },
};
</script>

<style scoped>
#login_cont {
  width: 442px;
  margin: 184px auto 212px;
}
#login_cont h2 {
  text-transform: uppercase;
  font-size: 30px;
  line-height: 100%;
  margin: 0 0 49px;
  font-weight: bold;
}

.form_cont {
}
.form_cont form {
  font-weight: 300;
  text-transform: none;
}
.frm_group {
  margin: 0 0 18px;
}
.err {
  background: #ee6b6b;
  text-align: center;
  margin: 0 0 20px;
  padding: 13px;
  border-radius: 4px;
  color: #fff;
}
.frm_group label {
  margin: 0 0 5px;
  display: block;
}
.frm_group input {
  display: block;
  width: 100%;
  border: 1px solid #111;
  font-size: 20px;
  padding: 17px 10px;
  font-weight: normal;
}
.login_btn {
  width: 100%;
  background: #111;
  color: #fff;
  font-family: inherit;
  border: none;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 23px 10px;
}
.login_frm_ftr {
  text-align: center;
  font-size: 17px;
  margin: 36px 0 0;
}
.login_frm_ftr a {
  font-weight: bold;
  color: #111;
  text-transform: uppercase;
}
</style>


<template>
  <div id="login_cont">
    <div class="form_cont">
      <form action="">
        <h2>Register</h2>
        <div class="frm_group">
          <label for="">Email</label>
          <input type="text" required />
        </div>
        <div class="frm_group">
          <label for="">Passord</label>
          <input type="password" required />
        </div>
        <div class="frm_group">
          <label for="">Confirm Password</label>
          <input type="password" required />
        </div>
        <button type="submit" class="login_btn">Register</button>
        <div class="login_frm_ftr">
          <span
            >Already have an account?
            <router-link to="login">Login Here</router-link></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "sub_register",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
#login_cont {
  width: 442px;
  margin: 184px auto 0;
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


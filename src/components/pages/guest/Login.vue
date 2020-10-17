<template>
  <div>
    <appheader />
    <loginform />
    <appcontent />
    <appfooter />
  </div>
</template>

<script>
import appheader from "@/components/includes/Header";
import loginform from "@/components/includes/subcomponents/LoginForm";
import appcontent from "@/components/includes/Content";
import appfooter from "@/components/includes/Footer";

export default {
  name: "login",
  components: {
    appheader,
    loginform,
    appcontent,
    appfooter,
  },
};
</script>
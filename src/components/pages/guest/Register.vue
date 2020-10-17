<template>
  <div>
    <appheader />
    <registerform />
    <appcontent />
    <appfooter />
  </div>
</template>

<script>
import appheader from "@/components/includes/Header";
import registerform from "@/components/includes/subcomponents/RegisterForm";
import appcontent from "@/components/includes/Content";
import appfooter from "@/components/includes/Footer";

export default {
  name: "register",
  components: {
    appheader,
    registerform,
    appcontent,
    appfooter,
  },
};
</script>
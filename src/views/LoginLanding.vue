<template>
  <div class="LoginLanding container-fluid">
    <div class="row">
      <div class="col-7 bgImg">
        <h1 class="text-white bgCircle rounded-circle m-auto">
          Office Networking
          <br />
          <i>reimagined</i>
        </h1>
      </div>
      <div class="col-5"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "LoginLanding",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.bgImg {
  background: linear-gradient(rgba(242, 99, 35, 0.65)),
    url("../assets/GE1A9595BW.png");
  background-position: center;
  background-size: 170%;
  height: 100vh;
}
.bgCircle {
  background: rgba(242, 99, 35, 0.82);
  height: 450px;
  width: 450px;
}
</style>
<template>
  <div class="LoginLanding container-fluid">
    <div class="row">
      <div class="col-7 bgImg d-flex">
        <div class="bgCircle d-flex rounded-circle mx-auto">
          <h1 class="text-white m-auto">
            Office Networking
            <br />
            <i>reimagined</i>
          </h1>
        </div>
      </div>
      <div class="col-5 bgColor">
        <div class="row mx-auto mt-5 pt-5">
          <div class="col-12">
            <img src="../assets/ittLogoWhite.png" alt="ITT Logo" class="logo" />
          </div>
        </div>
        <div class="row mx-auto mt-5">
          <div class="col-12">
            <h4
              class="text-white text-left"
            >Welcome to Project GYST. Sign in to start exploring your network.</h4>
            <form class="text-white mt-4">
              <div class="form-group text-left">
                <label for="emailInput">Email</label>
                <input type="email" class="form-control text-white" id="emailInput" />
              </div>
              <div class="form-group text-left">
                <label for="passwordInput">Password</label>
                <input type="password" class="form-control text-white" id="passwordInput" />
              </div>
              <div class="form-check text-left">
                <input type="checkbox" class="form-check-input" id="rememberMeCheck" />
                <label class="form-check-label" for="rememberMeCheck">Remember Me</label>
              </div>
              <div class="mt-2">
                <p>
                  New Employee?
                  <span>Get Started Here</span>
                </p>
              </div>
              <button type="submit" class="btn signInBtn">Sign In</button>
            </form>
          </div>
        </div>
      </div>
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
  background-size: 200vh;
  height: 100vh;
}
.bgCircle {
  background: rgba(242, 99, 35, 0.82);
  height: 50vh;
  width: 50vh;
  margin-top: 35vh;
}
.bgColor {
  background-color: #474c53;
}
.signInBtn {
  background-color: #f26323;
  color: white;
  width: 50vh;
  font-size: 24px;
}
.logo {
  height: 15vh;
}
h1 {
  font-size: 8vh;
  font-family: "HelveticaNeue-Medium";
}
h4 {
  font-family: "Lato-Medium";
}
span {
  text-decoration: underline;
  color: #ffa737;
}
input {
  background-color: #474c53;
}
input:focus {
  background-color: #474c53;
}
</style>
<template>
  <div class="LoginLanding container-fluid">
    <div class="row">
      <div class="col-7 bgImg d-flex">
        <div class="bgCircle d-flex rounded-circle mx-auto">
          <h1 class="text-white m-auto">
            <span class="letterSpacing">Office</span> Networking
            <br />
            <i class="letterSpacing">reimagined</i>
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
              class="text-white text-left mx-1"
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
                  <span class="orangeText">Get Started Here</span>
                </p>
              </div>
              <button type="submit" class="btn signInBtn">SIGN IN</button>
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
  height: 55vh;
  width: 55vh;
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
  font-family: "Lato-Medium";
  letter-spacing: 3px;
}
.logo {
  height: 15vh;
}
.orangeText {
  text-decoration: underline;
  color: #ffa737;
}
.letterSpacing {
  letter-spacing: 7px;
}
h1 {
  font-size: 8vh;
  font-family: "HelveticaNeue";
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
h4 {
  font-family: "Lato-Medium";
  letter-spacing: 2px;
}
input {
  background-color: #474c53;
}
input:focus {
  background-color: #474c53;
}
label {
  font-family: "Lato-Regular";
  letter-spacing: 2px;
}
p {
  font-family: "Lato-Light";
  letter-spacing: 2px;
}
</style>
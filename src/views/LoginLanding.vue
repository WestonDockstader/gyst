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
            <h4 class="text-white text-left mx-1">Welcome to Project GYST. Sign in to start exploring your network.</h4>
            <form class="text-white mt-4" v-on:submit.prevent="userLogin">
              <div class="form-group text-left">
                <label for="emailInput">Email</label>
                <input type="email" name="email" v-model="login.email" class="form-control text-white"
                  id="emailInput" />
              </div>
              <div class="form-group text-left">
                <label for="passwordInput">Password</label>
                <input type="password" name="password" v-model="login.password" class="form-control text-white"
                  id="passwordInput" />
              </div>
              <div class="form-check text-left">
                <input type="checkbox" class="form-check-input" id="rememberMeCheck" />
                <label class="form-check-label lightText" for="rememberMeCheck">Remember me</label>
              </div>
              <div class="mt-2 lightText">
                <p>
                  Not a User?
                  <span data-toggle="modal" data-target="#registerModal" class="orangeText">Get started here</span>
                </p>
              </div>
              <button type="submit" class="btn signInBtn">Sign In</button>
            </form>
            <!-- <button class="btn btn-outline-success" data-toggle="modal" data-target="#registerModal">Register</button>-->
            <!--<form class="text-white mt-4" v-on:submit.prevent="userRegister" v-if="showRegister">
              <div class="form-group text-left">
                <label for="emailInput">Email</label>
                <input type="email" name="email" v-model="register.email" class="form-control text-white"
                  id="emailInput" />
              </div>
              <div class="form-group text-left">
                <label for="passwordInput">Password</label>
                <input type="password" name="password" v-model="register.password" class="form-control text-white"
                  id="passwordInput" />
              </div>
              <div class="form-check text-left">
                <input type="checkbox" class="form-check-input" id="rememberMeCheck" />
                <label class="form-check-label lightText" for="rememberMeCheck">Remember me</label>
              </div>
              <div class="mt-2 lightText">
                <p>
                  Already a User?
                  <span class="orangeText" v-on:click="toggle">Login Here</span>
                </p>
              </div>
              <button type="submit" class="btn signInBtn">Register</button>
            </form>-->
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="userLogin">
              <div class="form-group">
                <input type="text" name="First Name" v-model="userData.PersonFirstName" class="form-control"
                  id="registerFirstName" placeholder="First name" required>
              </div>
              <div class="form-group">
                <input type="text" name="Middle Name" v-model="userData.PersonMiddleName" class="form-control"
                  id="registerMiddleName" placeholder="Middle name" required>
              </div>
              <div class="form-group">
                <input type="text" name="Last Name" v-model="userData.PersonLastName" class="form-control"
                  id="registerLastName" placeholder="Last name" required>
              </div>
              <div class="form-group">
                <input type="text" name="email" v-model="register.email" class="form-control" id="registerEmail"
                  placeholder="email" autocomplete="email">
              </div>
              <div class="form-group">
                <input type="text" name="password" v-model="register.password" class="form-control"
                  id="registerPassword" placeholder="Password">
              </div>
            </form>
          </div>
          <div class="modal-footer d-flex">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <!-- <button type="submits" class="btn btn-success" @click="userRegister" data-dismiss="modal">Register</button>-->
          </div>
        </div>
        PersonLastName: { type: String },
        PersonFirstName: { type: String },
        PersonMiddleName: { type: String },
        PersonLocation: { type: String },
        PersonStartDate
      </div>
    </div>
  </div>
</template>


<script>
  import register from './Register.vue'

  export default {
    name: 'LoginLanding',
    components: {
      register
    },
    data() {
      return {
        //       showLogin: true,
        //       showRegister: false,
        login: {
          email: "",
          password: ""
        },
        register: {
          email: "",
          password: ""
        },
        userData: {

        }
      };
    },
    mounted() {
      this.$store.dispatch('getInitialize')
    },
    computed: {},
    methods: {
      userLogin() {
        this.$store.dispatch('userLogin', this.login)
      },
      userRegister() {
        console.log(this.register)
        this.$store.dispatch('userRegister', this.register)
      },
      toggle() {
        if (this.showLogin) {
          this.showLogin = false;
          this.showRegister = true;
        }
        else {
          this.showLogin = true;
          this.showRegister = false;
        }
      }
    },
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
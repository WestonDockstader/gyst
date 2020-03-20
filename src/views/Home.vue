<template>

  <div class="container-fluid home p-0" style="width: 100%">
    <div class="row col-12 mb-1">
      <img alt="orange Logo" src="../assets/ITTLogoWhite.svg" class="logo-class">
    </div>
    <div class="row">
      <div class="col-1 p-3 ml-4 d-flex flex-column">
        <div class="m-0">
          <img alt="Generic User Logo" src="../assets/user_fill.png" class="rounded-circle profile-pic">
          <p class="card-title mt-2 mb-0 text-white text-size">Welcome Russell Crowe</p>
          <a href="#" class="underline text-size font-color mt-0">Sign Out</a>
        </div>
        <hr class="bar-color mr-1 mt-1 ml-0">
        <div class=" p-2 m-0 d-flex align-items-start flex-column">
          <a href="#" class="card-link m-0 text-white">Profile</a>
          <a href="#" class="card-link m-0 text-white">Network</a>
        </div>
      </div>
      <div class="ml-2 mr-4 card-body body">
        <!--<img alt="Generic User Logo" src="../assets/user_fill.png" class="rounded-circle profile-pic">-->
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
      </div>
    </div>
    <login />
    <register />
  </div>
</template>

<script>
  // @ is dan alias to /src
  import Main from '@/components/Main.vue'
  import login from './Login'
  import register from './Register'
  import profile from './Profile'

  export default {
    name: 'home',
    components: {
      Main,
      login,
      register,
      profile
    },
    data() {
      return {
        show: true
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .home {
    background: linear-gradient(135deg, #474c53 10%, #131415);
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .body {
    background-color: white;
    background-size: cover;
    height: 46rem;
  }

  .logo-class {
    width: 200px;
    height: auto;
    margin-top: 5px;
    margin-left: 25px;
    margin-bottom: 5px;
  }

  .profile-pic {
    width: 100%;
    height: auto;

  }

  .underline {
    text-decoration: underline;
    font-family: Lato;
  }

  .text-size {
    font-size: xx-small;
  }

  .font-color {
    color: #f26323;

  }

  .bar-color {
    border-color: black;
    display: block;
    width: 100%;
    height: 2px;
  }
</style>
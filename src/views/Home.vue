<template>

  <div class="container-fluid home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img alt="orange Logo" src="../assets/circle.svg" class="img-class">
      <a class="navbar-brand" href="#">GYST</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        </div>
      </div>
      <div class="col-sm d-flex justify-content-end">
        <button class="btn btn-inverse btn-outline-primary m-1" data-toggle="modal"
          data-target="#loginModal">Login</button>
        <button class="btn btn-outline-success m-1" data-toggle="modal" data-target="#registerModal">Register</button>
      </div>
    </nav>
    <div class="row">

    </div>
    <login />
    <register />
  </div>
  </div>
</template>

<script>
  // @ is dan alias to /src
  import Main from '@/components/Main.vue'
  import login from './Login'
  import register from './Register'

  export default {
    name: 'home',
    components: {
      Main,
      login,
      register
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
  .fill {
    height: 100%;
  }

  .img-class {
    width: 50px;
    height: auto;
  }
</style>
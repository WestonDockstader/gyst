<template>
  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="userLogin">
            <div class="form-group">
              <input type="text" name="email" v-model="login.email" class="form-control" id="formGroupExampleInput" placeholder="Email"
                autocomplete="email" required>
            </div>
            <div class="form-group">
              <input type="text" name="password" v-model="login.password" class="form-control" id="formGroupExampleInput" placeholder="Password">
            </div>
          </form>
        </div>
        <div class="modal-footer d-flex">
          <span class="mr-auto pointer" data-toggle="modal" data-target="#registerModal" data-dismiss="modal">
            <p class="text-success">Not a User? Sign up Here!</p>
          </span>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-success" @click="userLogin" data-dismiss="modal">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        login: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      userLogin() {
        this.$store.dispatch('userLogin', this.login)
      }
    }
  }
</script>

<style>
  btn {
    margin: .5rem;
  }
</style>
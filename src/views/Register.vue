<template>
  <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <input type="text" name="username" v-model="register.username" class="form-control" id="formGroupExampleInput" placeholder="Username"
                required>
            </div>
            <div class="form-group">
              <input type="text" name="email" v-model="register.email" class="form-control" id="formGroupExampleInput" placeholder="email"
                autocomplete="email">
            </div>
            <div class="form-group">
              <input type="text" name="password" v-model="register.password" class="form-control" id="formGroupExampleInput" placeholder="Password">
            </div>
          </form>
        </div>
        <div class="modal-footer d-flex">
          <span class="mr-auto pointer" data-toggle="modal" data-target="#loginModal" data-dismiss="modal">
            <p class="text-success">Already a User? Click Here to Login!</p>
          </span>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submits" class="btn btn-success" @click="userRegister" data-dismiss="modal">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        register: {
          username: "",
          email: "",
          password: ""
        }
      }
    },
    methods: {
      userRegister() {
        this.$store.dispatch('register', this.register)
      }
    }
  }
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>
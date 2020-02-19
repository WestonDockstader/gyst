<template>
  <div class="container-fluid bTest">
      <div class="row">
        <div class="col-4 text-left title">
          <h1>Networking</h1>
          <h4 class="font-italic">Find a co-worker to connect with</h4>
        </div>
      </div>
      <div class="row mt-4">
          <div class="col-6 text-left">
              <select name="items" id="NumberOfItems">
                  <option value="10">10</option>
                  <!-- Add more options here -->
              </select>
              <p class="inline ml-2">items per page</p>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Network',
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
.bTest{
    background-color: white;
}
.title{
    font-weight: bold;
}
.inline{
    display: inline;
}
</style>
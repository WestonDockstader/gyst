<template>
       <table class="table">
      <thead class="thead text-white">
        <tr>
          <th scope="col">CERTIFICATION</th>
          <th scope="col">DATE RECEIVED</th>
          <th scope="col">VERIFIED</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LOREM</td>
          <td>IPSUM</td>
          <td>FOOBAR</td>
        </tr>
        <tr>
          <td>LOREM</td>
          <td>IPSUM</td>
          <td>FOOBAR</td>
        </tr>
        <tr>
          <td>LOREM</td>
          <td>IPSUM</td>
          <td>FOOBAR</td>
        </tr>
        <tr>
          <td>LOREM</td>
          <td>IPSUM</td>
          <td>FOOBAR</td>

        </tr>
        <tr>
          <td>LOREM</td>
          <td>IPSUM</td>
          <td>FOOBAR</td>
        </tr>
      </tbody>
    </table>
</template>


<script>
export default {
  name: "org-table",
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
i {
  color: #f26323;
}
thead {
  background-color: #f26323;
  position: sticky;
  top: 0;
}
tr:nth-child(even) {
  background-color: rgb(242, 99, 35, 0.35);
}
.my-custom-scrollbar {
  position: relative;
  height: 50vh;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
}
</style>
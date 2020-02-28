<template>
  <div class="row d-flex justify-content-end">
    <div class="col-3 d-flex justify-content-end my-2">
      <button class="btn">
        <i class="fas fa-plus-circle fa-lg" data-toggle="modal" data-target="#add-new-cert-modal"></i>
      </button>
    </div>
    <AddNewCertModal />
    <div class="col-12 table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-bordered">
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
    </div>
  </div>
</template>

<script>
import AddNewCertModal from "./AddNewCertModal";
export default {
  name: "certs-table",
  data() {
    return {};
  },
  computed: {},
  methods: {
    searchTable() {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("searchbar");
      filter = input.value.toUpperCase();
      table = document.getElementById("skillsTable");
      tr = table.getElementsByTagName("tr");
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  },
  components: { AddNewCertModal }
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
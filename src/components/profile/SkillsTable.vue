<template>
  <div class="row d-flex justify-content-end">
    <div class="col-12 d-flex justify-content-between my-3">
    <input type="text" id="searchbar" @change="searchTable()" placeholder="Search" />
      <button class="btn">
        <i class="fas fa-plus-circle fa-lg" data-toggle="modal" data-target="#add-new-skill-modal"></i>
      </button>
    <AddNewSkillModal />
    </div>
    <div class="col-12 table-wrapper-scroll-y my-custom-scrollbar">
      <table id="skillsTable" class="table table-bordered">
        <thead class="thead text-white">
          <tr>
            <th scope="col">SKILL NAME</th>
            <th scope="col">DOMAIN</th>
            <th scope="col">PLATFORMS</th>
            <th scope="col">RATINGS M</th>
            <th scope="col">RATINGS P</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LOREM</td>
            <td>IPSUM</td>
            <td>FOOBAR</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>LOREM</td>
            <td>IPSUM</td>
            <td>FOOBAR</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>LOREM</td>
            <td>IPSUM</td>
            <td>FOOBAR</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>LOREM</td>
            <td>IPSUM</td>
            <td>FOOBAR</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Gen</td>
            <td>IPSUM</td>
            <td>FOOBAR</td>
            <td>5</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddNewSkillModal from "./AddNewSkillModal";

export default {
  name: "skills-table",
  data() {
    return {};
  },
  computed: {

  },
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
  components: { AddNewSkillModal }
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
  height: 40vh;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
}
#searchbar {
  width: 20%;
  height: 80%;
  font-size: 16px;
  padding-left: 10px;
  border: 1px solid #ddd;
}

</style>
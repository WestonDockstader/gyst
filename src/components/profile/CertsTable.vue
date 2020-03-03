<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-between my-3">
      <input
        type="text"
        v-model="search"
        placeholder="Search"
      />
      <button class="btn">
        <i class="fas fa-plus-circle fa-lg" data-toggle="modal" data-target="#add-new-cert-modal"></i>
      </button>
    <AddNewCertModal />
    </div>
    <div class="col-12 table-wrapper-scroll-y my-custom-scrollbar">
      <table id="certsTable" class="table table-bordered">
        <thead class="thead text-white">
          <th v-for="header in tableHeader" :key="header">{{header}}</th>
        </thead>
        <tbody>
          <tr v-for="item in filteredCerts" :key="item">
            <td>{{item.certification}}</td>
            <td>{{item.date}}</td>
            <td>{{item.verified}}</td>
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
    return{
      tableHeader:["CERTIFICATIONS", "DATE RECEIVED", "VERIFIED"],
      certs:
       [{certification:"ISTQB", date:"Jan 2020", verified: "yes"}, {certification:"Scrum Master", date:"Feb 2020", verified:"no"}],
      search: ""
    }
  },
  computed: {
    //This filters through each item in the table (rows and columns) to display the row that contains the information entered in the searchbar. Currently case sensitive and search entry MUST match item in datatable exactly. When a row is added, my thought was to make it uppercase and add a filter on this function to uppercase all input in the searchbar??   
    filteredCerts(){
      return this.certs.filter((item) => {
        return item.certification.includes(this.search) || item.date.includes(this.search) || item.verified.includes(this.search)})
    }
  },
  methods: {},
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
#searchbar {
  width: 20%;
  height: 80%;
  font-size: 16px;
  padding-left: 10px;
  border: 1px solid #ddd;
}
</style>

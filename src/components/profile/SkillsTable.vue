<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-between my-3">
      <input id="searchbar" type="text" v-model="search" placeholder="Search" />
      <button class="btn">
        <i class="fas fa-plus-circle fa-lg" data-toggle="modal" data-target="#add-new-skill-modal"></i>
      </button>
      <AddNewSkillModal />
    </div>
    <!-- hard coded some fake data in the table -->
    <div class="col-12 table-wrapper-scroll-y my-custom-scrollbar">
      <table id="skillsTable" class="table table-bordered">
        <thead class="thead text-white">
          <th v-for="header in tableHeader" :key="header">{{header}}</th>
        </thead>
        <tbody>
          <tr v-for="item in filteredSkills" :key="item">
            <td>{{item.skillName}}</td>
            <td>{{item.domain}}</td>
            <td>{{item.platforms}}</td>
            <td>{{item.ratingsM}}</td>
            <td>{{item.ratingsP}}</td>
          </tr>
        </tbody>
      </table>
      <div class="col-12 my-2 mx-auto">
        <button class="mx-1 navBtn">
          <i class="fas fa-angle-double-left navBtnClr"></i>
        </button>
        <button class="navBtn">
          <i class="fas fa-angle-left navBtnClr"></i>
        </button>
        <input type="text" class="inputPage mx-1" />
        <p class="inline pages mx-1">of # pages</p>
        <button class="navBtn">
          <i class="fas fa-angle-right navBtnClr"></i>
        </button>
        <button class="mx-1 navBtn">
          <i class="fas fa-angle-double-right navBtnClr"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewSkillModal from "./AddNewSkillModal";

export default {
  name: "skills-table",
  data() {
    return {
      tableHeader: [
        "SKILL NAME",
        "DOMAIN",
        "PLATFORMS",
        "RATINGS(M)",
        "RATINGS(P)"
      ],
      skills: [
        {
          skillName: "Javascript",
          domain: "UX/UI",
          platforms: "All Web Browsers",
          ratingsM: 5,
          ratingsP: 5
        },
        {
          skillName: "C#",
          domain: "Back-end development",
          platforms: "MacOS",
          ratingsM: 5,
          ratingsP: 5
        },
        {
          skillName: "LOREM",
          domain: "IPSUM",
          platforms: "FOOBAR",
          ratingsM: 5,
          ratingsP: 5
        },
        {
          skillName: "LOREM",
          domain: "IPSUM",
          platforms: "FOOBAR",
          ratingsM: 5,
          ratingsP: 5
        },
        {
          skillName: "LOREM",
          domain: "IPSUM",
          platforms: "FOOBAR",
          ratingsM: 5,
          ratingsP: 5
        },
        {
          skillName: "LOREM",
          domain: "IPSUM",
          platforms: "FOOBAR",
          ratingsM: 5,
          ratingsP: 5
        }
      ],
      search: ""
    };
  },
  computed: {
    //This filters through each item in the table (rows and columns) to display the row that contains the information entered in the searchbar. Currently case sensitive and search entry MUST match item in datatable exactly. When a row is added, my thought was to make it uppercase and add a filter on this function to uppercase all input in the searchbar??
    filteredSkills() {
      return this.skills.filter(item => {
        return (
          item.skillName.match(this.search) ||
          item.domain.match(this.search) ||
          item.platforms.match(this.search)
        );
      });
    }
  },
  methods: {},
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
.inputPage {
  width: 50px;
  height: 25px;
  border-radius: 3px;
  border: solid 0.5px #474c53;
  color: #f26323;
}
.inline {
  display: inline;
}
.navBtn {
  background-color: #c7ced8;
  border: solid 0.5px #474c53;
  color: #474c53;
  width: 34px;
  height: 25px;
  border-radius: 3px;
}
.navBtnClr {
  color: #474c53;
}
#searchbar {
  width: 25%;
  font-size: 16px;
  padding-left: 10px;
  border: 1px solid #ddd;
}
</style>
<template>
  <div>
    <div class="row">
      <div class="col-10">
        <div class="row">
          <div class="col-5 text-left title">
            <h1>Networking</h1>
            <h3 class="font-italic">Find a co-worker to connect with</h3>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col-6 text-left m-auto">
            <select name="items" id="NumberOfItems">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <!-- Add more options here -->
            </select>
            <p class="inline ml-2 items">items per page</p>
          </div>
          <div class="col-6 text-right">
            <input type="text" placeholder="Search name, skill, domain, platform" v-model="search"
              class="searchInput" />
            <span>
              <!-- Potential problem with css if search string is really long -->
              <i class="fas fa-search"></i>
            </span>
            <img src="../assets/AddButton.png" alt="AddButton" class="ml-2 hover" />
            <!-- Add @click to img for button effect -->
            <img src="../assets/Component 5 – 3.png" alt="FilterButton" @click="filter = !filter" class="hover"
              v-if="!filter" />
            <img src="../assets/Component 5 – 2.png" alt="FilterButton" @click="filter = !filter" class="hover"
              v-else />
            <!-- Add @click to img for button effect -->
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <table class="table table-striped">
              <thead class="tableHeader text-white">
                <tr>
                  <th scope="col">EXPAND</th>
                  <th scope="col">EMPLOYEE</th>
                  <th scope="col">SKILL NAME</th>
                  <th scope="col">DOMAIN</th>
                  <th scope="col">PLATFORMS</th>
                  <th scope="col">CONNECT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="person in filteredPeople" :key="person._id" v-if="person.userID!=user._id">
                  <th scope="row" @click="userDetail(person._id)"
                    class="hover detailOpen: detailOpen.includes(person._id)">
                    <div v-if="detailOpen.includes(person._id) && person.skills[1]">
                      <img src="../assets/upButton.png" alt="upArrow" />
                    </div>
                    <div v-else>
                      <img src="../assets/downButton.png" alt="downArrow" />
                    </div>
                  </th>
                  <th class="text-left" @click="setQuickView(person)">
                    <img src="../assets/user_fill.png" alt="UserImg" class="userImg rounded-circle ml-3 mr-2" />
                    {{person.personFirstName}} {{person.personLastName}}
                  </th>
                  <th>
                    <ul>
                      <li>{{person.skills[0].Skill}}</li>
                      <div v-if="detailOpen.includes(person._id) && person.skills[1]">
                        <li v-for="skill in person.skills.slice(1)">{{skill.Skill}}</li>
                      </div>
                    </ul>
                  </th>
                  <th>
                    <ul>
                      <li>{{person.skills[0].Domain}}</li>
                      <div v-if="detailOpen.includes(person._id) && person.skills[1]">
                        <li v-for="skill in person.skills.slice(1)">{{skill.Domain}}</li>
                      </div>
                    </ul>
                  </th>
                  <th>
                    <ul>
                      <li>{{person.skills[0].Platform}}</li>
                      <div v-if="detailOpen.includes(person._id) && person.skills[1]">
                        <li v-for="skill in person.skills.slice(1)">{{skill.Platform}}</li>
                      </div>
                    </ul>
                  </th>
                  <th>
                    <img src="../assets/ConnectButton.png" alt="ConnectButton" class="hover" />
                    <!-- @click to img for button effect -->
                  </th>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <button class="mx-1">
              <i class="fas fa-angle-double-left"></i>
            </button>
            <button>
              <i class="fas fa-angle-left"></i>
            </button>
            <input type="text" class="inputPage mx-1" />
            <p class="inline pages mx-1">of # pages</p>
            <button>
              <i class="fas fa-angle-right"></i>
            </button>
            <button class="mx-1">
              <i class="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-2 marginFix">
        <div v-if="filter">
          <EmployeeFilters />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="quickView" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Profile Snapshot</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{quickView.personFirstName}}'s name.
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EmployeeFilters from "../components/network/EmployeeFilters";
  export default {
    name: "Network",
    props: ['people'],
    data() {
      return {
        showInput: true,
        id: 1,
        filter: false,
        tableHeader: [
          "SKILL",
          "DOMAIN",
          "PLATFORMS"
        ],
        detailOpen: [],
        search: "",
        compare: "",
        quickView: {}
      };
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      filteredPeople() {
        if (this.search === this.compare) {
          return this.people
        }
        else {
          let returnlist = []
          return this.people.filter(person => {
            if (person.personFirstName.toLowerCase().includes(this.search.toLowerCase())) {
              return true
            }
            if (person.personLastName.toLowerCase().includes(this.search.toLowerCase())) {
              return true
            }
            for (let i = 0; i < person.skills.length; i++) {
              if (person.skills[i].Skill.toLowerCase().includes(this.search.toLowerCase()) ||
                person.skills[i].Domain.toLowerCase().includes(this.search.toLowerCase()) ||
                person.skills[i].Platform.toLowerCase().includes(this.search.toLowerCase())) {
                return true
              }
            }
            return
          }
          )
        }
      }
    },
    methods: {
      userDetail(id) {
        const index = this.detailOpen.indexOf(id);
        if (index > -1) {
          this.detailOpen.splice(index, 1)
        } else {
          this.detailOpen.push(id)
        }
      },
      setQuickView(person) {
        this.quickView = person
        $('#quickView').modal('show')
      }
    },
    components: { EmployeeFilters }
  };
</script>

<style scoped>
  button {
    background-color: #c7ced8;
    border: solid 0.5px #474c53;
    color: #474c53;
    width: 34px;
    height: 25px;
    border-radius: 3px;
  }

  .hover:hover {
    cursor: pointer;
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

  li {
    padding-bottom: 5px;
  }

  .marginFix {
    margin-left: -30px;
  }

  .searchInput {
    width: 276px;
    font-family: "MyriadPro";
    font-size: 17px;
  }

  span {
    margin-left: -20px;
  }

  .tableHeader {
    background-color: #f26323;
  }

  tbody tr:nth-of-type(even) {
    background-color: #fbcab4;
  }

  tbody th {
    padding: 3px;
  }

  tbody tr th {
    font-weight: 300;
    color: #474c53;
  }

  .title {
    font-weight: bold;
    color: #474c53;
  }

  .userImg {
    width: 37px;
    height: 37px;
  }

  .items {
    font-family: "MyriadPro";
    font-size: 18px;
  }

  ul {
    list-style-type: none;
    padding: 0px;
  }

  h1 {
    font-family: "Lato";
    font-weight: bold;
  }

  h3 {
    font-family: "Lato";
    font-weight: 600;
    margin-top: -6px;
  }

  table {
    font-family: "Lato";
  }

  .pages {
    font-family: "MyriadPro";
    font-size: 16.5px;
  }
</style>
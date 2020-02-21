<template>
  <div class="container-fluid bTest">
    <div class="row">
      <div class="col-4 text-left title">
        <h1>Networking</h1>
        <h4 class="font-italic">Find a co-worker to connect with</h4>
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
        <p class="inline ml-2">items per page</p>
      </div>
      <div class="col-6 text-right">
        <input type="text" placeholder="Search name, skill, domain, place" class="searchInput" />
        <span>
          <!-- Potential problem with css if search string is really long -->
          <i class="fas fa-search"></i>
        </span>
        <img src="../assets/AddButton.png" alt="AddButton" class="ml-2" />
        <!-- Add @click to img for button effect -->
        <img src="../assets/Component 5 – 3.png" alt="FilterButton" />
        <!-- Add @click to img for button effect -->
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-striped">
          <thead class="tableHeader text-white">
            <tr>
              <th scope="col">Expand</th>
              <th scope="col">Employee</th>
              <th scope="col">Skill Name</th>
              <th scope="col">Domain</th>
              <th scope="col">Platforms</th>
              <th scope="col">Average Rating</th>
              <th scope="col">Connect</th>
            </tr>
          </thead>
          <tbody>
            <!-- v-for for each row -->
            <!-- Dummy Data -->
            <tr>
              <!-- This is Janky (multiple instances) -->
              <th scope="row" @click="showInput = !showInput && id == 1" class="hover">arrow</th>
              <th>
                <img src="../assets/user_fill.png" alt="UserImg" class="userImg" /> Jimmy Tester
              </th>
              <th>
                <ul>
                  <!-- v-for for each skill -->
                  <li>xUnit</li>
                  <!-- Also Janky (multiple instances) -->
                  <div v-if="showInput && id == 1">
                    <li>nUnit</li>
                    <li>Selenium</li>
                  </div>
                </ul>
              </th>
              <th>
                <ul>
                  <!-- v-for for each domain -->
                  <li>Testing</li>
                  <div v-if="showInput && id == 1">
                    <li>QA</li>
                  </div>
                </ul>
              </th>
              <th>
                <ul>
                  <!-- v-for for each platform -->
                  <li>Platform 1</li>
                  <div v-if="showInput && id == 1">
                    <li>Platform 2</li>
                    <li>Platform 3</li>
                  </div>
                </ul>
              </th>
              <th>
                <img src="../assets/AverageRatings.png" alt="AverageRating" />
                <!-- Just an image, probably need a star with a text value inside that can update -->
              </th>
              <th>
                <img src="../assets/ConnectButton.png" alt="ConnectButton" />
                <!-- @click to img for button effect -->
              </th>
            </tr>
            <tr>
              <th scope="row" @click="showInput = !showInput && id == 2" class="hover">arrow</th>
              <th>
                <img src="../assets/user_fill.png" alt="UserImg" class="userImg" /> Timmy Tester
              </th>
              <th>
                <ul>
                  <!-- v-for for each skill -->
                  <li>Java</li>
                  <div v-if="showInput && id == 2">
                    <li>C#</li>
                    <li>Javascript</li>
                  </div>
                </ul>
              </th>
              <th>
                <ul>
                  <!-- v-for for each domain -->
                  <li>Web Development</li>
                  <div v-if="showInput && id == 2">
                    <li>Mobile Development</li>
                  </div>
                </ul>
              </th>
              <th>
                <ul>
                  <!-- v-for for each platform -->
                  <li>Platform 1</li>
                  <div v-if="showInput && id == 2">
                    <li>Platform 2</li>
                    <li>Platform 3</li>
                  </div>
                </ul>
              </th>
              <th>
                <img src="../assets/AverageRatings.png" alt="Average Rating" />
                <!-- Just an image, probably need a star with a text value inside that can update -->
              </th>
              <th>
                <img src="../assets/ConnectButton.png" alt="ConnectButton" />
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
        <p class="inline mx-1">of # pages</p>
        <button>
          <i class="fas fa-angle-right"></i>
        </button>
        <button class="mx-1">
          <i class="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Network",
  data() {
    return {
      showInput: false,
      id: 2
    };
  },
  methods: {}
};
</script>

<style scoped>
.bTest {
  background-color: #ffffff;
}
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
.searchInput {
  width: 276px;
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
.title {
  font-weight: bold;
  color: #474c53;
}
.userImg {
  width: 37px;
  height: 37px;
}
ul {
  list-style-type: none;
  padding: 0px;
}
</style>
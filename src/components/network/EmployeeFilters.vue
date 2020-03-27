<template>
  <div class="sideBorder">
    <div>
      <h6 class="mt-2 title">EMPLOYEE FILTERS</h6>
      <p class="text-right">
        <u>Clear All</u>
      </p>
      <!-- Skills -->
      <h6 class="mr-3 inline sections">Skills</h6>
      <input type="text" placeholder="Search" />
      <span>
        <!-- Potential problem with css if search string is really long -->
        <i class="fas fa-search"></i>
      </span>
      <div class="scroll">
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck1" />
          <label class="custom-control-label" for="customCheck1">Skill Name 1</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck2" />
          <label class="custom-control-label" for="customCheck2">Skill Name 2</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck3" />
          <label class="custom-control-label" for="customCheck3">Skill Name 3</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck4" />
          <label class="custom-control-label" for="customCheck4">Skill Name 4</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck17" />
          <label class="custom-control-label" for="customCheck17">Skill Name 5</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck18" />
          <label class="custom-control-label" for="customCheck18">Skill Name 6</label>
        </div>
      </div>
      <br />
      <!-- Domain -->
      <h6 class="mr-1 inline sections">Domain</h6>
      <input type="text" placeholder="Search" />
      <span>
        <!-- Potential problem with css if search string is really long -->
        <i class="fas fa-search"></i>
      </span>
      <div class="scroll">
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck5" />
          <label class="custom-control-label" for="customCheck5">Skill Name 1</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck6" />
          <label class="custom-control-label" for="customCheck6">Skill Name 2</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck7" />
          <label class="custom-control-label" for="customCheck7">Skill Name 3</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck8" />
          <label class="custom-control-label" for="customCheck8">Skill Name 4</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck15" />
          <label class="custom-control-label" for="customCheck15">Skill Name 5</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck16" />
          <label class="custom-control-label" for="customCheck16">Skill Name 6</label>
        </div>
      </div>
      <br />
      <!-- Platform -->
      <h6 class="platform inline sections">Platform</h6>
      <input type="text" placeholder="Search" />
      <span>
        <!-- Potential problem with css if search string is really long -->
        <i class="fas fa-search"></i>
      </span>
      <div class="scroll">
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck9" />
          <label class="custom-control-label" for="customCheck9">Skill Name 1</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck10" />
          <label class="custom-control-label" for="customCheck10">Skill Name 2</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck11" />
          <label class="custom-control-label" for="customCheck11">Skill Name 3</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck12" />
          <label class="custom-control-label" for="customCheck12">Skill Name 4</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck13" />
          <label class="custom-control-label" for="customCheck13">Skill Name 5</label>
        </div>
        <div class="custom-control custom-checkbox mt-1 mr-5">
          <input type="checkbox" class="custom-control-input" id="customCheck14" />
          <label class="custom-control-label" for="customCheck14">Skill Name 6</label>
        </div>
      </div>
      <br />
      <!-- Average Rating -->
      <h6 class="sections text-left">Average Rating</h6>
      <star-rating
        :item-size="13"
        inactive-color="#ffffff"
        active-color="#f26323"
        :increment="1.0"
        :max-rating="10"
        class="ml-3"
      ></star-rating>
    </div>
  </div>
</template>


<script>
import { StarRating } from "vue-rate-it";
export default {
  name: "EmployeeFilters",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { StarRating }
};
</script>


<style scoped>
.average {
  margin-right: 90px;
}
.title {
  color: #ffa737;
  font-weight: bold;
  font-size: 18px;
}
.inline {
  display: inline;
}
input {
  width: 120px;
  height: 25px;
  font-family: "MyriadPro";
}
.platform {
  margin-right: 1px;
}
.scroll {
  overflow: auto;
  height: 110px;
}
.sideBorder {
  border-left: #ffa737 solid 5px;
  padding-left: 10px;
}
span {
  margin-left: -20px;
}
u {
  color: #f26323;
  font-family: "Lato";
  font-size: 14px;
}
u:hover {
  cursor: pointer;
}
.sections {
  font-family: "Lato";
  font-weight: bold;
  color: #474c53;
}
label {
  font-family: "Lato";
  font-weight: 300;
  color: #474c53;
}
</style>
<template>
  <div class="sideBorder">
    <div>
      <h3 class="mt-2">Employee Filters</h3>
      <p class="text-right">
        <u>clear all</u>
      </p>
      <!-- Skills -->
      <h5 class="mr-3">Skills</h5>
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
      </div>
      <br />
      <!-- Domain -->
      <h5 class="mr-1">Domain</h5>
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
      </div>
      <br />
      <!-- Platform -->
      <h5 class="platform">Platform</h5>
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
      </div>
      <br />
      <!-- Average Rating -->
      <h5 class="average">Average Rating</h5>
      <star-rating
        :item-size="20"
        inactive-color="#ffffff"
        active-color="#f26323"
        :increment="1.0"
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
  margin-right: 75px;
}
h3 {
  color: #ffa737;
}
h5 {
  display: inline;
}
input {
  width: 145px;
  height: 25px;
}
.platform {
  margin-right: 1px;
}
.scroll {
  overflow: auto;
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
}
u:hover {
  cursor: pointer;
}
</style>
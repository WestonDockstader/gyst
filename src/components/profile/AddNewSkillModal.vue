<template>
  <div
    id="add-new-skill-modal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    data-backdrop="static"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title text-color mx-auto">
            <b>ADD NEW SKILL</b>
          </h3>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 mt-3">
              <h5 class="d-flex display-content-start">Skill Name</h5>
              <select class="dropdown inputWidth">
                <option></option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <button class="btn border ml-4 text-white">REQUEST NEW SKILL</button>
            </div>
            <div class="col-12 mt-2">
              <h5 class="d-flex display-content-start">Domain</h5>
              <select class="dropdown w-100">
                <option></option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div class="col-12 mt-2">
              <h5 class="d-flex display-content-start">Platforms</h5>
              <select class="dropdown w-100">
                <option></option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div class="m-3">
              <h5 class="d-flex display-content-start">Ranking (Personal):</h5>
              <star-rating
                :item-size="20"
                inactive-color="#ffffff"
                active-color="#f26323"
                :increment="1.0"
                :max-rating="10"
                class="d-flex justify-content-center"
              ></star-rating>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-12 d-flex justify-content-center">
              <button type="button" class="btn color text-white" data-dismiss="modal">CANCEL</button>
              <button type="button" class="btn text-white ml-2">SUBMIT FOR APPROVAL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { StarRating } from "vue-rate-it";
export default {
  name: "add-new-skill-modal",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { StarRating }
};
</script>


<style scoped>
.btn {
  background-color: #f26323;
  letter-spacing: 0.25px;
}
.color {
  background-color: #474c53;
  width: 50%;
}
.text-color {
  color: #f26323;
  letter-spacing: 1.5px;
}
.inputWidth {
  width: 53%;
}
.modal-dialog {
  font-family: "Lato";
}
h5 {
  color: #474c53;
  letter-spacing: 1.75px;
}
</style>
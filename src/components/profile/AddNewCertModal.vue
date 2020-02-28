<template>
  <div
    id="add-new-cert-modal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    data-backdrop="static"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">ADD NEW CERTIFICATION</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 mt-3">
              <h5 class="d-flex display-content-start">Skill Name</h5>
              <select class="dropdown w-50">
                <option></option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <button class="btn border ml-3 text-white">REQUEST NEW SKILL</button>
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
              <h5>Ranking (Personal):</h5>
              <star-rating
                :item-size="20"
                inactive-color="#ffffff"
                active-color="#ffd055"
                :increment="1.0"
                class="d-flex justify-content-center"
              ></star-rating>
            </div>
          </div>
            <div class="modal-footer">
          <div class="col-12 d-flex justify-content-center ">
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
export default {
  name: "add-new-cert-modal",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
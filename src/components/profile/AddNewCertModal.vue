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
          <h5 class="modal-title text-color">ADD NEW CERTIFICATION</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <h5 class="d-flex display-content-start">Certification Name</h5>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
            <div class="col-6">
              <h5 class="d-flex display-content-start">Date Received</h5>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-append">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    <i class="far fa-calendar-alt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-2 text-left">
              <h5>Upload Certification</h5>
              <h6>Approved file types: .doc, .pdf, .jpg, .jpeg, .png</h6>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-11 rectangle">
              <h4 class="mt-5">Drop your file here</h4>
              <h6 class="mb-3">Or click</h6>
              <button class="btn text-white btn-files">ADD FILE</button>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-12 mt-4">
              <button type="button" class="btn btn-color-1 text-white" data-dismiss="modal">CANCEL</button>
              <button type="button" class="btn btn-color-2 text-white ml-2">SUBMIT FOR APPROVAL</button>
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
.rectangle {
  border: dashed 3px #ffa737;
  background-color: rgba(255, 167, 55, 0.11);
}
.btn-files{
  width: 40%;
  border-radius: 6px;
  background-color: #ffa737;
}
.btn-color-1 {
  background-color: #474c53;
}
.btn-color-2 {
  background-color: #f26323;
}
.text-color{
  color: #f26323;
}
</style>
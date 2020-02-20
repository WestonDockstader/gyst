<template>
  <div class="card">
    <div class="card-body mt-5">
      <div class="row">
        <div class="col-4 position-absolute">
          <img
            alt="Generic User Logo"
            src="../assets/user_fill.png"
            class="rounded-circle profile-pic Image-2"
          />
        </div>
      </div>
      <div class="row position">
        <div class="col-4 text-left">
          <h1>Russell Crowe</h1>
          <h3>Marketing Specialist</h3>
        </div>
      </div>
      <div class="row position">
        <div class="col-4 vl text-left">
          <h3 class="pt-5 orange">Start Date:</h3>
          <h3 class="pt-3 orange">Location:</h3>
        </div>
        <div class="col-4 text-left">
          <h3 class="pt-5 orange">Projects:</h3>
        </div>
      </div>
      <div class="row p-5">
        <b-tabs content-class="mt-3 font">
          <b-tab title="SKILLS" active>
            <SkillsTable />
          </b-tab>
          <b-tab title="CERTIFICATIONS">
            <CertsTable />
          </b-tab>
          <b-tab title="ORG CHART">
            <OrgTable/>
          </b-tab>
          <b-tab title="LEARNING GROUPS">
            <LearnAndTable />
          </b-tab>
          <b-tab title="PERSONAL GROWTH">
            <PersonalGrowthTable />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import SkillsTable from "../components/profile/SkillsTable";
import CertsTable from "../components/profile/CertsTable";
import OrgTable from "../components/profile/OrgTable";
import LearnAndTable from "../components/profile/LearnAndTable";
import PersonalGrowthTable from "../components/profile/PersonalGrowthTable";


export default {
  name: "profile",
  components: {
    SkillsTable,
    CertsTable,
    PersonalGrowthTable,
    LearnAndTable,
    OrgTable
  },
  data() {
    return {};
  },
  methods: {}
};
</script>






<style>
.Image-2 {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 150px;
}
.orange {
  color: #f26323;
}
.vl {
  border-right: 3px solid #f26323;
}
.position {
  padding-left: 30%;
}
a {
  color: #474c53;
}
</style>
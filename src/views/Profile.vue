<template>
  <div class="card">
    <div class="card-body mt-5 mx-5">
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
      <div class="pt-5">
        <vue-tabs>
          <v-tab title="SKILLS">
            <SkillsTable />
          </v-tab>
          <v-tab title="CERTIFICATIONS">
            <CertsTable />
          </v-tab>
          <v-tab title="ORG CHART">
            <OrgTable />
          </v-tab>
          <v-tab title="LEARNING GROUPS">
            <LearnAndTable />
          </v-tab>
          <v-tab title="PERSONAL GROWTH">
            <PersonalGrowth />
          </v-tab>
        </vue-tabs>
      </div>
      <div v-if="skillsActive">
        <SkillsTable />
      </div>
      <div v-else-if="certification">
        <CertsTable />
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
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

export default {
  name: "profile",
  components: {
    SkillsTable,
    CertsTable,
    PersonalGrowthTable,
    LearnAndTable,
    OrgTable,
    VueTabs,
    VTab
  },
  data: function() {
    return {
      skillsActive: false,
      certification: false
    };
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
.active_tab {
  font-weight: bold;
  color: #ffa737 !important;
}
</style>
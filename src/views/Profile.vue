<template>
  <div>
    <div class="row">
      <div class="col-4 pt-2 pr-2 position-absolute">
        <img alt="Generic User Logo" src="../assets/user_fill.png" class="rounded-circle profile-pic Image-2" />
      </div>
    </div>
    <div class="row position">
      <div class="col-6 mb-3 text-left titleFont">
        <h2>
          <b>{{userData.personFirstName}} {{userData.personLastName}}</b>
        </h2>
        <h3>
          <i>{{userData.personPosition}}</i>
        </h3>
      </div>
    </div>
    <div class="row position">
      <div class="col-5 text-left vl">
        <h5 class="orange pb-1">START DATE: </h5>
        <h5 class="pb-2">{{formatDate(userData.personStartDate)}}</h5>
        <h5 class="orange">LOCATION:</h5>
        <h5 class="pb-2">{{userData.personLocation}}</h5>
      </div>
      <!--<div class="col-4 text-left">
        <h3 class="orange">PROJECTS:</h3>
      </div>-->
    </div>
    <div class="row pt-5">
      <vue-tabs class="col-12 d-inline">
        <v-tab title="SKILLS">
          <SkillsTable :user='userData' />
        </v-tab>
        <v-tab title="CERTIFICATIONS">
          <!-- <CertsTable />-->
        </v-tab>
        <v-tab title="ORG CHART">
          <!-- <OrgTable />-->
        </v-tab>
        <v-tab title="LEARNING GROUPS">
          <!--<LearnAndTable />-->
        </v-tab>
        <!--<v-tab title="PERSONAL GROWTH">
          <PersonalGrowth />
        </v-tab>-->
      </vue-tabs>
    </div>
    <div v-if="skillsActive">
      <!--<SkillsTable />-->
    </div>
    <div v-else-if="certification">
      <!--<CertsTable />-->
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
    data: function () {
      return {
        skillsActive: false,
        certification: false
      };
    },
    computed: {
      userData() {
        return this.$store.state.userData
      },
      position() {
        return this.$store.state.positions
      },
      location() {
        return this.$store.state.locations
      }
    },
    methods: {
      formatDate(date) {
        return date.slice(0, 10);
      }
    }
  }
</script>

<style>
  .Image-2 {
    width: 180px;
    height: 180px;
    object-fit: contain;
    border-radius: 150px;
  }

  .orange {
    color: #f26323;
    font-family: "Lato";
    font-weight: bold;
  }

  .vl {
    border-right: 2px solid #f26323;
  }

  .position {
    padding-left: 30%;
  }

  .active_tab {
    font-weight: bold;
    color: #ffa737 !important;
  }

  .titleFont {
    font-family: "Lato";
    color: #474c53;
  }
</style>
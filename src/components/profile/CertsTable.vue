<template>
      <b-table class="table" striped sticky-header head-variant="light" :fields="fields" :fixed="fixed" :items="items"></b-table>
</template>

<script>
export default {
  name: "table",
  data() {
    return {
        fields: ['SKILL_NAME', 'DOMAIN', 'PLATFORMS', 'RATINGS_M', 'RATINGS_P'],
        items: [
        { SKILL_NAME: 'Lorem', DOMAIN: 'Ipsum', PLATFORMS: 'FooBar', RATINGS_M: 5, RATINGS_P:5 },
        { SKILL_NAME: 'Lorem', DOMAIN: 'Ipsum', PLATFORMS: 'FooBar', RATINGS_M: 5, RATINGS_P:5 },
        { SKILL_NAME: 'Lorem', DOMAIN: 'Ipsum', PLATFORMS: 'FooBar', RATINGS_M: 5, RATINGS_P:5 },
        { SKILL_NAME: 'Lorem', DOMAIN: 'Ipsum', PLATFORMS: 'FooBar', RATINGS_M: 5, RATINGS_P:5 },
        { SKILL_NAME: 'Lorem', DOMAIN: 'Ipsum', PLATFORMS: 'FooBar', RATINGS_M: 5, RATINGS_P:5 },
        { SKILL_NAME: 'Lorem', DOMAIN: 'Ipsum', PLATFORMS: 'FooBar', RATINGS_M: 5, RATINGS_P:5 },
        { SKILL_NAME: 'Lorem', DOMAIN: 'Ipsum', PLATFORMS: 'FooBar', RATINGS_M: 5, RATINGS_P:5 },
        { SKILL_NAME: 'Lorem', DOMAIN: 'Ipsum', PLATFORMS: 'FooBar', RATINGS_M: 5, RATINGS_P:5 },
        ],
        fixed: true,
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>


</style>
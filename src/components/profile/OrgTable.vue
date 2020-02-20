<template>
<table class="table">
  <thead class="thead text-white">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</template>


<script>
export default {
    name: 'table',
    data(){
        return {}
    },
    computed:{},
    methods:{},
    components:{}
}
</script>


<style scoped>
.thead{
background-color: #f26323;
}
tbody tr:nth-of-type(even) {
 background-color: #fbcab4;
}


</style>
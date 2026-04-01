<template>
  <div>
    <download-csv :data="Users">
      Download Data As Csv
    </download-csv>
  </div>
</template>

<script setup>
  const Users = [
    {id: 1, name:'Mustafa', salary: 3000},
    {id: 2, name:'Deniz', salary: 5000},
    {id: 3, name:'Faruk', salary: 2000},
    {id: 4, name:'Asli', salary: 4000},
    {id: 5, name:'Mustafa', salary: 3000}
  ]
</script>
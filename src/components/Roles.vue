<template>
    <div id='roles'>

      <div id='role' class='list'>
        <h1>Rol</h1>
        <hr>
        <ul>
          <li v-for='item in item.roles' v-show='item' :key='item'>{{ item }}</li>
        </ul>
      </div>

      <div id='for' class='list'>
        <h1>Voor</h1>
        <hr>
        <ul>
          <li v-for='item in item.fors' v-show='item' :key='item'>{{ item }}</li>
        </ul>
      </div>

      <div id='links' class='list'>
        <h1>Links</h1>
        <hr>
        <ul>
          <li v-for='item in item.links' v-show='item' :key='item'><a :href='item.href' target='blank'>{{ item.name }}</a></li>
        </ul>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'roles',

    props: ['item']
  }
</script>

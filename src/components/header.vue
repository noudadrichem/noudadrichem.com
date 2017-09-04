<template>
<div id="header">
  <div class="container">
    <div class="content">
      <div class="portrait">
        <img :src="image" alt="portrait image">
      </div>

      <navigation/>

      <h1 class="title" v-html="title"></h1>

      <div class="socialIcons">
        <a href="#"><i class="fa fa-github"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook-square"></i></a>
      </div>

      <div class="about">
        <p v-html="text"></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import navigation from '@/components/navigation'

  export default {
    name: 'header',
    props: ['title', 'text', 'image'],
    components: { navigation }
  }
</script>

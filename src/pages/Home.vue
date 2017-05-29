<template>
  <div>
    <Heading/>
    <router-view></router-view>
    <Footing/>
  </div>

</template>

<script>
  import Heading from '@/components/Header'
  import Footing from '@/components/Footer'
  import Portfolio from '@/components/Portfolio'

  export default {
    name: 'Home',
    components: {
      Heading,
      Footing,
      Portfolio
    }
  }
</script>

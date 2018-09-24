<template>
  <div class="blanko">
    <heading title="Blanko app" :small="true" :navItems="navItems"/>

      <div class="container">
          <div class="grid">
            <div class="col-12">
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import heading from '@/components/heading'
import itemTile from '@/components/itemTile'

export default {
  components: { heading, itemTile },
  data: () => ({
    items: [{
      title: '',
      text: '',
      img: '',
      link: 'https://blankoapp.com',
      show: true
    }, ],
    navItems: []
  })
}
</script>

<style lang="scss">
</style>

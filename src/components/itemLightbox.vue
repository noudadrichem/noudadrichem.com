<template>
<transition name="fade">
  <div id="lightbox" v-if="show" @keydown.27="toggleLightbox(false)" tabindex="-1">
    <span @click="toggleLightbox(false)" class="cross"><i class="fa fa-times"></i></span>
    <div class="container">
      <slider :images="[ 'http://werk.noudadrichem.com/cdn/signature-generator.png', 'http://werk.noudadrichem.com/cdn/noudadrichem-website.png', 'http://werk.noudadrichem.com/cdn/borduurbedrijf-website.png' ]" :lightbox="true"/>
    </div>
  </div>
</transition>
</template>

<script>
import { eventBus } from '@/events'
import slider from '@/components/slider'

export default {
  name: 'itemLightbox',
  components: { slider },
  data: () => ({
    show: false,
    item: {}
  }),
  methods: {
    toggleLightbox(state) {
      this.$set(this, 'show', state)
      eventBus.$emit('clearSlideInterval')
    }
  },
  created() {
    eventBus.$on('showLightbox', (show, item) => {
      this.$set(this, 'show', show)
      this.$set(this, 'item', item)
    })
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>

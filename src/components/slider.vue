<template>
<div id="slider">
  <img v-for="(img, index) in images" :src="img" alt="image" class="slide" ref="slides">

  <div class="indicators" v-if="lightbox">
    <span v-for="(img, index) in images" @click="goToSlide(index)" class="indicator"></span>
  </div>
</div>
</template>

<script>
import { eventBus } from '@/events'
export default {
  name: 'itemSlider',
  props: ['images', 'lightbox'],
  data: () => ({
    currentSlide: 0,
    interval: null
  }),
  methods: {
    clearSlideInterval() {
      clearInterval(this.interval)
    },
    goToSlide(index) {
      const slides = this.$refs.slides
      slides.forEach(slide => slide.className = 'slide')
      slides[index].classList.add('show')
      this.$set(this, 'currentSlide', index)
    }
  },
  created() {
    eventBus.$on('clearSlideInterval', this.clearSlideInterval)
  },
  mounted() {
    let interval
    const slides = this.$refs.slides

    slides[this.currentSlide].classList.add('show')

    if (!(this.images.length === 1)) {
      interval = setInterval(() => {
        this.currentSlide++
          slides.forEach(slide => slide.className = 'slide')
        if (this.currentSlide >= slides.length) {
          this.$set(this, 'currentSlide', 0)
        }
        slides[this.currentSlide].classList.add('show')
      }, 10000)
    }
    this.$set(this, 'interval', interval)
  }
}
</script>

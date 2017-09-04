<template>
<div class="portfolioItem">
  <div class="container">
    <div class="content">
      <div class="decorationBlock"></div>

      <h1 class="title">Long project title
          <span class="date">13th may - 2017</span>
        </h1>
      <h2 class="subTitle">Main activities</h2>


      <div class="activities">
        <div class="activity">
          <div class="title">Rol</div>
          <hr/>
          <div class="item">Frontend Development</div>
          <div class="item">Design</div>
        </div>

        <div class="activity">
          <div class="title">Voor</div>
          <hr/>
          <div class="item">Noud Adrichem</div>
        </div>

        <div class="activity">
          <div class="title">Voor</div>
          <hr/>
          <div class="item"><a href="#">noudadrichem.com</a></div>
        </div>
      </div>

      <div class="aboutProject">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div class="button">
        <a @click="showLightbox" class="btn default">Show photo's</a>
      </div>
    </div>

    <slider :images="[ 'http://werk.noudadrichem.com/cdn/signature-generator.png' ]" :lightbox="false"/>
  </div>
</div>
</template>

<script>
import slider from '@/components/slider'
import { eventBus } from '@/events'

export default {
  name: 'portfolioItem',
  components: {
    slider
  },
  data: () => ({
    body: {
      name: 'test name',
      image: 'http://testlink.com/image.png',
      list: ['list item', 'list item', 'list item']
    }
  }),
  methods: {
    showLightbox() {
      console.log('show dan');
      eventBus.$emit('showLightbox', true, this.body)
    }
  }
}
</script>

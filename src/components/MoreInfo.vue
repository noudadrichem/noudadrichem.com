<template>
    <div id='moreInfo' class='fadeInUp'>
      <div class='container'>
        <div class="title header">
          <h1>{{ item.name}}</h1>
          <h3>{{ item.work}}</h3>
    		</div>
        <div class='info'>
          <div class='aboutItem'>
            <p v-html='item.story'></p>
          </div>
          <Roles :item='item'/>
          <div v-if='item.imgs'>
            <Slider :imgs.sync='item.imgs'/>
          </div>
          <div class='buttons'>
            <router-link to='/' class='btn'>Terug</router-link>
            <span v-if='item.links[0].href'>
              <a :href='item.links[0].href' target='blank' class='btn inverted'>Zie case</a>
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import data from '@/data'
  import Slider from '@/components/Slider'
  import Roles from '@/components/Roles'

  export default {
    name: 'MoreInfo',

    components: { Slider, Roles },

    data () {
      return {
        item: {}
      }
    },

    mounted () {
      data.portfolio.map(item => {
        item.slug === this.$route.params.slug ? this.$set(this, 'item', item) : ''
      })
    }
  }
</script>

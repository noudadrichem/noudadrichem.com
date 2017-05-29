<template>
  <div class='container'>
    <div class="title header">
			<h1>Mijn Werk</h1>
			<h3>Van Design tot Development</h3>
		</div>
    <ul id='work'>
      <Portfolio-item v-for='item in portfolio' :key='item' :item='item'/>
    </ul>
  </div>
</template>

<script>
  import PortfolioItem from './Item.vue'
  import data from '@/data'

  export default {
    name: 'Portfolio',

    components: { PortfolioItem },

    data () {
      return {
        portfolio: data.portfolio
      }
    }
  }
</script>

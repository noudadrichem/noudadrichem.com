<template>
  <div id='about'>
    <div class='container'>
      <div class="title header">
  			<h1>{{about.title }} <Icon name='magic'/></h1>
        <h3>{{about.subTitle}}</h3>
      </div>
      <div class='row'>
        <div class='column'>
          <div>
            <p v-html='about.story'></p>
          </div>
          <div id='knowledge'>
              <h3>Ik heb gewerkt met:</h3>
              <ul>
                <li><Icon name='check' scale='.7'/> HTML/CSS</li>
                <li><Icon name='check' scale='.7'/> Javascript</li>
                <li><Icon name='check' scale='.7'/> VueJS</li>
                <li><Icon name='check' scale='.7'/> React</li>
                <li><Icon name='check' scale='.7'/> Git</li>
                <li><Icon name='check' scale='.7'/> Wordpress</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '@/data'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'About',
    components: { Icon },
    data () {
      return data
    }
  }
</script>

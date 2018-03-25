<template>
  <div class="yummygum">
    <heading title="My internship at<span class='light'>\n</span><br/> Yummygum" :small="true" :navItems="navItems"/>

      <div class="container">
        <itemTile
          v-for="(item, index) in items"
          :title="item.title"
          :text="item.text"
          :img="item.img"
          :number="index"
          :key="index"
          :link="item.link"
          :show="item.show"
        />
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
      title: 'City Lights',
      text: 'A beautiful dark themed syntax & UI theme based on maximum focus, this was a great project to work on! It deffinitly is very populair among my fellow developers with a total download count of 93.000 as we speak.',
      img: '/yummygum/city-lights/city-lights@2x.png',
      link: 'http://citylights.xyz',
      show: false
    }, {
      title: 'Sketch Cleaner',
      text: 'A plugin for Sketch that helps you get your design files as clean as a whistle. This was a very challenging project for me personally because I did not had a lot of experience in making Sketch plugins. I wrote a medium post about my experiences, you can read it <a target="_blank" href="https://journal.yummygum.com/4-things-every-first-time-sketch-plugin-developer-should-know-5b4f22efb4a9">here</a>',
      img: '/yummygum/sketch-cleaner/sketch-cleaner@2x.png',
      link: 'http://www.sketchcleaner.com',
      show: false
    }],
    navItems: [{
      text: 'Home',
      link: 'https://noudadrichem.com'
    }, {
      text: 'Contact',
      link: '/contact'
    }]
  })
}
</script>

<style lang="scss">
  .item-tile {
    &:first-child {
      margin-top:-108px;
    }
  }
</style>

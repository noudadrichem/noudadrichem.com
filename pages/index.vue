<template>
<div>
  <heading :title="heading.title" :about="heading.about" />

  <div class="container">
    <itemTile v-for="(item, index) in items" :title="item.title" :text="item.text" :img="item.img" :number="index" :key="index" :link="item.link"/>
  </div>
</div>
</template>

<script>
import heading from '@/components/heading'
import itemTile from '@/components/itemTile'

export default {
  components: {
    heading,
    itemTile
  },
  data: () => ({
    up: 0,
    heading: {
      title: `Hello I\'m Noud Adrichem<span class="light">\\n</span><br/>Web Developer.`,
      about: `I'm a web developer focused on creating the best experience possible for your website/app. I love being busy writing good code bases for usefull products. Feel free to look at some of my work.
        <br/><br/>Want to get in touch? Send me a tweet or mail me at: <span class="bold"><a href="mailto:info@noudadrichem.com">info@noudadrichem.com.</a></span>`
    },
    items: [{
      title: 'My internship at Yummygum',
      text: 'I did a 6 months internship at Yummygum in Amsterdam. I learned a lot and have build amazing things. We made Sketchcleaner, a plugin for sketch that keeps your files clean. And City Lights, a beautiful dark theme for Atom, Sublime & Visual Studio Code.',
      img: '/yummygum/photo.jpg',
      link: '/yummygum'
    }, {
      title: 'My internship at Bannerwise',
      text: 'In my 3rd year of college I had the opportunity to start my internship 6 months earlier. This resulted in a 13 month internship at Bannerwise. It was a great benefit for me personally, my knowledge of code has been drastically improved.',
      img: '/bannerwise/photo.jpg',
      link: '/bannerwise'
    }]
  })
}
</script>

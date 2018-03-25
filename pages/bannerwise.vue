<template>
  <div class="bannerwise">
    <heading title="My internship at<span class='light'>\n</span><br/> Bannerwise" :small="true" navItems="navItems"/>

      <div class="container">
        <itemTile
          v-for="(item, index) in items"
          :title="item.title"
          :text="item.text"
          :img="item.img"
          :number="index"
          :key="index"
          :link="item.link"
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
      title: 'The new Bannerwise website.',
      text: 'A necessity for a new version of a product is ofcource a new website. I wrote 90% of the code that currently runs the website. It is build with Vue & Nuxt, both great javascript tools. The design is ofcource made by the lead designer of Bannerwise: Tim Lichtenberg',
      img: '/bannerwise/landing-page/bw-website.png',
      link: 'https://bannerwise.io',
      show: false
    }, {
      title: 'Website, CMS & download statistics.',
      text: 'This was an internal project I have been working on with Luuk Klaver, a great full stack developer. The idea was to create a website where clients could download ebooks in exchange for their email. After entering their email they recieved a download link in their inbox. This website also has a content management system with real time download statistics and analytics.',
      img: '/bannerwise/ebook-page/ebookpage.png',
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

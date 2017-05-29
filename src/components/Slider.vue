<template>
  <div id='slider'>

    <div>
      <input type='radio' name='slider' v-for='(item, index) in imgs' :id='`slide${index + 1}`' :key='item'>
    </div>

<!--
    <div class='navigation'>
      <a @click='previous' class='navItem prev'>
        <Icon name='arrow-left' scale='1.5'/>
      </a>
      <a @click='next' class='navItem next'>
        <Icon name='arrow-right' scale='1.5'/>
      </a>
    </div>
 -->

    <div id='slides'>
      <div class='inner' ref='inner'>
        <article v-for='img in imgs':key='img' class='slide' ref='slide'>
          <div class='image-container'>
            <img :src='img'/>
          </div>
        </article>
      </div>
    </div>

    <div class='labels'>
      <label v-for='(item, index) in imgs' :key='item' :for='`slide${index + 1}`' @click='switchSlide(index)' class='label' ref='label'>{{ index + 1 }}</label>
    </div>

  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon.vue'

  export default {
    name: 'Slider',

    props: ['imgs'],

    components: { Icon },

    data () {
      return {
        item: {}
      }
    },

    methods: {
      setInitState () {
        const slider = this.$refs.inner
        const slides = this.$refs.slide
        const number = slides.length
        const labels = this.$refs.label

        labels[0].classList.add('active')

        console.log('slider data', slider, slides, labels, number)

        slider.style.width = `${number}00%`
        slider.style.marginLeft = '0%'

        slides.forEach(article => {
          article.style.width = (100 / number) + '%'
        })
      },

      next () {
        const slider = this.$refs.inner
        const margin = parseInt(slider.style.marginLeft)
        slider.style.marginLeft = (margin - 100) + '%'
      },

      previous () {
        const slider = this.$refs.inner
        const margin = parseInt(slider.style.marginLeft)
        slider.style.marginLeft = (margin + 100) + '%'
      },

      switchSlide (index) {
        const slider = this.$refs.inner
        const labels = this.$refs.label

        labels.map((label, labelIndex) => {
          index === labelIndex ? label.classList.add('active') : label.classList.remove('active')
        })

        index < 0 ? slider.style.marginLeft = '0%' : slider.style.marginLeft = `-${index}00%`
      }
    },

    mounted () {
      setTimeout(e => { // this is so horrible..
        this.setInitState()
      }, 100)
    }
  }
</script>

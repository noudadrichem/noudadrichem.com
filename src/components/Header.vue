<template>
  <header id='header'>
		<div class='header-content'>

      <!-- <div class='navigation' :style='paralax'>
        <ul>
          <li><router-link to='/'>Werk</router-link></li>
          <li><router-link to='/overmij'>Over</router-link></li>
          <li><router-link to='/contact'>Contact</router-link></li>
        </ul>
      </div> -->

			<div class='inner-content' :style='paralax'>
				<div class='header-img'>
					<router-link to='/'><img src='../assets/images/portrait.png' alt='portrait'></router-link>
				</div>
        <div>
  				<h1>{{ title }}</h1>
  				<p>{{ subTitle }}</p>
        </div>
				<div class='social-icons'>
					<a href='https://www.facebook.com/noudadrichem/' target='blank'><img src='../assets/images/facebook-icon-white.svg' alt='fb icon'></a>
					<a href='https://www.linkedin.com/in/noud-adrichem-597a73105/' target='blank'><img src='../assets/images/linkedin-icon-white.svg' alt='linkedin icon'></a>
					<a href='https://github.com/noudadrichem' target='blank'><img src='../assets/images/github-icon-white.svg' alt='github icon'></a>
					<a href='http://codepen.io/noudadrichem/' target='blank'><img src='../assets/images/codepen-icon-white.svg' alt='codepen icon'></a>
				</div>
			</div>

		</div>
		<div class='clearfix'></div>
	</header>
</template>

<script>
  export default {
    name: 'Heading',

    data () {
      return {
        paralax: null,
        title: 'Noud Adrichem',
        subTitle: 'Mijn werk & Ambitie'
      }
    },

    methods: {
      paralaxEffect () {
        const top = document.body.scrollTop
        this.paralax = 'margin-top:' + (top * 0.33) + 'px'
      }
    },

    mounted () {
      if (window.innerWidth > 800) {
        console.log('paralax')
        window.onscroll = e => {
          this.paralaxEffect()
        }
      }
    }
  }
</script>

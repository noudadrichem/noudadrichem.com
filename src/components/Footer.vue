<template>
  <footer id='footer'>
    <div>
        &copy; <router-link to='http://noudadrichem.com'>noudadrichem.com</router-link>
        <span class='right'>
          <a href="mailto:info@noudadrichem.com">Mail mij</a>
          <a href="http://noudadrichem.com/cv">Mijn CV</a>
          <router-link to='/overmij'>Over mij</router-link>
          <a href='http://stage.noudadrichem.com'>Stage Blog</a>
        </span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footing'
  }
</script>

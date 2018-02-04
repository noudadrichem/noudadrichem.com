<template>
<div id="viernulvier">

  <div class="container">
    <h1>404</h1>
    <h4>Page not found</h4>
    <a href="https://noudadrichem.com">Go to home.</a>
  </div>

</div>
</template>

<script>
export default {
  props: ['error'],
  mounted() {
    console.log(this.error)
  }
}
</script>

<style lang="scss">
#viernulvier {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    * {
        color: #22293E;
    }

    .container {
        text-align: center;
        width: 90%;
        max-width: 600px;

        h1 {
            font-size: 100px;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-image: linear-gradient(-135deg, #45537D 0%, #43517A 0%, #3A4569 0%, #141824 100%);

            @media screen and (min-width: 608px) {
              font-size: 18em;
            }
        }

        h4 {
            font-size: 2em;
        }
    }
}
</style>

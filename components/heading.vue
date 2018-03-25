<template>
  <div :class="[{ heading: true }, { small: small }]">
    <img class="bg" src="/wave.svg" draggable="false"/>

    <div class="container heading-container">
      <navigation :navItems="navItems"/>
      <div class="row">
        <div class="col-12">
          <h1 v-html="title"></h1>
          <p class="mt-mid fadeInUp" v-if="about" v-html="about"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/navigation'

export default {
  props: ['title', 'about', 'small', 'navItems'],
  components: { navigation }
}
</script>

<style lang="scss">
.heading {
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 100%;
  height: 60vh;
  max-height: 660px;
  min-height: 524px;
  padding-top: 128px;
  width: 100%;
  color: #fff !important;
  position: relative;

  @media only screen and (max-width: 780px) {
    padding:32px 0 64px;
    background-image: linear-gradient(-124deg, #22293E 0%, #141824 95%);
    min-height: 0;
    height: 432px;

    .bg {
      display: none;
    }
  }

  .mt-mid {
    animation-duration: 800ms;
    animation-delay: 100ms;
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    animation-fill-mode: forwards;
    -webkit-transform: translate3d(0, 64px, 0);
    transform: translate3d(0, 64px, 0);
    opacity: 0;
  }

  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 64px, 0);
      transform: translate3d(0, 64px, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  &.small {
    height: 354px;
    min-height: auto;
    padding-top:64px;
    @media only screen and (max-width: 780px) {
      height: 304px;
    }

    .bg {
      bottom:0;
      top: auto;
    }
  }

  .bg {
    width:100%;
    min-height:660px;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    top:0;
    left:0;
    user-select: none;
    user-drag: none;
  }

  .heading-container {
    position: relative;
    z-index: 2;
    padding-right: 96px;
    padding-left: 96px;

    @media (max-width: 420px) {
      padding-right: 32px !important;
      padding-left: 32px !important;
    }
  }

  p {
    max-width: 469px;
    font-size:16px;
    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>

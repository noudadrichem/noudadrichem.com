<template>
  <transition name="fade-in-up">
    <div v-show="show" class="item-tile mt-big">
      <div v-if="(number % 2) === 0">
        <codeLine width="87px" top="18px" right="auto" left="-42px" zIndex="1"/>
        <codeLine width="248px" top="70%" right="-48px" left="auto" zIndex="1"/>
        <codeLine width="168px" top="90%" right="auto" left="-8%" zIndex="3"/>

        <div class="row">
          <div class="col-7">
            <h2>{{ title }}</h2>
            <span class="number">0{{ number + 1 }}</span>
            <p class="item-desc mt-big" v-html="text">

              <div v-if="link" class="link">
                <a :href="link">See more...</a>
              </div>
            </p>
          </div>

          <div class="col-5">
            <div class="img">
              <img :src="img" alt="">
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <codeLine width="248px" top="84px" right="auto" left="-38px" zIndex="1"/>
        <codeLine width="168px" top="70%" right="-5%" left="auto" zIndex="3"/>

        <div class="row">
          <div class="col-5">
            <div class="img">
              <img :src="img" alt="">
            </div>
          </div>

          <div class="col-7">
            <h2>{{ title }}</h2>
            <span class="number">0{{ number + 1 }}</span>
            <p class="item-desc mt-big" v-html="text">

              <div v-if="link" class="link">
                <a :href="link">See more...</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import codeLine from './codeLine'
export default {
  props: ['title', 'text', 'img', 'number', 'link', 'show'],
  components: {
    codeLine
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, this.number * 400)
  }
}
</script>

<style lang="scss">
.item-tile {
  background: #FFFFFF;
  box-shadow: 0 2px 31px 0 rgba(34,41,62,0.1);
  border-radius: 32px;
  padding: 64px 64px 42px 64px;
  position: relative;
  z-index: 2;
  transition: 250ms ease-in-out;

  @media only screen and (max-width: 768px) {
    padding: 32px 24px;
    border-radius: 16px;

    h2 {
      font-size: 20px;
    }
  }

  .row {
    z-index: 3;
    position: relative;
    div:nth-child(2) {
      float: right;
    }

    .col-7 {
      position: relative;
    }

    .number {
      font-family: IBMBold;
      font-size: 128px;
      color: rgba(58,80,107,0.10);
      position: absolute;
      top:-32px;
      left:-32px;
      line-height: 0.8;
      user-select: none;

      @media only screen and (max-width: 768px) {
        top: -24px;
        left: -8px;
        font-size: 87px;
      }
    }

    .img {
      user-select: none;
      // background: #fff;
      display: none;

      img {
        box-shadow: 0 2px 31px 0 rgba(34,41,62,0.20);
        border-radius: 16px;
      }

      @media only screen and (min-width: 768px) {
        // width: 407px;
        // height: 271px;
        display: block;
      }
    }

    p.item-desc {
      font-size: 16px;
      color: #3A506B;
      line-height: 29px;

      @media only screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 24px;
      }
    }

    a:before {
      background-color:#3A506B;
    }

    .link {
      color: #3A506B;
      font-size: 16px;
      margin-top: 16px;
    }
  }
}

</style>

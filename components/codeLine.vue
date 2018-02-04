<template>
<div
:class="'line ' + className"
:style="{left, right, top, width, zIndex, transform: `translateY(${this[upOrDown]}px)`}"
/>
</template>

<script>
export default {
  props: ['width', 'top', 'right', 'left', 'zIndex'],
  data: () => ({
    colorOptions: ['red', 'yellow', 'green', 'blue', '', 'red', 'blue', 'green'],
    up: 0,
    down: 0
  }),
  computed: {
    className() {
      const rndm = Math.floor(Math.random() * (this.colorOptions.length + 1))
      return this.colorOptions[rndm]
    },
    upOrDown() {
      const inTwo = Math.floor(Math.random() * 4)
      const options = ['up', 'down', 'down', 'up']
      return options[inTwo]
    }
  },
  mounted() {
    window.addEventListener('scroll', e => {
      const windowTop = document.documentElement.scrollTop;
      const viewPortHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight
      const maxScroll = (documentHeight - viewPortHeight)
      const scrollPercent = (windowTop / maxScroll) * 100

      this.$set(this, 'up', scrollPercent * 0.3)
      this.$set(this, 'down', scrollPercent * -0.45)
    })
  }
}
</script>

<style lang="scss">
.line {
    border-radius: 8px;
    height: 16px;
    width: 32px;
    background-color: rgb(183, 197, 211);
    box-shadow: 0 5px 4px -3px rgba(183, 197, 211, 0.50);
    opacity: 1;
    position: absolute;
    z-index: 1;

    &.right {
        right: 0;
    }

    &.left {
        left: 0;
    }

    &.red {
        background-color: #E27E8D;
        box-shadow: 0 5px 4px -3px rgba(226,126,141,0.50);
    }

    &.yellow {
        box-shadow: 0 5px 4px -3px rgba(235, 191, 131, 0.50);
        background-color: #EBBF83;
    }

    &.green {
      box-shadow: 0 5px 4px -3px rgba(112, 225, 232, 0.50);
        background-color: rgb(112, 225, 232);
    }

    &.blue {
      box-shadow: 0 5px 4px -3px rgba(83, 154, 252, 0.50);
        background-color: rgb(83, 154, 252);
    }
}
</style>

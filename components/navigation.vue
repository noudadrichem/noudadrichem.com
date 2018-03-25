<template>
  <div class="navigation">
    <ul>
      <li v-for="navItem in navItems">
        <a :href="navItem.link">{{ navItem.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['navItems']
}
</script>

<style lang="scss">
  .navigation {
    height: 32px;
    position: absolute;
    top: 0;
    right: 88px;

    @media (max-width: 420px) {
      display: none;
    }

    ul {
      display: flex;
      justify-content: flex-end;

      li {
        display: inline-flex;

        a {
          font-family: IBMRegular;
          padding: 8px 16px;
          font-size: 16px;
          margin-left: 16px;
          color: #FFFFFF;
        }
      }
    }
  }
</style>

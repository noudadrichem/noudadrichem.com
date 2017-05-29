<template>
  <li class="work item">
    <router-link :to='`item/${item.slug}`'>
      <img :src="item.background">

        <div class="overlay">
          <div class="content">
            <h1>{{item.name}}</h1>
            <h3>{{item.work}}</h3>
            <h5>{{item.role}}</h5>
          </div>
        </div>
      </a>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: ['item']
}
</script>

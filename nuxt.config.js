module.exports = {
  head: {
    title: 'noudadrichem | portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'noudadrichem | portfolio' },
      { name: 'msapplication-TileColor"', content: '#193959' },
      { name: 'theme-color"', content: '#193959' },
      { hid: 'description', name: 'description', content: 'Hello I\'m Noud Adrichem, developer.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favico/favico@2x.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'favico/favico@2x.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'favico/favico@2x.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'favico/favico@2x.png' }
    ]
  },
  loading: { color: '#193959' },
  plugins: [
    { ssr: false, src: '~/plugins/v-visible.js' },
    { ssr: false, src: '~/plugins/ga.js' }
  ]
}

/*
        <!-- Facebook -->
          <meta property="og:url" content="https://.com/">
          <meta property="og:title" content="Yummygum Website">
          <meta property="og:description" content="
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://.com/assets/img/meta/meta-img.png">
          <meta property="og:image:alt" content="https://.com/assets/img/meta/meta-img.png">
          <meta property="og:image:secure_url" content="https://.com/assets/img/meta/meta-img.png">
          <meta property="og:image:width" content="1200">
          <meta property="og:image:height" content="627">

        <!-- Twitter -->
        <meta name="twitter:card" content="photo">
        <meta name="twitter:site" content="@">
        <meta name="twitter:creator" content="@">
        <meta name="twitter:title" content="Yummygum Website">
        <meta name="twitter:description" content="
        <meta name="twitter:image:src" content="https://.com/assets/img/meta/meta-img.png">

        <meta name="twitter:domain" content="https://.com/">

        <meta itemprop="description" content="">

          <meta itemprop="image" content="https://.com/assets/img/meta/meta-img.png">


*/

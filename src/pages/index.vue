<template>
  <div id="index" class="page">
    <heading :title="headingTitle" :text="headingText" :image="headingImage"/>
    <portfolioItem/>
    <footing/>

    <itemLightbox/>
    <loader :loading="loading"/>
  </div>
</template>

<script>
  import heading from '@/components/header';
  import footing from '@/components/footer';
  import loader from '@/components/loader';
  import portfolioItem from '@/components/portfolioItem';
  import itemLightbox from '@/components/itemLightbox'

  import getSheetDone from 'get-sheet-done';

  export default {
    name: 'index',
    components: { heading, loader, portfolioItem, footing, itemLightbox },
    data: () => ({
      loading: true,
      fileId: '1v4D9zwjqdLLwE6hMQDacrUSb4CQO9nMnOLu2H7aqOfQ',
      headingTitle: null,
      headingText: null,
      headingImage: null
    }),
    mounted() {
      getSheetDone.labeledColsRows(this.fileId)
        .then(sheet => {
          this.$set(this, 'loading', false)
          console.log(sheet)
          const { header } = sheet.data
          this.headingTitle = header.title
          this.headingText = header.text
          this.headingImage = header.image
        })
    }
  }
</script>

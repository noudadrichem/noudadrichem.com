<template>
  <div class="cms">
    <div class="editor-container">
      <div class="toolbar">
        <ul>
          <li @click="addTextLink">AddTextLink</li>
          <li @click="addImg">addImg</li>
        </ul>
      </div>
      <textarea :value="markdownToCompile" @keyup="compileMarkdownToHtml" ref="markdownToCompileValue" style="float: left;"></textarea>
      <pre style="float: left;"><code>{{ $data }}</code></pre>
    </div>
    <div v-html="compiledMarkdown" class="compiled-markdown"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data: () => ({
    markdownToCompile: '',
    cursorPosition: null
  }),
  methods: {
    compileMarkdownToHtml(e) {
      this.$set(this, 'markdownToCompile', e.target.value)
      this.$set(this, 'cursorPosition', e.target.selectionStart)
    },
    addTextLink() {
      console.log('addTextLink');
    },
    addImg() {
      console.log('addImage');
      const { markdownToCompile, cursorPosition } = this
      const addImgToMarkdown = this.markdownToCompile.substring(0, cursorPosition)
      + ' dit moet er ffies tussen '
      + markdownToCompile.substring(cursorPosition, markdownToCompile.length);

      this.$set(this, 'markdownToCompile', aa)

    },
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdownToCompile, {
        sanitize: true,
        xhtml: true
      })
    },
  }
}
</script>

<style lang="scss">
.cms {
  .editor-container {
    textarea {
      border: 0.5px solid #3a506b;
      resize: none;
      width: 400px;
      height: 200px;
      font-size: 13px;
    }
  }

  .compiled-markdown {
    color: #3a506b;

    * {
      color:inherit;
    }
  }
}
</style>

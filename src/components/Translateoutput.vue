<template>
  <div id="translateOutput" ref="output">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'TranslateOutput',
  props: {
    translatedText: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
#translateOutput {
  margin-top: 10px;
  font-size: 20px;
}
</style>

<template>
  <div id="translateForm" class="wrapper">
    <div class="box-form">
      <form @submit="formSubmit">
        <input id="form-input" type="text" placeholder="please input ..." v-model.trim="msg">
        <select v-model="lang">
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
          >{{ option.content }}</option>
        </select>
        <input
          id="test"
          class="btn btn-info btn-sm"
          type="submit"
          value="translate"
          ref="clickForTranslate"
        >
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TranslateForm',
  data () {
    return {
      msg: '',
      lang: '',
      isSearch: true,
      options: []
    }
  },
  methods: {
    formSubmit (e) {
      this.$refs.clickForTranslate.setAttribute("disabled", true)
      e.preventDefault()
      this.msg === '' ? this.isSearch = false : this.isSearch = true
      this.$emit('formSubmit', this.msg, this.lang, this.isSearch)
    }
  },
  created: function () {
    let defaultOption = [{ "content": "English", "value": "en" }, { "content": "Russian", "value": "ru" }, { "content": "Korean", "value": "ko" }]
    defaultOption.forEach((item) => {
      this.options.push(item)
    })
    this.lang = this.options[0].value
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

#form-input {
  border: 1px #ccc solid;
  border-radius: 10px;
}
/* input:focus
{
    outline: none;
} */
</style>

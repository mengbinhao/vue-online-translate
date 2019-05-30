<template>
  <div id="app">
    <TranslateHeader/>
    <TranslateForm @formSubmit="formSubmit" ref="child"/>
    <Translateoutput>
      <template v-if="isError">
        <div v-html="translatedText"></div>
      </template>
      <template v-else>{{ translatedText }}</template>
    </Translateoutput>
  </div>
</template>

<script>
import TranslateHeader from './components/TranslateHeader'
import TranslateForm from './components/TranslateForm'
import Translateoutput from './components/Translateoutput'

export default {
  name: 'App',
  data () {
    return {
      translatedText: '',
      isSuccess: true,
      isError: false
    }
  },
  components: {
    TranslateHeader,
    TranslateForm,
    Translateoutput
  },
  methods: {
    formSubmit (msg, lang, isSearch) {
      this.translatedText = ''
      if (!isSearch) {
        this.translatedText = 'please input first'
        this.$refs.child.$refs.clickForTranslate.removeAttribute('disabled')
      } else {
        this.translatedText = 'searching ...'
        let url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190530T021410Z.f6bff82d39ae0dfe.29c6ffed0a950f6274bdb671ef9b8ca565b564ab&text=${msg}&lang=${lang}`
        this.$axios.get(url)
          .then(response => {
            this.translatedText = response.data.text[0];
            this.$refs.child.$refs.clickForTranslate.removeAttribute('disabled')
          })
          .catch(error => {
            this.isError = true
            this.translatedText = '<span style="color:red">please wait for a while</span>'
            console.log(this.translatedText)
            this.$refs.child.$refs.clickForTranslate.removeAttribute('disabled')
          })
      }
    }
  }
}
</script>


<style scoped>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>

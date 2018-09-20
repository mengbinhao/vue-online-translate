<template>
    <div id="app">
        <translate-header />
        <translate-form @formSubmit="formSubmit"/>
        <translate-output v-text="translatedText" />
    </div>
</template>

<script>
import TranslateHeader from './components/TranslateHeader'
import TranslateForm from './components/TranslateForm'
import Translateoutput from './components/Translateoutput'

export default {
    name: 'App',
    data() {
        return {
            translatedText: ''
        }
    },
    components: {
        'translate-header': TranslateHeader,
        'translate-form': TranslateForm,
        'translate-output': Translateoutput
    },
    methods: {
        formSubmit(msg, lang) {
            let url = `https://translate.yandex.net/api/v1.5/tr.json/translate` +
                     `?key=trnsl.1.1.20180919T071022Z.f10bffed4ddaa027.c1c91d364e78dcba86ec1d86b0c3c43e14b26a9b` +
                     `&text=${msg}&lang=${lang}`
            this.$axios.get(url)
            .then((response) => {
                this.translatedText = response.data.text[0];
            })
            .catch((error) => {
                console.log(error);
            })
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

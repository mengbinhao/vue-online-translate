<template>
    <div id="translateForm">
        <form @submit="formSubmit">
            <input type="text" placeholder="Please input what you want to translate" v-model="msg">
            <select v-model="lang">
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="ja">Korean</option>
            </select>
            <input type="submit" value="translate">
        </form>
    </div>
</template>
<script>
export default {
    name: 'translateForm',
    data () {
        return {
            msg: '',
            lang: 'en'
        }
    },
    methods: {
        formSubmit(e) {
            this.$emit('formSubmit', this.msg, this.lang)
            e.preventDefault();
        }
    }
}
</script>
<style>

</style>

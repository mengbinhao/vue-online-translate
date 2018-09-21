<template>
    <div id="translateForm" class="row">
        <div class="col-md-6 col-md-offset-3">
            <form class="form-inline go-center" @submit="formSubmit">
                <input  id="trans-form" class="form-control" type="text" placeholder="please input ..." v-model="msg">
                <select v-model="lang" class="form-control">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                    <option value="ja">Korean</option>
                </select>
                <input class="btn btn-primary" type="submit" value="translate">
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'translateForm',
    data () {
        return {
            msg: '',
            lang: ''
        }
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            if (this.msg.trim() === '') return
            this.$emit('formSubmit', this.msg, this.lang)
        }
    },
    created: function () {
        this.lang = 'en'
    }
}
</script>
<style scoped>
#trans-form {
    border: 1px #ccc solid;
    border-radius: 10px;
}

.go-center {
    justify-content: center;
}
</style>

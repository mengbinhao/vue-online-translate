<template>
    <div id="translateOutput" ref="output">
        <h5> {{ translatedText }}</h5>
    </div>
</template>
<script>
export default {
    name: 'translateOutput',
    props: ['translatedText'],
    updated: function () {
        console.log('updatedupdatedupdatedupdated')
        if (this.translateOutput === 'can not translate,please wait for a while') {
            this.$refs.output.innerHTML = `<h5 style="color:red">${this.$refs.output.innerText}</h5>`
        }
    }
}
</script>
<style>

</style>

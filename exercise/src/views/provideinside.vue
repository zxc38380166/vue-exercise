<template>
    <div>
        第三層-最內層inside <br> {{ text }}
    </div>
</template>
<script>
export default {
    inject:['text'],
    // created() {
    //     console.log(this.text);
    // },
}
</script>
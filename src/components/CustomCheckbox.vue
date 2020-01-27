<template>
    <b-row align-v="center">
        <b-col cols="2">
                <b-icon-square font-scale="1.5" v-if="!checked" variant="secondary"></b-icon-square>
                <b-iconstack v-else font-scale="1.5">
                    <b-icon-square-fill stacked variant="success"></b-icon-square-fill>
                    <b-icon-check stacked variant="white"></b-icon-check>
                </b-iconstack>
        </b-col>
        <b-col cols="9">
            <slot/>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "CustomCheckbox",
        props: {
            checked: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped>
</style>

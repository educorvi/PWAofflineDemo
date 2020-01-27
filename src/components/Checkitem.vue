<template>
    <b-card :border-variant="checked?'success':null">
       <div>
           <b-check :state="checked?true:null" class="mt-1" style="float:left; display:inline;" v-model="checked"></b-check>
           <h4 @click="checked = !checked" style="float:left; display:inline;">{{check.title}}</h4>
       </div>
    </b-card>
</template>

<script>
    export default {
        name: "Checkitem",
        props: {
            check: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                checked: false
            }
        },
        created() {
            this.checked = this.$ls.get('checked_' + this.index + this.check.title, false);
        },
        watch: {
            // whenever question changes, this function will run
            checked: function (newValue) {
                this.$ls.set('checked_' + this.index + this.check.title, newValue);
            }
        }
    }
</script>

<style scoped>

</style>

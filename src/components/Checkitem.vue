<template>
    <b-card @click="checked = !checked" :border-variant="checked?'success':null">
       <div>
           <CustomCheckbox :checked="checked">
               <h4 class="mt-1">{{check.title}}</h4>
           </CustomCheckbox>
       </div>
    </b-card>
</template>

<script>
    import CustomCheckbox from "@/components/CustomCheckbox";
    export default {
        name: "Checkitem",
        components: {CustomCheckbox},
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

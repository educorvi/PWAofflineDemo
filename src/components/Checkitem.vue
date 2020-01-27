<template>
    <b-card @click="check.checked = !check.checked" :border-variant="check.checked?'success':null">
       <div>
           <CustomCheckbox :checked="check.checked">
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
                // checked: false
            }
        },
        created() {
            this.check.checked = this.$ls.get('checked_' + this.index.toString() + this.check.title, false);
        },
        watch: {
            // whenever question changes, this function will run
            'check.checked': function (newValue) {
                this.$ls.set('checked_' + this.index.toString() + this.check.title, newValue);
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <b-card @click="check.checked = !check.checked && (!inOrder || !prevChecked)" :border-variant="check.checked?'success':null">
       <div>
           <CustomCheckbox :checked="check.checked" :disabled="inOrder && prevChecked">
               <h4 :class="inOrder && prevChecked?'text-muted':''" class="mt-1">{{check.title}}</h4>
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
            },
            inOrder: {
                type: Boolean,
                required: false
            },
            prevChecked: {
                type: Boolean,
                required: false
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
            },
            prevChecked: function (newValue) {
                this.check.checked = (this.check.checked && (!this.inOrder || !newValue));
            },
            inOrder: function (newValue) {
                this.check.checked = (this.check.checked && (!this.prevChecked|| !newValue));
            },
        }
    }
</script>

<style scoped>

</style>

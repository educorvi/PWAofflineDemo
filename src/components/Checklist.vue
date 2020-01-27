<template>
    <div>
        <b-checkbox v-model="inOrder" switch class="mt-2 mb-2">
            InOrder
        </b-checkbox>
        <b-card-group deck>
            <Checkitem v-for="(check, index) in checks" :key="index" :check="check" :index="index" :in-order="inOrder" :prev-checked="index===0?false:!checks[index-1].checked">
            </Checkitem>
        </b-card-group>
        <AnimatedDone class="mt-3" v-if="allChecked"/>
    </div>
</template>

<script>
    import Checkitem from "@/components/Checkitem";
    import AnimatedDone from "@/components/AnimatedDone";
    export default {
        name: "Checklist",
        components: {AnimatedDone, Checkitem},
        data() {
            return {
                checks: [
                    {
                        title: "ToDo1",
                        checked: false
                    },
                    {
                        title: "ToDo2",
                        checked: false
                    },
                    {
                        title: "ToDo3",
                        checked: false
                    },
                    {
                        title: "ToDo4",
                        checked: false
                    }
                ],
                inOrder: false,
            }
        },
        computed: {
            allChecked() {
                for (const ch of this.checks) {
                    if (!ch.checked) {
                        return false;
                    }
                }
                return true;
            }
        },
        created() {
            this.inOrder = this.$ls.get('inOrder', false);
        },
        watch: {
            inOrder: function (newValue) {
                // eslint-disable-next-line no-console
                console.log("Triggered: " + newValue);
                this.$ls.set('inOrder', newValue);
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <b-card-group deck>
            <Checkitem v-for="(check, index) in checks" :key="index" :check="check" :index="index">
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
                        title: "ToDo3",
                        checked: false
                    },
                    {
                        title: "ToDo4",
                        checked: false
                    },
                    {
                        title: "ToDo5",
                        checked: false
                    }
                ]
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
    }
</script>

<style scoped>

</style>

<template>
    <b-card-group deck>
        <Checkitem v-for="(check, index) in checks" :key="index" :check="check" :index="index">

        </Checkitem>
    </b-card-group>
</template>

<script>
    import Checkitem from "@/components/Checkitem";
    export default {
        name: "Checklist",
        components: {Checkitem},
        data() {
            return {
                checks: [
                    {
                        title: "ToDo1"
                    },
                    {
                        title: "ToDo3"
                    },
                    {
                        title: "ToDo4"
                    },
                    {
                        title: "ToDo5"
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>

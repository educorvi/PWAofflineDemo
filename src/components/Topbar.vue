<template>
    <b-navbar class="mb-2" id="bar" toggleable="true">
        <b-navbar-brand @click="reload">
            <div class="navbar-brand">
                <img alt="Logo" id="logo" src="../assets/logo.png">
                <h5 class="ml-2" style="display: inline;">Offline Checklist Demo</h5>
            </div>
        </b-navbar-brand>
    </b-navbar>
</template>

<script>
    /* eslint-disable no-console */
    /* eslint-disable no-unused-vars */
    // @vuese
    // Navigation Bar für die App, deren NavItems sich dynamisch an Plone anpassen
    // @group Navigation
    export default {
        name: "Topbar",
        computed: {
        },
        methods: {
            reload() {
                window.location.reload(true)
            }
        },
    }
</script>

<style scoped>


    #logo {
        height: 40px;
    }

    #bar {
        position: sticky;
        /* fixing the position takes it out of html flow - knows
                          nothing about where to locate itself except by browser
                          coordinates */
        left: 0; /* top left corner should start at leftmost spot */
        top: 0; /* top left corner should start at topmost spot */
        width: 100%; /* take up the full browser width */
        z-index: 200; /* high z index so other content scrolls underneath */
    }

</style>

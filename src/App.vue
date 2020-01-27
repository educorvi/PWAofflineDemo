<template>
  <div id="app">
    <Topbar/>
    <div id="main" class="container-fluid">
      <Checklist/>
    </div>
  </div>
</template>

<script>

import Topbar from "@/components/Topbar";
import Checklist from "@/components/Checklist";
export default {
  name: 'app',
  components: {
    Checklist,
    Topbar
  }
}
</script>

<style>

</style>

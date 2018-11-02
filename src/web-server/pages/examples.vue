<template lang="pug">
  div
    nuxt-child
    ul
      li
        nuxt-link(to="/") home
      li
        nuxt-link(to="/examples/echo") echo
      li
        nuxt-link(to="/examples/greeter") greeter

</template>

<script>
export default {
}
</script>

<style>
</style>

<template>
  <div class="layout">
    <AppNavbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
// Layout logic here if needed
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
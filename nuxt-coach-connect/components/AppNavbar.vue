<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__content">
        <!-- Logo -->
        <NuxtLink to="/" class="navbar__logo">
          <Icon name="trending-up" />
          <span>CoachConnect</span>
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="navbar__links">
          <NuxtLink to="/coaches" class="navbar__link">Find Coaches</NuxtLink>
          <NuxtLink to="/how-it-works" class="navbar__link">How it Works</NuxtLink>
          <NuxtLink to="/recommendations" class="navbar__link">AI Recommendations</NuxtLink>
        </div>

        <!-- Actions -->
        <div class="navbar__actions">
          <NuxtLink to="/login" class="btn btn--outline">Log In</NuxtLink>
          <NuxtLink to="/signup" class="btn btn--primary">Get Started</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Navbar logic here
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $background;
  border-bottom: 1px solid $border;
  position: sticky;
  top: 0;
  z-index: 50;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    font-size: 1.25rem;
    font-weight: 700;
    color: $foreground;
    text-decoration: none;
  }

  &__links {
    display: none;
    gap: $spacing-xl;

    @include respond-to(lg) {
      display: flex;
    }
  }

  &__link {
    color: $muted-foreground;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: $primary;
    }

    &.router-link-active {
      color: $primary;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }
}
</style>
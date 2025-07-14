<template>
  <div class="dashboard">
    <div class="container">
      <div class="dashboard__header">
        <h1 class="dashboard__title">Your Learning Dashboard</h1>
        <p class="dashboard__description">
          Track your progress and manage your coaching sessions
        </p>
      </div>

      <!-- Coming Soon -->
      <div class="card text-center dashboard__coming-soon">
        <div class="dashboard__icon">
          <Icon name="bar-chart" :size="32" />
        </div>
        <h2 class="dashboard__coming-title">Dashboard Coming Soon</h2>
        <p class="dashboard__coming-description">
          Your personalized dashboard with progress tracking, session
          management, and AI recommendations is under development.
        </p>
        
        <div class="dashboard__features">
          <div class="feature-preview">
            <div class="feature-preview__icon">
              <Icon name="calendar" :size="24" />
            </div>
            <div class="feature-preview__content">
              <div class="feature-preview__title">Session Calendar</div>
              <div class="feature-preview__description">Upcoming sessions</div>
            </div>
          </div>
          
          <div class="feature-preview">
            <div class="feature-preview__icon">
              <Icon name="trending-up" :size="24" />
            </div>
            <div class="feature-preview__content">
              <div class="feature-preview__title">Progress Tracking</div>
              <div class="feature-preview__description">Goal completion</div>
            </div>
          </div>
          
          <div class="feature-preview">
            <div class="feature-preview__icon">
              <Icon name="star" :size="24" />
            </div>
            <div class="feature-preview__content">
              <div class="feature-preview__title">Reviews & Ratings</div>
              <div class="feature-preview__description">Coach feedback</div>
            </div>
          </div>
        </div>
        
        <NuxtLink to="/coaches" class="btn btn--primary">
          Explore Coaches
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Dashboard - CoachConnect',
  meta: [
    { name: 'description', content: 'Track your progress and manage your coaching sessions' }
  ]
})
</script>

<style lang="scss" scoped>
.dashboard {
  min-height: 100vh;
  padding: 2rem 0;

  &__header {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @include respond-to(md) {
      font-size: 3rem;
    }
  }

  &__description {
    color: $muted-foreground;
    font-size: 1.125rem;
  }

  &__coming-soon {
    padding: 5rem 2rem;
  }

  &__icon {
    width: 4rem;
    height: 4rem;
    background-color: lighten($primary, 40%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: $primary;
  }

  &__coming-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__coming-description {
    font-size: 1.125rem;
    color: $muted-foreground;
    max-width: 32rem;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  &__features {
    display: grid;
    gap: 1rem;
    max-width: 64rem;
    margin: 0 auto 2rem;

    @include respond-to(md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.feature-preview {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: $background;
  border: 1px solid $border;
  border-radius: 0.5rem;

  &__icon {
    color: $primary;
  }

  &__content {
    text-align: left;
  }

  &__title {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  &__description {
    font-size: 0.875rem;
    color: $muted-foreground;
  }
}
</style>
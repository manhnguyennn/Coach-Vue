<template>
  <div class="home">
    <!-- Hero Section -->
    <AppHero />

    <!-- Features Section -->
    <section class="features py-20">
      <div class="container">
        <div class="text-center mb-8">
          <div class="badge badge--primary mb-4">Why CoachConnect</div>
          <h2 class="features__title">
            Everything You Need to <span class="text-primary">Succeed</span>
          </h2>
          <p class="features__description">
            Our platform brings together world-class coaches and ambitious learners with cutting-edge technology.
          </p>
        </div>

        <div class="grid grid--md-3">
          <div class="card text-center">
            <div class="feature__icon">
              <Icon name="users" :size="24" />
            </div>
            <h3 class="feature__title">Expert Coaches</h3>
            <p class="feature__description">
              Access verified professionals with proven track records and real-world experience
            </p>
          </div>

          <div class="card text-center">
            <div class="feature__icon">
              <Icon name="trending-up" :size="24" />
            </div>
            <h3 class="feature__title">AI-Powered Matching</h3>
            <p class="feature__description">
              Smart algorithms match you with the perfect coach based on your goals
            </p>
          </div>

          <div class="card text-center">
            <div class="feature__icon">
              <Icon name="star" :size="24" />
            </div>
            <h3 class="feature__title">Secure & Trusted</h3>
            <p class="feature__description">
              End-to-end encryption, verified profiles, and secure payment processing
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta py-20">
      <div class="container">
        <div class="card text-center">
          <div class="badge badge--primary mb-4">Ready to Start?</div>
          <h2 class="cta__title">Take the Next Step in Your Journey</h2>
          <p class="cta__description">
            Whether you're looking to advance your career, learn new skills, or achieve personal goals, 
            our expert coaches are here to guide you.
          </p>
          <div class="cta__actions">
            <NuxtLink to="/coaches" class="btn btn--primary">Find Your Coach</NuxtLink>
            <NuxtLink to="/become-coach" class="btn btn--outline">Become a Coach</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'CoachConnect - Find Your Perfect Coach',
  meta: [
    { name: 'description', content: 'Connect with world-class coaches and accelerate your growth with personalized 1-on-1 coaching sessions.' }
  ]
})
</script>

<style lang="scss" scoped>
.features {
  background-color: lighten($muted, 2%);

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: $spacing-lg;

    .text-primary {
      color: $primary;
    }
  }

  &__description {
    font-size: 1.125rem;
    color: $muted-foreground;
    max-width: 32rem;
    margin: 0 auto;
  }
}

.feature {
  &__icon {
    width: 3rem;
    height: 3rem;
    background-color: lighten($primary, 40%);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto $spacing-lg;
    color: $primary;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: $spacing-sm;
  }

  &__description {
    color: $muted-foreground;
    line-height: 1.6;
  }
}

.cta {
  &__title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: $spacing-lg;
  }

  &__description {
    font-size: 1.125rem;
    color: $muted-foreground;
    max-width: 32rem;
    margin: 0 auto $spacing-xl;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    align-items: center;

    @include respond-to(sm) {
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
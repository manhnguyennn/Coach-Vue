<template>
  <div class="recommendations">
    <div class="container">
      <div class="recommendations__header">
        <div class="badge badge--primary">
          <Icon name="sparkles" :size="12" />
          AI-Powered
        </div>
        <h1 class="recommendations__title">
          Personalized Recommendations
        </h1>
        <p class="recommendations__description">
          Get AI-powered recommendations for skills, courses, and coaches
          based on your goals and learning style
        </p>
      </div>

      <!-- Coming Soon -->
      <div class="card text-center recommendations__coming-soon">
        <div class="recommendations__icon">
          <Icon name="brain" :size="40" />
        </div>
        <h2 class="recommendations__coming-title">AI Recommendations</h2>
        <p class="recommendations__coming-description">
          Our advanced AI system will analyze your goals, preferences, and
          learning patterns to provide personalized recommendations.
        </p>

        <div class="recommendations__features">
          <div class="feature-card">
            <div class="feature-card__icon">
              <Icon name="target" :size="24" />
            </div>
            <h3 class="feature-card__title">Smart Goal Setting</h3>
            <p class="feature-card__description">
              AI helps you define clear, achievable goals based on your
              interests and career aspirations
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">
              <Icon name="book-open" :size="24" />
            </div>
            <h3 class="feature-card__title">Course Recommendations</h3>
            <p class="feature-card__description">
              Discover courses and skills that align with your career path
              and learning preferences
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">
              <Icon name="users" :size="24" />
            </div>
            <h3 class="feature-card__title">Coach Matching</h3>
            <p class="feature-card__description">
              Find coaches whose expertise and teaching style perfectly
              match your learning needs
            </p>
          </div>
        </div>

        <div class="coming-features">
          <h3 class="coming-features__title">Coming Features:</h3>
          <div class="coming-features__grid">
            <div class="coming-feature">
              <Icon name="zap" :size="16" />
              Skill gap analysis
            </div>
            <div class="coming-feature">
              <Icon name="trending-up" :size="16" />
              Career progression paths
            </div>
            <div class="coming-feature">
              <Icon name="star" :size="16" />
              Learning style assessment
            </div>
            <div class="coming-feature">
              <Icon name="brain" :size="16" />
              Personalized learning plans
            </div>
          </div>
        </div>

        <NuxtLink to="/coaches" class="btn btn--primary">
          Browse Coaches Instead
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'AI Recommendations - CoachConnect',
  meta: [
    { name: 'description', content: 'Get AI-powered recommendations for skills, courses, and coaches based on your goals and learning style' }
  ]
})
</script>

<style lang="scss" scoped>
.recommendations {
  min-height: 100vh;
  padding: 2rem 0;

  &__header {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 1rem 0;

    @include respond-to(md) {
      font-size: 3rem;
    }
  }

  &__description {
    font-size: 1.125rem;
    color: $muted-foreground;
    max-width: 32rem;
    margin: 0 auto;
  }

  &__coming-soon {
    padding: 5rem 2rem;
  }

  &__icon {
    width: 5rem;
    height: 5rem;
    background: linear-gradient(135deg, $primary, $accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
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
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  &__features {
    display: grid;
    gap: 1.5rem;
    max-width: 64rem;
    margin: 0 auto 3rem;

    @include respond-to(md) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.feature-card {
  padding: 1.5rem;
  border: 1px solid rgba($primary, 0.2);
  border-radius: 0.75rem;
  text-align: center;

  &__icon {
    width: 3rem;
    height: 3rem;
    background-color: lighten($primary, 40%);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: $primary;
  }

  &__title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__description {
    font-size: 0.875rem;
    color: $muted-foreground;
    line-height: 1.5;
  }
}

.coming-features {
  margin-bottom: 2rem;

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  &__grid {
    display: grid;
    gap: 1rem;
    max-width: 32rem;
    margin: 0 auto;

    @include respond-to(md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.coming-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: $muted-foreground;
}

.badge--primary {
  background-color: $primary;
  color: $primary-foreground;
}
</style>
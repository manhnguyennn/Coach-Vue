<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__text">
          <div class="badge badge--primary mb-4">
            <Icon name="trending-up" :size="16" />
            #1 Coaching Platform
          </div>
          <h1 class="hero__title">
            Find Your Perfect <span class="text-primary">Coach</span> & Accelerate Growth
          </h1>
          <p class="hero__description">
            Connect with world-class coaches and trainers. Master new skills, achieve your goals, 
            and unlock your potential with personalized 1-on-1 coaching sessions.
          </p>
          
          <div class="hero__actions">
            <NuxtLink to="/coaches" class="btn btn--primary">Find a Coach</NuxtLink>
            <NuxtLink to="/become-coach" class="btn btn--outline">Become a Coach</NuxtLink>
          </div>

          <!-- Stats -->
          <div class="hero__stats">
            <div class="stat">
              <div class="stat__number">5,000+</div>
              <div class="stat__label">Expert Coaches</div>
            </div>
            <div class="stat">
              <div class="stat__number">50,000+</div>
              <div class="stat__label">Success Stories</div>
            </div>
            <div class="stat">
              <div class="stat__number">4.9</div>
              <div class="stat__label">
                <Icon name="star" :size="12" />
                Average Rating
              </div>
            </div>
          </div>
        </div>

        <div class="hero__featured">
          <div class="text-center mb-8">
            <h3 class="featured__title">Featured Coaches This Week</h3>
            <p class="featured__subtitle">Highly rated professionals ready to help you succeed</p>
          </div>

          <div class="featured__coaches">
            <div v-for="coach in featuredCoaches" :key="coach.id" class="coach-preview">
              <div class="coach-preview__avatar">
                <div class="avatar">{{ coach.initials }}</div>
                <div class="status-indicator"></div>
              </div>
              <div class="coach-preview__info">
                <div class="coach-preview__header">
                  <h4 class="coach-preview__name">{{ coach.name }}</h4>
                  <div class="badge badge--success">Top Rated</div>
                </div>
                <p class="coach-preview__title">{{ coach.title }}</p>
                <div class="coach-preview__meta">
                  <div class="rating">
                    <Icon name="star" :size="12" />
                    {{ coach.rating }} ({{ coach.reviews }} reviews)
                  </div>
                  <div class="price">${{ coach.price }}/hr</div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <NuxtLink to="/coaches" class="btn btn--outline">
              View All Coaches
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredCoaches = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    initials: 'SJ',
    title: 'Leadership & Executive Coaching',
    rating: 4.9,
    reviews: 127,
    price: 80
  },
  {
    id: 2,
    name: 'Marcus Chen',
    initials: 'MC',
    title: 'Software Engineering & Career Growth',
    rating: 4.8,
    reviews: 89,
    price: 65
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    initials: 'ER',
    title: 'Business Strategy & Entrepreneurship',
    rating: 5.0,
    reviews: 234,
    price: 120
  }
])
</script>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(135deg, $background 0%, lighten($primary, 45%) 100%);
  padding: 5rem 0;

  &__content {
    display: grid;
    gap: 3rem;
    align-items: center;

    @include respond-to(lg) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: $spacing-lg;

    .text-primary {
      color: $primary;
    }

    @include respond-to(md) {
      font-size: 4rem;
    }
  }

  &__description {
    font-size: 1.125rem;
    color: $muted-foreground;
    margin-bottom: $spacing-xl;
    line-height: 1.6;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    margin-bottom: $spacing-2xl;

    @include respond-to(sm) {
      flex-direction: row;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;
    padding-top: $spacing-xl;
    border-top: 1px solid $border;
  }
}

.stat {
  text-align: center;

  &__number {
    font-size: 1.5rem;
    font-weight: 700;
    color: $primary;
  }

  &__label {
    font-size: 0.875rem;
    color: $muted-foreground;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-xs;
  }
}

.featured {
  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: $spacing-sm;
  }

  &__subtitle {
    font-size: 0.875rem;
    color: $muted-foreground;
  }

  &__coaches {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
  }
}

.coach-preview {
  display: flex;
  gap: $spacing-lg;
  padding: $spacing-lg;
  background-color: $background;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &__avatar {
    position: relative;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacing-xs;
  }

  &__name {
    font-weight: 600;
  }

  &__title {
    font-size: 0.875rem;
    color: $muted-foreground;
    margin-bottom: $spacing-sm;
  }

  &__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    color: $muted-foreground;
  }
}

.avatar {
  width: 3rem;
  height: 3rem;
  background-color: lighten($primary, 40%);
  color: $primary;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.status-indicator {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 1rem;
  height: 1rem;
  background-color: $success;
  border: 2px solid $background;
  border-radius: 50%;
}

.rating {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
}
</style>
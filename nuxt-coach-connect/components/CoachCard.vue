<template>
  <div class="coach-card">
    <div class="coach-card__content">
      <!-- Avatar and Online Status -->
      <div class="coach-card__avatar">
        <div class="avatar-container">
          <NuxtLink :to="`/coaches/${coach.id}`" class="avatar-link">
            <img :src="coach.avatar" :alt="coach.name" class="avatar-image" />
          </NuxtLink>
          <div v-if="coach.isOnline" class="online-status">
            <div class="online-indicator"></div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="coach-card__main">
        <!-- Header -->
        <div class="coach-card__header">
          <div class="coach-card__info">
            <div class="coach-card__name-row">
              <NuxtLink :to="`/coaches/${coach.id}`" class="coach-card__name">
                {{ coach.name }}
              </NuxtLink>
              <div class="coach-card__badges">
                <div v-if="coach.isVerified" class="badge badge--outline badge--success">
                  ✓ Verified
                </div>
                <div v-if="coach.isTopRated" class="badge badge--primary">
                  <Icon name="award" />
                  Top Rated
                </div>
              </div>
            </div>
            <p class="coach-card__title">{{ coach.title }}</p>
            <div class="badge badge--secondary">{{ coach.category }}</div>
          </div>
        </div>

        <!-- Rating and Stats -->
        <div class="coach-card__stats">
          <div class="rating-section">
            <div class="stars">
              <Icon
                v-for="i in 5"
                :key="i"
                name="star"
                :class="{ 'star--filled': i <= Math.floor(coach.rating) }"
              />
            </div>
            <span class="rating-value">{{ coach.rating }}</span>
            <span class="rating-count">({{ coach.reviewCount }} reviews)</span>
          </div>
          <div class="students-count">
            <Icon name="users" />
            <span>{{ coach.totalStudents }} students</span>
          </div>
        </div>

        <!-- Description -->
        <p class="coach-card__description">
          {{ coach.description }}
        </p>

        <!-- Skills -->
        <div class="coach-card__skills">
          <div class="skills-label">Expertise</div>
          <div class="skills-list">
            <div
              v-for="skill in coach.skills.slice(0, 6)"
              :key="skill"
              class="skill-tag"
            >
              {{ skill }}
            </div>
            <div v-if="coach.skills.length > 6" class="skill-tag skill-tag--more">
              +{{ coach.skills.length - 6 }} more
            </div>
          </div>
        </div>
      </div>

      <!-- Price and Actions -->
      <div class="coach-card__actions">
        <!-- Price -->
        <div class="price-section">
          <div class="price-value">${{ coach.hourlyRate }}</div>
          <div class="price-label">/hour</div>
          <button v-if="coach.hasVideo" class="video-intro-btn">
            <Icon name="play-circle" />
            <span>Watch intro</span>
          </button>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <NuxtLink :to="`/coaches/${coach.id}`" class="btn btn--primary">
            Book Schedule
          </NuxtLink>
          <button class="btn btn--outline">
            <Icon name="message-circle" />
            Message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Coach {
  id: string
  name: string
  avatar: string
  title: string
  category: string
  rating: number
  reviewCount: number
  hourlyRate: number
  experience: string
  languages: string[]
  location: string
  isOnline: boolean
  skills: string[]
  sessionFormats: string[]
  totalStudents: number
  responseTime: string
  description: string
  hasVideo: boolean
  isTopRated: boolean
  isVerified: boolean
  nextAvailable: string
}

interface Props {
  coach: Coach
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.coach-card {
  background-color: $background;
  border: 1px solid rgba($border, 0.5);
  border-radius: $radius;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 10px 25px rgba($primary, 0.1);
    border-color: rgba($primary, 0.2);
  }

  &__content {
    display: grid;
    gap: 1.5rem;
    padding: 1.5rem;

    @media (min-width: $tablet) {
      grid-template-columns: auto 1fr auto;
      gap: 2rem;
    }
  }

  &__avatar {
    flex-shrink: 0;
  }

  &__main {
    flex: 1;
    min-width: 0;
    space-y: 1.25rem;
  }

  &__actions {
    flex-shrink: 0;
    min-width: 10rem;
  }

  &__header {
    space-y: 0.75rem;
  }

  &__name-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }

  &__name {
    font-size: $font-size-2xl;
    font-weight: 600;
    color: $foreground;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: $primary;
    }
  }

  &__badges {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__title {
    color: $muted-foreground;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  &__stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    font-size: $font-size-sm;
  }

  &__description {
    font-size: $font-size-sm;
    color: $muted-foreground;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    max-width: 48rem;
  }

  &__skills {
    space-y: 0.5rem;
  }
}

.avatar-container {
  position: relative;
}

.avatar-link {
  display: block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.avatar-image {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid $background;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.online-status {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 1.5rem;
  height: 1.5rem;
  background-color: $success;
  border: 3px solid $background;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.online-indicator {
  width: 0.625rem;
  height: 0.625rem;
  background-color: white;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.rating-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 0.125rem;
}

.star--filled {
  color: #fbbf24;
}

.rating-value {
  font-weight: 600;
  color: $foreground;
}

.rating-count {
  color: $muted-foreground;
}

.students-count {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: $muted-foreground;
}

.skills-label {
  font-size: $font-size-xs;
  font-weight: 500;
  color: $muted-foreground;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  font-size: $font-size-xs;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  background-color: rgba($background, 0.5);
  border: 1px solid rgba($border, 0.5);
  border-radius: 9999px;
  transition: all 0.2s ease;

  &:hover {
    background-color: $muted;
    border-color: rgba($primary, 0.3);
  }

  &--more {
    color: $muted-foreground;
    border-color: rgba($border, 0.5);
  }
}

.price-section {
  text-align: right;
  space-y: 0.25rem;
  margin-bottom: 1.5rem;
}

.price-value {
  font-size: $font-size-3xl;
  font-weight: 700;
  color: $foreground;
}

.price-label {
  font-size: $font-size-sm;
  font-weight: 500;
  color: $muted-foreground;
}

.video-intro-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 0.5rem;
  color: $primary;
  font-size: $font-size-xs;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: color 0.2s ease;

  &:hover {
    color: darken($primary, 10%);
  }
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.badge--success {
  color: $success;
  border-color: rgba($success, 0.3);
  background-color: rgba($success, 0.05);

  &:hover {
    background-color: rgba($success, 0.1);
  }
}
</style>
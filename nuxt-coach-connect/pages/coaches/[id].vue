<template>
  <div class="coach-profile">
    <div class="container">
      <!-- Back button -->
      <NuxtLink to="/coaches" class="back-button">
        <Icon name="chevron-left" :size="16" />
        Back to Coaches
      </NuxtLink>

      <!-- Cover Banner -->
      <div class="coach-banner">
        <div class="coach-banner__overlay"></div>
        <div class="coach-banner__content">
          <div class="coach-info">
            <div class="coach-avatar">
              <img :src="coach.avatar" :alt="coach.name" class="avatar-image" />
              <div v-if="coach.isOnline" class="online-status">
                <div class="online-indicator"></div>
              </div>
            </div>

            <div class="coach-details">
              <div class="coach-header">
                <h1 class="coach-name">{{ coach.name }}</h1>
                <div class="coach-badges">
                  <div v-if="coach.isVerified" class="badge badge--success">
                    <Icon name="check" :size="12" />
                    Verified
                  </div>
                  <div v-if="coach.isTopRated" class="badge badge--primary">
                    <Icon name="award" :size="12" />
                    Top Rated
                  </div>
                </div>
              </div>

              <p class="coach-title">{{ coach.title }}</p>
              <div class="coach-stats">
                <div class="rating">
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
                <div class="students">
                  <Icon name="users" :size="16" />
                  <span>{{ coach.totalStudents }} students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="profile-content">
        <!-- Left: Coach Details -->
        <div class="profile-main">
          <div class="card profile-card">
            <div class="badge badge--secondary">{{ coach.category }}</div>
            <p class="coach-description">{{ coach.description }}</p>
            
            <!-- Quick Info -->
            <div class="quick-info">
              <div class="info-item">
                <Icon name="clock" :size="16" />
                <span>{{ coach.experience }}</span>
              </div>
              <div class="info-item">
                <Icon name="map-pin" :size="16" />
                <span>{{ coach.location }}</span>
              </div>
              <div class="info-item">
                <Icon name="clock" :size="16" />
                <span>Responds in {{ coach.responseTime }}</span>
              </div>
            </div>
          </div>

          <!-- About Section -->
          <div class="card">
            <h3 class="section-title">
              <Icon name="book-open" :size="20" />
              About {{ coach.name }}
            </h3>
            <p class="about-text">
              {{ coach.longDescription }}
            </p>
          </div>

          <!-- Skills Section -->
          <div class="card">
            <h3 class="section-title">
              <Icon name="zap" :size="20" />
              Skills & Expertise
            </h3>
            <div class="skills-grid">
              <div
                v-for="skill in coach.skills"
                :key="skill"
                class="skill-tag"
              >
                {{ skill }}
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Booking Sidebar -->
        <div class="profile-sidebar">
          <div class="booking-card card">
            <!-- Pricing -->
            <div class="pricing-section">
              <div class="price-value">${{ coach.hourlyRate }}</div>
              <div class="price-label">per hour</div>
              <button v-if="coach.hasVideo" class="video-btn">
                <Icon name="play-circle" :size="16" />
                Watch Intro Video
              </button>
            </div>

            <!-- Actions -->
            <div class="booking-actions">
              <button class="btn btn--primary btn--full">
                <Icon name="calendar" :size="16" />
                Book Session
              </button>
              <button class="btn btn--outline btn--full">
                <Icon name="message-circle" :size="16" />
                Send Message
              </button>
            </div>

            <!-- Next Available -->
            <div class="availability">
              <div class="availability-label">Next Available</div>
              <div class="availability-time">{{ coach.nextAvailable }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const coachId = route.params.id

// Mock coach data - in real app this would come from API
const coach = ref({
  id: coachId,
  name: 'Sarah Johnson',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c633?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
  title: 'Leadership & Executive Coach',
  category: 'Business & Leadership',
  rating: 4.9,
  reviewCount: 127,
  hourlyRate: 80,
  experience: '8+ years',
  languages: ['English', 'Spanish'],
  location: 'New York, USA',
  isOnline: true,
  skills: ['Leadership', 'Executive Coaching', 'Team Management', 'Strategic Planning', 'Communication', 'Conflict Resolution'],
  sessionFormats: ['Video Call', 'Phone Call'],
  totalStudents: 234,
  responseTime: '2 hours',
  description: 'Former Fortune 500 executive with 15+ years of leadership experience. I help professionals advance their careers and develop leadership skills.',
  longDescription: `I'm a certified executive coach and former Fortune 500 leader with over 15 years of experience in developing high-performing teams and leaders. My passion lies in unlocking human potential and helping professionals navigate complex challenges while achieving sustainable growth.

My coaching approach combines evidence-based methodologies with practical business insights gained from leading diverse teams across multiple industries. I specialize in leadership development, career transitions, and organizational transformation.`,
  hasVideo: true,
  isTopRated: true,
  isVerified: true,
  nextAvailable: 'Today at 3:00 PM'
})

useHead({
  title: `${coach.value.name} - Coach Profile`,
  meta: [
    { name: 'description', content: `Book a session with ${coach.value.name}, ${coach.value.title}` }
  ]
})
</script>

<style lang="scss" scoped>
.coach-profile {
  min-height: 100vh;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: $muted-foreground;
  text-decoration: none;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
  transition: color 0.2s;

  &:hover {
    color: $primary;
  }
}

.coach-banner {
  position: relative;
  height: 20rem;
  background: linear-gradient(135deg, $primary 0%, $accent 100%);
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;

  @include respond-to(md) {
    height: 24rem;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  &__content {
    position: relative;
    height: 100%;
    display: flex;
    align-items: end;
    padding: 2rem;
    color: white;
  }
}

.coach-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}

.coach-avatar {
  position: relative;
  flex-shrink: 0;
}

.avatar-image {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);

  @include respond-to(md) {
    width: 8rem;
    height: 8rem;
  }
}

.online-status {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 2rem;
  height: 2rem;
  background-color: $success;
  border: 4px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.online-indicator {
  width: 0.75rem;
  height: 0.75rem;
  background-color: white;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.coach-details {
  flex: 1;
  min-width: 0;
}

.coach-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.coach-name {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;

  @include respond-to(md) {
    font-size: 2.5rem;
  }
}

.coach-badges {
  display: flex;
  gap: 0.5rem;
}

.coach-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  opacity: 0.9;

  @include respond-to(md) {
    font-size: 1.5rem;
  }
}

.coach-stats {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.rating {
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
  font-weight: 700;
  font-size: 1.125rem;
}

.rating-count {
  opacity: 0.8;
}

.students {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  opacity: 0.8;
}

.profile-content {
  display: grid;
  gap: 2rem;

  @include respond-to(lg) {
    grid-template-columns: 2fr 1fr;
  }
}

.profile-main {
  space-y: 1.5rem;
}

.profile-card {
  space-y: 1rem;
}

.coach-description {
  color: $muted-foreground;
  line-height: 1.6;
}

.quick-info {
  display: grid;
  gap: 0.75rem;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to(lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: $muted-foreground;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.about-text {
  color: $muted-foreground;
  line-height: 1.6;
  white-space: pre-line;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  background-color: $muted;
  border: 1px solid $border;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.profile-sidebar {
  @include respond-to(lg) {
    position: sticky;
    top: 1.5rem;
    height: fit-content;
  }
}

.booking-card {
  space-y: 1.5rem;
}

.pricing-section {
  text-align: center;
  space-y: 0.25rem;
}

.price-value {
  font-size: 2rem;
  font-weight: 700;
  color: $primary;
}

.price-label {
  color: $muted-foreground;
}

.video-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: $primary;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0.5rem auto 0;
  transition: color 0.2s;

  &:hover {
    color: darken($primary, 10%);
  }
}

.booking-actions {
  space-y: 0.75rem;
}

.btn--full {
  width: 100%;
}

.availability {
  text-align: center;
  padding: 0.75rem;
  background-color: rgba($success, 0.1);
  border: 1px solid rgba($success, 0.2);
  border-radius: 0.5rem;
}

.availability-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: $success;
}

.availability-time {
  font-size: 0.875rem;
  color: $foreground;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
<template>
  <div class="coaches-page">
    <!-- Header -->
    <div class="coaches-header">
      <div class="container">
        <div class="coaches-header__content">
          <div class="badge badge--outline">Find Coaches</div>
          <h1 class="coaches-header__title">
            Find Your Perfect Coach
          </h1>
          <p class="coaches-header__description">
            Browse our curated selection of expert coaches and find the right
            mentor for your goals
          </p>
        </div>

        <!-- Quick search -->
        <div class="coaches-search">
          <div class="search-input">
            <Icon name="search" />
            <input
              v-model="searchQuery"
              placeholder="Search for coaches, skills, or keywords..."
              class="search-input__field"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="coaches-content">
        <!-- Filters Sidebar -->
        <div class="coaches-filters">
          <CoachFilters
            v-model:filters="filters"
            @clear="clearFilters"
          />
        </div>

        <!-- Main Content -->
        <div class="coaches-main">
          <!-- Results Header -->
          <div class="results-header">
            <div class="results-info">
              <h2 class="results-count">
                {{ filteredCoaches.length }} coaches found
              </h2>
              <div v-if="hasActiveFilters" class="active-filters">
                <div v-if="searchQuery" class="filter-tag">
                  "{{ searchQuery }}"
                </div>
                <div v-if="filters.category && filters.category !== 'all'" class="filter-tag">
                  {{ filters.category }}
                </div>
              </div>
            </div>

            <div class="results-sort">
              <select v-model="sortBy" class="sort-select">
                <option value="recommended">Recommended</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          <!-- Results Grid -->
          <div v-if="filteredCoaches.length > 0" class="coaches-grid">
            <CoachCard
              v-for="coach in filteredCoaches"
              :key="coach.id"
              :coach="coach"
            />
          </div>

          <!-- No Results -->
          <div v-else class="no-results">
            <div class="no-results__icon">
              <Icon name="search" />
            </div>
            <h3 class="no-results__title">No coaches found</h3>
            <p class="no-results__description">
              Try adjusting your filters or search terms to find more results.
            </p>
            <button @click="clearFilters" class="btn btn--outline">
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Find Coaches - CoachConnect',
  meta: [
    {
      name: 'description',
      content: 'Browse our curated selection of expert coaches and find the right mentor for your goals.'
    }
  ]
})

// Reactive data
const searchQuery = ref('')
const sortBy = ref('recommended')
const filters = ref({
  category: 'all',
  priceRange: [0, 200] as [number, number],
  rating: 'any',
  availability: 'any',
  experience: 'any',
  language: 'any',
  format: [] as string[],
  skills: [] as string[]
})

// Mock coaches data
const coaches = ref([
  {
    id: '1',
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
    skills: ['Leadership', 'Executive Coaching', 'Team Management', 'Strategic Planning'],
    sessionFormats: ['Video Call', 'Phone Call'],
    totalStudents: 234,
    responseTime: '2 hours',
    description: 'Former Fortune 500 executive with 15+ years of leadership experience. I help professionals advance their careers and develop leadership skills.',
    hasVideo: true,
    isTopRated: true,
    isVerified: true,
    nextAvailable: 'Today at 3:00 PM'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    title: 'Senior Software Engineer & Tech Lead',
    category: 'Technology & Programming',
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 65,
    experience: '6+ years',
    languages: ['English', 'Chinese'],
    location: 'San Francisco, USA',
    isOnline: true,
    skills: ['JavaScript', 'React', 'System Design', 'Career Growth'],
    sessionFormats: ['Video Call', 'In Person'],
    totalStudents: 156,
    responseTime: '1 hour',
    description: 'Tech lead at a major tech company specializing in frontend development and system design. I mentor developers at all levels.',
    hasVideo: true,
    isTopRated: false,
    isVerified: true,
    nextAvailable: 'Tomorrow at 10:00 AM'
  }
])

// Computed
const hasActiveFilters = computed(() => {
  return searchQuery.value ||
    (filters.value.category && filters.value.category !== 'all') ||
    filters.value.skills.length > 0
})

const filteredCoaches = computed(() => {
  let filtered = coaches.value.filter(coach => {
    // Search filter
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      if (!coach.name.toLowerCase().includes(query) &&
          !coach.title.toLowerCase().includes(query) &&
          !coach.skills.some(skill => skill.toLowerCase().includes(query))) {
        return false
      }
    }

    // Category filter
    if (filters.value.category && filters.value.category !== 'all' && 
        coach.category !== filters.value.category) {
      return false
    }

    // Price range filter
    if (coach.hourlyRate < filters.value.priceRange[0] || 
        coach.hourlyRate > filters.value.priceRange[1]) {
      return false
    }

    return true
  })

  // Sort
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'rating':
        return b.rating - a.rating
      case 'price-low':
        return a.hourlyRate - b.hourlyRate
      case 'price-high':
        return b.hourlyRate - a.hourlyRate
      case 'popular':
        return b.totalStudents - a.totalStudents
      default:
        // Recommended: combination of rating, reviews, and top rated status
        const scoreA = a.rating * a.reviewCount + (a.isTopRated ? 1000 : 0)
        const scoreB = b.rating * b.reviewCount + (b.isTopRated ? 1000 : 0)
        return scoreB - scoreA
    }
  })

  return filtered
})

// Methods
const clearFilters = () => {
  searchQuery.value = ''
  filters.value = {
    category: 'all',
    priceRange: [0, 200],
    rating: 'any',
    availability: 'any',
    experience: 'any',
    language: 'any',
    format: [],
    skills: []
  }
}
</script>

<style lang="scss" scoped>
.coaches-page {
  min-height: 100vh;
}

.coaches-header {
  background-color: rgba($muted, 0.3);
  padding: 2rem 0;

  &__content {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__title {
    font-size: $font-size-3xl;
    font-weight: 700;
    margin: 1rem 0;

    @media (min-width: $mobile) {
      font-size: $font-size-4xl;
    }
  }

  &__description {
    font-size: $font-size-lg;
    color: $muted-foreground;
    max-width: 32rem;
    margin: 0 auto;
  }
}

.coaches-search {
  max-width: 32rem;
  margin: 0 auto;
}

.search-input {
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 0.75rem;
    color: $muted-foreground;
    z-index: 1;
  }

  &__field {
    width: 100%;
    padding: 0.75rem 0.75rem 0.75rem 3rem;
    border: 1px solid $border;
    border-radius: $radius;
    font-size: $font-size-base;
    background-color: $background;

    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 2px rgba($primary, 0.2);
    }
  }
}

.coaches-content {
  display: grid;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: $tablet) {
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }
}

.coaches-filters {
  @media (min-width: $tablet) {
    position: sticky;
    top: 6rem;
    height: fit-content;
  }
}

.results-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: $mobile) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.results-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: $mobile) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
}

.results-count {
  font-size: $font-size-lg;
  font-weight: 600;

  @media (min-width: $mobile) {
    font-size: $font-size-xl;
  }
}

.active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-tag {
  background-color: $secondary;
  color: $secondary-foreground;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: $font-size-xs;
  font-weight: 500;
}

.sort-select {
  padding: 0.5rem 1rem;
  border: 1px solid $border;
  border-radius: $radius;
  background-color: $background;
  font-size: $font-size-sm;
  min-width: 12rem;

  &:focus {
    outline: none;
    border-color: $primary;
  }
}

.coaches-grid {
  display: grid;
  gap: 1.5rem;

  @media (min-width: $mobile) {
    gap: 2rem;
  }
}

.no-results {
  text-align: center;
  padding: 4rem 1rem;

  &__icon {
    width: 4rem;
    height: 4rem;
    background-color: $muted;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: $muted-foreground;
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__description {
    color: $muted-foreground;
    margin-bottom: 1rem;
  }
}
</style>
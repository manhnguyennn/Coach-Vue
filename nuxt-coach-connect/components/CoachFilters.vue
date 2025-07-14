<template>
  <div class="coach-filters">
    <div class="filters-header">
      <h3 class="filters-title">
        <Icon name="filter" />
        Filters
      </h3>
      <div class="filters-actions">
        <button
          v-if="hasActiveFilters"
          @click="$emit('clear')"
          class="clear-btn"
        >
          <Icon name="x" />
          Clear
        </button>
      </div>
    </div>

    <div class="filters-content">
      <!-- Category -->
      <div class="filter-group">
        <label class="filter-label">Category</label>
        <select v-model="localFilters.category" class="filter-select">
          <option value="all">All Categories</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Price Range -->
      <div class="filter-group">
        <label class="filter-label">
          Price Range: ${{ localFilters.priceRange[0] }} - ${{ localFilters.priceRange[1] }}/hour
        </label>
        <div class="price-range">
          <input
            v-model.number="localFilters.priceRange[0]"
            type="range"
            min="0"
            max="200"
            step="5"
            class="range-input"
          />
          <input
            v-model.number="localFilters.priceRange[1]"
            type="range"
            min="0"
            max="200"
            step="5"
            class="range-input"
          />
        </div>
        <div class="price-labels">
          <span>$0</span>
          <span>$200+</span>
        </div>
      </div>

      <!-- Rating -->
      <div class="filter-group">
        <label class="filter-label">Minimum Rating</label>
        <select v-model="localFilters.rating" class="filter-select">
          <option value="any">Any Rating</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.8">4.8+ Stars</option>
        </select>
      </div>

      <!-- Experience -->
      <div class="filter-group">
        <label class="filter-label">Experience Level</label>
        <select v-model="localFilters.experience" class="filter-select">
          <option value="any">Any Experience</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <!-- Language -->
      <div class="filter-group">
        <label class="filter-label">Language</label>
        <select v-model="localFilters.language" class="filter-select">
          <option value="any">Any Language</option>
          <option
            v-for="language in languages"
            :key="language"
            :value="language"
          >
            {{ language }}
          </option>
        </select>
      </div>

      <!-- Session Format -->
      <div class="filter-group">
        <label class="filter-label">Session Format</label>
        <div class="checkbox-group">
          <label
            v-for="format in sessionFormats"
            :key="format"
            class="checkbox-item"
          >
            <input
              v-model="localFilters.format"
              type="checkbox"
              :value="format"
              class="checkbox-input"
            />
            <span class="checkbox-label">{{ format }}</span>
          </label>
        </div>
      </div>

      <!-- Skills -->
      <div class="filter-group">
        <label class="filter-label">Skills & Expertise</label>
        <div class="skills-grid">
          <button
            v-for="skill in skills"
            :key="skill"
            @click="toggleSkill(skill)"
            :class="[
              'skill-button',
              { 'skill-button--active': localFilters.skills.includes(skill) }
            ]"
          >
            {{ skill }}
            <Icon v-if="localFilters.skills.includes(skill)" name="x" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FilterState {
  category: string
  priceRange: [number, number]
  rating: string
  availability: string
  experience: string
  language: string
  format: string[]
  skills: string[]
}

interface Props {
  filters: FilterState
}

interface Emits {
  (e: 'update:filters', filters: FilterState): void
  (e: 'clear'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const localFilters = computed({
  get: () => props.filters,
  set: (value) => emit('update:filters', value)
})

const categories = [
  'Business & Leadership',
  'Technology & Programming',
  'Health & Wellness',
  'Creative Arts',
  'Language Learning',
  'Career Development',
  'Finance & Investing',
  'Marketing & Sales',
  'Personal Development',
  'Education & Training'
]

const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Portuguese',
  'Italian',
  'Russian',
  'Arabic'
]

const sessionFormats = [
  'Video Call',
  'Phone Call',
  'In Person',
  'Group Session'
]

const skills = [
  'Public Speaking',
  'Project Management',
  'JavaScript',
  'Python',
  'Leadership',
  'Marketing Strategy',
  'Data Analysis',
  'UI/UX Design',
  'Content Writing',
  'Sales',
  'Mindfulness',
  'Career Transition'
]

const hasActiveFilters = computed(() => {
  return (
    (localFilters.value.category && localFilters.value.category !== 'all') ||
    (localFilters.value.rating && localFilters.value.rating !== 'any') ||
    localFilters.value.priceRange[0] > 0 ||
    localFilters.value.priceRange[1] < 200 ||
    (localFilters.value.experience && localFilters.value.experience !== 'any') ||
    (localFilters.value.language && localFilters.value.language !== 'any') ||
    localFilters.value.format.length > 0 ||
    localFilters.value.skills.length > 0
  )
})

const toggleSkill = (skill: string) => {
  const newSkills = localFilters.value.skills.includes(skill)
    ? localFilters.value.skills.filter(s => s !== skill)
    : [...localFilters.value.skills, skill]
  
  localFilters.value = { ...localFilters.value, skills: newSkills }
}
</script>

<style lang="scss" scoped>
.coach-filters {
  background-color: $background;
  border: 1px solid $border;
  border-radius: $radius;
  overflow: hidden;
}

.filters-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid $border;
}

.filters-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: $font-size-lg;
  font-weight: 600;
  margin: 0;
}

.filters-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.clear-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: $font-size-xs;
  color: $muted-foreground;
  padding: 0.25rem 0.5rem;
  border-radius: calc($radius / 2);
  transition: all 0.2s ease;

  &:hover {
    background-color: $muted;
    color: $foreground;
  }
}

.filters-content {
  padding: 1.5rem;
  space-y: 1.5rem;
}

.filter-group {
  space-y: 0.5rem;
}

.filter-label {
  display: block;
  font-size: $font-size-sm;
  font-weight: 500;
  color: $foreground;
}

.filter-select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid $border;
  border-radius: calc($radius / 2);
  background-color: $background;
  font-size: $font-size-sm;
  color: $foreground;

  &:focus {
    outline: none;
    border-color: $primary;
    box-shadow: 0 0 0 2px rgba($primary, 0.2);
  }
}

.price-range {
  display: flex;
  gap: 0.5rem;
}

.range-input {
  flex: 1;
  height: 0.5rem;
  background: $muted;
  border-radius: 0.25rem;
  outline: none;
  appearance: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    background: $primary;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 1.25rem;
    height: 1.25rem;
    background: $primary;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
}

.price-labels {
  display: flex;
  justify-content: space-between;
  font-size: $font-size-xs;
  color: $muted-foreground;
}

.checkbox-group {
  space-y: 0.5rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.checkbox-input {
  width: 1rem;
  height: 1rem;
  border: 1px solid $border;
  border-radius: calc($radius / 4);
  background-color: $background;
  cursor: pointer;

  &:checked {
    background-color: $primary;
    border-color: $primary;
  }
}

.checkbox-label {
  font-size: $font-size-sm;
  color: $foreground;
  cursor: pointer;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid $border;
  border-radius: 9999px;
  background-color: $background;
  font-size: $font-size-xs;
  font-weight: 500;
  color: $foreground;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba($primary, 0.3);
    background-color: rgba($primary, 0.05);
  }

  &--active {
    background-color: $primary;
    color: $primary-foreground;
    border-color: $primary;

    &:hover {
      background-color: darken($primary, 5%);
    }
  }
}
</style>
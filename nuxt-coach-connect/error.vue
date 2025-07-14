<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <div class="error-icon">
          <Icon name="search" :size="64" />
        </div>
        
        <h1 class="error-title">
          {{ error.statusCode === 404 ? '404' : 'Error' }}
        </h1>
        
        <p class="error-message">
          {{ error.statusCode === 404 
            ? 'Oops! Page not found' 
            : 'Something went wrong' 
          }}
        </p>
        
        <p class="error-description">
          {{ error.statusCode === 404 
            ? "The page you're looking for doesn't exist or has been moved." 
            : 'An unexpected error occurred. Please try again later.' 
          }}
        </p>
        
        <div class="error-actions">
          <NuxtLink to="/" class="btn btn--primary">
            Return to Home
          </NuxtLink>
          <button @click="handleError" class="btn btn--outline">
            Try Again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['error'])

const handleError = async () => {
  await clearError({ redirect: '/' })
}

useHead({
  title: `${props.error.statusCode} - CoachConnect`,
  meta: [
    { name: 'description', content: 'Page not found or error occurred' }
  ]
})
</script>

<style lang="scss" scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $muted;
}

.error-content {
  text-align: center;
  max-width: 32rem;
  padding: 2rem;
}

.error-icon {
  width: 8rem;
  height: 8rem;
  background-color: rgba($muted-foreground, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: $muted-foreground;
}

.error-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: $foreground;
}

.error-message {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: $foreground;
}

.error-description {
  color: $muted-foreground;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @include respond-to(sm) {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
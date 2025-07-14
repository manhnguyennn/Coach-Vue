<template>
  <svg 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <!-- Trending Up Icon -->
    <path v-if="name === 'trending-up'" d="m22 7-8.5 8.5-5-5L2 17" />
    <path v-if="name === 'trending-up'" d="M16 7h6v6" />
    
    <!-- Star Icon -->
    <polygon v-if="name === 'star'" points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    
    <!-- Users Icon -->
    <path v-if="name === 'users'" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle v-if="name === 'users'" cx="9" cy="7" r="4" />
    <path v-if="name === 'users'" d="m22 21-3.5-3.5a4 4 0 0 0 0-5.66l3.5-3.5" />
    
    <!-- Search Icon -->
    <circle v-if="name === 'search'" cx="11" cy="11" r="8" />
    <path v-if="name === 'search'" d="m21 21-4.35-4.35" />
    
    <!-- Filter Icon -->
    <polygon v-if="name === 'filter'" points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
    
    <!-- Additional Icons -->
    <circle v-if="name === 'bar-chart'" cx="18" cy="20" r="2" />
    <circle v-if="name === 'bar-chart'" cx="6" cy="20" r="2" />
    <circle v-if="name === 'bar-chart'" cx="12" cy="20" r="2" />
    <path v-if="name === 'bar-chart'" d="M18 20V10M12 20V4M6 20v-6" />
    
    <rect v-if="name === 'calendar'" x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line v-if="name === 'calendar'" x1="16" y1="2" x2="16" y2="6" />
    <line v-if="name === 'calendar'" x1="8" y1="2" x2="8" y2="6" />
    <line v-if="name === 'calendar'" x1="3" y1="10" x2="21" y2="10" />
    
    <path v-if="name === 'sparkles'" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path v-if="name === 'sparkles'" d="M5 3v4" />
    <path v-if="name === 'sparkles'" d="M19 17v4" />
    <path v-if="name === 'sparkles'" d="M3 5h4" />
    <path v-if="name === 'sparkles'" d="M17 19h4" />
    
    <path v-if="name === 'brain'" d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path v-if="name === 'brain'" d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path v-if="name === 'brain'" d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path v-if="name === 'brain'" d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path v-if="name === 'brain'" d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path v-if="name === 'brain'" d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path v-if="name === 'brain'" d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path v-if="name === 'brain'" d="M6 18a4 4 0 0 1-1.967-.516" />
    <path v-if="name === 'brain'" d="M19.967 17.484A4 4 0 0 1 18 18" />
    
    <circle v-if="name === 'target'" cx="12" cy="12" r="10" />
    <circle v-if="name === 'target'" cx="12" cy="12" r="6" />
    <circle v-if="name === 'target'" cx="12" cy="12" r="2" />
    
    <path v-if="name === 'zap'" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4Z" />
    
    <path v-if="name === 'chevron-left'" d="m15 18-6-6 6-6" />
    
    <path v-if="name === 'check'" d="M20 6 9 17l-5-5" />
    
    <path v-if="name === 'award'" d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle v-if="name === 'award'" cx="12" cy="8" r="6" />
    
    <circle v-if="name === 'clock'" cx="12" cy="12" r="10" />
    <polyline v-if="name === 'clock'" points="12,6 12,12 16,14" />
    
    <path v-if="name === 'map-pin'" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle v-if="name === 'map-pin'" cx="12" cy="10" r="3" />
    
    <path v-if="name === 'book-open'" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path v-if="name === 'book-open'" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    
    <circle v-if="name === 'play-circle'" cx="12" cy="12" r="10" />
    <polygon v-if="name === 'play-circle'" points="10,8 16,12 10,16 10,8" />
    
    <path v-if="name === 'message-circle'" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    
    <path v-if="name === 'mail'" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline v-if="name === 'mail'" points="22,6 12,13 2,6" />
    
    <rect v-if="name === 'lock'" x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path v-if="name === 'lock'" d="M7 11V7a5 5 0 0 1 10 0v4" />
    
    <path v-if="name === 'eye'" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle v-if="name === 'eye'" cx="12" cy="12" r="3" />
    
    <path v-if="name === 'eye-off'" d="m15 18-.722-3.25" />
    <path v-if="name === 'eye-off'" d="M2 2l20 20" />
    <path v-if="name === 'eye-off'" d="M6.71 6.71C5.68 7.74 4.5 9.51 3 12c1.5 2.49 2.68 4.26 3.71 5.29" />
    <path v-if="name === 'eye-off'" d="M12 5.5c1.94 0 3.59.68 4.95 1.61" />
    <path v-if="name === 'eye-off'" d="M12.5 12.5A2.5 2.5 0 0 1 9.5 9.5" />
    
    <path v-if="name === 'log-in'" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline v-if="name === 'log-in'" points="10,17 15,12 10,7" />
    <line v-if="name === 'log-in'" x1="15" y1="12" x2="3" y2="12" />
    
    <line v-if="name === 'x'" x1="18" y1="6" x2="6" y2="18" />
    <line v-if="name === 'x'" x1="6" y1="6" x2="18" y2="18" />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 20
  }
})
</script>
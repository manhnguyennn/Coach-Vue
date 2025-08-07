import { createContext, useContext } from 'react';

export interface Translations {
  [key: string]: string | Translations;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    flag: '🇻🇳'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  }
];

export const DEFAULT_LANGUAGE = 'vi';

// Vietnamese translations (default)
export const VI_TRANSLATIONS: Translations = {
  // Navigation
  nav: {
    findCoaches: 'Tìm Huấn Luyện Viên',
    howItWorks: 'Cách Hoạt Động',
    aiRecommendations: 'Gợi Ý AI',
    login: 'Đăng Nhập',
    getStarted: 'Bắt Đầu',
    dashboard: 'Bảng Điều Khiển',
    profile: 'Hồ Sơ',
    logout: 'Đăng Xuất'
  },
  
  // Hero Section
  hero: {
    badge: '#1 Nền Tảng Huấn Luyện',
    title: 'Tìm <span class="text-primary">Huấn Luyện Viên</span> Hoàn Hảo & Tăng Tốc Phát Triển',
    description: 'Kết nối với các huấn luyện viên và trainer đẳng cấp thế giới. Thành thạo kỹ năng mới, đạt được mục tiêu và khai phá tiềm năng với các buổi huấn luyện 1-1 được cá nhân hóa.',
    findCoach: 'Tìm Huấn Luyện Viên',
    becomeCoach: 'Trở Thành Huấn Luyện Viên',
    expertCoaches: 'Huấn Luyện Viên Chuyên Gia',
    successStories: 'Câu Chuyện Thành Công',
    averageRating: 'Đánh Giá Trung Bình',
    featuredCoaches: 'Huấn Luyện Viên Nổi Bật Tuần Này',
    featuredSubtitle: 'Các chuyên gia được đánh giá cao sẵn sàng giúp bạn thành công'
  },

  // Features Section
  features: {
    badge: 'Tại Sao CoachConnect',
    title: 'Mọi Thứ Bạn Cần Để <span class="text-primary">Thành Công</span>',
    description: 'Nền tảng của chúng tôi kết nối các huấn luyện viên đẳng cấp thế giới và người học tham vọng với công nghệ tiên tiến.',
    expertCoaches: {
      title: 'Huấn Luyện Viên Chuyên Gia',
      description: 'Tiếp cận các chuyên gia đã được xác minh với thành tích đã được chứng minh và kinh nghiệm thực tế'
    },
    aiMatching: {
      title: 'Ghép Đôi Bằng AI',
      description: 'Thuật toán thông minh ghép đôi bạn với huấn luyện viên hoàn hảo dựa trên mục tiêu và phong cách học tập'
    },
    secure: {
      title: 'An Toàn & Đáng Tin Cậy',
      description: 'Mã hóa đầu cuối, hồ sơ đã xác minh và xử lý thanh toán an toàn'
    },
    flexible: {
      title: 'Lịch Trình Linh Hoạt',
      description: 'Đặt lịch phù hợp với thời gian của bạn với khả năng đổi lịch dễ dàng và hỗ trợ múi giờ'
    },
    goalTracking: {
      title: 'Theo Dõi Mục Tiêu',
      description: 'Đặt mục tiêu, theo dõi tiến độ và ăn mừng các cột mốc với phân tích tích hợp'
    },
    globalCommunity: {
      title: 'Cộng Đồng Toàn Cầu',
      description: 'Kết nối với huấn luyện viên và người học trên toàn thế giới bằng 40+ ngôn ngữ và múi giờ'
    }
  },

  // How it Works
  howItWorks: {
    badge: 'Quy Trình Đơn Giản',
    title: 'Bắt Đầu Hành Trình Trong <span class="text-primary">3 Bước</span>',
    description: 'Bắt đầu rất đơn giản. Tìm huấn luyện viên, đặt buổi học và bắt đầu thay đổi cuộc sống.',
    step1: {
      title: 'Khám Phá Huấn Luyện Viên',
      description: 'Duyệt qua lựa chọn huấn luyện viên chuyên gia được tuyển chọn hoặc sử dụng gợi ý AI để tìm sự phù hợp hoàn hảo'
    },
    step2: {
      title: 'Đặt Buổi Học',
      description: 'Lên lịch tư vấn miễn phí hoặc chuyển thẳng đến các buổi học trả phí với đặt lịch tức thì'
    },
    step3: {
      title: 'Đạt Được Mục Tiêu',
      description: 'Làm việc với huấn luyện viên, theo dõi tiến độ và khai phá toàn bộ tiềm năng với hướng dẫn cá nhân hóa'
    },
    startJourney: 'Bắt Đầu Hành Trình'
  },

  // Statistics
  stats: {
    title: 'Được Tin Tưởng Bởi Hàng Nghìn Người Trên Toàn Thế Giới',
    description: 'Tham gia cộng đồng toàn cầu của những người học và chuyên gia đã thay đổi sự nghiệp và cuộc sống',
    coaches: 'Huấn Luyện Viên Chuyên Gia',
    stories: 'Câu Chuyện Thành Công',
    satisfaction: 'Tỷ Lệ Hài Lòng',
    countries: 'Quốc Gia'
  },

  // CTA Section
  cta: {
    badge: 'Sẵn Sàng Bắt Đầu?',
    title: 'Thực Hiện Bước Tiếp Theo Trong Hành Trình',
    description: 'Dù bạn muốn thăng tiến sự nghiệp, học kỹ năng mới hay đạt được mục tiêu cá nhân, các huấn luyện viên chuyên gia của chúng tôi sẵn sàng hướng dẫn bạn từng bước.',
    findCoach: 'Tìm Huấn Luyện Viên',
    becomeCoach: 'Trở Thành Huấn Luyện Viên',
    freeConsultation: 'Tư vấn miễn phí • Không yêu cầu cam kết'
  },

  // Footer
  footer: {
    description: 'Kết nối những người học tham vọng với các huấn luyện viên đẳng cấp thế giới để khai phá tiềm năng con người.',
    forLearners: 'Cho Người Học',
    findCoaches: 'Tìm Huấn Luyện Viên',
    browseCategories: 'Duyệt Danh Mục',
    howItWorks: 'Cách Hoạt Động',
    successStories: 'Câu Chuyện Thành Công',
    forCoaches: 'Cho Huấn Luyện Viên',
    joinAsCoach: 'Tham Gia Làm Huấn Luyện Viên',
    resources: 'Tài Nguyên',
    coachSuccess: 'Thành Công Huấn Luyện Viên',
    support: 'Hỗ Trợ',
    company: 'Công Ty',
    aboutUs: 'Về Chúng Tôi',
    careers: 'Tuyển Dụng',
    contact: 'Liên Hệ',
    privacy: 'Chính Sách Bảo Mật',
    copyright: '© 2024 CoachConnect. Tất cả quyền được bảo lưu.'
  },

  // Coach Search
  coachSearch: {
    title: 'Tìm Huấn Luyện Viên Hoàn Hảo',
    description: 'Duyệt qua lựa chọn huấn luyện viên chuyên gia được tuyển chọn và tìm người cố vấn phù hợp cho mục tiêu của bạn',
    searchPlaceholder: 'Tìm kiếm huấn luyện viên, kỹ năng hoặc từ khóa...',
    coachesFound: 'huấn luyện viên được tìm thấy',
    noResults: 'Không tìm thấy huấn luyện viên',
    noResultsDescription: 'Thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm để có thêm kết quả.',
    clearFilters: 'Xóa Tất Cả Bộ Lọc',
    loadMore: 'Tải Thêm Huấn Luyện Viên'
  },

  // Filters
  filters: {
    title: 'Bộ Lọc',
    clear: 'Xóa',
    search: 'Tìm Kiếm',
    category: 'Danh Mục',
    allCategories: 'Tất Cả Danh Mục',
    priceRange: 'Khoảng Giá',
    perHour: '/giờ',
    minimumRating: 'Đánh Giá Tối Thiểu',
    anyRating: 'Bất Kỳ Đánh Giá',
    stars: 'Sao',
    availability: 'Khả Năng',
    anyTime: 'Bất Kỳ Lúc Nào',
    availableToday: 'Có Sẵn Hôm Nay',
    thisWeek: 'Tuần Này',
    nextWeek: 'Tuần Sau',
    flexible: 'Linh Hoạt',
    experience: 'Mức Độ Kinh Nghiệm',
    anyExperience: 'Bất Kỳ Kinh Nghiệm',
    years: 'năm',
    language: 'Ngôn Ngữ',
    anyLanguage: 'Bất Kỳ Ngôn Ngữ',
    sessionFormat: 'Hình Thức Buổi Học',
    videoCall: 'Gọi Video',
    phoneCall: 'Gọi Điện Thoại',
    inPerson: 'Trực Tiếp',
    groupSession: 'Buổi Học Nhóm',
    skills: 'Kỹ Năng & Chuyên Môn'
  },

  // Coach Profile
  coachProfile: {
    backToCoaches: 'Quay Lại Huấn Luyện Viên',
    verified: 'Đã Xác Minh',
    topRated: 'Đánh Giá Cao',
    reviews: 'đánh giá',
    students: 'học viên',
    respondsIn: 'Phản hồi trong',
    about: 'Về',
    skillsExpertise: 'Kỹ Năng & Chuyên Môn',
    openCourses: 'Khóa Học Đang Mở',
    perHour: 'mỗi giờ',
    watchIntro: 'Xem Video Giới Thiệu',
    bookSession: 'Đặt Buổi Học',
    sendMessage: 'Gửi Tin Nhắn',
    nextAvailable: 'Có Sẵn Tiếp Theo',
    courseDetails: {
      startDate: 'Ngày Bắt Đầu',
      duration: 'Thời Lượng',
      price: 'Giá',
      enrolled: 'Đã Đăng Ký',
      spotsLeft: 'chỗ còn lại',
      almostFull: 'Sắp đầy',
      courseFull: 'Khóa học đã đầy',
      enrollNow: 'Đăng Ký Ngay',
      weeks: 'tuần',
      beginner: 'Cơ Bản',
      intermediate: 'Trung Cấp',
      advanced: 'Nâng Cao'
    }
  },

  // Login
  login: {
    title: 'Chào Mừng Trở Lại',
    subtitle: 'Đăng nhập để tiếp tục hành trình học tập',
    signIn: 'Đăng Nhập',
    signInAs: 'Tôi muốn đăng nhập với tư cách:',
    trainee: 'Học Viên',
    traineeSubtitle: 'Học & Phát Triển',
    coach: 'Huấn Luyện Viên',
    coachSubtitle: 'Dạy & Cố Vấn',
    email: 'Email',
    emailPlaceholder: 'Nhập email của bạn',
    password: 'Mật Khẩu',
    passwordPlaceholder: 'Nhập mật khẩu của bạn',
    forgotPassword: 'Quên mật khẩu?',
    noAccount: 'Chưa có tài khoản?',
    signUpHere: 'Đăng ký tại đây',
    demoMode: 'Chế Độ Demo',
    demoDescription: 'Hệ thống xác thực đầy đủ sẽ sớm ra mắt. Hiện tại, bạn có thể khám phá nền tảng mà không cần đăng nhập.'
  },

  // Dashboard
  dashboard: {
    title: 'Bảng Điều Khiển Học Tập',
    subtitle: 'Theo dõi tiến độ và quản lý các buổi huấn luyện',
    comingSoon: 'Bảng Điều Khiển Sắp Ra Mắt',
    description: 'Bảng điều khiển cá nhân hóa với theo dõi tiến độ, quản lý buổi học và gợi ý AI đang được phát triển.',
    sessionCalendar: 'Lịch Buổi Học',
    upcomingSessions: 'Buổi học sắp tới',
    progressTracking: 'Theo Dõi Tiến Độ',
    goalCompletion: 'Hoàn thành mục tiêu',
    reviewsRatings: 'Đánh Giá & Xếp Hạng',
    coachFeedback: 'Phản hồi huấn luyện viên',
    exploreCoaches: 'Khám Phá Huấn Luyện Viên'
  },

  // Recommendations
  recommendations: {
    badge: 'Được Hỗ Trợ Bởi AI',
    title: 'Gợi Ý Cá Nhân Hóa',
    description: 'Nhận gợi ý được hỗ trợ bởi AI cho kỹ năng, khóa học và huấn luyện viên dựa trên mục tiêu và phong cách học tập của bạn',
    aiRecommendations: 'Gợi Ý AI',
    aiDescription: 'Hệ thống AI tiên tiến của chúng tôi sẽ phân tích mục tiêu, sở thích và mô hình học tập của bạn để cung cấp gợi ý cá nhân hóa.',
    smartGoalSetting: {
      title: 'Đặt Mục Tiêu Thông Minh',
      description: 'AI giúp bạn xác định mục tiêu rõ ràng, có thể đạt được dựa trên sở thích và khát vọng nghề nghiệp'
    },
    courseRecommendations: {
      title: 'Gợi Ý Khóa Học',
      description: 'Khám phá các khóa học và kỹ năng phù hợp với con đường sự nghiệp và sở thích học tập'
    },
    coachMatching: {
      title: 'Ghép Đôi Huấn Luyện Viên',
      description: 'Tìm huấn luyện viên có chuyên môn và phong cách giảng dạy phù hợp hoàn hảo với nhu cầu học tập'
    },
    comingFeatures: 'Tính Năng Sắp Ra Mắt:',
    skillGapAnalysis: 'Phân tích khoảng cách kỹ năng',
    careerProgression: 'Con đường thăng tiến sự nghiệp',
    learningStyleAssessment: 'Đánh giá phong cách học tập',
    personalizedPlans: 'Kế hoạch học tập cá nhân hóa',
    browseCoachesInstead: 'Duyệt Huấn Luyện Viên Thay Thế'
  },

  // Common
  common: {
    loading: 'Đang tải...',
    error: 'Lỗi',
    success: 'Thành công',
    cancel: 'Hủy',
    confirm: 'Xác nhận',
    save: 'Lưu',
    edit: 'Chỉnh sửa',
    delete: 'Xóa',
    view: 'Xem',
    more: 'Thêm',
    less: 'Ít hơn',
    showMore: 'Hiển thị thêm',
    showLess: 'Hiển thị ít hơn',
    readMore: 'Đọc thêm',
    readLess: 'Đọc ít hơn'
  }
};

// English translations
export const EN_TRANSLATIONS: Translations = {
  // Navigation
  nav: {
    findCoaches: 'Find Coaches',
    howItWorks: 'How it Works',
    aiRecommendations: 'AI Recommendations',
    login: 'Log In',
    getStarted: 'Get Started',
    dashboard: 'Dashboard',
    profile: 'Profile',
    logout: 'Log Out'
  },
  
  // Hero Section
  hero: {
    badge: '#1 Coaching Platform',
    title: 'Find Your Perfect <span class="text-primary">Coach</span> & Accelerate Growth',
    description: 'Connect with world-class coaches and trainers. Master new skills, achieve your goals, and unlock your potential with personalized 1-on-1 coaching sessions.',
    findCoach: 'Find a Coach',
    becomeCoach: 'Become a Coach',
    expertCoaches: 'Expert Coaches',
    successStories: 'Success Stories',
    averageRating: 'Average Rating',
    featuredCoaches: 'Featured Coaches This Week',
    featuredSubtitle: 'Highly rated professionals ready to help you succeed'
  },

  // Features Section
  features: {
    badge: 'Why CoachConnect',
    title: 'Everything You Need to <span class="text-primary">Succeed</span>',
    description: 'Our platform brings together world-class coaches and ambitious learners with cutting-edge technology.',
    expertCoaches: {
      title: 'Expert Coaches',
      description: 'Access verified professionals with proven track records and real-world experience'
    },
    aiMatching: {
      title: 'AI-Powered Matching',
      description: 'Smart algorithms match you with the perfect coach based on your goals and learning style'
    },
    secure: {
      title: 'Secure & Trusted',
      description: 'End-to-end encryption, verified profiles, and secure payment processing'
    },
    flexible: {
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your schedule with easy rescheduling and time zone support'
    },
    goalTracking: {
      title: 'Goal Tracking',
      description: 'Set objectives, track progress, and celebrate milestones with built-in analytics'
    },
    globalCommunity: {
      title: 'Global Community',
      description: 'Connect with coaches and learners worldwide in 40+ languages and time zones'
    }
  },

  // How it Works
  howItWorks: {
    badge: 'Simple Process',
    title: 'Start Your Journey in <span class="text-primary">3 Steps</span>',
    description: 'Getting started is simple. Find your coach, book a session, and begin transforming your life.',
    step1: {
      title: 'Discover Coaches',
      description: 'Browse our curated selection of expert coaches or use AI recommendations to find your perfect match'
    },
    step2: {
      title: 'Book Your Session',
      description: 'Schedule a free consultation or jump straight into paid sessions with instant booking'
    },
    step3: {
      title: 'Achieve Your Goals',
      description: 'Work with your coach, track progress, and unlock your full potential with personalized guidance'
    },
    startJourney: 'Start Your Journey'
  },

  // Statistics
  stats: {
    title: 'Trusted by Thousands Worldwide',
    description: 'Join a global community of learners and professionals who have transformed their careers and lives',
    coaches: 'Expert Coaches',
    stories: 'Success Stories',
    satisfaction: 'Satisfaction Rate',
    countries: 'Countries'
  },

  // CTA Section
  cta: {
    badge: 'Ready to Start?',
    title: 'Take the Next Step in Your Journey',
    description: 'Whether you\'re looking to advance your career, learn new skills, or achieve personal goals, our expert coaches are here to guide you every step of the way.',
    findCoach: 'Find Your Coach',
    becomeCoach: 'Become a Coach',
    freeConsultation: 'Free consultation available • No commitment required'
  },

  // Footer
  footer: {
    description: 'Connecting ambitious learners with world-class coaches to unlock human potential.',
    forLearners: 'For Learners',
    findCoaches: 'Find Coaches',
    browseCategories: 'Browse Categories',
    howItWorks: 'How it Works',
    successStories: 'Success Stories',
    forCoaches: 'For Coaches',
    joinAsCoach: 'Join as Coach',
    resources: 'Resources',
    coachSuccess: 'Coach Success',
    support: 'Support',
    company: 'Company',
    aboutUs: 'About Us',
    careers: 'Careers',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    copyright: '© 2024 CoachConnect. All rights reserved.'
  },

  // Coach Search
  coachSearch: {
    title: 'Find Your Perfect Coach',
    description: 'Browse our curated selection of expert coaches and find the right mentor for your goals',
    searchPlaceholder: 'Search for coaches, skills, or keywords...',
    coachesFound: 'coaches found',
    noResults: 'No coaches found',
    noResultsDescription: 'Try adjusting your filters or search terms to find more results.',
    clearFilters: 'Clear All Filters',
    loadMore: 'Load More Coaches'
  },

  // Filters
  filters: {
    title: 'Filters',
    clear: 'Clear',
    search: 'Search',
    category: 'Category',
    allCategories: 'All Categories',
    priceRange: 'Price Range',
    perHour: '/hour',
    minimumRating: 'Minimum Rating',
    anyRating: 'Any Rating',
    stars: 'Stars',
    availability: 'Availability',
    anyTime: 'Any Time',
    availableToday: 'Available Today',
    thisWeek: 'This Week',
    nextWeek: 'Next Week',
    flexible: 'Flexible',
    experience: 'Experience Level',
    anyExperience: 'Any Experience',
    years: 'years',
    language: 'Language',
    anyLanguage: 'Any Language',
    sessionFormat: 'Session Format',
    videoCall: 'Video Call',
    phoneCall: 'Phone Call',
    inPerson: 'In Person',
    groupSession: 'Group Session',
    skills: 'Skills & Expertise'
  },

  // Coach Profile
  coachProfile: {
    backToCoaches: 'Back to Coaches',
    verified: 'Verified',
    topRated: 'Top Rated',
    reviews: 'reviews',
    students: 'students',
    respondsIn: 'Responds in',
    about: 'About',
    skillsExpertise: 'Skills & Expertise',
    openCourses: 'Open Courses',
    perHour: 'per hour',
    watchIntro: 'Watch Intro',
    bookSession: 'Book Session',
    sendMessage: 'Send Message',
    nextAvailable: 'Next Available',
    courseDetails: {
      startDate: 'Start Date',
      duration: 'Duration',
      price: 'Price',
      enrolled: 'Enrolled',
      spotsLeft: 'spots left',
      almostFull: 'Almost full',
      courseFull: 'Course full',
      enrollNow: 'Enroll Now',
      weeks: 'weeks',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    }
  },

  // Login
  login: {
    title: 'Welcome Back',
    subtitle: 'Sign in to continue your learning journey',
    signIn: 'Sign In',
    signInAs: 'I want to sign in as:',
    trainee: 'Trainee',
    traineeSubtitle: 'Learn & Grow',
    coach: 'Coach',
    coachSubtitle: 'Teach & Mentor',
    email: 'Email',
    emailPlaceholder: 'Enter your email',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    forgotPassword: 'Forgot password?',
    noAccount: 'Don\'t have an account?',
    signUpHere: 'Sign up here',
    demoMode: 'Demo Mode',
    demoDescription: 'Full authentication system coming soon. For now, you can explore the platform without signing in.'
  },

  // Dashboard
  dashboard: {
    title: 'Your Learning Dashboard',
    subtitle: 'Track your progress and manage your coaching sessions',
    comingSoon: 'Dashboard Coming Soon',
    description: 'Your personalized dashboard with progress tracking, session management, and AI recommendations is under development.',
    sessionCalendar: 'Session Calendar',
    upcomingSessions: 'Upcoming sessions',
    progressTracking: 'Progress Tracking',
    goalCompletion: 'Goal completion',
    reviewsRatings: 'Reviews & Ratings',
    coachFeedback: 'Coach feedback',
    exploreCoaches: 'Explore Coaches'
  },

  // Recommendations
  recommendations: {
    badge: 'AI-Powered',
    title: 'Personalized Recommendations',
    description: 'Get AI-powered recommendations for skills, courses, and coaches based on your goals and learning style',
    aiRecommendations: 'AI Recommendations',
    aiDescription: 'Our advanced AI system will analyze your goals, preferences, and learning patterns to provide personalized recommendations.',
    smartGoalSetting: {
      title: 'Smart Goal Setting',
      description: 'AI helps you define clear, achievable goals based on your interests and career aspirations'
    },
    courseRecommendations: {
      title: 'Course Recommendations',
      description: 'Discover courses and skills that align with your career path and learning preferences'
    },
    coachMatching: {
      title: 'Coach Matching',
      description: 'Find coaches whose expertise and teaching style perfectly match your learning needs'
    },
    comingFeatures: 'Coming Features:',
    skillGapAnalysis: 'Skill gap analysis',
    careerProgression: 'Career progression paths',
    learningStyleAssessment: 'Learning style assessment',
    personalizedPlans: 'Personalized learning plans',
    browseCoachesInstead: 'Browse Coaches Instead'
  },

  // Common
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    more: 'More',
    less: 'Less',
    showMore: 'Show More',
    showLess: 'Show Less',
    readMore: 'Read More',
    readLess: 'Read Less'
  }
};

export const TRANSLATIONS = {
  vi: VI_TRANSLATIONS,
  en: EN_TRANSLATIONS
};

// Language Context
export interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  languages: Language[];
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

// Hook to use translations
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

// Helper function to get nested translation
export const getNestedTranslation = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] ? current[key] : path;
  }, obj);
};
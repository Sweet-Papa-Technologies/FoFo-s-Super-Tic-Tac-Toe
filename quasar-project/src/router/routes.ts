import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Promotional site routes
      { 
        path: '', 
        component: () => import('pages/promotional/LandingPage.vue') 
      },
      { 
        path: 'privacy', 
        component: () => import('pages/promotional/PrivacyPolicy.vue') 
      },
      { 
        path: 'terms', 
        component: () => import('pages/promotional/TermsOfService.vue') 
      },
      
      // Game routes
      { 
        path: 'game', 
        component: () => import('pages/GamePage.vue') 
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
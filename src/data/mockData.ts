import { Industry, Category, Integration } from '../types';

export const industries: Industry[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Solutions for online retail and digital commerce',
    icon: 'ShoppingCartIcon',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Integration solutions for medical facilities',
    icon: 'HeartIcon',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Digital marketing and advertising solutions',
    icon: 'ChartBarIcon',
  },
];

export const categories: Category[] = [
  {
    id: 'payment-gateways',
    name: 'Payment Gateways',
    description: 'Process online payments securely',
    industry: 'ecommerce',
  },
  {
    id: 'appointment-systems',
    name: 'Appointment Systems',
    description: 'Manage patient scheduling',
    industry: 'healthcare',
  },
  {
    id: 'ads-platforms',
    name: 'Ads Platforms',
    description: 'Digital advertising solutions',
    industry: 'marketing',
  },
];

export const integrations: Integration[] = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'ads-platforms',
    industry: 'marketing',
    documentationUrl: 'https://developers.google.com/google-ads/api/docs/start',
    complexity: 'medium',
    requiresDeveloper: true,
    cost: 'paid',
    recommendations: [
      'Works best for companies with a dedicated marketing team',
      'Consider using API libraries for easier integration'
    ],
    warnings: [
      'API rate limits apply',
      'Requires OAuth 2.0 authentication'
    ],
    version: 'API v11',
    summary: 'A comprehensive ad platform for running targeted campaigns'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'payment-gateways',
    industry: 'ecommerce',
    documentationUrl: 'https://stripe.com/docs/api',
    complexity: 'low',
    requiresDeveloper: true,
    cost: 'freemium',
    recommendations: [
      'Use webhook notifications for real-time updates',
      'Implement Strong Customer Authentication (SCA)'
    ],
    warnings: [
      'Test thoroughly in sandbox environment',
      'Keep API keys secure'
    ],
    version: 'Latest',
    summary: 'Popular payment processing platform with extensive features'
  },
];
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  publicRuntimeConfig: {
    supebaseUrl: process.env.SUPABASE_URL,
    supabasePublicKey: process.env.SUPABASE_PUBLIC_KEY,
  },
  privateRuntimeConfig: {},
});

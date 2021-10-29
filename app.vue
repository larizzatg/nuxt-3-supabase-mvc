<script setup lang="ts">
import { createClient } from '@supabase/supabase-js/dist/main/index.js';

const { supebaseUrl, supabasePublicKey } = useRuntimeConfig();
const supabase = createClient(supebaseUrl, supabasePublicKey);

console.log(supabase);
</script>

<template>
  <div>
    <h1>Nuxt 3 Supabase TodoMVC</h1>
  </div>
</template>

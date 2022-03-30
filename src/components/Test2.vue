<script setup lang="ts">
import { useRoute, useRoute } from 'vue-router';

const router = useRouter();
function navigate() {
  router.push('test');
}
const route = useRoute();
</script>

<template>
  <div class="row justify-center">current Route: {{ route.path }}</div>
  <div class="row justify-center">
    <router-link to="/" @click="$q.loading.show()"> test </router-link>
  </div>
</template>

<style scoped></style>

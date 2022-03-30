<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
function sleep(sleepFor: number) {
  return new Promise((resolve) => setTimeout(resolve, sleepFor));
}

const route = useRoute();
const isMainRoute = computed(() => route.params.route === '');
const currentRouteTo = computed(() => (isMainRoute.value ? 'test2' : '/'));
</script>

<template>
  <div class="row justify-center">current Route: {{ route.path }}</div>
  <div
    :style="isMainRoute ? 'height: 2000px' : null"
    class="row justify-center"
  >
    Scroll to see link
  </div>
  <div class="row justify-center">
    <router-link :to="currentRouteTo">
      {{ isMainRoute ? 'test 2' : 'test' }}
    </router-link>
  </div>
</template>

<style scoped></style>

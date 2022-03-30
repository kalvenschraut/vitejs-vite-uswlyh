<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
</script>

<template>
  <q-layout view="lHh LpR lFf">
    <q-header reveal class="bg-primary">
      <q-toolbar> Current Path {{ route.path }} </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style></style>

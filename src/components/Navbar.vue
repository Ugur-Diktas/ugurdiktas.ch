<template>
  <div>
    <q-toolbar class="bg-red text-white shadow-2">
      <q-btn flat label="Startseite" @click="router.push('/')"  />
      
      <q-space />

      <q-tabs v-model="tab" shrink>

        <q-tab name="tab1" label="Startseite" />

        <q-btn-dropdown stretch flat label="Dropdown">
        <q-list>
          <q-item-label header>Folders</q-item-label>
          <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="folder" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item-label header>Files</q-item-label>
          <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="assignment" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Vacation</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-tab name="tab1" label="Fun zone" @click="router.push('/fun')" />

      <q-btn-dropdown stretch flat :label="locale">
        <q-list>
          <q-item clickable v-close-popup tabindex="0" @click="locale = 'DE'">
            <q-item-section>
              <q-item-label>DE</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="1" @click="locale = 'EN'">
            <q-item-section>
              <q-item-label>EN</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="2" @click="locale = 'FR'">
            <q-item-section>
              <q-item-label>FR</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      </q-tabs>
    </q-toolbar>
  </div>
</template>


<script setup lang="ts">

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import router from '../router/index'

const { locale } = useI18n();

let tab = ref('');

</script>

<style scoped>

</style>

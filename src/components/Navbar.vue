<template>
  <div>
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-btn flat label="Ugur Diktas" @click="router.push('/')"  />
      
      <q-space />

      <q-tabs v-model="tab" shrink>

        <q-tab :label="t('navbar.about')" @click="router.push('/about')"/>
        <q-tab :label="t('navbar.vision')" @click="router.push('/vision')"/>

        <q-btn-dropdown stretch flat :label="t('navbar.other')">
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

      <q-btn-dropdown stretch flat :label="t('navbar.funZone')">
        <q-list>
          <q-item clickable v-close-popup tabindex="0" @click="router.push('/cats')">
            <q-item-section>
              <q-item-label>KATZEN!</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-tab :label="t('navbar.contact')" @click="router.push('/contact')"/>

      <q-btn-dropdown stretch flat :label="locale">
        <q-list>
          <q-item v-for="lang in langs" clickable v-close-popup @click="locale = lang">
            <q-item-section>
              <q-item-label>{{ lang }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-tab :label="mode" @click="toggleMode()" />

      </q-tabs>
    </q-toolbar>
  </div>
</template>


<script setup lang="ts">

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import router from '../router/index'

const { locale } = useI18n();
const { t } = useI18n();

let tab = ref('');
let langs = ['DE', 'EN', 'FR'];
let modes = ['light', 'dark', 'auto'];
let mode = ref(modes[0]);

function toggleMode() {
  if (mode.value == modes[0]) {
    mode.value = modes[1];
  } else if (mode.value == modes[1]) {
    mode.value = modes[2];
  } else if (mode.value == modes[2]) {
    mode.value = modes[0];
  }
}

</script>

<style scoped>

</style>

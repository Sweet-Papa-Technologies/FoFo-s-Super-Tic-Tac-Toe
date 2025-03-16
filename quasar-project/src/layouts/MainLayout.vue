<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          FoFo's Super Tic-Tac-Toe
        </q-toolbar-title>

        <q-btn flat to="/game" label="Play Game" class="q-ml-md" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row justify-center q-py-sm">
            <div class="col-12 text-center">
              © {{ new Date().getFullYear() }} FoFo's Super Tic-Tac-Toe - All rights reserved
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: 'Landing Page',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Play Game',
    caption: 'Start playing now',
    icon: 'sports_esports',
    link: '/game'
  },
  {
    title: 'Privacy Policy',
    caption: 'Our privacy practices',
    icon: 'privacy_tip',
    link: '/privacy'
  },
  {
    title: 'Terms of Service',
    caption: 'Legal terms and conditions',
    icon: 'gavel',
    link: '/terms'
  }
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.q-toolbar__title {
  text-align: center;
  font-weight: bold;
}
</style>
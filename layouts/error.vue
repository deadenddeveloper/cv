<template>
  <div class="flex flex-col space-y-8 h-screen items-center justify-center">
    <markup-logo />
    <h1 class="text-skin-accent text-4xl">404</h1>
    <h2 class="text-2xl">{{ $t('page_not_found') }}</h2>
    <nuxt-link
      class="inline-block h-10 px-5 py-1.5 text-lg text-skin-inverted rounded-full bg-skin-accent hover:bg-skin-accent-hover focus:outline-none focus:ring-2" to="/">{{ $t('go_home') }}</nuxt-link>
  </div>
</template>

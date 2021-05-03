<template>
  <header class="sticky top-0 bg-skin-base px-2 z-10">
    <div class="flex py-4 items-center justify-between">
      <div>
        <img class="h-12 lg:h-auto" :src="require(`~/assets/img/logo.png`)" />
      </div>
      <div>
        <lang-switcher />
      </div>
    </div>
  </header>
</template>

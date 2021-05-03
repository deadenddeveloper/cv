<template>
  <header>
    <div class="flex my-2 items-center justify-between px-2">
      <div>
        <img class="h-12 lg:h-auto" :src="require(`~/assets/img/logo.png`)" />
      </div>
      <div>
        <lang-switcher />
      </div>
    </div>
  </header>
</template>

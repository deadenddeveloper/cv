<template>
  <div class="container mx-auto">
    <markup-header />

    <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-10">
      <div class="relative w-full lg:w-1/3">
        <div class="w-full sticky top-10 p-10 text-center space-y-10">
          <img class="inline w-3/4 rounded rounded-full" :src="require(`~/assets/img/me.png`)" />
          <h1 class="text-skin-accent text-4xl">{{ $t('name') }}</h1>
          <h2 class="text-2xl">{{ $t('post') }}</h2>
          <markup-social-links />
          <markup-cv-link />
        </div>
      </div>
      <div class="w-full lg:w-2/3">
        <div class="bg-green-300" style="height: 2000px">RIGHT</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

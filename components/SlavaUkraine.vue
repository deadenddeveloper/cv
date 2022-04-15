<template>
  <div class="bg-blue-500 p-2 rounded w-full text-yellow-300 space-y-4">
    <div>
      {{ $t('ua.disclaimer') }}
    </div>
    <div class="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-end">
      <span>#StandWithUkraine #нетвойне</span>
      <a href="https://supportukrainenow.org/" target="_blank" class="inline-block whitespace-nowrap h-8 px-2 py-1 bg-yellow-300 text-blue-500 rounded hover:bg-yellow-400 focus:outline-none">{{ $t('ua.support') }}</a>
    </div>
  </div>
</template>

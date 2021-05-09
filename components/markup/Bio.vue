<template>
  <div class="space-y-10">
    <section-header :title="$t('sections.bio')" icon="fingerprint" />
    <div id="bioAbout" class="text-justify space-y-2" v-html="$t('bio.about')"></div>
    <div class="text-lg text-center grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <fa-icon icon="signature" class="text-skin-accent" /> {{ $t('bio.full_name') }}:<br />
        <strong>{{ $t('full_name') }}</strong>
      </div>
      <div>
        <fa-icon icon="home" class="text-skin-accent" /> {{ $t('bio.location') }}:<br />
        <strong>{{ $t('address') }}</strong>
      </div>
      <div>
        <fa-icon icon="calendar-alt" class="text-skin-accent" /> {{ $t('bio.date_of_birth') }}:<br />
        <strong>{{ $t('date_of_birth') }}</strong>
      </div>
      <div>
        <fa-icon icon="globe-europe" class="text-skin-accent" /> {{ $t('bio.place_of_birth') }}:<br />
        <strong>{{ $t('place_of_birth') }}</strong>
      </div>
      <div>
        <fa-icon icon="at" class="text-skin-accent" /> {{ $t('bio.email') }}:<br />
        <strong><a :href="`mailto:${$config.email}`">{{ $config.email }}</a></strong>
      </div>
      <div>
        <fa-icon icon="phone" class="text-skin-accent" /> {{ $t('bio.phone') }}:<br />
        <strong><a :href="`tel:${$config.phone}`">{{ $config.phone }}</a></strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
#bioAbout >>> p {text-indent: 20px !important;}
</style>

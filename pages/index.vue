<template>
	<div class="container mx-auto">
		<markup-header />

		<div class="flex flex-col lg:flex-row space-x-0 lg:space-x-10">
			<aside class="relative w-full lg:w-1/3">
				<div class="w-full sticky top-24 p-12 pt-2 lg:p-4 text-center space-y-10">
          <div class="inline-block text-center w-3/4">
            <blurhash-img
              :width="180"
              :height="180"
              :blurhash="'LJGu,nRj~qRj?bxuRjM{D%j[RjRj'"
              :src="require(`~/assets/img/me.webp`)"
              class="overflow-hidden rounded rounded-full"
              alt="Roman Meyer"
            />
          </div>
					<h1 class="text-skin-accent text-4xl">{{ $t('name') }}</h1>
					<h2 class="text-2xl">{{ $t('post') }}</h2>
					<markup-social-links />
					<markup-cv-link />
				</div>
			</aside>
			<main class="w-full lg:w-2/3 space-y-32 mt-3 px-4 lg:px-0">
				<slava-ukraine />
				<markup-bio id="bio" />
				<markup-skills id="skills" />
				<markup-languages id="languages" />
				<markup-work id="work" />
				<markup-projects id="projects" />
				<markup-education id="education" />
				<markup-contacts id="contacts" />
				<div class="text-center pb-20">
					<div class="w-16 h-1 rounded-full bg-skin-accent inline-flex"></div>
					<div class="text-lg" v-html="$t('copyright')"></div>
				</div>
			</main>
			<div
				class="bg-skin-base z-20 border-t border-skin-base w-full lg:w-12 h-auto lg:h-screen mt-0 lg:-mt-24 pt-0 lg:pt-24 pb-0 lg:pb-2 flex flex-row lg:flex-col justify-between fixed bottom-0 left-0 lg:sticky lg:top-0"
			>
				<markup-nav v-on:goto="goto($event)" />
				<back-to-top />
			</div>
		</div>

		<markup-modal />
	</div>
</template>

<script>
export default {
	methods: {
		goto(item) {
			let element = document.getElementById(item);
			let headerOffset = 100;
			let elementPosition = element.getBoundingClientRect().top;
			let offsetPosition = window.pageYOffset + elementPosition - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}
};
</script>

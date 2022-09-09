<template>
	<header class="sticky top-0 bg-skin-base px-2 z-30">
		<div class="flex py-4 items-center justify-between">
			<div>
				<img
					class="h-12 lg:h-auto"
					width="173"
					height="47"
          loading="lazy"
          alt="Logo"
					:src="require(`~/assets/img/logo.png`)"
				/>
			</div>
			<div>
				<lang-switcher />
			</div>
		</div>
	</header>
</template>

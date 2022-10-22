<template>
  <div class="space-y-10">
    <section-header :title="$t('sections.contacts')" icon="address-card" />

    <div class="max-w-md mx-auto space-y-12">
      <validation-observer v-slot="{ invalid }" ref="contactsForm">
        <form class="p-4 grid grid-cols-1 gap-6" @submit.prevent="submitForm" netlify>

          <label class="block">
            <validation-provider :name="$t(`contacts.form.name`)" rules="alpha_spaces" v-slot="{ errors }">
              <span class="label">{{ $t('contacts.form.name') }}</span>
              <input type="text" v-model="name" class="input" :disabled="isLoading">
              <span class="error">{{ errors[0] }}</span>
            </validation-provider>
          </label>

          <label class="block">
            <validation-provider :name="$t(`contacts.form.email`)" rules="email" v-slot="{ errors }">
              <span class="label">{{ $t('contacts.form.email') }}</span>
              <input type="email" v-model="email" class="input" :disabled="isLoading">
              <span class="error">{{ errors[0] }}</span>
            </validation-provider>
          </label>

          <label class="block">
            <validation-provider :name="$t(`contacts.form.comment`)" rules="required|min:10" v-slot="{ errors }">
              <span class="label">{{ $t('contacts.form.comment') }} <span class="text-skin-danger">*</span></span>
              <textarea v-model="comment" class="input" rows="3" :disabled="isLoading"></textarea>
              <span class="error">{{ errors[0] }}</span>
            </validation-provider>
          </label>

          <p><span class="text-skin-danger">*</span> - {{ $t('contacts.form.required') }}</p>

          <alert-message type="success" v-show="successMessage.length">{{ successMessage }}</alert-message>
          <alert-message type="danger" v-show="errorMessage.length">{{ errorMessage }}</alert-message>

          <div class="text-center">
            <button
              class="inline-block h-10 px-5 py-1.5 text-lg text-skin-inverted rounded-full bg-skin-accent hover:bg-skin-accent-hover focus:outline-none focus:ring-2"
              @click="submitForm"
              :class="{'bg-skin-muted hover:bg-skin-muted cursor-not-allowed': invalid || isLoading}"
              :disabled="invalid || isLoading"
            >
              <template v-if="isLoading">
                <fa-icon icon="spinner" class="animate-spin" />
                <span>{{ $t('contacts.form.sending') }}</span>
              </template>
              <template v-else>
                <fa-icon icon="paper-plane" />
                <span>{{ $t('contacts.form.send') }}</span>
              </template>
            </button>
          </div>

        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { required, alpha_spaces, min, email } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend("required", required);
extend("alpha_spaces", alpha_spaces);
extend("min", min);
extend("email", email);

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    name: '',
    email: '',
    comment: '',
    isLoading: false,
    successMessage: '',
    errorMessage: '',
    messageTimeout: null,
  }),
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    resetForm() {
      this.name = '';
      this.email = '';
      this.comment = '';
      this.$nextTick(() => {
        this.$refs.contactsForm.reset();
      });
    },

    submitForm() {
      this.isLoading = true;
      this.successMessage = '';
      this.errorMessage = '';
      clearTimeout(this.messageTimeout);

      this.$axios
        .post('/', this.encode({
          'form-name': 'contacts',
          name: this.name,
          email: this.email,
          comment: this.comment,
        }), {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then(response => {
          this.successMessage = this.$t('contacts.form.success');
          this.messageTimeout = setTimeout(() => this.successMessage = '', 3000);
          this.resetForm();
        })
        .catch(error => {
          this.errorMessage = this.$t('contacts.form.error');
          this.messageTimeout = setTimeout(() => this.errorMessage = '', 3000);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
}
</script>

<style scoped lang="scss">
.error {
  @apply text-skin-danger text-xs;
}
.label {
  @apply text-skin-accent;
}
.input {
  @apply p-1 block w-full outline-none bg-skin-muted bg-opacity-80 hover:bg-opacity-100 focus:bg-white focus:ring-2 text-black;
}
</style>

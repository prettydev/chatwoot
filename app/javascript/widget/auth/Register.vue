<template>
  <div class="flex flex-col gap-12">
    <div v-show="!isLoading" class="flex flex-col gap-12">
      <div>
        <img
          :src="globalConfig.logo"
          :alt="globalConfig.installationName"
        />
        <h2 class="text-2xl">
          {{ $t('REGISTER.TRY_WOOT') }}
        </h2>
      </div>
      <signup-form />
      <div>
        <span>{{ $t('REGISTER.HAVE_AN_ACCOUNT') }}</span>
        <router-link to="/" class="underline">
          {{ $t('LOGIN.TITLE') }}
        </router-link>
      </div>
    </div>
    <div v-show="isLoading">
      <spinner size="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import globalConfigMixin from 'shared/mixins/globalConfigMixin';
import Spinner from 'shared/components/Spinner.vue';

import SignupForm from './components/Form.vue';

export default {
  components: {
    SignupForm,
    Spinner
  },
  mixins: [globalConfigMixin],
  data() {
    return { showTestimonials: false, isLoading: false };
  },
  computed: {
    ...mapGetters({ globalConfig: 'globalConfig/get' }),
    isAChatwootInstance() {
      return this.globalConfig.installationName === 'Chatwoot';
    },
  },
  beforeMount() {
    this.isLoading = this.isAChatwootInstance;
  },
  methods: {
    resizeContainers(hasTestimonials) {
      this.showTestimonials = hasTestimonials;
      this.isLoading = false;
    },
  },
};
</script>
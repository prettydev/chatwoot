<template>
  <woot-button
    size="expanded"
    color-scheme="primary"
    class-names="submit--button"
    :is-disabled="isDisabled"
    :is-loading="isLoading"
    @click="onClick"
  >
    {{ label }}
    <fluent-icon :icon="icon" size="18" />
  </woot-button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
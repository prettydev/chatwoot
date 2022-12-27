<template>
  <label>
    <div class="label-wrap">
      <fluent-icon v-if="iconName" :icon="iconName" size="16" />
      <span v-if="label">{{ label }}</span>
    </div>
    <div class="flex flex-col">
      <input
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :readonly="readonly"
        @input="onChange"
        @blur="onBlur"
      />
      <p v-if="helpText" />
      <span v-if="error">
        {{ error }}
      </span>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
    helpText: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    },
    onBlur(e) {
      this.$emit('blur', e.target.value);
    },
  },
};
</script>
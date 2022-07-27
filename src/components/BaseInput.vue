<template>
  <label :for="uuid">{{ label }}</label>
  <input
    :placeholder="label"
    :class="error ? 'inputError field' : field"
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from "@/features/UniqueID";
import BaseErrorMessage from "@/components/BaseErrorMessage.vue";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
  components: {
    BaseErrorMessage,
  },
  data() {
    return {
      uuid: null,
    };
  },
  created() {
    const uuid = UniqueID().getID();
    this.uuid = uuid;
  },
};
</script>
<style scoped>
.errorMessage {
  color: red;
}
.inputError {
  border-color: red;
  outline-color: orange;
}
</style>

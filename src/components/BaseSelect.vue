<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    :class="error ? 'inputError field' : field"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :id="uuid"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
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
    options: {
      type: Array,
      required: true,
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

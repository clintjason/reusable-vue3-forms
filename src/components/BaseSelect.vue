<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
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
</template>
<script>
import UniqueID from "@/features/UniqueID";

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

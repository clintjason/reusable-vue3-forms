<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        label="Select a Category"
        v-bind:options="categories"
        v-model="event.category"
      />

      <h3>Name & describe your event</h3>

      <BaseInput
        label="Title"
        type="text"
        v-model="event.title"
        error="This input has an error"
      />
      <BaseInput label="Description" type="text" v-model="event.description" />

      <h3>Where is your event?</h3>
      <BaseInput label="Location" type="text" v-model="event.location" />

      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadioGroup
          name="pets"
          v-model="event.pets"
          :options="petOptions"
        />
      </div>

      <h3>Extras</h3>
      <div>
        <BaseCheckbox label="Catering" v-model="event.extras.catering" />
      </div>

      <div>
        <BaseCheckbox label="Live music" v-model="event.extras.music" />
      </div>

      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseRadioGroup from "@/components/BaseRadioGroup.vue";
import axios from "axios";

export default {
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        { label: "Yes", value: 1 },
        { label: "No", value: 0 },
      ],
    };
  },
  methods: {
    sendForm() {
      axios
        .post(
          "https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events",
          this.event
        )
        .then(function (response) {
          console.log("Response", response);
        })
        .catch(function (err) {
          console.log("Error", err);
        });
    },
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },
};
</script>

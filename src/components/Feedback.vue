<template>
  <v-form @submit.prevent ref="form">
    <v-row class="mx-0 my-3">
      <v-col cols="12">
        <v-card class="cards pa-4" flat>
          <v-card-text class="cards-text pa-0">Name</v-card-text>
          <v-text-field
            class="pa-0 cards-input"
            v-model="name"
            hide-details
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 my-3">
      <v-col cols="12">
        <v-card class="cards pa-4" flat>
          <v-card-text class="cards-text pa-0">Phone number</v-card-text>
          <v-text-field
            class="pa-0 cards-input"
            v-model="phone"
            hide-details
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 my-3">
      <v-col cols="12">
        <v-card class="cards pa-4" flat>
          <v-card-text class="cards-text pa-0">Email</v-card-text>
          <v-text-field
            type="email"
            class="pa-0 cards-input"
            v-model="email"
            hide-details
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 my-3">
      <v-col cols="12">
        <v-card class="cards pa-4" flat>
          <v-card-text class="cards-text pa-0">Message</v-card-text>
          <v-textarea
            class="pa-0 cards-input"
            v-model="message"
            hide-details
          ></v-textarea>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-0 my-3">
      <v-col cols="12" sm="6" lg="12">
        <v-btn
          :class="
            $vuetify.breakpoint.lgAndUp
              ? 'cards-btn-desktop'
              : 'cards-btn-mobile'
          "
          :disabled="!name || !phone || !email || !message"
          class="cards-btn"
          block
          elevation="0"
          x-large
          @click="reset"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "FeedbackComponent",
  data: () => ({
    valid: true,
    name: "Name",
    phone: "+000 (00) 012-34-56",
    email: "username@example.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.cards {
  border-radius: 16px;
}
.cards-btn-desktop.v-btn {
  border-radius: 16px;
  color: #0080f6;
  background-color: #ffffff;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  text-transform: none;
}
.cards-btn-desktop:disabled {
  color: #909090;
  background-color: #ffffff;
}
.cards-btn-desktop:hover {
  color: #0063be;
  background-color: #fdfdfd;
}
.cards-btn-desktop:focus-visible {
  color: #0063be;
  background-color: #ffffff;
  border: 2px solid #0080f6;
}
.cards-btn-desktop:active {
  color: #0080f6;
  background-color: #ffffff;
  transform: scale(0.95);
}
.cards-btn-mobile.v-btn {
  border-radius: 16px;
  color: #0080f6;
  background-color: #f8f8f8;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  text-transform: none;
}
.cards-btn-mobile:disabled {
  color: #909090;
  background-color: #f8f8f8;
}
.cards-btn-mobile:hover {
  color: #0063be;
  background-color: #eee;
}
.cards-btn-mobile:focus-visible {
  color: #0063be;
  background-color: #f8f8f8;
  border: 2px solid #0080f6;
}
.cards-btn-mobile:active {
  color: #0080f6;
  background-color: #f8f8f8;
  transform: scale(0.95);
}
</style>
<style>
.cards-input input {
  color: #333 !important;
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
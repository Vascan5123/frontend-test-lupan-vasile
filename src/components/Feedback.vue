<template>
  <form @submit.prevent class="form-feedback">
    <div class="cards">
      <div class="cards-text">Name</div>
      <input type="text" class="cards-input" v-model="name" />
    </div>
    <div class="cards">
      <div class="cards-text">Phone number</div>
      <input type="text" class="cards-input" v-model="phone" />
    </div>
    <div class="cards">
      <div class="cards-text">Email</div>
      <input type="text" class="cards-input" v-model="email" />
    </div>
    <div class="cards">
      <div class="cards-text">Message</div>
      <textarea class="cards-input" v-model="message" rows="5"></textarea>
    </div>
    <button
      :disabled="!name || !phone || !email || !message"
      class="cards-btn"
      @click="reset"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "FeedbackComponent",
  data: () => ({
    name: "Name",
    phone: "+000 (00) 012-34-56",
    email: "username@example.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }),
  methods: {
    reset() {
      this.name = '';
      this.phone = '';
      this.email = '';
      this.message = '';
    }
  },
};
</script>

<style scoped>
.form-feedback {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.cards {
  border-radius: 16px;
  padding: 16px;
  background-color: #ffffff;
}
.cards-text {
  color: #909090;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
}
.cards-btn {
  text-align: center;
  border-radius: 16px;
  color: #0080f6;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  text-transform: none;
  padding: 16px 32px;
  border-style: none;
}
.cards-input {
  background-color: transparent;
  border-style: none;
  width: 100%;
  color: #333;
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-bottom: 1px solid #ededed;
  margin-top: 8px;
}
.cards-input:focus {
  outline: none;
  border-bottom: 1px solid #0063be !important;
}
@media (min-width: 1264px) {
  .cards-btn {
    background-color: #ffffff;
  }
  .cards-btn:disabled {
    color: #909090 !important;
    background-color: #ffffff !important;
    transform: none !important;
  }
  .cards-btn:hover {
    color: #0063be;
    background-color: #fdfdfd;
  }
  .cards-btn:focus-visible {
    color: #0063be;
    background-color: #ffffff;
    border: 2px solid #0080f6;
  }
  .cards-btn:active {
    color: #0080f6;
    background-color: #ffffff;
    transform: scale(0.95);
  }
}
@media (max-width: 1264px) {
  .cards-btn {
    background-color: #f8f8f8;
  }
  .cards-btn:disabled {
    color: #909090 !important;
    background-color: #f8f8f8 !important;
    transform: none !important;
  }
  .cards-btn:hover {
    color: #0063be;
    background-color: #eee;
  }
  .cards-btn:focus-visible {
    color: #0063be;
    background-color: #f8f8f8;
    border: 2px solid #0080f6;
  }
  .cards-btn:active {
    color: #0080f6;
    background-color: #f8f8f8;
    transform: scale(0.95);
  }
}
</style>
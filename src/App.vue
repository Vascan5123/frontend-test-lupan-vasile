<template>
  <v-app id="app">
    <v-main>
      <v-container fluid class="fill-height" align-content-start>
        <v-row justify="center" class="mb-0 row_tabs">
          <v-col
            cols="6"
            lg="9"
            class="pa-0"
            :class="page == 1 && !$vuetify.breakpoint.lgAndUp ? 'white' : ''"
          >
            <div
              v-show="!$vuetify.breakpoint.lgAndUp"
              class="tab py-3"
              :class="page == 0 ? 'active-tab-1' : 'other-tab-1'"
              @click="page = 0"
            >
              Products
            </div>
            <div v-show="$vuetify.breakpoint.lgAndUp" class="tab_lg py-3 white">
              Products
            </div>
          </v-col>
          <v-col
            cols="6"
            lg="3"
            class="pa-0"
            :class="page == 0 && !$vuetify.breakpoint.lgAndUp ? 'white' : ''"
          >
            <div
              v-show="!$vuetify.breakpoint.lgAndUp"
              class="tab py-3"
              :class="page == 1 ? 'active-tab-2' : 'other-tab-2'"
              @click="page = 1"
            >
              Feedback
            </div>
            <div v-show="$vuetify.breakpoint.lgAndUp" class="tab_lg py-3">
              Feedback
            </div>
          </v-col>
        </v-row>
        <hr class="separation" />
        <v-row justify="center" class="my-0">
          <v-col cols="12" lg="9" v-show="page == 0 || $vuetify.breakpoint.lgAndUp">
            <Products />
          </v-col>
          <v-col cols="12" lg="3" :class="$vuetify.breakpoint.lgAndUp ? 'feedback' : ''" v-show="page == 1 || $vuetify.breakpoint.lgAndUp">
            <Feedback />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Products from "./components/Products";
import Feedback from "./components/Feedback";

export default {
  name: "App",
  components: {
    Products,
    Feedback,
  },
  data: () => ({
    page: 0,
  }),
};
</script>

<style scoped>
#app {
  background: #fff;
}
.row_tabs {
  background: #f8f8f8;
}
.tab {
  width: 100%;
}
.active-tab-1 {
  background: #fff;
  color: #000;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  border-top-right-radius: 16px;
}
.other-tab-1 {
  background: #f8f8f8;
  color: #000;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.4px;
  border-bottom-right-radius: 16px;
}
.active-tab-2 {
  background: #fff;
  color: #000;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  border-top-left-radius: 16px;
}
.other-tab-2 {
  background: #f8f8f8;
  color: #000;
  text-align: center;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.4px;
  border-bottom-left-radius: 16px;
}
.other-tab-1:hover,
.other-tab-1:focus-visible,
.other-tab-2:hover,
.other-tab-2:focus-visible {
  color: #0063be;
  text-decoration: underline dotted;
}
.tab_lg {
  color: #000;
  text-align: center;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
}
.separation {
  border: solid 1px #EDEDED;
  width: 100%;
}
.feedback {
  background: #F8F8F8;
}
</style>

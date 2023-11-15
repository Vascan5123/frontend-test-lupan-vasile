<template>
  <div id="app">
    <div class="main-container">
      <div class="row-tabs">
        <div class="col-tab-products" :class="page == 1 ? 'col-tab-white' : ''">
          <div
            class="tab"
            :class="page == 0 ? 'active-tab-1' : 'other-tab-1'"
            @click="page = 0"
          >
            Products
          </div>
          <div class="tab_lg white">Products</div>
        </div>
        <div class="col-tab-feedback" :class="page == 0 ? 'col-tab-white' : ''">
          <div
            class="tab"
            :class="page == 1 ? 'active-tab-2' : 'other-tab-2'"
            @click="page = 1"
          >
            Feedback
          </div>
          <div class="tab_lg">Feedback</div>
        </div>
      </div>
      <hr class="separation" />
      <div class="row-content">
        <div class="col-content-products" v-show="page == 0">
          <Products />
        </div>
        <div class="col-content-feedback" v-show="page == 1">
          <Feedback />
        </div>
      </div>
    </div>
  </div>
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

.main-container {
  width: 100%;
}
.row-tabs {
  justify-content: center;
  display: flex;
  background: #f8f8f8;
}
.col-tab-products,
.col-tab-feedback {
  width: 50%;
}
.row-content {
  justify-content: center;
  display: flex;
}
.col-content-products,
.col-content-feedback {
  padding: 12px;
  width: 100%;
}
.tab {
  width: 100%;
  padding: 12px;
}
.tab_lg {
  padding: 12px;
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
  border: solid 1px #ededed;
  width: 100%;
  margin: 0px;
}

@media (min-width: 1264px) {
  .col-tab-products {
    width: 75%;
  }
  .col-tab-feedback {
    width: 25%;
  }
  .col-content-products {
    width: 75%;
    display: block !important;
  }
  .col-content-feedback {
    width: 25%;
    background: #f8f8f8;
    display: block !important;
  }
  .tab {
    display: none;
  }
}
@media (max-width: 1264px) {
  .tab_lg {
    display: none;
  }
  .col-tab-white {
    color: white;
  }
}
</style>
<style>
html {
    box-sizing: border-box;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    word-break: normal;
}
body {
  margin: 0px;
}
*, :after, :before {
    box-sizing: inherit;
}
</style>
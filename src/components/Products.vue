<template>
  <div class="row-products">
    <div class="col-product" v-for="card in cards" :key="card.id">
      <div class="product" :class="card.class">
        <img :src="card.image" width="85%" />
        <div class="product-title" :style="'color: ' + card.textColor">
          {{ card.title }}
        </div>
        <div :style="'color: ' + card.textColor" class="product-subtitle">
          {{ card.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helicopterOrange from "@/assets/svg/img-helicopter-orange.svg";
import helicopterGreen from "@/assets/svg/img-helicopter-green.svg";
import helicopterBlue from "@/assets/svg/img-helicopter-blue.svg";
import airplaneBlue from "@/assets/svg/img-airplane-blue.svg";
import airplaneGreen from "@/assets/svg/img-airplane-green.svg";
import rocketGreen from "@/assets/svg/img-rocket-green.svg";
import rocketBlue from "@/assets/svg/img-rocket-blue.svg";
import rocketOrange from "@/assets/svg/img-rocket-orange.svg";
import ufo from "@/assets/svg/img-ufo.svg";

export default {
  name: "Products-Component",
  data: () => ({
    cards: [
      {
        id: "0",
        title: "myProduct",
        subtitle: "Sunny Orange",
        image: helicopterOrange,
        textColor: "#E76101",
        class: "orangeCard",
      },
      {
        id: "1",
        title: "myProduct Plus",
        subtitle: "Deep Blue",
        image: airplaneBlue,
        textColor: "#0465AC",
        class: "blueCard",
      },
      {
        id: "2",
        title: "myProduct Pro",
        subtitle: "Floral Green",
        image: rocketGreen,
        textColor: "#018D31",
        class: "greenCard",
      },
      {
        id: "3",
        title: "myProduct Ultra",
        subtitle: "Interstellar Grey",
        image: ufo,
        textColor: "#FFF",
        class: "blackCard",
      },
      {
        id: "4",
        title: "myProduct",
        subtitle: "Floral Green",
        image: helicopterGreen,
        textColor: "#018D31",
        class: "greenCard",
      },
      {
        id: "5",
        title: "myProduct Pro",
        subtitle: "Deep Blue",
        image: rocketBlue,
        textColor: "#0465AC",
        class: "blueCard",
      },
      {
        id: "6",
        title: "myProduct",
        subtitle: "Deep Blue",
        image: helicopterBlue,
        textColor: "#0465AC",
        class: "blueCard",
      },
      {
        id: "7",
        title: "myProduct Pro",
        subtitle: "Sunny Orange",
        image: rocketOrange,
        textColor: "#E76101",
        class: "orangeCard",
      },
      {
        id: "8",
        title: "myProduct Plus",
        subtitle: "Floral Green",
        image: airplaneGreen,
        textColor: "#018D31",
        class: "greenCard",
      },
    ],
  }),
};
</script>

<style scoped>
.row-products {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 12px;
}
.col-product {
  width: 100%;
  padding: 12px;
}
.product {
  border-radius: 16px;
  padding: 24px;
}
.product-title {
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-top: 16px;
}
.product-subtitle {
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.orangeCard {
  background-color: #fff6ce;
}
.orangeCard:hover {
  background-color: #fff0b9;
}
.orangeCard:focus-visible {
  border: 2px solid #e76101;
}
.blueCard {
  background-color: #a2d7e7;
}
.blueCard:hover {
  background-color: #92d8ff;
}
.blueCard:focus-visible {
  border: 2px solid #0465ac;
}
.greenCard {
  background-color: #adedb3;
}
.greenCard:hover {
  background-color: #8ffb99;
}
.greenCard:focus-visible {
  border: 2px solid #018d31;
}
.blackCard {
  background-color: #46454a;
}
.blackCard:hover {
  background-color: #3f3664;
}
.blackCard:focus-visible {
  border: 2px solid #37006d;
}

@media (min-width: 600px) {
  .col-product {
    width: 50%;
  }
}
@media (min-width: 1264px) {
  .col-product {
    width: 33.33%;
  }
}
</style>
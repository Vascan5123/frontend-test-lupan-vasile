<template>
  <v-row class="text-center mt-8 mx-0">
    <v-col cols="12" sm="6" lg="4" v-for="card in cards" :key="card.id">
      <v-card flat class="pa-6 cards" :class="card.class">
        <v-img :src="card.image" width="85%" class="mx-auto"> </v-img>
        <v-card-title
          class="justify-center my-4 cards-title"
          :style="'color: ' + card.textColor"
        >
          {{ card.title }}
        </v-card-title>
        <v-card-subtitle
          :style="'color: ' + card.textColor"
          class="cards-subtitle"
        >
          {{ card.subtitle }}</v-card-subtitle
        >
      </v-card>
    </v-col>
  </v-row>
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
.cards {
  border-radius: 16px;
}
.cards-title {
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}
.cards-subtitle {
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
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
</style>
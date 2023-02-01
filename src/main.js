import { createApp } from "vue";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
  faCalendarDays,
  faUserTie,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faMagnifyingGlass,
  faUserPlus,
  faCalendarDays,
  faUserTie,
  faMoneyBillWave
);

import App from "./App.vue";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

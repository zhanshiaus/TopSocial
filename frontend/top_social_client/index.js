import "./index.css";

import { profile, highline, cards } from "./src/data/db.json";

import {
  navbar_container_logo,
  navbar_container_create_img,
} from "./src/js/common.js";

/* NAV */
navbar_container_logo.textContent = "TopSocial";
navbar_container_create_img.src = profile.img_src;
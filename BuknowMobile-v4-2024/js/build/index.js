import MobileSlider from "../plugins/mobile-slider";
import Menu from "./menu";

const index = {
    init() {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        new MobileSlider(sliderWrapper);

        const menu = new Menu();
        menu.init();
    }
}

document.addEventListener('DOMContentLoaded', () => index.init());

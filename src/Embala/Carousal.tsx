import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./Embala";
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Carousal = () => {
	return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default Carousal;

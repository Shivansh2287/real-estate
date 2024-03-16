import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "./assets/city1.jpg";
import city2 from "./assets/city2.jpg";
import city3 from "./assets/city3.jpg";
import city4 from "./assets/city4.jpg";
import city5 from "./assets/city5.jpg";

const ImageSlider = () => {
	const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

	const handleNext = () => {
		setPositionIndexes((prevIndexes) => {
			const updatedIndexes = prevIndexes.map(
				(prevIndex) => (prevIndex + 1) % 5
			);
			return updatedIndexes;
		});
	};

	const handleBack = () => {
		setPositionIndexes((prevIndexes) => {
			const updatedIndexes = prevIndexes.map(
				(prevIndex) => (prevIndex + 4) % 5
			);

			return updatedIndexes;
		});
	};

	const images = [city1, city2, city3, city4, city5];

	const positions = ["center", "left1", "left", "right", "right1"];

	const imageVariants = {
		center: { x: "0%", scale: 1, zIndex: 5 },
		left1: { x: "-50%", scale: 0.7, zIndex: 3 },
		left: { x: "-90%", scale: 0.5, zIndex: 2 },
		right: { x: "90%", scale: 0.5, zIndex: 1 },
		right1: { x: "50%", scale: 0.7, zIndex: 3 },
	};
	return (
		<div className="flex items-center flex-col justify-center  h-screen">
			{images.map((image, index) => (
				<motion.img
					key={index}
					src={image}
					alt={image}
					className="rounded-[12px]"
					initial="center"
					animate={positions[positionIndexes[index]]}
					variants={imageVariants}
					transition={{ duration: 0.5 }}
					style={{ width: "40%", position: "absolute" }}
				/>
			))}
			<div className="flex flex-row gap-3 justify-center mt-[400px]">
				<button
					className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
					onClick={handleBack}
				>
					Back
				</button>
				<button
					className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
					onClick={handleNext}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ImageSlider;

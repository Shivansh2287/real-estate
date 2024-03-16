import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Card from "./Card";

export default function ThirdCrousal() {
	const images = [
		"/src/assets/city1.png",
		"/src/assets/city2.png",
		"/src/assets/city3.png",
	];
	const FAST_DURATION = 25;
	const SLOW_DURATION = 75;

	const [duration, setDuration] = useState(FAST_DURATION);
	const [ref, { width }] = useMeasure();

	const xTranslation = useMotionValue(0);

	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		const finalPosition = -width / 2 - 8;

		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: "linear",
				duration: duration * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: "linear",
				duration: duration,
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}

		return controls?.stop;
	}, [rerender, xTranslation, duration, width]);

	return (
		<main className="py-8">
			<motion.div
				className="absolute left-0 flex gap-4"
				style={{ x: xTranslation }}
				ref={ref}
				onHoverStart={() => {
					setMustFinish(true);
					setDuration(SLOW_DURATION);
				}}
				onHoverEnd={() => {
					setMustFinish(true);
					setDuration(FAST_DURATION);
				}}
			>
				{[...images, ...images].map((item, idx) => (
					<Card image={`${item}`} key={idx} />
				))}
			</motion.div>
		</main>
	);
}

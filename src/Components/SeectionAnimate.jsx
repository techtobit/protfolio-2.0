import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const SeectionAnimate = () => {
	const wrapperRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		// Register GSAP plugins
		gsap.registerPlugin(ScrollTrigger);

		// Create GSAP timeline for the accordion animation
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".accordions",
				pin: true,
				start: "top top",
				end: "bottom top",
				scrub: 1,
				ease: "linear",
			},
		});

		tl.to(".accordion .text", {
			height: 0,
			paddingBottom: 0,
			opacity: 0,
			stagger: 0.5,
		});
		tl.to(
			".accordion",
			{
				marginBottom: -15,
				stagger: 0.5,
			},
			"<"
		);

		// Cleanup on unmount
		return () => {
			// smoother.kill();
			ScrollTrigger.killAll();
		};
	}, []);

	return (
		<div ref={wrapperRef} id="wrapper" className="">
			<div ref={contentRef} id="content" className="">
				{/* <div className="spacer h-[70vh]"></div> */}
				<div className="accordions flex flex-col pb-[vh]">
					<div className="accordion w-96 bg-red-600 bg-gray-100 p-4 mb-4">
						<h3 className="text-lg font-bold">Accordion 1</h3>
						<p className="text">This is some text inside the accordion.</p>
						<p className="text">This is some text inside the accordion.</p>
						<p className="text">This is some text inside the accordion.</p>
						<p className="text">This is some text inside the accordion.</p>
						<p className="text">This is some text inside the accordion.</p>
					</div>
					<div className="accordion  bg-gray-100 p-4 mb-4">
						<h3 className="text-lg font-bold">Accordion 2</h3>
						<p className="text">This is some text inside the accordion.</p>
					</div>
					<div className="accordion  bg-gray-100 p-4 mb-4">
						<h3 className="text-lg font-bold">Accordion 3</h3>
						<p className="text">This is some text inside the accordion.</p>
					</div>
				</div>
				{/* <div className="spacer h-[70vh]"></div> */}
			</div>
		</div>
	);
};

export default SeectionAnimate;

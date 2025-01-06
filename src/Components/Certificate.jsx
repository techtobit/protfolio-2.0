import React, { useEffect } from "react";
import { gsap } from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html_css from '../Assets/Certificate/HTML CSS JS .jpg'
import CSE_Fundamentals from '../Assets/Certificate/CSE Fundamentals.jpg'
import full_stack from '../Assets/Certificate/Full Stack Web Development.jpg'
import effective from '../Assets/Certificate/Effective.jpg';
import intern from '../Assets/Certificate/intership.jpg';
import algile from '../Assets/Certificate/Agile.jpg';
import hackerRankCss from '../Assets/Certificate/css.png';


const Certificate = () => {
	var settings = {
		className: "slider variable-width",
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		// variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	const timelineData = [
		{
			year: "2023",
			courseName: "CSE Fundamentals Professional Certificate",
			image: `${CSE_Fundamentals}`,
		},
		{
			year: "2022",
			courseName: "Full Stack Web Development",
			image: `${full_stack}`,
		},
		{
			year: "2021",
			courseName: "Html CSS and Javascirpt",
			image: `${html_css}`,
		},
		{
			year: "2023",
			courseName: "Internship",
			image: `${intern}`,
		},
		{
			year: "2022",
			courseName: "Agile Team and Scrum Lead",
			image: `${algile}`,
		},
		{
			year: "2022",
			courseName: "CSS",
			image: `${hackerRankCss}`,
		},
		{
			year: "2022",
			courseName: "Effect Listening",
			image: `${effective}`,
		},
		// Add more data here
	];





	return (
		<div className="slider-container mt-10">
			<Slider {...settings} className="">
			{
				timelineData.map((data)=> (
					<div id="slider_width" className="px-4">
					<div className="object-cover" >
						<img  className="object-cover !w-[80rem] !h-[20rem]" src={data.image} />

						<div className="flex items-center gap-2 pt-4">
							<p className="text-3xl font-bold">{data.year}</p>
							<div className="h-[1px] w-[100%]  bg-blue-100 border-2-2 border-blue-300 h-full border"></div>
						</div>
						<span>{data.courseName}</span>
					</div>
				</div>
				))
			}

			</Slider>
		</div>
	);
};


export default Certificate
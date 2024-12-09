import React from 'react'
const WorkExperience = () => {
	return (
		<>

			<div className="container bg-gray-200 mx-auto w-full h-full">
				<div className="relative wrap overflow-hidden lg:p-10 p-4 h-full">
					
				<div className="border-2-2  absolute lg:left-[50%] border-blue-100 h-full border" ></div>
				<h4 className='py-2 px-4 bg-blue-100 w-fit  absolute lg:left-[45.5%] font-bold'>Experience</h4>
					<div className="lg:mb-8 my-8 flex lg:justify-between items-center w-full right-timeline">
						<div className="order-1 lg:w-5/12"></div>
						<div className="flex z-40 bg-blue-100 items-center lg:order-1 shadow-xl lg:static absolute lg:left-0 left-[.5%] w-8 h-8 rounded-full">
							<h1 className="mx-auto font-semibold text-lg text-white">1</h1>
						</div>
						<div className="order-1 bg-gray-400 rounded-lg shadow-xl lg:w-5/12 px-6 py-4 lg:ml-0 ml-2">
							<h3 className=" font-bold text-gray-800 text-xl">Intern Front End Developer</h3>
							<h6 className="mb-3 font-bold text-gray-800 text-sm ]">Edufied
								<span> | Jan 23 to Jun 23</span>
							</h6>
							<div className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 text-justify">
								<li>Converted <b><u>100+ Figma to frontend web</u> </b>  and ensure seamless integration of UI/UX, Pixel-perfect design.</li>
								<li><b><u>I reviewed and merged 200+ developers' PRs</u></b>, provided feedback, assisted in resolving issues, ensured quality.</li>
								<li><b><u>Collaborated with 5 new front-end interns</u></b> and guided them to setup and understand workflow and codebase.</li>
								<li>Provide daily & weekly reports on project progress, highlighting pros and cons for effective decision-making.</li>
								<li>Conduct cross-browser and cross-platform testing to Optimize website performance and responsiveness.</li>
							</div>
						</div>
					</div>

					<div className="mb-8 flex justify-between lg:flex-row-reverse flex-row items-center w-full left-timeline">
						<div className="order-1 lg:w-5/12"></div>
						<div className="flex z-20 bg-blue-100 items-center order-1 shadow-xl w-8 h-8 lg:static absolute lg:left-0 left-[.5%] rounded-full">
							<h1 className="mx-auto text-white font-semibold text-lg">2</h1>
						</div>
						<div className="order-1 bg-red-400 rounded-lg shadow-xl lg:w-5/12 px-6 py-4 lg:ml-0 ml-2">
							<h3 className=" font-bold text-gray-800 text-xl">Front End Developer</h3>
							<h6 className="mb-3 font-bold text-gray-800 text-sm ]">Edufied
								<span> | Jun 23 to Oct 24</span>
							</h6>
							<div className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 text-justify">
								<li> Updated company’s  <b><u>WordPress websites components</u> </b> by using Elementor developer tool.</li>
								<li>Contributed to <b><u>build tools like Canva</u></b>, by multiple open sources like Konva & integrated third-party APIs.</li>
								<li><b><u>Fixed bugs on Dev, Stage, and production</u></b> repositories and website’s related to front end.</li>
								<li><b><u>Contributed with Task manager and QA, BE Team</u></b>, regarding test, assign and fix bugs and develop futures.</li>
								<li>Partial provided feedback on converted Figma to Frontend by new inters and team members.</li>
							</div>
						</div>
					</div>


					<div className="mb-8 flex justify-between items-center w-full right-timeline">
						<div className="order-1 lg:w-5/12"></div>
						<div className="flex z-20 bg-blue-100 items-center order-1 shadow-xl w-8 h-8 lg:static absolute lg:left-0 left-[.5%] rounded-full">
							<h1 className="mx-auto font-semibold text-lg text-white">3</h1>
						</div>
						<div className="order-1 bg-gray-400 rounded-lg shadow-xl lg:w-5/12 px-6 py-4 lg:ml-0 ml-2">
						<h3 className=" font-bold text-gray-800 text-xl">VOLUNTEER | Team and Scrum Master </h3>
							<h6 className="mb-3 font-bold text-gray-800 text-sm ]">Programming Hero 
								<span> | July-22 to Sep-22</span>
							</h6>
							<div className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 text-justify">
								<li> <b><u>Agile Facilitation:</u> </b> Lead Agile methodologies, ensuring effective Scrum ceremonies and team collaboration.</li>
								<li> <b><u>Mentorship:</u></b> Allocate tasks and fix issues to maintain a balanced workflow and meet deadlines.</li>
								<li><b><u>Resource Management:</u></b> Repositories and website’s related to front end.</li>
								<li><b><u>Stakeholder Liaison:</u></b> Communicate, gather feedback, and manage expectations between teams.</li>
							</div>
						</div>
					</div>


					<div className="mb-8 flex justify-between lg:flex-row-reverse flex-row items-center w-full left-timeline">
						<div className="order-1 lg:w-5/12"></div>
						<div className="flex z-20 bg-blue-100 items-center order-1 shadow-xl w-8 h-8 lg:static absolute lg:left-0 left-[.5%] rounded-full">
							<h1 className="mx-auto  text-white font-semibold text-lg">4</h1>
						</div>
						<div className="order-1 bg-red-400 rounded-lg shadow-xl lg:w-5/12 px-6 py-4 lg:ml-0 ml-2">
						<h3 className=" font-bold text-gray-800 text-xl">WordPress Developer </h3>
							<h6 className="mb-3 font-bold text-gray-800 text-sm ]"> Freelance
								<span> | Sep-20 to Dec-21</span>
							</h6>

							<div className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
								<li>Build WordPress website from scratch using default builder and HTML, CSS, JavaScript, and Elementor.</li>
								<li>Set up Domain and Hosting, wrote blogged posts, managed C-Panel, and optimized website performance.</li>
								<li>Update and redesign the existing WordPress website and install plugins.</li>
							</div>
						</div>
					</div>
					
				</div>
			</div>

		</>

	)
}

export default WorkExperience
import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import FAQsLoti from '../Assets/FAQs.json'
import '../Style/Main.scss'

const FAQs = () => {
 return (
  <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center lg:px-20 px-4 lg:gap-20 gap-10'>
   <div className="w-[450px] h-[450px] lg:block hidden">
    <Player
     src={FAQsLoti}
     className="player lotiPlayer"
     loop
     autoplay
    // style={{ height: '50vh', width: '50vw' }}
    />
   </div>
   <div className="QNAs">
    <details class="w-full bg-white border-[0.5px] rounded-md border-blue-50 cursor-pointer mb-3">
     <summary class="w-full bg-white font-semibold text-dark flex justify-between px-4 py-3 hover:bg-blue-50 after:content-['+'] ">Currently are you looking for full time Job & Internship ?</summary>
     <p class="px-4 py-3">
      I'm seeking for long term full-time Job, contract, Paid Internship as well.
     </p>
    </details>
    <details class="w-full bg-white border-[0.5px] rounded-md border-blue-50 cursor-pointer mb-3">
     <summary class="w-full bg-white font-semibold text-dark flex justify-between px-4 py-3 hover:bg-blue-50 after:content-['+'] ">How many hours you would like to work in a week ?</summary>
     <p class="px-4 py-3">
      Im available 9/10 hours per day.In week 50+ hours.
     </p>
    </details>
    <details class="w-full bg-white border-[0.5px] rounded-md border-blue-50 cursor-pointer mb-3">
     <summary class="w-full bg-white font-semibold text-dark flex justify-between px-4 py-3 hover:bg-blue-50 after:content-['+'] ">What is your Expected Salary per month ?</summary>
     <p class="px-4 py-3">
      Currently, I'm not focusing on Salary, I'm looking for an opportunity to enhance my skills as well as experience corporate cultures and gain new knowledge.
     </p>
    </details>
    <details class="w-full bg-white border-[0.5px] rounded-md border-blue-50 cursor-pointer mb-3">
     <summary class="w-full bg-white font-semibold text-dark flex justify-between px-4 py-3 hover:bg-blue-50 after:content-['+'] ">What is your notice period or how soon can you join ?</summary>
     <p class="px-4 py-3">
      I fully free and seeking for a it.And i can join any time.
     </p>
    </details>
    <details class="w-full bg-white border-[0.5px] rounded-md border-blue-50 cursor-pointer mb-3">
     <summary class="w-full bg-white font-semibold text-dark flex justify-between px-4 py-3 hover:bg-blue-50 after:content-['+'] ">Do you have any corporate or prefrontal working experience in this domain ?</summary>
     <p class="px-4 py-3">
      Not really, but I have worked on 2 months team project as team lead
     </p>
    </details>
   </div>
  </div>
 );
};

export default FAQs;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const ContactWithMe = () => {
 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_776wy3q', 'template_xw03tug', form.current, 'jtaP1zy3bC4eK5xQA')
   .then((result) => {
    console.log(result.text);
    toast.success("Mail Send")
   }, (error) => {
    console.log(error.text);
    toast.success("Mail Sending Failed !")
   });
 };
 return (
  <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 px-20 py-10 lg:gap-20 gap-10'>
   <div className="admin-info"></div>
   <div className="send-mail ">
    <form className='grid items-start justify-items-start gap-2' ref={form} onSubmit={sendEmail}>
     <label>Name</label>
     <input className='border hover:border-blue-100 outline-blue-50 w-[60%] h-[42px] rounded-md border-blue-50 px-4' placeholder='Full Name*' type="text" name="user_name" />
     <label>Email</label>
     <input className='border hover:border-blue-100 outline-blue-50 w-[60%] h-[42px] rounded-md border-blue-50 px-4' placeholder='example@gmail.com*' type="email" name="user_email" />
     <label>Message</label>
     <textarea className='border hover:border-blue-100 outline-blue-50 w-[60%] h-[42px] rounded-md border-blue-50 px-4 py-2' placeholder='Message*' name="message" />
     <input className='border cursor-pointer bg-blue-100 hover:bg-blue-200 text-white-200 hover:border-blue-100 outline-blue-50 w-[60%] h-[42px] rounded-md border-blue-50 px-4' type="submit" value="Send" />
    </form>
   </div>
  </div>
 );
};

export default ContactWithMe;
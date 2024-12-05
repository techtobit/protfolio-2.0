import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import mailSend from '../Assets/mailSend.json'
import '../Style/Main.scss';
import { FaPhoneAlt, FaEnvelope, FaHome, FaLinkedinIn, FaGithub, FaWhatsappSquare, FaYoutube, FaClock } from "react-icons/fa";
import { Player } from '@lottiefiles/react-lottie-player';
import MainTitle from './Shared/SectionTitle/MainTitle';
import SubTitle from './Shared/SectionTitle/SubTitle';
const ContactWithMe = () => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const form = useRef();
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();

  //submit form handler
  const onSubmit = data => {
    emailjs.sendForm('service_pk5d4kg', 'template_xw03tug', form.current, 'lM9v4dJc3FTXmL0gb')
      .then((result) => {
        console.log(result.text);
        //for showing lottipalyer after send
        setSubmitLoading(true)
        reset();
      }, (error) => {
        console.log(error.text);
        toast.error("Mail Sending Failed !")
      });
  };
  if (submitLoading == true) {
    setTimeout(() => {
      setSubmitLoading(false)
    }, 4000);
    setTimeout(() => {
      toast.success("Successfully Mail Send")
    }, 4100);
  }



  return (
    <div className='lg:px-20 px-4 py-10 '>
      <div className="section-title text-center lg:pb-20" >
        <MainTitle className=''><span className='font-bold text-3xl uppercase'>Contact <span className='text-blue-200'>Me</span></span></MainTitle>
        <SubTitle>Mail & Call Any Time 📧.</SubTitle>
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center  lg:gap-20 gap-10 backdrop-blur-xl rounded-md card-shadow">

        <div className="admin-info h-[100%]">
          <div className="admin-card  relative z-0 rounded-md bg-blue-100 lg:w-[60%] md:w-[100%] w-[100%] h-[100%]">
            <div className="bottom-circle absolute"></div>
            <div className="bottom-circle-full w-[84px] h-[84px] lg:right-[14%]  md:right-[6%] right-[14%] bottom-[10%] absolute"></div>
            {/* card header  */}
            <div className="card-header pl-6 py-9">
              <p className='text-white-200 text-3xl font-bold'>Contact Information</p>
              <pc className='text-white-200 pt-2'>Fill up the form i will get back to you within 24 hours.</pc>
              <p></p>
            </div>
            {/* Admin Address  */}
            <div className="contact-info pl-5 pt-0 ">
              <a href="tel:+8801886627127" target="_blank" className="phone-number flex gap-4  items-center text-white-200 "><FaPhoneAlt /> <span>(+880) 1886627127</span></a>
              <a href="https://api.whatsapp.com/send?phone=8801886627127" target="_blank" className="phone-number flex gap-4 pt-4 items-center text-white-200  "><FaWhatsappSquare /> <span>WhatsApp</span></a>
              <a href="mailto:dev.ashraf.uddin@gmail.com" className="phone-number flex gap-4 pt-4 items-center text-white-200 "><FaEnvelope /> <span>dev.ashraf.uddin@gmail.com</span></a>
              <p className="phone-number flex gap-4 pt-4 items-center text-white-200 "><FaHome /> <span>Chittagong, Bangladesh </span></p>
              <p className="phone-number flex gap-4 pt-4 items-center text-white-200 "><FaClock /> <span>Time Zone (Dhaka +6:00GMT) </span></p>
            </div>
            {/* social icons and links  */}
            {/* <div className="social-links flex gap-4 pl-6 lg:pt-[40%] md:pt-[10%] pb-[4%] pt-[40%]">
              <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://www.linkedin.com/in/ashrafuddin17/" target="_blank"><FaLinkedinIn /></a></div>
              <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://github.com/techtobit" target="_blank"><FaGithub /></a></div>
              <div className='hover:text-white-200 text-blue-100 bg-white-200 hover:bg-blue-300 rounded-full w-[32px] h-[32px] p-[8px] '><a href="https://www.youtube.com/channel/UC0pIXFHsiHUODADFzUQe_Tg" target="_blank"><FaYoutube /></a></div>
            </div> */}
          </div>
        </div>

        <div className="contact-us-form lg:pl-0 md:p-10 px-2 pb-2">
          {submitLoading ?
            <div className="successful-content text-center ">
              <p className='p-0'>Mail Sending...</p>
              <Player
                src={mailSend}
                className="player lotiPlayer opacity-100"
                loop
                autoplay
                style={{ height: '48%', width: '48%' }}
              />
            </div>
            :
            <div className="send-mail ">
              {/* <form className='grid items-start justify-items-start gap-2' ref={form} onSubmit={sendEmail}> */}
              <form className='grid items-start justify-items-start gap-2' ref={form} onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input className='border hover:border-blue-100 outline-blue-50 lg:w-[60%] md:w-[60%] w-[100%] h-[42px] rounded-md border-blue-50 px-4' placeholder='Full Name*' type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Full Name is required"
                    }
                  })}
                />
                <label label='label'>
                  {errors.name?.type === 'required' && <span className='text-sm text-red-600'>{errors.name.message}</span>}
                </label>
                <label>Email</label>
                <input className='border hover:border-blue-100 outline-blue-50 lg:w-[60%] md:w-[60%] w-[100%] h-[42px] rounded-md border-blue-50 px-4' placeholder='example@gmail.com*' type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required"
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Email is not Valid"
                    }
                  })}
                />
                <label label='label'>
                  {errors.email?.type === 'required' && <span className='text-sm text-red-600'>{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className='text-sm text-red-600'>{errors.email.message}</span>}
                </label>
                <label>Subject</label>
                <input className='border hover:border-blue-100 outline-blue-50 lg:w-[60%] md:w-[60%] w-[100%] h-[42px] rounded-md border-blue-50 px-4' placeholder='I want to know more*' type="text"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Subject is required"
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer"
                    },
                    maxLength: {
                      value: 40,
                      message: "Subject is to longer"
                    },
                  })}
                />
                <label label='label'>
                  {errors.subject?.type === 'required' && <span className='text-sm text-red-600'>{errors.subject.message}</span>}
                  {errors.subject?.type === 'minLength' && <span className='text-sm text-red-600'>{errors.subject.message}</span>}
                  {errors.subject?.type === 'maxLength' && <span className='text-sm text-red-600'>{errors.subject.message}</span>}
                </label>
                <label>Message</label>
                <textarea className='border hover:border-blue-100 outline-blue-50 lg:w-[60%] md:w-[60%] w-[100%] h-[62px] rounded-md border-blue-50 px-4 py-2' placeholder='Message*'
                  {...register("massage", {
                    required: {
                      value: true,
                      message: "Massage is required"
                    },
                    minLength: {
                      value: 20,
                      message: "Must be 20 characters or longer"
                    },
                  })}
                />
                <label label='label'>
                  {errors.massage?.type === 'required' && <span className='text-sm text-red-600'>{errors.massage.message}</span>}
                  {errors.massage?.type === 'minLength' && <span className='text-sm text-red-600'>{errors.massage.message}</span>}
                </label>
                <input className='border cursor-pointer bg-blue-100 hover:bg-blue-200 text-white-200 hover:border-blue-100 outline-blue-50 lg:w-[60%] md:w-[60%] w-[100%] h-[42px] rounded-md border-blue-50 px-4' type="submit" value="Send" />
              </form>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ContactWithMe;

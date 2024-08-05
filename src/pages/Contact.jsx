import React from 'react'
import { MdAddIcCall } from "react-icons/md";
import { FaArrowRight, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import ContactLogo from '../assests/contactLogo.png'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "832c1ec5-fde3-4e25-b889-9857f087d10c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
    if(res.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };


  return (
    <>
    {/* // Desktop view */}
    <div className='h-[640px] relative animate-fade-in hidden md:flex justify-center items-center container'>
      <div className='hidden lg:block absolute border-r h-[200px] border-black top-[200px] left-[120px]'>
        <img src={ContactLogo} width={100}/>
      </div>
      <div className='w-[80%] h-[80%] flex'>
        <div className='w-[50%] h-full'>
          <div className='w-full h-[10%] flex justify-center items-center'>
            <h2 className='font-semibold'>Talk to me</h2>
          </div>
          <div className='h-full flex flex-col pt-6 gap-8 items-center'>            
            <div className='bg-white w-[250px] h-[120px] flex flex-col justify-center rounded-lg border border-gray-400 shadow-md items-center'>
              <span className='text-[20px]'><MdAddIcCall/></span>
              <h2 className='text-[14px] font-medium mt-2'>Call</h2>
              <p className='text-xs text-gray-600'>+919597835933</p>
              <a href="tel:+919597835933" target="_blank" className='mt-2 flex items-center text-[12px] gap-1 cursor-pointer hover:translate-x-2 transition-all'>Call me <span><FaArrowRight/></span></a>
            </div>
            <div className='bg-white w-[250px] h-[120px] flex flex-col justify-center rounded-lg border border-gray-400 shadow-md items-center'>
              <span className='text-[20px]'><FaWhatsapp /></span>
              <h2 className='text-[14px] font-medium mt-2'>Whatsapp</h2>
              <p className='text-xs text-gray-600'>+919597835933</p>
              <a href="https://wa.me/919597835933" target="_blank" className='mt-2 flex items-center text-[12px] gap-1 cursor-pointer hover:translate-x-2 transition-all'>Whatsapp me <span><FaArrowRight/></span></a>
            </div>
            <div className='bg-white w-[250px] h-[120px] flex flex-col justify-center rounded-lg border border-gray-400 shadow-md items-center'>
              <span className='text-[20px]'><FaInstagram/></span>
              <h2 className='text-[14px] font-medium mt-2'>Instagram</h2>
              <p className='text-xs text-gray-600'>__rzhi__</p>
              <a href="https://www.instagram.com/__rzhi__/" target="_blank" className='mt-2 flex items-center text-[12px] gap-1 cursor-pointer hover:translate-x-2 transition-all'>Connect<span><FaArrowRight/></span></a>
            </div>
          </div>
        </div>
        <div className='w-[50%] h-full'>
          <div className='w-full h-[10%] mb-6 flex justify-center items-center'>
            <h2 className='font-semibold'>Write me your message</h2>
          </div>
          <form onSubmit={onSubmit} className='flex flex-col gap-5'>
            <div className='grid px-8 relative'>
              <label htmlFor='name' className='absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1'>Name</label>
              <input name='name' id='name' required type='text' placeholder='Enter your name' className='mt-3 bg-none outline-none text-sm p-4 rounded-lg border border-gray-400'/>
            </div>
            <div className='grid px-8 relative'>
              <label htmlFor='email' className='absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1'>Email</label>
              <input name='email' id='email' type='email' required placeholder='Enter your email' className='mt-3 bg-none outline-none text-sm p-4 rounded-lg border border-gray-400'/>
            </div>
            <div className='grid px-8 relative'>
              <label htmlFor='message' className='absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1'>Message</label>
              <textarea rows={6} name='message' id='message' placeholder='Enter your message' className='mt-3 bg-none outline-none resize-none text-sm p-4 rounded-lg border border-gray-400'></textarea>
            </div>
            <div className='px-8'>
            <button className='flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Send message<span className='text-xl'><FaTelegramPlane/></span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* // Mobile view */}
    <div className='mt-8 animate-fade-in md:hidden flex justify-center items-center container'>
      <div className='w-full flex flex-col'>
        <div className='w-full flex flex-col'>
          <div className='w-full flex justify-center items-center'>
            <h2 className='font-semibold'>Talk to me</h2>
          </div>
          <div className='h-full flex p-6 gap-2 items-center'>            
            <div className='bg-white w-[250px] h-[120px] flex flex-col justify-center rounded-lg border border-gray-400 shadow-md items-center'>
              <span className='text-[20px]'><MdAddIcCall/></span>
              <h2 className='text-[14px] font-medium mt-2'>Call</h2>
              <p className='text-xs pt-1 text-gray-600'>+919597835933</p>
              <a href="tel:+919597835933" target="_blank" className='mt-2 flex items-center text-[12px] gap-1 cursor-pointer hover:translate-x-2 transition-all'>Call me <span><FaArrowRight/></span></a>
            </div>
            <div className='bg-white w-[250px] h-[120px] flex flex-col justify-center rounded-lg border border-gray-400 shadow-md items-center'>
              <span className='text-[20px]'><FaWhatsapp /></span>
              <h2 className='text-[14px] font-medium mt-2'>Whatsapp</h2>
              <p className='text-xs pt-1 text-gray-600'>+919597835933</p>
              <a href="https://wa.me/919597835933" target="_blank" className='mt-2 flex items-center text-[12px] gap-1 cursor-pointer hover:translate-x-2 transition-all'>Whatsapp <span><FaArrowRight/></span></a>
            </div>
            <div className='bg-white w-[250px] h-[120px] flex flex-col justify-center rounded-lg border border-gray-400 shadow-md items-center'>
              <span className='text-[20px]'><FaInstagram/></span>
              <h2 className='text-[14px] font-medium mt-2'>Instagram</h2>
              <p className='text-xs pt-1 text-gray-600'>__rzhi__</p>
              <a href="https://www.instagram.com/__rzhi__/" target="_blank" className='mt-2 flex items-center text-[12px] gap-1 cursor-pointer hover:translate-x-2 transition-all'>Connect<span><FaArrowRight/></span></a>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full h-[10%] mb-6 flex justify-center items-center'>
            <h2 className='font-semibold'>Write me your message</h2>
          </div>
          <form onSubmit={onSubmit} className='flex flex-col gap-5 mb-8'>
            <div className='grid px-8 relative'>
              <label htmlFor='name' className='absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1'>Name</label>
              <input name='name' id='name' required type='text' placeholder='Enter your name' className='mt-3 bg-none outline-none text-sm p-4 rounded-lg border border-gray-400'/>
            </div>
            <div className='grid px-8 relative'>
              <label htmlFor='email' className='absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1'>Email</label>
              <input name='email' id='email' type='email' required placeholder='Enter your email' className='mt-3 bg-none outline-none text-sm p-4 rounded-lg border border-gray-400'/>
            </div>
            <div className='grid px-8 relative'>
              <label htmlFor='message' className='absolute top-0 text-gray-500 text-[14px] left-14 rounded-lg bg-white px-1'>Message</label>
              <textarea rows={6} name='message' id='message' placeholder='Enter your message' className='mt-3 bg-none outline-none resize-none text-sm p-4 rounded-lg border border-gray-400'></textarea>
            </div>
            <div className='px-8 flex justify-center'>
            <button className='flex items-center gap-2 bg-[rgb(20,20,20)] hover:bg-black text-white px-4 py-2 rounded-lg'>Send message<span className='text-xl'><FaTelegramPlane/></span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'
import { CgAdd, CgAlignLeft, CgArrowTopRightR, CgShoppingCart } from 'react-icons/cg'
import { FaCarTunnel } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { BiPhone, BiPhoneIncoming } from 'react-icons/bi'



const Footer = () => {

  const cart= useSelector((state)=>state.cart);
  const car = cart.length;

  return (
    <div className='max-w-[100%] sm:h-[150px] p-12 flex justify-between mx-auto bg-green-700'>
        <span  className='text-green-200 text-3xl'>Prakash </span>
        <span className='text-green-200 text-3xl flex'> <CgShoppingCart/> &nbsp;<b className=''>{car}</b> </span>
        <span className='text-green-200 text-3xl flex'> <a href="tel:+917382012092" className='decoration-none'><BiPhone className='decoration-none text-white'/></a> </span>
        
    </div>
  )
}

export default Footer
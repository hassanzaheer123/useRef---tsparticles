import React, { useRef } from 'react'
import './css/style.css'
import { FaChevronDown } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { IoIosMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import Particless from './Particles'
const App = () => {
  const over=useRef();
  const menurow=useRef();
  const menuItem=useRef();
  const crossItem=useRef();
  let menucount=180;
  let crosscount=-180;
const handleclick =()=>{
  menuItem.current.style.transform = `rotate(${menucount}deg)`;
  menucount+=180;
  menuItem.current.style.transition = 'transform 0.5s ease-out';
  over.current.style.transform='translate(0vw)'
  over.current.style.transition='transform 0.5s ease-in-out'
  
    menurow.current.style.animation='slideFromBottom 1s ease-out forwards'
    menurow.current.style.animationDelay='0.2s'
    menurow.current.style.opacity=0;

}
const handleclick2 =()=>{
  crossItem.current.style.transform = `rotate(${crosscount}deg)`;
  crosscount-=180;
  crossItem.current.style.transition = 'transform 0.5s ease-out';
  menurow.current.style.animation='slideFromTop 0.3s ease-out forwards'
    menurow.current.style.animationDelay='0s'
    menurow.current.style.opacity=1;
  over.current.style.transform='translate(-100vw)'
  over.current.style.transition='transform 0.8s ease-in-out'

}
  return (
    <>
    <div className="normal">
      <div className="container d-flex justify-content-between mt-5 ">
          <img className='logo' src="https://www.netsolpk.com/images/netsol-logo-white.svg" alt="" />
          <div className='d-flex align-items-center'>
            <span className='text-white me-1'>English</span>
            <FaChevronDown color='white' />

          </div>

        </div>
        <div className="container d-flex  main align-items-center">
          <div onClick={handleclick} className="menu-icon d-flex flex-column text-white ">
            <span className='menu-text'>MENU</span>
            <div ref={menuItem}>
            <IoIosMenu  size={60} />

            </div>


          </div>
          <div className="flex-column text-white ms-5 text">
            <h1 style={{color:'#1C72B8',fontSize:'60px'}} className='adaptive'>adaptive</h1>
            <h2 style={{fontSize:'36px'}}>to your business, your growth & the <br /> future.</h2>
            <p style={{fontSize:'20px'}}>Proudly serving the world's top asset finance & leasing companies with smart <br /> software technology.</p>
            
          </div>
        </div>
        <div className="container flex justify-content-center align-items-center w-100">
          <button className='mx-auto'>Explore</button>
        </div>
    </div>
    <div ref={over} className="overlay">
      <div className="container d-flex justify-content-between mt-5 ">
          <img className='logo' src="https://www.netsolpk.com/images/netsol-logo-white.svg" alt="" />
          <div className='d-flex align-items-center'>
            <span className='text-white me-1'>English</span>
            <FaChevronDown color='white' />

          </div>

        </div>
        <div className="container d-flex  main align-items-center">
          <div  onClick={handleclick2} className="menu-icon d-flex flex-column text-white ">
            <span className='menu-text'>MENU</span>
            <div ref={crossItem}>
            <IoClose   size={60} />
            </div>
            


          </div>
          <div ref={menurow}>
          <div    className="flex text-white main w-100 align-items-center justify-space-evenly ms-5  text menu-row">
  <div className="menu-item">
    <span className="menu-number">01</span>
    <span className="menu-text">Home</span>
  </div>
  <div  className="menu-item">
    <span className="menu-number">02</span>
    <span className="menu-text">About</span>
  </div>
  <div className="menu-item">
    <span className="menu-number">03</span>
    <span className="menu-text">Products</span>
  </div>
  <div className="menu-item">
    <span className="menu-number">04</span>
    <span className="menu-text">Investors</span>
  </div>
  <div className="menu-item">
    <span className="menu-number">05</span>
    <span className="menu-text">Consultancy</span>
  </div>
  <div className="menu-item">
    <span className="menu-number">06</span>
    <span className="menu-text">Careers</span>
  </div>
</div>
          </div>


        </div>
      
    </div>
    <Particless />
    </>
  )
}

export default App

import React from 'react'
import './Enter.css'
import rasm from '../../assets/rasm.webp'
import photo from '../../assets/energy-header.png.webp'
import two from '../../assets/2.webp'
import uch from '../../assets/3.webp'
import tor from '../../assets/4.webp'
import besh from '../../assets/5.webp'
import olti from '../../assets/6.webp'
import y from '../../assets/oxirgi.webp'
import t1 from '../../assets/tashqari1.webp'
import t2 from '../../assets/tashqari2.webp'
import t3 from '../../assets/tashqari3.webp'
import logo from '../../assets/logo.svg'
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { PiXLogoThin } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Enter() {
  return (
    <div className='banner'>
      <div className="img">
        <h1 className='text'>Networks for enterprises
          and governments
        </h1>
      </div>

      <button className='stick'>Contact a Nokia expert</button>

      <div className="box">
        <div className="one">
          <h2>Harness the exponential potential of networks</h2>
          <br />
          <p>The potential of networks goes far beyond simply connecting people and things. Networks can be an amplifier for your business, accelerating your digital transformation journey, helping you to optimize and grow your business and create a more productive, sustainable and accessible future for all. Transform your business to the power of n.</p>
        </div>
        <div className="two">
          <img className='photo' src={rasm} alt="" />
        </div>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="parent">
        <h2 className='t'>Choose your industry</h2>
        <p className='px'>Explore how networks can help amplify your capabilities and strengthen your digital transformation success.</p>
        <div className="first">
          <div className="box1">
            <img src={photo} alt="" />
            <h3>Energy --</h3>
          </div>

          <div className="box1">
            <img src={two} alt="" />
            <h3> Financial services --</h3>
          </div>

          <div className="box1">
            <img src={uch} alt="" />
            <h3> Helicopter --</h3>
          </div>

          <div className="box1">
            <img src={tor} alt="" />
            <h3> Doktor --</h3>
          </div>

          <div className="box1">
            <img src={besh} alt="" />
            <h3> Auto car --</h3>
          </div>

          <div className="box1">
            <img src={olti} alt="" />
            <h3> Mechanic --</h3>
          </div>
          <div className="box1">
            <img src={two} alt="" />
            <h3> Financial services --</h3>
          </div>

          <div className="box1">
            <img src={photo} alt="" />
            <h3>Energy --</h3>
          </div>



          <div className="box1">
            <img src={y} alt="" />
            <h3> Train --</h3>
          </div>

        </div>

      </div>

      <h2 className='h2'>Explore working with us</h2>

      <div className="tashqari">
        <div className="box1">
          <img src={t1} alt="" />
          <h3 className='h3'>Solutions --</h3>
        </div>

        <div className="box1">
          <img src={t2} alt="" />
          <h3 className='h3'>Customer --</h3>
        </div>

        <div className="box1">
          <img src={t3} alt="" />
          <h3 className='h3'>Nokia Patners --</h3>
        </div>
      </div>

      <div className="footer">
        <img className='logo' src={logo} alt="" />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <p>Sustainaliby</p>
        <br />
        <p>Expriense centers</p>
        <br />
        <p>Nokia Edu and traing</p>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div className="fot__text">
          <h3>Contact us</h3>
          <h3>Support</h3>
          <h3>Extranet access</h3>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <button className='btn'>Subscribe for our</button>
        <br />
        <br />
        <br />
        <div className="icons">

          <div className="icon1">
            <h2><IoLogoInstagram /></h2>
          </div>

          <div className="icon1">
            <h2><FaYoutube /></h2>
          </div>

          <div className="icon1">
            <h2><PiXLogoThin /></h2>
          </div>

          <div className="icon1">
            <h2><FaFacebookF /></h2>
          </div>

          <div className="icon1">
            <h2><FaLinkedinIn /></h2>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <p className='ph'>©2024 Nokia all rights reserved</p>
      </div>

    </div>
  )
}

export default Enter;
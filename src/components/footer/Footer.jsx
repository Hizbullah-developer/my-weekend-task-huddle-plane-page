import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";

import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
        <div className="fst">
            <h1>Ready To Build Your Community?</h1>
            <button>Get Started For Free</button>
        </div>

        <div className="sec">
            <div className="lists">
            <ul className="firstColumn">
                <li><img src="/logo.jpg" alt="" /></li>
                <li className="loc"><FaLocationDot className="locicon"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                <li><MdOutlinePhoneInTalk className="phoneicon"/>+1-543-123-4567</li>
                <li className="gmail"><p><BiLogoGmail className="gmailicon"/> example@huddle.com</p></li>
            </ul>
            <ul className="secColumn">
                <li><a href="/">About Us</a></li>
                <li><a href="/">What We Do</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
            <ul className="thirdColumn">
                <li><a href="/">Career</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
            <div className="icon">
                <div className="icn">
                <LiaFacebook className="fb"/>
                <TiSocialTwitterCircular className="twitter"/>
                <CiInstagram className="insta"/>
                </div>
                <div>
                <p>© Copyright 2018 Huddle. All rights reserved.</p>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
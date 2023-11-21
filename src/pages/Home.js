import React from 'react'
import profilepic from '../assets/profilepicupdated.jpg'
// import profilePic from '../assets/ProfilePicZoomedIn.png'
import tealwood from '../assets/tealwood.png'
import { FaLinkedin } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import { FaSlack } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";
import { PiFileHtmlLight } from "react-icons/pi";
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
            <body id="home">
                <img id="profilepicture" src={profilepic} alt="Profile Picture of me"/>
                <h1 className="intro">Hi, I'm Tori!</h1>
                <p className="intro-p" >I'm a junior full-stack developer based in San Diego, California. I've worked on web development projects using HTML, CSS, JavaScript, React.js, Ruby, and Ruby on Rails, and my passion for creative problem-solving drives my constant skill growth.</p>
                <div>
                    <Link to="https://docs.google.com/document/d/1fNNWa324GOWl8CfxzxyMXu4IaLdDclG32TQjGIxsb0w/edit" target="_blank">
                        <button id="aboutMeButton">
                            Learn More About Me
                        </button>
                    </Link>
                </div>
                <img id="containerImage" src={tealwood} alt="teal wood slabs"/>
                <div id="icons"> 
                    <FaLinkedin />
                    <TbBrandJavascript />
                    <DiRuby />
                    <SiRubyonrails />
                    <BsFiletypeCss />
                    <IoLogoReact />
                    <PiFileHtmlLight />
                    <FaSlack />
                    <IoLogoGithub />
                    <TbBrandVscode />
                </div>
                <img id="containerImage" src={tealwood} alt="teal wood slabs"/>
                <div id="icons-2">
                <FaLinkedin />
                <IoLogoGithub />
                </div>
            </body>
        </>
    )
}

export default Home
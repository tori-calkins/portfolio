import React from "react";
import Header3 from "../pages/Header3"
import profilepic from '../assets/profilepicupdated.jpg'
import ContactMeForm from '../components/ContactMeForm.js'

const AboutMe = () => {
    return (
        <>
        <Header3 /> 
        <body id="home">
            <h1 id="title" >About Me</h1>
            <div id="aboutmephotos">
                <img src={profilepic} alt="Profile Picture of me"/>
                <img src={profilepic} alt="Profile Picture of me"/>
                <img src={profilepic} alt="Profile Picture of me"/>
            </div>
            <p className="intro-p">Hello! I'm Tori, I'm passionate about weaving technology with teamwork to craft innovative solutions. Beyond my coding adventures, you'll often find me twirling on the dance floor to some country beats, sharing laughs with friends, or exploring local restaurants.
            <br></br>
            <br></br>
            My enthusiasm for technology is fueled by the collaborative spirit— I thrive on pair programming and diving into projects alongside a dynamic team. As a dedicated worker, I thoroughly enjoy the challenge of problem-solving and successfully handling multiple tasks simultaneously. I believe in the power of synergy, where diverse minds come together to create something truly exceptional.
            <br></br>
            <br></br>
            Whether it's finding elegant solutions to complex problems or savoring the joy of social connections, I bring the same level of dedication and passion. I'm driven by the excitement of conquering challenges, both in the coding realm and in my personal world, always eager to learn, adapt, and grow.
            <br></br>
            <br></br>
            Let's connect, collaborate, and code our way to remarkable innovations!</p>
        </body>
        <ContactMeForm />
        </>
    )
}

export default AboutMe

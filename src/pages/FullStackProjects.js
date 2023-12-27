import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import RatieMate from "../assets/ratiemate.png"
import { NavLink } from "react-router-dom"
import Header2 from "../pages/Header2"

const FullStackProjects = () => {
    return(
        <>
        <Header2/>
        <body id="home">
            <h1 id="title">Full Stack Projects </h1>
            <div id="projectCards">
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="RatieMate signin and signup page"
                    src={RatieMate}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    RatieMate
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Languages: React.js & Ruby on Rails
                    </CardSubtitle>
                    <CardText>
                    RatieMate is your go-to movie searching app, enabling easy exploration and rating of your favorite films. Sign in to curate your personalized list of beloved movies, allowing others to see your ratings and recommendations. Efficiently discover new must-watch movies while effortlessly keeping track of ones you've seen and loved. With RatieMate, finding and organizing your cinematic preferences has never been more enjoyable and accessible.
                    </CardText>
                    <NavLink to="https://frontend-ratiemate.onrender.com/" target="_blank">
                        <Button >
                        Explore More Here!
                        </Button>
                    </NavLink>
                </CardBody>
            </Card>
            </div>
        </body>
        </> 
    )
}

export default FullStackProjects
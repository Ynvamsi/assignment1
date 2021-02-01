"use strict";

///import '../css/App.css';
//import profilepic from '../static/images/Photo.jpeg';
var contentNode = document.getElementById('contents');

var component = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { className: "heading" },
        "Naga Vamsi Yarlagadda"
    ),
    React.createElement("img", { className: "profile-pic", src: "./images/Photo.jpeg", alt: "Profile-pic", height: "202" }),
    React.createElement(
        "p",
        { className: "paragraph" },
        "Hello, I'm Yarlagadda Naga Vamsi, born and bought up in Hyderabad, India. I'm currently persuing master's from San Diego State University. I'm a person who adjusts and adapts quickly to the surroundings. I love being around technology and travelling. My hobbies are travelling, cooking and reading blogs about bussiness stuff. One day I would like to travel all food destinations in India. Travelling, late night food and friends are few things which keep me happy."
    ),
    React.createElement(
        "a",
        { href: "https://github.com/Ynvamsi" },
        React.createElement(
            "button",
            { className: "button1" },
            "View my GitHub repo"
        )
    )
);

ReactDOM.render(component, contentNode);
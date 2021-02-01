///import '../css/App.css';
//import profilepic from '../static/images/Photo.jpeg';
const contentNode = document.getElementById('contents');

const component = (
    <div>
        <h1 className="heading">Naga Vamsi Yarlagadda</h1>
        <img className="profile-pic" src="./images/Photo.jpeg" alt="Profile-pic" height="202"></img>
        <p className="paragraph" >
            Hello, I'm Yarlagadda Naga Vamsi, born and bought up in Hyderabad, India. I'm currently persuing master's from San Diego State University. 
            I'm a person who adjusts and adapts quickly to the surroundings. I love being around technology and travelling.
            My hobbies are travelling, cooking and reading blogs about bussiness stuff. One day I would like to travel all food destinations in India.
            Travelling, late night food and friends are few things which keep me happy.   
        </p>
        <a href='https://github.com/Ynvamsi'>
            <button className="button1">View my GitHub repo</button>
        </a>
    </div>
);


ReactDOM.render(component, contentNode);
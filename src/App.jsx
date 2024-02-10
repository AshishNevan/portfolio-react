import {Card} from "./Card.jsx";
import reactsvg from "./assets/react.svg";
import jssvg from "./assets/javascript.svg";
import firebasesvg from "./assets/firebase-icon.svg";
import tensorflowsvg from "./assets/tensorflow-icon.svg";
import pythonsvg from "./assets/python-icon.svg";

function App() {
  return (
    <div className="min-h-screen bg-[#FFB574] flex flex-wrap items-center justify-around p-4">
        <Card content= "https://www.google.com" icon = {reactsvg} title="Portfolio website" desc="This website right here."/>
        <Card content= "https://www.google.com" icon = {tensorflowsvg} title="Rock Paper Scissors" desc="Rock paper scissors AI player."/>
        <Card content= "https://www.google.com" icon = {pythonsvg} title="Amazon Recommender" desc="Amazon electronics recommender using Machine Learning."/>
        <Card content= "https://ashishnevan.github.io/PigGame/" icon = {jssvg} title="Pig Game" desc="Turn-based 2-player web app game."/>
        <Card content= "https://ashishnevan.github.io/GuessTheNumber/" icon = {jssvg} title="Guess The Number" desc="A number guessing game made using javascript."/>
        <Card content= "https://ashishnevan.github.io/CRUD-firebase/" icon = {firebasesvg} title="Firebase CRUD" desc="CRUD web app built on Firebase backend."/>
    </div>
  );
}

export default App;

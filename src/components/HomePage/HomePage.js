import React, {  useContext, useEffect, useState } from "react";
import './HomePage.scss';
import './../../normalyze.css';
import Header from '../Header/Header';
import { Route, Routes , useNavigate } from "react-router-dom";
import ListPage from "../-list-Fldr/ListPage";
import LearnPage from "../-learn-Fldr/LearnPage";
import TestPage from "../-test-Fldr/TestPage";
import GreetPage from "../Greeting/Greeting";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

function HomePage(props) {  

  const lists = useSelector( state => state.list );  
  const [isTesting, setTesting] = useState(false);
  const [isLearning, setLearning] = useState(false);

  //function for learning and testing
  const [learnWords, setLearnWords] = useState(
    [].concat(...lists.filter(list => list.forLearn === true)
    .map(list => list.words)));

  const [testWords, setTestWords] = useState(
      [].concat(...lists.filter(list => list.forTest === true)
      .map(list => list.words)));

  useEffect(()=>{
    setLearnWords([].concat(...lists.filter(list => list.forLearn === true)
      .map(list => list.words)));
    setTestWords([].concat(...lists.filter(list => list.forTest === true)
      .map(list => list.words))); 
  }, [lists]);

  return (   
    <div className="Home-wrapper">
      <Header  />
      <Routes>
        <Route path='/reaciveEngee/greet' element={<GreetPage lists={lists} />} />
        <Route path='/reaciveEngee/learn' element={<LearnPage lists={lists}
          isLearning={isLearning}
          start={() => { setLearning(true) }}
          end={() => { setLearning(false) }} 
          words={learnWords}
          />} />                
        <Route path='/reaciveEngee/test' element={<TestPage lists={lists}
          isTesting={isTesting} 
          start={() => { setTesting(true) }}
          end={() => { setTesting(false) }} 
          words={testWords}
          />} />
        <Route path='/reaciveEngee/list' element={<ListPage lists={lists} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default HomePage;
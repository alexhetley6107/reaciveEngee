import React, { createContext, useEffect, useState } from "react";
import './App.scss';
import './normalyze.css';
import Header from '../Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "../-list-Fldr/ListPage";
import LearnPage from "../-learn-Fldr/LearnPage";
import TestPage from "../-test-Fldr/TestPage";
import GreetPage from "../Greeting/Greeting";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

export const WordContext = createContext();

function App(props) {
  
  const lists = useSelector( state => state );
  const dispatch = useDispatch();

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

  
/////////////////////////////////////////////////////////////////////////////////////////////////
 // determines whether to show a scrollbar depending on the contents of the chooselist
  const [scroll, setScroll] = useState("");
  const showScroll = () => {
    let app = document.querySelector('.App-wrapper');
    let windowWidth = app.clientWidth * 0.95; 
    let contentWidth = lists.length * 200;      

    if(windowWidth < contentWidth){
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("resize", showScroll);
  useEffect(()=>showScroll(), [])
  useEffect(()=>showScroll(), [lists])

  return (
    <BrowserRouter>
      <WordContext.Provider value={{}} >
        <div className="App-wrapper">
          <Header  />
          <Routes>
            <Route path='/' element={<GreetPage />} />
            <Route path='/learn' element={<LearnPage lists={lists}
              isLearning={isLearning}
              start={() => { setLearning(true) }}
              end={() => { setLearning(false) }} 
              words={learnWords}
              scroll={scroll}
              />} />                
            <Route path='/test' element={<TestPage lists={lists}
              isTesting={isTesting} 
              start={() => { setTesting(true) }}
              end={() => { setTesting(false) }} 
              words={testWords}
              scroll={scroll}
              />} />
            <Route path='/list' element={<ListPage lists={lists} />} />
          </Routes>
          <Footer/>
        </div>

      </WordContext.Provider>
    </BrowserRouter>
  );
}

export default App;
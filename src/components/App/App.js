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

export const WordContext = createContext();

function App(props) {

  const [lists, setLists] = useState(props.lists);
  const [isTesting, setTesting] = useState(false);
  const [isLearning, setLearning] = useState(false);

  //function for learning and testing
  const [learnWords, setLearnWords] = useState(
    ([].concat(...lists.filter(list => list.forLearn === true)
    .map(list => list.words))));

  const setWordsForLearn = () => {
    setLearnWords([].concat(...lists.filter(list => list.forLearn === true)
            .map(list => list.words))) 
  }
  const [testWords, setTestWords] = useState(
    ([].concat(...lists.filter(list => list.forTest === true)
    .map(list => list.words))));

  const setWordsForTest = () => {
      setTestWords([].concat(...lists.filter(list => list.forTest === true)
              .map(list => list.words))) 
    }   
  const chooseForLearn = (name) => {
    setLists(lists.map(list => list.name === name
      ? { ...list, forLearn: !list.forLearn } : list));
    setLearnWords([].concat(...lists.filter(list => list.forLearn === true)
              .map(list => list.words))) 
  }
  const chooseForTest = (name) => {
    setLists(lists.map(list => list.name === name
      ? { ...list, forTest: !list.forTest } : list));
    setTestWords([].concat(...lists.filter(list => list.forLearn === true)
      .map(list => list.words))) 
  }

  //make chooseAllbtn transparent
  const [isAllLearn, setAllLearn] = useState(false);
  const [isAllTest, setAllTest] = useState(false);
 
  const chooseAllLearnLists = () => {
    setLearnWords(lists.forEach(list => list.forLearn = true)) ;
    setAllLearn(true);
  }
  const chooseAllTestLists = () => {
    setTestWords(lists.forEach(list => list.forTest = true)) ;
    setAllTest(true);
  }

/////////////////////////////////////////////////////////////////////////////////////////////
//functions for saving lists and words 
  const saveToDB = () => { }
  const createNewList = (listName) => {
    setLists([...lists, { name: listName, isChoosen: true, words: [] }]);
    saveToDB();
  }
  const renameList = (oldName, newName) => {
    setLists(lists.map(list => list.name === oldName
      ? { ...list, name: newName } : list));

    saveToDB();
  }
  const deleteList = (listName) => {
    setLists(
      lists.filter(list => list.name !== listName)
    );
    saveToDB();
  }
  const addWord = (listName, engInput, rusInput) =>{
    setLists(lists.map(list => (list.name === listName) 
      ? { ...list , words : [{id: list.words.length+1, 
                        engWord: engInput,
                        rusWord: rusInput, 
                        isCheked: false,
                        isLearned: false}, ...list.words ] } 
        : list ));
    saveToDB();
  }
  const editWord = (listName, engOld, engNew, rusNew) => {
    setLists(lists.map(list => list.name === listName
      ? { ...list, words : list.words.map(word => word.engWord === engOld 
        ?  {id : word.id, engWord: engNew, rusWord: rusNew, isChecked: false ,isLearned: false} 
        : word) } 
      : list ));

    saveToDB();
    
  }
  const deleteWord = (listName, engWord) => {
    setLists(lists.map(list => list.name === listName
      ? { ...list, words : list.words.filter(word => word.engWord !== engWord) } : list));

    saveToDB();
  }
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
              choose={chooseForLearn} 
              words={learnWords}
              setWordsForLearn={setWordsForLearn}
              chooseAll = {chooseAllLearnLists}
              scroll={scroll}
              trans={isAllLearn}
              />} />                
            <Route path='/test' element={<TestPage lists={lists}
              isTesting={isTesting} 
              start={() => { setTesting(true) }}
              end={() => { setTesting(false) }} 
              choose={chooseForTest}
              words={testWords}
              setWordsForTest={setWordsForTest}
              chooseAll = {chooseAllTestLists}
              scroll={scroll}
              trans={isAllTest}
              />} />
            <Route path='/list' element={<ListPage lists={lists} 
              newList={createNewList}
              rename={renameList} delList={deleteList} addWord={addWord}
              editWord={editWord} deleteWord={deleteWord} 
               scroll={scroll}
              />} />
          </Routes>
          <Footer/>
        </div>

      </WordContext.Provider>
    </BrowserRouter>
  );
}

export default App;
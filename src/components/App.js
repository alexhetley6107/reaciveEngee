import React, { createContext, useState } from "react";
import './../styles/App.css';
import './../styles/normalyze.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import ListPage from "./listPage/ListPage";
import LearnPage from "./LearnPage";
import TestPage from "./testPage/TestPage";
import GreetPage from "./GreetPage";
import Footer from "./Footer";


export const WordContext = createContext();

function App(props) {

  const [lists, setLists] = useState(props.lists);
  const [isTesting, setTest] = useState(false);
  const saveToDB = () => { }

  const createNewList = (listName) => {
    setLists([...lists, { title: listName, isChoosen: false, words: [] }]);
    saveToDB();
  }
  const renameList = (oldName, newName) => {
    setLists(lists.map(list => list.title === oldName
      ? { ...list, title: newName } : list));

    saveToDB();
  }
  const deleteList = (listName) => {
    setLists(
      lists.filter(list => list.title !== listName)
    );
    saveToDB();
  }
  const addWord = (listName, engInput, rusInput) =>{
    setLists(lists.map(list => (list.title === listName) 
      ? { ...list , words : [...list.words, {id: list.words.length+1, 
                        engWord: engInput,
                        rusWord: rusInput, 
                        isCheked: false}] } 
        : list ));
    saveToDB();
  }

  const editWord = (listName, engOld, engNew, rusNew) => {
    setLists(lists.map(list => list.title === listName
      ? { ...list, words : [list.words.map(word => word.engWord === engOld 
        ?  {id : word.id, engWord: engNew, rusWord: rusNew, isChecked: false} : word) ]  } : list ));

    saveToDB();
    console.log(lists);
  }
  const deleteWord = (listName, engWord) => {
    setLists(lists.map(list => list.title === listName
      ? { ...list, words : list.words.filter(word => word.engWord !== engWord) } : list));

    saveToDB();
  }





  return (
    <BrowserRouter>
      <WordContext.Provider value={{}} >
        <div className="App-wrapper">
          <Header />
          <div className="App-content">
            <Routes>
              <Route path='/' element={<GreetPage />} />
              <Route path='/learn' element={<LearnPage lists={lists} />} />
              <Route path='/test' element={<TestPage lists={lists}
                isTesting={isTesting}
                start={() => { setTest(true) }}
                end={() => { setTest(false) }} />} />
              <Route path='/list' element={<ListPage lists={lists} newList={createNewList}
                rename={renameList} delList={deleteList} addWord={addWord}
                editWord={editWord} deleteWord={deleteWord} />} />
            </Routes>
          </div>
          <Footer />
        </div>

      </WordContext.Provider>
    </BrowserRouter>
  );
}

export default App;

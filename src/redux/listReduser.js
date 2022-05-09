import { defaultLists } from "./defaultLists"
import { ADD_WORD, DELETE_WORD, EDIT_WORD, NEW_LIST, RENAME_LIST, REMOVE_LIST, GET_DEFAULT, CHOOSE_ALL_LEARN, CHOOSE_ALL_TEST, LEARN_CHOOSE, TEST_CHOOSE } from "./types";

export const listReducer = (state = defaultLists, action) =>{
  switch (action.type) {
    case NEW_LIST:
      return [...state, { name: action.payload.name, 
          forTest: true, 
          forLearn: true, 
          words: []}];

    case RENAME_LIST :
      return state.map(list => list.name === action.payload.oldName
        ? {...list, name : action.payload.newName}
        : list);

    case REMOVE_LIST:
      return state.filter(list => list.name !== action.payload.name);

    case GET_DEFAULT :
      return defaultLists;

      case ADD_WORD :
      return state.map(list => list.name === action.payload.list
        ? {...list, words: 
          [{ engWord: action.payload.engWord,
            rusWord: action.payload.rusWord,
            isChecked: false, 
            isLearned: false}, ...list.words]}
        : list);

    case EDIT_WORD :
      return state.map(list => list.name === action.payload.list
        ? {...list, words: list.words.map(word => word.engWord === action.payload.oldEng
          ? {engWord: action.payload.newEng,
            rusWord: action.payload.newRus,
            isChecked: false, 
            isLearned: false}
          : word)}
        : list)

    case DELETE_WORD :
      return state.map(list => list.name === action.payload.list
        ? {...list, 
          words: list.words.filter(word => word.engWord !== action.payload.engWord)}
        : list);

      case LEARN_CHOOSE :
        return state.map(list => list.name === action.payload.name
          ? {...list, forLearn: !list.forLearn}
          : list);
  
      case TEST_CHOOSE :
        return state.map(list => list.name === action.payload.name
          ? {...list, forTest: !list.forTest}
          : list);
  
      case CHOOSE_ALL_LEARN :
        return state.map(list => list.forLearn === false 
          ? {...list, forLearn: true}
          : list);
          
      case CHOOSE_ALL_TEST :
        return state.map(list => list.forTest === false 
          ? {...list, forTest: true}
          : list);
    default:
      return state;
  }

}
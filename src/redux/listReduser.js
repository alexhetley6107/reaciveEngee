import { defaultLists } from "./defaultLists";
import * as types from "./listTypes";

export const listReducer = (state = defaultLists, action) =>{
  switch (action.type) {
    case types.NEW_LIST:
      return [...state, { name: action.payload.name, 
          forTest: true, 
          forLearn: true, 
          words: []}];

    case types.RENAME_LIST :
      return state.map(list => list.name === action.payload.oldName
        ? {...list, name : action.payload.newName}
        : list);

    case types.REMOVE_LIST:
      return state.filter(list => list.name !== action.payload.name);

    case types.GET_DEFAULT :
      return defaultLists;

      case types.ADD_WORD :
      return state.map(list => list.name === action.payload.list
        ? {...list, words: 
          [{ engWord: action.payload.engWord,
            rusWord: action.payload.rusWord,
            isChecked: false, 
            isLearned: false}, ...list.words]}
        : list);

    case types.EDIT_WORD :
      return state.map(list => list.name === action.payload.list
        ? {...list, words: list.words.map(word => word.engWord === action.payload.oldEng
          ? {engWord: action.payload.newEng,
            rusWord: action.payload.newRus,
            isChecked: false, 
            isLearned: false}
          : word)}
        : list)

    case types.DELETE_WORD :
      return state.map(list => list.name === action.payload.list
        ? {...list, 
          words: list.words.filter(word => word.engWord !== action.payload.engWord)}
        : list);

      case types.LEARN_CHOOSE :
        return state.map(list => list.name === action.payload.name
          ? {...list, forLearn: !list.forLearn}
          : list);
  
      case types.TEST_CHOOSE :
        return state.map(list => list.name === action.payload.name
          ? {...list, forTest: !list.forTest}
          : list);
  
      case types.CHOOSE_ALL_LEARN :
        return state.map(list => list.forLearn === false 
          ? {...list, forLearn: true}
          : list);
          
      case types.CHOOSE_ALL_TEST :
        return state.map(list => list.forTest === false 
          ? {...list, forTest: true}
          : list);
    default:
      return state;
  }

}
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

let lists = [
  { title: "hit", forTest: false, forLearn: false, words: []},
  { title: "Food", forTest: false, forLearn: false, words: [
    {id:1, engWord: "apple", rusWord: "яблоко", isChecked: false , isLearned: false},
    {id:2, engWord: "meat", rusWord: "мясо", isChecked: false , isLearned: false},
    {id:3, engWord: "water", rusWord: "вода", isChecked: false , isLearned: false},
    {id:4, engWord: "juice", rusWord: "сок", isChecked: false , isLearned: false},
    {id:5, engWord: "tomato", rusWord: "помидор", isChecked: false , isLearned: false},
    {id:6, engWord: "milk", rusWord: "молоко", isChecked: false , isLearned: false},
    {id:7, engWord: "tea", rusWord: "чай", isChecked: false , isLearned: false},
    {id:8, engWord: "coffee", rusWord: "кофе", isChecked: false , isLearned: false},
  ]},
  { title: "Verbs", forTest: false, forLearn: false, words: [
    {id:1, engWord: "swim", rusWord: "плавать", isChecked: false , isLearned: false},
    {id:2, engWord: "run", rusWord: "бегать", isChecked: false , isLearned: false},
    {id:3, engWord: "walk", rusWord: "ходить", isChecked: false , isLearned: false},
    {id:4, engWord: "call", rusWord: "звонить", isChecked: false , isLearned: false},
    {id:5, engWord: "open", rusWord: "открывать", isChecked: false , isLearned: false},
    {id:6, engWord: "close", rusWord: "закрывать", isChecked: false , isLearned: false},
    {id:7, engWord: "turn", rusWord: "поворачивать", isChecked: false , isLearned: false},
    {id:8, engWord: "return", rusWord: "возвращать", isChecked: false , isLearned: false},
    {id:9, engWord: "eat", rusWord: "есть", isChecked: false , isLearned: false},
    {id:10, engWord: "drink", rusWord: "пить", isChecked: false , isLearned: false},
    {id:11, engWord: "see", rusWord: "видеть", isChecked: false , isLearned: false},
    {id:12, engWord: "talk", rusWord: "говорить", isChecked: false , isLearned: false},
    {id:13, engWord: "say", rusWord: "сказать", isChecked: false , isLearned: false},
    {id:14, engWord: "tell", rusWord: "рассказывать", isChecked: false , isLearned: false},
    {id:15, engWord: "dance", rusWord: "танцевать", isChecked: false , isLearned: false},
    {id:16, engWord: "listen", rusWord: "слушать", isChecked: false , isLearned: false},
    {id:17, engWord: "relax", rusWord: "отдыхать", isChecked: false , isLearned: false},
    {id:18, engWord: "fly", rusWord: "летать", isChecked: false , isLearned: false},
    {id:19, engWord: "sing", rusWord: "петь", isChecked: false , isLearned: false},
    {id:20, engWord: "love", rusWord: "любить", isChecked: false , isLearned: false},
    {id:21, engWord: "like", rusWord: "нравиться", isChecked: false , isLearned: false},
    {id:22, engWord: "want", rusWord: "хотеть", isChecked: false , isLearned: false},
    {id:23, engWord: "think", rusWord: "думать", isChecked: false , isLearned: false},
    {id:24, engWord: "count", rusWord: "считать", isChecked: false , isLearned: false},
    {id:25, engWord: "read", rusWord: "читать", isChecked: false , isLearned: false},
    {id:26, engWord: "write", rusWord: "писать", isChecked: false , isLearned: false},
    {id:27, engWord: "keep", rusWord: "держать", isChecked: false , isLearned: false},
    {id:28, engWord: "kiss", rusWord: "целовать", isChecked: false , isLearned: false},
    {id:29, engWord: "sell", rusWord: "продавать", isChecked: false , isLearned: false},
    {id:30, engWord: "by", rusWord: "покупать", isChecked: false , isLearned: false},
  ]},
  { title: "Colors",  forTest: false, forLearn: false, words: [
    {id:1, engWord: "black", rusWord: "черный", isChecked: false , isLearned: false},
    {id:2, engWord: "red", rusWord: "красный", isChecked: false , isLearned: false},
    {id:3, engWord: "yellow", rusWord: "жёлтый", isChecked: false , isLearned: false},
    {id:4, engWord: "grey", rusWord: "серый", isChecked: false , isLearned: false},
    {id:5, engWord: "white", rusWord: "белый", isChecked: false , isLearned: false},
    {id:6, engWord: "blue", rusWord: "синий", isChecked: false , isLearned: false},
    {id:7, engWord: "pink", rusWord: "розовый", isChecked: false , isLearned: false},
    {id:8, engWord: "green", rusWord: "зеленый", isChecked: false , isLearned: false},
    {id:9, engWord: "orange", rusWord: "оранжевый", isChecked: false , isLearned: false},
    {id:10, engWord: "brawn", rusWord: "коричневый", isChecked: false , isLearned: false},
    {id:11, engWord: "silver", rusWord: "серебряный", isChecked: false , isLearned: false},
    {id:12, engWord: "golden", rusWord: "золотой", isChecked: false , isLearned: false},
  ]},
  { title: "Animals", forTest: false, forLearn: false, words: [
    {id:1, engWord: "cat", rusWord: "кот", isChecked: false , isLearned: false},
    {id:2, engWord: "dog", rusWord: "собака", isChecked: false , isLearned: false},
    {id:3, engWord: "rabbit", rusWord: "кролик", isChecked: false , isLearned: false},
    {id:4, engWord: "shark", rusWord: "акула", isChecked: false , isLearned: false},
    {id:5, engWord: "fish", rusWord: "рыба", isChecked: false , isLearned: false},
    {id:6, engWord: "parrot", rusWord: "попугай", isChecked: false , isLearned: false},
    {id:7, engWord: "elephant", rusWord: "слон", isChecked: false , isLearned: false},
    {id:8, engWord: "koala", rusWord: "коала", isChecked: false , isLearned: false},
    {id:9, engWord: "kangaroo", rusWord: "кенгуру", isChecked: false , isLearned: false},
    {id:10, engWord: "caw", rusWord: "корова", isChecked: false , isLearned: false},
    {id:11, engWord: "wolf", rusWord: "волк", isChecked: false , isLearned: false},
    {id:12, engWord: "fox", rusWord: "лиса", isChecked: false , isLearned: false},
    {id:13, engWord: "hen", rusWord: "курица", isChecked: false , isLearned: false},
    {id:14, engWord: "lion", rusWord: "лев", isChecked: false , isLearned: false},
  ]},
];

ReactDOM.render(
  <React.StrictMode>
    <App lists={lists} />
  </React.StrictMode>,
  document.getElementById('root')
);

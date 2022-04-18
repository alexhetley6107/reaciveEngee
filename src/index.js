import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

let lists = [
  { title: "Food", isChoosen: false, words: [
    {id:1, engWord: "apple", rusWord: "яблоко", isChecked: false},
    {id:2, engWord: "meat", rusWord: "мясо", isChecked: false},
    {id:3, engWord: "water", rusWord: "вода", isChecked: false},
    {id:4, engWord: "juice", rusWord: "сок", isChecked: false},
    {id:5, engWord: "tomato", rusWord: "помидор", isChecked: false},
    {id:6, engWord: "milk", rusWord: "молоко", isChecked: false},
    {id:7, engWord: "tea", rusWord: "чай", isChecked: false},
    {id:8, engWord: "coffee", rusWord: "кофе", isChecked: false},
  ]},
  { title: "Verbs", isChoosen: false, words: [
    {id:1, engWord: "swim", rusWord: "плавать", isChecked: false},
    {id:2, engWord: "run", rusWord: "бегать", isChecked: false},
    {id:3, engWord: "walk", rusWord: "ходить", isChecked: false},
    {id:4, engWord: "call", rusWord: "звонить", isChecked: false},
    {id:5, engWord: "open", rusWord: "открывать", isChecked: false},
    {id:6, engWord: "close", rusWord: "закрывать", isChecked: false},
    {id:7, engWord: "turn", rusWord: "поворачивать", isChecked: false},
    {id:8, engWord: "return", rusWord: "возвращать", isChecked: false},
    {id:9, engWord: "eat", rusWord: "есть", isChecked: false},
    {id:10, engWord: "drink", rusWord: "пить", isChecked: false},
    {id:11, engWord: "see", rusWord: "видеть", isChecked: false},
    {id:12, engWord: "talk", rusWord: "говорить", isChecked: false},
    {id:13, engWord: "say", rusWord: "сказать", isChecked: false},
    {id:14, engWord: "tell", rusWord: "рассказывать", isChecked: false},
    {id:15, engWord: "dance", rusWord: "танцевать", isChecked: false},
    {id:16, engWord: "listen", rusWord: "слушать", isChecked: false},
    {id:17, engWord: "relax", rusWord: "отдыхать", isChecked: false},
    {id:18, engWord: "fly", rusWord: "летать", isChecked: false},
    {id:19, engWord: "sing", rusWord: "петь", isChecked: false},
    {id:20, engWord: "love", rusWord: "любить", isChecked: false},
    {id:21, engWord: "like", rusWord: "нравиться", isChecked: false},
    {id:22, engWord: "want", rusWord: "хотеть", isChecked: false},
    {id:23, engWord: "think", rusWord: "думать", isChecked: false},
    {id:24, engWord: "count", rusWord: "считать", isChecked: false},
    {id:25, engWord: "read", rusWord: "читать", isChecked: false},
    {id:26, engWord: "write", rusWord: "писать", isChecked: false},
    {id:27, engWord: "keep", rusWord: "держать", isChecked: false},
    {id:28, engWord: "kiss", rusWord: "целовать", isChecked: false},
    {id:29, engWord: "sell", rusWord: "продавать", isChecked: false},
    {id:30, engWord: "by", rusWord: "покупать", isChecked: false},
  ]},
  { title: "Colors", isChoosen: true, words: [
    {id:1, engWord: "black", rusWord: "черный", isChecked: false},
    {id:2, engWord: "red", rusWord: "красный", isChecked: false},
    {id:3, engWord: "yellow", rusWord: "жёлтый", isChecked: false},
    {id:4, engWord: "grey", rusWord: "серый", isChecked: false},
    {id:5, engWord: "white", rusWord: "белый", isChecked: false},
    {id:6, engWord: "blue", rusWord: "синий", isChecked: false},
    {id:7, engWord: "pink", rusWord: "розовый", isChecked: false},
    {id:8, engWord: "green", rusWord: "зеленый", isChecked: false},
    {id:9, engWord: "orange", rusWord: "оранжевый", isChecked: false},
    {id:10, engWord: "brawn", rusWord: "коричневый", isChecked: false},
    {id:11, engWord: "silver", rusWord: "серебряный", isChecked: false},
    {id:12, engWord: "golden", rusWord: "золотой", isChecked: false},
  ]},
  { title: "Animals", isChoosen: false, words: [
    {id:1, engWord: "cat", rusWord: "кот", isChecked: false},
    {id:2, engWord: "dog", rusWord: "собака", isChecked: false},
    {id:3, engWord: "rabbit", rusWord: "кролик", isChecked: false},
    {id:4, engWord: "shark", rusWord: "акула", isChecked: false},
    {id:5, engWord: "fish", rusWord: "рыба", isChecked: false},
    {id:6, engWord: "parrot", rusWord: "попугай", isChecked: false},
    {id:7, engWord: "elephant", rusWord: "слон", isChecked: false},
    {id:8, engWord: "koala", rusWord: "коала", isChecked: false},
    {id:9, engWord: "kangaroo", rusWord: "кенгуру", isChecked: false},
    {id:10, engWord: "caw", rusWord: "корова", isChecked: false},
    {id:11, engWord: "wolf", rusWord: "волк", isChecked: false},
    {id:12, engWord: "fox", rusWord: "лиса", isChecked: false},
    {id:13, engWord: "hen", rusWord: "курица", isChecked: false},
    {id:14, engWord: "lion", rusWord: "лев", isChecked: false},
  ]},
];

ReactDOM.render(
  <React.StrictMode>
    <App lists={lists} />
  </React.StrictMode>,
  document.getElementById('root')
);

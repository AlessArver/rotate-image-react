import React from "react"  
import './App.css';

function App() {
  const dialogsData = [{ 
    id: '1',
    username: 'Любовь Чернова', 
    avatar: 'https://aipa.ru/189871-thickbox_default/sejlor-mun-sailor-moon-anime-raskraska-kartina-po-nomeram-na-kholste.jpg' ,
    text: 'It was many and many a year ago, In a kingdom by the sea, That a maiden there lived whom you may know By the name of Annabel Lee; And this maiden she lived with no other thought That to love and be loved by me.',
    date: '5Pm'
  },
  { 
    id: '2',
    username: 'Любовь Чернова', 
    avatar: 'https://aipa.ru/189871-thickbox_default/sejlor-mun-sailor-moon-anime-raskraska-kartina-po-nomeram-na-kholste.jpg' ,
    img: 'https://sun9-7.userapi.com/impg/Hu5hYTR6EzqXPO-GYwCXlxsqObJPgr1ELhXK7w/j1lSDG7w8-s.jpg?size=400x400&quality=96&sign=423f4b1344c2f6fb6a5783b3eec2a6de&type=album',
    date: '5Pm'
  },
  { 
    id: '3',
    username: 'Любовь Чернова', 
    avatar: 'https://aipa.ru/189871-thickbox_default/sejlor-mun-sailor-moon-anime-raskraska-kartina-po-nomeram-na-kholste.jpg' ,
    audio: "",
    date: '5Pm'
  },]

  const showDialogs = dialogsData.map(d => (
    <div key={d.id} className="dialog__item">
      <img src={d.avatar} alt={d.username} className="dialog__item__image" />
      <div className="dialog__item__content">
        <div className="dialog__item__header">
          <span className="dialog__item__username">{d.username}</span>
          <span className="dialog__item__date">{d.date}</span>
        </div>
        {d.text && <div className="dialog__item__text">{d.text}</div>}
        {d.img && <img src={d.img} className="dialog__item__img" />}
        {d.audio && (
          <audio controls className="dialog__item__audio">
            <source src={d.audio} type="audio/mp3" />
          </audio>
        )}
      </div>
    </div>
  ))

  return (
    <div className="main__wrapper">
      <div className="side-menu">
        <div className="side-menu_header"></div>
      </div>
      <div className="dialog__wrapper">
      <div className="dialog__header"></div>
      <div className="dialog__items">{showDialogs}</div>
      <div className="dialog-form">
        <div className="dialog-form__input__wrapper">
          <button className="dialog-form__button">+</button>
          <input className="dialog-form__input" placeholder="Написать сообщение..." />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

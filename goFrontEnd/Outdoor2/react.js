import React from 'react'; //подключаем Реакт
import Comments from './Components'

//Создаем компонент

class App extends React.Component {
   render() {
     
     return (
       <div>
           <Comments />
       
       </div>
       
     );
   };
};
//Для вставки на сайт:
React.render (
  <App />,
  document.body
);

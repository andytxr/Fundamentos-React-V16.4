import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './components/Parent';
import Child from './components/Child';

ReactDOM.render(

  <div>
     <Parent name="Admilson" lastname="Teixeira">
       <Child name="Deco"></Child>
       <Child name="Allan"></Child>
     </Parent>
  </div>

, document.getElementById('root'));


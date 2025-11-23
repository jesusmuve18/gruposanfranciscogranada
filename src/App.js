import {Menu} from './components/Menu'
import { Display } from './components/Display';
import React, { useState } from 'react';

import './App.css';

function App() {
  const [selected, setSelected] = useState("pagina-principal")

  return (
    <>
      <Menu selected={selected} setSelected={setSelected}/>
      <Display content={selected}/>
    </>
  );
}

export default App;

import {Menu} from './components/Menu'
import { Page } from './components/Page';
import React, { useState } from 'react';

import './App.css';

function App() {
  const [selected, setSelected] = useState("pagina-principal")

  return (
    <>
      <Menu selected={selected} setSelected={setSelected}/>
      <Page selected={selected}/>
    </>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { Menu } from './modules/menu/components/Menu'
import { Page } from './lib/components/Page'

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

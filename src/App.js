import { useState } from 'react'
import './App.css'
import { Menu } from './modules/menu/components/Menu'
import { Page } from './lib/components/Page'

function App() {

  return (
    <>
      <Menu />
      <Page />
    </>
  );
}

export default App;

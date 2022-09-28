import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';

import Home from './routes/Home'
import Catalog from './routes/Catalog';
import Contacts from './routes/Contacts';
import Training from './components/Training';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book_tickets' element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;

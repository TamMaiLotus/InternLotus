import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import PageHeader from './components/header';
import PageCarousel from './components/carousels';
import GridColumn from './components/gridColumn';
import MediaQueries from './components/mediaQueries';
import Flexbox from './components/flexbox';

function App() {
  return (
    <div className='App'>
      <header id='header'>
        <PageHeader />
      </header>
      <main>
        <GridColumn />
        <MediaQueries />
        <Flexbox />
      </main>
    </div>
  )
}

export default App;

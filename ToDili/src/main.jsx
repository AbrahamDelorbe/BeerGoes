  import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Header from './components/paginaHeader'
import Contenido_pagina0 from './components/pagina0'
import Sidebar from './components/sidebar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <Header />
    
    <Contenido_pagina0 />

    <Sidebar />
   
  </React.StrictMode>,
) 


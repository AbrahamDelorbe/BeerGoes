import "../css/sidebar.css"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars);


function Sidebar() {

    return(

<div className='menu-caja'>

<details className='menusidebar' >

<summary><FontAwesomeIcon icon={faBars} size="xl" /></summary>


<div className="caja-p">

<p>lista de tareas</p> 

<p>Lista de compras</p> 

<p>Lista de reservaciones</p> 

<p>Historial</p> 

<p>Htras listas...</p> 

</div>

</details>


</div>

    
) }


export default Sidebar
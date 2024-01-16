import "../css/header.css"


function Header() {

    return(   

<div className="caja-header">

<h1 className="titulo">BeerGoes</h1>

<ul className="navegadores">

<li className="li-navegador"> <a href=""> Tienda</a> </li>
<li className="li-navegador"> <a href="">Iniciar sesion</a> </li>
<li className="li-navegador"> <a href="">Apoya $</a>  </li>

</ul>

</div>


) }


export default Header
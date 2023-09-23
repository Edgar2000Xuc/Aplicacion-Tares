import './App.css';
import  logoFrontend from './imagenes/frontend.png'
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
      <img 
      src={logoFrontend}
      alt="Logo Frontend"
      className='logo-frontend' />

      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       <ListaTareas />
      </div>
    </div>
  );
}

export default App;

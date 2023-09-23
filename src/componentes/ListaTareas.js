import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaTareas.css';
import Tareas from "./Tareas";

function ListaTareas() {

    const[tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tareas => tareas.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tareas => {
            if(tareas.id === id) {
                tareas.completada = !tareas.completada
            }
            return tareas;
        });
        setTareas(tareasActualizadas);
    }
    return(
        <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) =>
                    <Tareas
                    key={tarea.id} 
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}/>
                )
            }
        </div>
        </>
    );
}


export default ListaTareas;











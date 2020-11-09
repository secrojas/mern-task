import React, {  } from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre:'Tienda Virtual'},
        {nombre:'Intranet'},
        {nombre:'Diseño de Sitios Webs'}
    ]

    return ( 
        <ul className="listado-proyectos">            
        
            {/* { alerta   ? ( <div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>  ) : null  } */}

            {/* <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup> */}

            <ul className="listado-proyectos">
                {proyectos.map(proyecto=>(
                    <Proyecto
                        proyecto={proyecto}
                    />
                ))}
            </ul>

        </ul>
     );
}
 
export default ListadoProyectos;
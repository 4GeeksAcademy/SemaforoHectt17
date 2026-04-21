import React, { useState } from 'react';
import Botones from './Botones';

const Home = () => {
    const [seleccionado, setSeleccionado] = useState("");
    const [extraPurpura, setExtraPurpura] = useState(false); // Estado para mostrar/ocultar la luz

    const estiloBrillo = (color) => ({
        border: '2px solid white',          
        boxShadow: `0 0 25px 10px ${color}`, 
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer'
    });

    return (
        <div className="container text-center mt-5">
            <div style={{ width: '120px', backgroundColor: 'black', margin: 'auto', borderRadius: '10px', padding: '10px' }}>
                
                {/* Luces normales */}
                <div className='rounded-circle bg-danger mt-4' 
                     style={{ width: '80px', height: '80px', margin: 'auto', 
                     ...(seleccionado === "rojo" ? estiloBrillo("red") : {}) }}
                     onClick={() => setSeleccionado("rojo")}></div>

                <div className='rounded-circle bg-warning mt-4' 
                     style={{ width: '80px', height: '80px', margin: 'auto', 
                     ...(seleccionado === "amarillo" ? estiloBrillo("yellow") : {}) }}
                     onClick={() => setSeleccionado("amarillo")}></div>

                <div className='rounded-circle bg-success mt-4 mb-4' 
                     style={{ width: '80px', height: '80px', margin: 'auto', 
                     ...(seleccionado === "verde" ? estiloBrillo("green") : {}) }}
                     onClick={() => setSeleccionado("verde")}></div>

                {/* LUZ EXTRA: Solo se renderiza si extraPurpura es true */}
                {extraPurpura && (
                    <div className='rounded-circle mt-2 mb-4' 
                         style={{ 
                             width: '80px', height: '80px', margin: 'auto', 
                             backgroundColor: 'purple',
                             ...(seleccionado === "purpura" ? estiloBrillo("purple") : {}) 
                         }}
                         onClick={() => setSeleccionado("purpura")}>
                    </div>
                )}
            </div>

            {/* Pasamos la función para activar el color extra */}
            <Botones 
                alCambiar={setSeleccionado} 
                luzActual={seleccionado} 
                activarPurpura={() => setExtraPurpura(true)} 
            />
        </div>
    );
};

export default Home;
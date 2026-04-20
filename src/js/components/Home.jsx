import React, { useState } from 'react';
import Botones from './Botones';

const Home = () => {
  
    const [ seleccionado, setSeleccionado ] = useState("");
    
    const estiloBrillo = {
        border: '2px solid #adb5bd',          
        boxShadow: '0 0 25px 10px #adb5bd', 
        transition: 'all 0.3s ease-in-out'
    };

    return (
        <div className="text-center pt-2 pb-2" style={{ width: '120px', backgroundColor: 'black', margin: 'auto', marginTop: '150px', borderRadius: '10px' }}>
            
            <a 
                className='rounded-circle bg-danger text-white d-flex align-items-center justify-content-center mt-4' 
                style={{ 
                    width: '80px', height: '80px', margin: 'auto',
                    ...(seleccionado === "rojo" ? estiloBrillo : {}) 
                }}
                onClick={() => setSeleccionado("rojo")}
            >
            </a>

            <a 
                className='rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mt-4' 
                style={{ 
                    width: '80px', height: '80px', margin: 'auto',
                    ...(seleccionado === "amarillo" ? estiloBrillo : {})
                }}
                onClick={() => setSeleccionado("amarillo")}
            >
            </a>

            <a 
                className='rounded-circle bg-success text-white d-flex align-items-center justify-content-center mt-4 mb-4' 
                style={{ 
                    width: '80px', height: '80px', margin: 'auto',
                    ...(seleccionado === "verde" ? estiloBrillo : {})
                }}
                onClick={() => setSeleccionado("verde")}
            >
            </a>

        </div>  
    );
};

export default Home;
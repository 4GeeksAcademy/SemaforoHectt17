import React, { useState } from 'react';

const Botones = () => {
 
    const [seleccionado, setSeleccionado] = useState("gris");
    const [cont, setCont] = useState(0);

    const manejarCambio = () => {
      
        const siguienteCont = cont >= 3 ? 1 : cont + 1;
        
      
        setCont(siguienteCont);

  
        if (siguienteCont === 1) {
            setSeleccionado("rojo");
        } else if (siguienteCont === 2) {
            setSeleccionado("amarillo");
        } else if (siguienteCont === 3) {
            setSeleccionado("verde");
        }
    };

    return (
        <div className="text-center mt-4">
            <p>Estado actual: <strong>{seleccionado}</strong> (Clic: {cont})</p>
            
        
            <button 
                className="btn me-3 btn-secondary" 
                onClick={manejarCambio}
            >
                Cambiar Color
            </button>

            {/* Este botón podría cambiar su estilo visual según el estado 'seleccionado' */}
            <button 
                className="btn text-white" 
                style={{ backgroundColor: 'purple' }}
            >
                Púrpura
            </button>
        </div>
    );
};

export default Botones;
import React from 'react';

const Botones = ({ alCambiar, luzActual, activarPurpura }) => {

    return (
        <div className="mt-4">
            <button className="btn btn-primary" onClick={() => {
                if (luzActual === "rojo") alCambiar("amarillo");
                else if (luzActual === "amarillo") alCambiar("verde");
                else alCambiar("rojo");
            }}>
                Siguiente
            </button>

            {/* Este botón añade la luz púrpura al semáforo */}
            <button 
                className="btn ms-2 text-white" 
                style={{ backgroundColor: 'purple' }} 
                onClick={activarPurpura}
            >
                Añadir Púrpura
            </button>
        </div>
    );
};

export default Botones;
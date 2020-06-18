import React from "react";

function SpanishCards() {
    return (
        <div className="row text-center">
            <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <i className="fas fa-sun fa-7x" />
                            <h4 className="card-title">MANTENIMIENTO DE CÉPED</h4>
                            <p className="card-text">
                                Cuidado y plantación de césped, césped artificial, sistemas de rociadores.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                     <div className="card">
                        <div className="card-body">
                            <i className="fas fa-leaf fa-7x" />
                            <h4 className="card-title">MANTENIMIENTO DE ÁRBOLES</h4>
                            <p className="card-text">
                                Mantenimiento y remoción de árboles y servicios de plantación. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                <div className="card">
                        <div className="card-body">
                            <i className="fas fa-home fa-7x" />
                            <h4 className="card-title">PROYECTOS DE JARDÍN Y PATIO</h4>
                            <p className="card-text">
                                Adoquines, aceras y construcción de muros de jardín, grava. 
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default SpanishCards;
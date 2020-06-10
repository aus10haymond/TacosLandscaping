import React from "react";

function Cards() {
    return (
        <div className="row text-center">
            <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <i className="fas fa-sun fa-7x" />
                            <h4 className="card-title">Lawn Maintenance</h4>
                            <p className="card-text">
                                Lawn care, artificial grass, grass planting, sprinkler systems.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                     <div className="card">
                        <div className="card-body">
                            <i className="fas fa-leaf fa-7x" />
                            <h4 className="card-title">Tree Maintenance</h4>
                            <p className="card-text">
                                Tree and shrub maintenance, tree removal and planting services. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                <div className="card">
                        <div className="card-body">
                            <i className="fas fa-home fa-7x" />
                            <h4 className="card-title">Landscaping Projects</h4>
                            <p className="card-text">
                                Pavers, sidewalks, and garden wall construction, gravel. 
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Cards;
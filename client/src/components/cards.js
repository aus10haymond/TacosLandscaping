import React from "react";

function Cards() {
    return (
        <div className="row text-center">
            <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <i className="fas fa-sun fa-7x" />
                            <h4 className="card-title">Weekly Maintenance</h4>
                            <p className="card-text">
                                Lawn care, yard clean-up, clean sidewalks and patios. Done on a weekly or bi-weekly basis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                     <div className="card">
                        <div className="card-body">
                            <i className="fas fa-leaf fa-7x" />
                            <h4 className="card-title">Monthly Maintenance</h4>
                            <p className="card-text">
                                Tree and shrub maintenance, yard clean-up, clean sidewalks and patios. Done on a monthly or bi-monthly basis. 
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
                                Lawn fertilization and weed control, sprinkler repair and maintenance, walkway and patio construction. 
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Cards;
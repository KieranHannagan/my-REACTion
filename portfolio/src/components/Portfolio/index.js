import React from 'react';


function Portfolio() {
    return (

        <div className='row row-cols-3 row-cols-md-3 g-3 container-fluid '>
            <div className="card port-card">
                <img src={require(`../../assets/img/1.jpg`).default} className="card-img-top" alt="run-buddy" />
                <div className="card-body">
                    <h5 className="card-title">Run Buddy</h5>
                    <p className="card-text">Everyone's favorite fitness companion</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="https://github.com/KieranHannagan/run-buddy">View on GitHub</a></li>
                </ul>
            </div>
            <div className="card port-card">
                <img src={require(`../../assets/img/1.jpg`).default} className="card-img-top" alt="run-buddy" />
                <div className="card-body">
                    <h5 className="card-title">Run Buddy</h5>
                    <p className="card-text">Everyone's favorite fitness companion</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="https://github.com/KieranHannagan/run-buddy">View on GitHub</a></li>
                </ul>
            </div>
        </div>

    );
}

export default Portfolio;

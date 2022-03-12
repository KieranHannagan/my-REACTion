import React from 'react';


function Portfolio() {
    return (
        <section className='p-5'>
            <div className='m-2'>
            <h1 data-testid="h1tag">My Portfolio</h1>
            <p  >Here are a few of my projects</p>
            </div>
            {/* Cards for projects */}
            <div className=' d-flex row row-cols-4 row-cols-md-4 g-3 container-fluid justify-content-center'>
                <div className="card me-5 col">
                    <img src={require(`../../assets/img/0.jpeg`).default} className="card-img-top" alt="run-buddy" />
                    <div className="card-body">
                        <h5 className="card-title">Note Taker</h5>
                        <p className="card-text">Write down an idea!</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="https://github.com/KieranHannagan/take-some-notes">View on GitHub</a></li>
                    </ul>
                </div>
                <div className="card  col">
                    <img src={require(`../../assets/img/1.jpeg`).default} className="card-img-top" alt="run-buddy" />
                    <div className="card-body">
                        <h5 className="card-title">Run Buddy</h5>
                        <p className="card-text">Everyone's favorite fitness companion</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="https://github.com/KieranHannagan/run-buddy">View on GitHub</a></li>
                    </ul>
                </div>
                <div className="card ms-5 col">
                    <img src={require(`../../assets/img/2.jpeg`).default} className="card-img-top" alt="run-buddy" />
                    <div className="card-body">
                        <h5 className="card-title">E-Commerce Back-end</h5>
                        <p className="card-text">Come shop!</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="https://github.com/KieranHannagan/run-buddy">View on GitHub</a></li>
                    </ul>
                </div>

                <div className="card me-5 col ">
                    <img src={require(`../../assets/img/3.jpeg`).default} className="card-img-top" alt="run-buddy" />
                    <div className="card-body">
                        <h5 className="card-title">Budget Tracker</h5>
                        <p className="card-text">Track your spending.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="https://github.com/KieranHannagan/run-buddy">View on GitHub</a></li>
                    </ul>
                </div>

                <div className="card  col">
                    <img src={require(`../../assets/img/4.jpeg`).default} className="card-img-top" alt="run-buddy" />
                    <div className="card-body">
                        <h5 className="card-title">Employee Handler</h5>
                        <p className="card-text">Your workforce in one spot.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="https://github.com/KieranHannagan/run-buddy">View on GitHub</a></li>
                    </ul>
                </div>
                <div className="card ms-5 col">
                    <img src={require(`../../assets/img/5.jpeg`).default} className="card-img-top" alt="run-buddy" />
                    <div className="card-body">
                        <h5 className="card-title">Team Manager</h5>
                        <p className="card-text">Your team, your way.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="https://github.com/KieranHannagan/run-buddy">View on GitHub</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

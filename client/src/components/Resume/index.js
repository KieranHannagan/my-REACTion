import React from 'react';


function Resume() {
    return (
        <section className='p-5 container'>
            {/* Resume */}
            <div className='res-card-title col gx-3 justify-content-center container text-center w-75'>
                <h1 className="g-3 justify-content-center text-start p-1 row">Education</h1>
                <div className='row row-cols-2 justify-content-center full-w'>
                    <div className='col'>

                    <li className="gradient  m-2 p-1">
                        Certified Full Stack Web Developer
                    </li>
                    </div>
                    <li className="gradient col m-2 p-1">
                        Bachelors degree in Finance
                    </li>

                </div>
            </div>

            <div className='border m-2 d-flex row row-cols-2 row-cols-md-2 g-2 container-fluid  text-start'>
                <div className=' res-card-title  col gx-3 '>
                    <h1 className='res-card-title g-3 justify-content-center text-start p-3 row'>Technologies</h1>
                    {/* MERN */}
                    <div className=" gx-2 d-flex  text-center row row-cols-2 ">
                        <ol type="1" className="col ">
                            <li><bold className="gradient">MERN Stack</bold></li>
                            <li className=" m-2">
                                <a href='https://www.mongodb.com/'>MongoDB</a>
                            </li>
                            <li className=" m-2">
                                <a href='https://expressjs.com/'>Express.js</a>
                            </li>
                            <li className=" m-2">
                                <a href='https://reactjs.org/'>React</a>
                            </li>
                            <li className=" m-2">
                                <a href='https://nodejs.org/en'>Node.js</a>
                            </li>
                        </ol>
                        <ol type="1" className="col justify-content-center">
                            <li><bold className="gradient">Others</bold></li>
                            <li className=" m-2">
                                <a href='https://www.mongodb.com/'>Apollo GraphQL</a>
                            </li>
                            <li className=" m-2">
                                <a href='https://expressjs.com/'>MySQL & Sequelize</a>
                            </li>
                            <li className=" m-2">
                                <a href='https://reactjs.org/'>HTML</a>
                            </li>
                            <li className=" m-2">
                                <a href='https://nodejs.org/en'>CSS (Bootstrap & Bulma)</a>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className='res-card-title col gx-3 justify-content-center text-center'>
                    <h1>Skills</h1>
                    <ol type='1'>
                        <li className=" m-2">
                            Interpersonal Communication & Leadership
                        </li>
                        <li className=" m-2">
                            Problem Solving
                        </li >
                        <li className=" m-2">
                            Teamwork
                        </li>
                        <li className=" m-2">
                            Critical Thinking
                        </li>
                        <li className=" m-2">
                            Time Management
                        </li>

                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Resume;

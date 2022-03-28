import React from 'react';


function Resume() {
    return (
        <section className='p-5'>
            {/* Resume */}
            <div className=' m-2 d-flex row row-cols-2 row-cols-md-2 g-2 container-fluid justify-content-center text-start'>
                <div className='col g-3 justify-content-center'>
                    <h1 className='g-3 justify-content-center text-start p-3 row'>Technologies</h1>
                    {/* MERN */}
                    <div className="justify-content-center text-center row row-cols-2 ">
                        <ol type="1" className="col justify-content-center">
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
                <div className='col g-3 justify-content-center text-center'>
                    <h1 className="g-3 justify-content-center text-start p-3 row">Education</h1>
                    <ol type='1 '>
                        <li className="gradient m-4 p-1">
                            <bold>Certified Full Stack Web Developer</bold>
                        </li>
                        <li className="gradient m-4 p-1">
                            <bold>Bachelors degree in Finance</bold>
                        </li>
                    </ol>
                </div>

                <div className='col g-3 justify-content-center text-center'>
                    <h1>Skills</h1>
                    <ol type='1'>
                        <li>
                            Interpersonal Communication
                        </li>
                        <li>
                            Teamwork
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Resume;

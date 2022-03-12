import React from 'react';


function Footer() {

    return (
        <footer className="footer navbar-fixed-bottom">

            <div className='d-flex justify-content-center mt-3'>

                <ul id='footer-bar' className=' row row-cols-3 container'>
                    <li className='col text-center'>
                        <a href='https://github.com/KieranHannagan'>
                            GitHub
                        </a>
                    </li>
                    <li className='col text-center'>
                        <a href='https://www.linkedin.com/in/kieran-hannagan-49a68a1b6/'>
                            LinkedIn
                        </a>
                    </li>
                    <li className='col text-center'>
                        <a href='https://stackoverflow.com/users/16596703/kieranhannagan'>
                            Stack Overflow
                        </a>
                    </li>

                </ul>
            </div>
        </footer>
    );
}

export default Footer;

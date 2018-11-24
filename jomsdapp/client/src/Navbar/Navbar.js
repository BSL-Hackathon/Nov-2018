import React from 'react';
import { Link } from 'react-router-dom';

    class Navbar extends React.Component {
        render() {
            return (
                <nav>
                    <div className="nav-wrapper">
                        <a className="brand-logo">Jom's Dapp</a>
                        <ul id="nav-mobile" className="right ">
                            <Link to="/constituir">Constituir</Link>
                        </ul>
                    </div>
                </nav>
            );
        }
    }

export { Navbar };
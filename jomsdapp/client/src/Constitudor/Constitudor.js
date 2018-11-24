import React from 'react';
import { FormaConstituidor } from './FormaConstitudor';

class Constitudor extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <h3>Registrate</h3>
                    <h5>Tu informacion es privada, tú decides quien podra ver esto</h5>
                    <div className="p1"></div>
                    <div className="row">
                        <div className="col s12 m6">
                            <FormaConstituidor />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Constitudor };
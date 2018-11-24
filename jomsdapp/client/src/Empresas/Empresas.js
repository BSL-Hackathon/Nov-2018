import React from 'react';

class Empresas extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container main">
                    <h5 className="panel-header">Lolos's Pizza <i className="material-icons right">more_vert</i></h5>
                    <div className="divider"></div>
                    <div className="container">
                        <h1 className="center-align">33%<i className="material-icons up">arrow_upward</i></h1>
                    </div>
                        <h6>20.3 <b>LOL</b> disponibles hasta mañana</h6>
                        <h6>07<b>ETH/LOL</b></h6>
                    <div className="row p1">
                        <div className="col s8">
                            Las mas deliciosas pizzas hechas con amor y los mejores champiñones magicos!
                        </div>
                        <div className="col s4">
                            <i className="material-icons vot">thumbs_up_down</i>
                        </div>
                    </div>
                    <div className="row">
                        <h5><i className="material-icons">location_on</i> Cerca de ti</h5>
                        <h5><i className="material-icons">face</i> Conoce mas</h5>
                    </div>
                    <div class="row">
                        <button className="acc">Compra LOL</button>
                    </div>
                </div>
                <div className="footer row">
                    <div className="col s3 pan-cont">
                        <i className="material-icons pan">home</i>
                    </div>
                    <div className="col s3 pan-cont">
                        <i className="material-icons pan">search</i>
                    </div>
                    <div className="col s3 pan-cont">
                        <i className="material-icons pan">account_circle</i>
                    </div>
                    <div className="col s3 pan-cont">
                        <i className="material-icons pan">favorite</i>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
export { Empresas };
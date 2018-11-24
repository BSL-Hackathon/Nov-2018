import React from 'react';
import { SelectRegion } from './SelectRegion';
import { SelectComuna } from './SelectComuna';

class FormaConstituidor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            name: '',
            fantasy_name: '',
            type: '',
            region: '',
            street: '',
            street_number: '',
            block: '',
            province: '',
            apartment: '',
            village: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? this.checked : this.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    onFieldChange(fieldName) {
        return function (event) {

            this.setState({ [fieldName]: event.target.value });
        }

    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" name="name" value={this.state.name} placeholder="Nombre: Lol's pizza" onChange={this.onFieldChange('name').bind(this)} />
                            <p>{this.state.error}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s7">
                            <input type="text" name="fantasy_name" placeholder="Nombre de fantasia" value={this.state.fantasy_name} onChange={this.onFieldChange('fantasy_name').bind(this)} />
                        </div>
                        <div className="input-field col s5">
                            <select className="browser-default" value={this.state.type} name="type" onChange={this.onFieldChange('type').bind(this)}>
                                <option disabled defaultValue >Tipo de sociedad</option>
                                <option value="SA">SA</option>
                                <option value="SPA">Spa</option>
                                <option value="LTDA">LTDA</option>
                                <option value="P">...</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s7">
                            <input type="text" name="street" placeholder="Calle" value={this.state.street} onChange={this.onFieldChange('street').bind(this)}></input>
                        </div>
                        <div className="input-field col s5">
                            <input type="text" name="street_number" value={this.state.street_number} onChange={this.onFieldChange('street_number').bind(this)} placeholder="Numero" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" name="block" placeholder="Bloque" value={this.state.block} onChange={this.onFieldChange('block').bind(this)}></input>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" name="apartment" placeholder="Depto/Local" value={this.state.apartment} onChange={this.onFieldChange('apartment').bind(this)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" placeholder="Villa/Poblacion" name="village" value={this.state.village} onChange={this.onFieldChange('village').bind(this)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <SelectRegion onChange={this.onFieldChange('region').bind(this)} />
                    </div>
                    <div className="row">
                        <SelectComuna />
                    </div>
                    <div className="input-field col s12">
                        <select defaultValue="" className="browser-default" name="region" value={this.props.region} onChange={this.onFieldChange('region').bind(this)}>
                            <option value="" disabled>Region</option>
                            <option value="I">I de Tarapacá</option>
                            <option value="II">II de Antofagasta</option>
                            <option value="III">III de atacama</option>
                            <option value="IV">IV de coquimbo</option>
                            <option value="V">V de valparaiso</option>
                            <option value="VI">VI de Bernardo O'Higgins</option>
                            <option value="VII">VII del Maule</option>
                            <option value="VII">VIII de Concepcion</option>
                            <option value="IX">IX de la Araucania</option>
                            <option value="X">X de los Lagos</option>
                            <option value="XI">XI Aysen</option>
                            <option value="XII">XII de Magallanes</option>
                            <option value="RM">Metropolitana de santiago</option>
                            <option value="XIV">XIV de los Rios</option>
                            <option value="XV">XV de Arica y Parinacota</option>
                            <option value="XVI">XVI del Ñuble</option>
                        </select>
                    </div>
                    <div className="input field col s12">
                        <select className="browser-default">
                            <option>Santiago....</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <input type="submit" className="btn waves-effect" onClick={this.handleSubmit} />
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export { FormaConstituidor };
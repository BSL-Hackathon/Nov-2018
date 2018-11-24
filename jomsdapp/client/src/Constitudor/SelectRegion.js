import React from 'react';
class SelectRegion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: ''
        }
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(fieldName) {
        return function (event) {
            this.setState({
                [fieldName]: event.target.value
            })
        }
    }
    render() {
        return (
            <div className="input-field col s12">
                <select defaultValue="" className="browser-default" name="region" value={this.props.region} onChange={this.onFieldChange('region').bind(this)}>
                    <option value="" disabled>Region</option>
                    <option value="">I de Tarapacá</option>
                    <option value="">II de Antofagasta</option>
                    <option value="">III de atacama</option>
                    <option value="">IV de coquimbo</option>
                    <option value="">V de valparaiso</option>
                    <option value="">VI de Bernardo O'Higgins</option>
                    <option>VII del Maule</option>
                    <option>VIII de Concepcion</option>
                    <option>IX de la Araucania</option>
                    <option>X de los Lagos</option>
                    <option>XI Aysen</option>
                    <option>XII de Magallanes</option>
                    <option>Metropolitana de santiago</option>
                    <option>XIV de los Rios</option>
                    <option>XV de Arica y Parinacota</option>
                    <option>XVI del Ñuble</option>
                </select>
            </div>
        );
    }
}

export { SelectRegion }
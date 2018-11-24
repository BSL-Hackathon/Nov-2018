import React from 'react';

class SelectComuna extends React.Component {
    render(){
        return (
            <div className="input field col s12">
                <select className="browser-default">
                    <option>Santiago....</option>
                </select>
            </div>
        )
    }
}

export {SelectComuna};
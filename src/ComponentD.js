import React, { Component } from 'react';
import ComponentE from './ComponentE';

export class ComponentD extends Component {
    render() {
        return (
            <div>
             <ComponentE />   
            </div>
        );
    }
}

export default ComponentD;
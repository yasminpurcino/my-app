import React from 'react';


class GreetButton extends React.Component {
    constructor(props) {

        // React components always have to
        // call super in their constructors
        // to be set up properly
        super(props);

        // this.state should be an object
        // representing the initial “state”
        // of any component instance
        this.state = {
            name: "world"

        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.setState({ name: 'Yasmin' });
    }

    render() {

        return (
            <div><p>Hello {this.state.name}!</p>
                <button onClick={() => this.handleClick()}>
                    Click me
                </button></div>
        );
    }
}

export default GreetButton;
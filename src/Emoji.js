import React from 'react';

//abstracao se eu tenho um problema real e tenho q pensar em uma forma generica de como resolver
//classe  define as coisa, ela nao existe
// objeto eh uma insatancia de uma classe (objeto fora da classe) cria um objeto da classe 
// extends =(means EH) - react component eh um parent class e emoji is a child

class Emoji extends React.Component { // classe react  = react.component 
    // constructor eh como define um objeto 
    // props eh um argumento 
    constructor(props) {
        //props propiedade 

        //super vou chamar as funcoes do parent class 
        super(props);

        //this eh um jeito de charmar uma funcao ou atributo do objeto 
        //state eh um atributo 
        //atributo eh algo
        //funcao dentro de uma classe eh uma acao
        this.state = {
            mood: "😃"

        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state)

        this.setState(this.state.mood == "😃"? { mood: '🥰' } : { mood: '😃' }); //this lets the button switch between two states every click
    }


    render() {

        return (
            <div><p>Mood: {this.state.mood}!</p>
                <button onClick={this.handleClick}>
                    Change me
                </button></div>
        );
    }
}


export default Emoji;
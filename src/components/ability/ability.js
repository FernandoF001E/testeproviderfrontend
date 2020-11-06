import React from "react";
import { Row, Col, Button } from 'react-materialize';

class Ability extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            body: "",
            value: "",
            name: "",
            abilities: "",
            order: "",
            weight: "",
            height: ""
          };
    }

    handlerSubmit = e => {
        e.preventDefault();
        console.log(this.state.text);

        fetch('http://pokeapi.co/api/v2/ability/' + this.state.text)
            .then(response => response.json())
            .then(response => {
                debugger
                this.setState({
                    name: response.name,
                    order: response.id
                  });
            });
    }
    
    handlerOnChangeInput = e => {   
     const {name, value} = e.target;
     this.setState({[name]: value});
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <Row>
                    <div>
                        <label>Habilidade de 1 até 233</label>
                        <input type="text" value={this.state.text} name="text" id="text" onChange={this.handlerOnChangeInput} />
                        <Col s={12} m={12}>
                            <Button waves='light' className="right" onClick={this.clicked}>Pesquisa</Button>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div id="root">
                        <p>Habilidade: {this.state.name}</p>
                    </div>
                </Row>
            </form>
          )
       }
   }

 export default Ability;
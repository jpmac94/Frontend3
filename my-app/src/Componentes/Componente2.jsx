import React,{Component} from "react";

export default class Componente2 extends Component{
    constructor(props){
        super(props)
        this.state={
            pedido:{
                precio:0,
                comida: "vacio"
            }
        }
        this.ordenCancelada=this.ordenCancelada.bind(this)
    }
    
    render(){
        return(
            <div className="pedido">
                <h1>Tu pedido: </h1>
                <button onClick={this.ordenCancelada}>Cancelar pedido</button>
                <p>precio: {this.state.precio}</p>
                <p>comida: {this.state.comida}</p>
            </div>
        )
    }

    ordenCancelada(){
        alert("la orden fue cancelada")
        this.setState({precio: null,comida: null})
    }

    establecerPedido(){
        setTimeout(()=>{
            this.setState({precio:this.props.precio,comida:this.props.comida})
        },2000)
    }

    componentDidMount(){
        this.establecerPedido()
    }

    componentDidUpdate(){
        console.log("se actualizo correctamente");
    }
}
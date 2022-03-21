import React,{Component} from "react";

export default class Componente1 extends Component{
constructor(props){
super(props)
this.state={
hora:new Date(),
segundos:0
}    
this.iniciar=this.iniciar.bind(this)
}
render(){
    return(
        <div className="App">
            <h2>{this.state.hora.toLocaleTimeString()}</h2>
            <p>{this.state.segundos}</p>
            
        </div>

    )
}

iniciar(){
setInterval(()=>{
    let segundos1=this.state.segundos+1
    this.setState({hora:new Date(),segundos:segundos1})
},1000)
}

componentDidMount(){
  this.iniciar()
}

}
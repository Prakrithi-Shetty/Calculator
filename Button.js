import React,{Component} from 'react';


class Button extends Component{
    
    buttonPress= e=>  {
        this.props.buttonPress(e.target.value);
    }
      
    render(){
        return(
            <div className="main">
                <p>
                 <button className={"calc"} value="7" onClick={this.buttonPress}>7</button>
                <button className={"calc"} value="8" onClick={this.buttonPress}>8</button>
                <button  className={"calc"}value="9" onClick={this.buttonPress}>9</button>
                <button className={"calc1"} value="*" onClick={this.buttonPress}>*</button>
                </p>
                <p>
                <button className={"calc"} value="4" onClick={this.buttonPress}>4</button>
                <button className={"calc"} value="5" onClick={this.buttonPress}>5</button>
                <button className={"calc"} value="6" onClick={this.buttonPress}>6</button>
                <button className={"calc1"} value="-" onClick={this.buttonPress}>-</button>
                </p>
                <p>
                <button className={"calc"} value="1" onClick={this.buttonPress}>1</button>
                <button className={"calc"} value="2" onClick={this.buttonPress}>2</button>
                <button className={"calc"} value="3" onClick={this.buttonPress}>3</button>
                <button  className={"calc1"}value="+" onClick={this.buttonPress}>+</button>
                </p>
                <p>
                <button  className={"calc"}value="CL" onClick={this.buttonPress}>CL</button>
                <button className={"calc"} value="0" onClick={this.buttonPress}>0</button>
                <button className={"calc"} value="=" onClick={this.buttonPress}>=</button>
                <button className={"calc1"} value="/" onClick={this.buttonPress}>/</button>
                </p>
                


      </div>
        );
    }
}

export default Button;
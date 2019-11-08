
import Button from "./Button";
import React,{Component} from 'react';
import Result from "./result"

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      result:" ",
    }
    this.buttonPress=this.buttonPress.bind(this);
    this.cal=this.cal.bind(this);
    this.clear=this.clear.bind(this);
    
  }

  buttonPress(buttonName){
    if( buttonName=== "CL")
    {
      this.clear();
    }
 else   if(buttonName ==="=")
    {
this.cal();
    }
          
   else this.setState(
        {   
            result:this.state.result+buttonName
        }
    );
}

clear(){
  this.setState(
    {
    result: " "
  }
  );
}

    cal(){
      try{
      this.setState(
        {
        result: eval(this.state.result)
      }
      );}
      catch(e)
      {
        this.setState(
          {
          result: "error"
          });
        }
      }
    
  
  render(){
   
    return ( <div >
      <Result result={this.state.result}/>
     <Button buttonPress={this.buttonPress} />
      
      
       </div>);

  }
}

export default App;
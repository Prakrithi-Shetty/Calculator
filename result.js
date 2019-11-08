import React,{Component} from 'react';
 class Result  extends Component{
     render(){
         return(
             <div className={"total"}>{this.props.result}</div>
         );
     }
 }

 export default Result;
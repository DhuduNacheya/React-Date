import React, { Component } from 'react';
import './App.css';
import { Button,Alert} from 'reactstrap';

import InputDate from './component/input';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
          startDate:null,
          startDateText:"From Date",
          startDateValid:true,
          endDate:null,
          endDateText:"To Date",
          endDateValid:true,
          disabled:true,
          message:"Please select to and from dates.",
          finalResult:null,
          alert:"info"
         }
      this.dateStateHandler=this.dateStateHandler.bind(this);
      this.calculateHandler=this.calculateHandler.bind(this);
  }


  dateStateHandler(date,id){
   
   
   if(id==="startDate"){
        
        if(!date){

          if(!this.state.endDate){
            this.setState({disabled:true,
                        startDateValid:false,
                        endDateValid:false,
                        message:"Please select to and from dates.",
                        startDate:date,
                        finalResult:null,
                        alert:"danger"});
                        }
          
          else{
          this.setState({disabled:true,
                        startDateValid:false,
                        message:"Please select a from date.",
                        startDate:date,
                        finalResult:null,
                        alert:"danger"});
          }
                  }
        else{
              if(!this.state.endDate){
                this.setState({disabled:true,
                              startDate:date,
                              endDateValid:false,
                              startDateValid:true,
                              message:"Please select a to date.",
                              finalResult:null,
                              alert:"danger"});
              }
              else if(new Date(date)>new Date(this.state.endDate)){
                this.setState({disabled:true,
                            startDateValid:false,
                            startDate:date,
                            message:"To date must be after from date.",
                            finalResult:null,
                            alert:"danger"});
              }
              else{
                this.setState({disabled:false,
                                startDateValid:true,
                                startDate:date,
                                endDateValid:true,
                                message:"Please click on calculate to get days count.",
                                finalResult:null,
                                alert:"info"});
           
                 }
            }

       }
   else{
     if(!date){
         if(!this.state.startDate){
           this.setState({disabled:true,
                          startDateValid:false,
                          endDateValid:false,
                          message:"Please select to and from dates.",
                          endDate:date,
                          finalResult:null,
                          alert:"danger"});
          }
      else{
           this.setState({disabled:true,
                          endDate:date,
                          finalResult:null,
                          alert:"danger",
                          endDateValid:false,
                          message:"Please select a to date."});
          }     
    }
    else{
          if(!this.state.startDate){
            this.setState({disabled:true,
                          finalResult:null,
                          alert:"danger",
                          endDate:date,
                          startDateValid:false,
                          endDateValid:true,
                          message:"Please select a from date."});
          }
          else if(new Date(date)<new Date(this.state.startDate)){
            this.setState({disabled:true,
                            endDateValid:false,
                            finalResult:null,
                            endDate:date,
                            alert:"danger",
                            message:"To date must be after from date."});
          }
          else{
            this.setState({disabled:false,
                            startDateValid:true,
                            endDateValid:true,
                            endDate:date,
                            finalResult:null,
                            message:"Please click on calculate to get days count.",
                            alert:"info"});
           
          }
        }
     }  
  }

  calculateHandler(){           
   let t1 = new Date(this.state.startDate);
   let t2 = new Date(this.state.endDate);
   let result=Math.floor((Date.UTC(t2.getFullYear(), t2.getMonth(), t2.getDate()) - Date.UTC(t1.getFullYear(), t1.getMonth(), t1.getDate()) ) /(1000 * 60 * 60 * 24));
    result="Number of Days between "+t1.getDate()+"/"+(t1.getMonth()+1)+"/"+t1.getFullYear()+" and "
            +t2.getDate()+"/"+(t2.getMonth()+1) +"/"+t2.getFullYear()+" are "+result+ " Days.";
   
   this.setState({finalResult:result,
                   message:null}); 
    
  }


  render() {
    return (
      <div className={"App"}>
        
        <div className={"header-cls"}>{"Day Difference Calculator"}</div>

         <div className={"m-bl-10"}>
               {!this.state.message?null:<Alert color={this.state.alert}> {this.state.message}</Alert>}
        </div>

        <div className={"m-bl-10"}>
           
            <InputDate valid={this.state.startDateValid} dateText={this.state.startDateText} date={this.state.startDate} chng={(e)=>this.dateStateHandler(e,"startDate")}/>
        </div>
         
        <div className={"m-bl-10"}>
            
             <InputDate valid={this.state.endDateValid} dateText={this.state.endDateText} date={this.state.endDate} chng={(e)=>this.dateStateHandler(e,"endDate")}/>
        </div>


        <div className={"m-bl-10 algn"}>
            <Button disabled={this.state.disabled} color={this.state.disabled?"secondary":"primary"} onClick={this.calculateHandler}>Calculate</Button>
        </div>  
      
        <div className={"m-bl-10"}>
        {!this.state.finalResult?null:<Alert color="info">{this.state.finalResult}</Alert>}
        </div>
    
       </div>
    );
  }
}

export default App;

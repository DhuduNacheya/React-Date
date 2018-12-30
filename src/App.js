import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state={
    persons:[
      {id:'1',name:'Maxi'},
      {id:'2',name:'laxi'}
      
    ],


show: false
  };

 stateChangeHandler=(nameX)=>{

this.setState({
  persons:[
    {name:nameX}
    
  ]


});

 }


 chnHandler=(event,id)=>{
  
  this.setState({
    persons:[
      {name:event.target.value}
      
    ], 
  });
  
   }

   delHandler=(index)=>{
   const pr=this.state.persons.splice();

   pr.splice(index,1);
   this.setState({persons:pr})
    
     }



showHandler=()=>{

  const ar=this.state.show;
  this.setState({show:!ar});
}

  render() {

    const personsx=(<div>
      {

        this.state.persons.map((perso,index)=><Person chn={(event)=>this.chnHandler(event,perso.id)} click={this.delHandler.bind(this,index)} name={perso.name}/>)
      }
      </div>);

// <Person chn={this.chnHandler}  click={this.stateChangeHandler.bind(this,'DRE')}  name={this.state.persons[0].name}>Hey there again</Person>
  

    return (
      <div className="App">
    
      <button onClick={this.stateChangeHandler.bind(this,'HERo')}>Click</button>

            <button onClick={this.showHandler}>Click again</button>
        hi there
        { this.state.show  ?personsx:null
     }
      </div>
    );
  }
}

export default App;
 
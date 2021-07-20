import React, { Component } from 'react'
import './List.css'

 class List extends Component {
    constructor(props){
        super(props);

        this.state={
            userInput:"",
            list:[],
            count:1
        }
    }

    updateInput(value){
        this.setState({
            userInput:value
        });
    }
    addTask(){
        if(this.userInput !==""){
            const userInput={
                id: this.state.count,
              
                value: this.state.userInput,
               
            }
            
      
        const list=[...this.state.list];
        list.push(userInput);

        this.setState({
            count:this.state.count+1,
            list,
            userInput:""
        });
    }
    }
    deleteTask(key){
        console.log(key)
        const list = [...this.state.list];
        list.splice(key, 1);
        this.setState({
          list:list,
        });
      
      }
      
    render() {
        return (
            <div>
               <input type='text' value={this.state.userInput} placeholder='Add Task....'   onChange = {item => this.updateInput(item.target.value)}></input>
               <button onClick={() => this.addTask()}>ADD TASK</button>

              
  <div className="table">
  <table>     
  {this.state.list.map((item, index) => {return(
      <tr key={item.id}>
    <td>{item.value}</td>
    <td> <button onClick = { () => this.deleteTask(index) }>delete</button></td>
    </tr>
    )})}
  </table>
  </div>


            </div>
        )
    }
}

export default List

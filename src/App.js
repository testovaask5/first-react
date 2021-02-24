import React from 'react'
import Task from './components/Task';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'Init',
      tasks: [{ text: 'Task 1', completed: false },
              { text: 'Task 2', completed: true },
              { text: 'Task 3', completed: true }]
    }
    // this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(event) {
    console.log(this)
    event.preventDefault();
    if (this.state.inputValue !== '') this.setState((prevState) => {
      return {
        // tasks: [...prevState.tasks, <Task key={prevState.tasks.length} text={prevState.inputValue} />], 
        tasks: [...prevState.tasks, { text: prevState.inputValue, completed: false }],
        inputValue: ''
      }
    })
  }

  inputHandler = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  render() {
    // const jsxArrayExample = [<li>One</li>, <li>Two</li>, <li>Three</li>]
    return (
      <>
        <form onSubmit={(event) => this.submitHandler(event)}>
          <input value={this.state.inputValue} onChange={this.inputHandler} type="text" />
          <button type="submit">Submit</button>
        </form>
        {/* <p>{this.state.message}</p> */}
        <ul>
          {this.state.tasks.map((task, index) => {
            return <Task key={index} text={task.text} completed={task.completed} />
          })}
        </ul>
      </>
    )
  }
  // render() {
  //   console.log(this.props)
  //   return (
  //     <div>
  //       <input onChange={(event) => {
  //         this.setState((prevState) => {
  //           return { 
  //             value: event.target.value,
  //           }
  //         })
  //       }} type="text" />
  //       <p>{this.state.value.toUpperCase()}</p>
  //       <p>{this.state.counter}</p>        
  //       <button onClick={() => {
  //         this.setState((prevState) => {
  //           return {
  //             counter: prevState.counter + 1
  //           }
  //         })
  //       }}>Click</button>
  //     </div>
  //   )
  // }
}


// class TestClass {
//   constructor(mes1, mes2) {

//   }

//   method1 () {
//     console.log('method1')
//   }
// }

// class ChildClass extends TestClass {
//   constructor(mes1, mes2) {
//     super();    
//     this.mes1 = mes1
//     this.mes2 = mes2 
//   }

//   method2 () {
//     console.log(this.mes1 + ' ' + this.mes2)
//   }
// }
// class ChildClass2 extends ChildClass {
//   constructor(mes1, mes2) {
//     super();    
//     this.mes1 = mes1
//     this.mes2 = mes2 
//   }

//   method2 () {
//     console.log(this.mes1 + ' ' + this.mes2)
//   }
// }

// const testObj = new TestClass()
// testObj.method1()
// const childObj = new ChildClass('Hello', 'World')
// childObj.method1()

// function ChildClass2 (mes1, mes2) {
//   this.mes1 = mes1
//   this.mes2 = mes2 
// }
// ChildClass2.prototype.method1 = function () {
//   console.log(this.mes1 + ' ' + this.mes2)
// }

// ChildClass2.__proto__ = ChildClass.prototype

// const childObj2 = new ChildClass2('Hello', 'World')






// import { useState } from "react";

// export default function App(props) {
//   const [counter, setCounter] = useState(0);

//   console.log('Render')

//   function click() {
//     setCounter(counter + 1)
//   }

//   return (
//     <div>
//       {counter}
//       <button onClick={click}>Click</button>
//     </div>
//   )
// }

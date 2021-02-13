import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        {/* {this.props.name} */}
        {this.state.counter}
        <button onClick={() => {
          this.setState({counter: this.state.counter + 1})
        }}>Click</button>
      </div>
    )
  }
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

import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


// class TodoList extends React.Component {
//   constructor() {
//     super();

//       this.state = {
//         names : ["syed","syed","syed","syed"]
      
//       }
//   }
//   render() {
//     return(
//       <ul>
//       {
//         this.state.names.map(function(name){
//           return <TodoItem detail={name} />
//         })
//       }
        
//       </ul>

//     )
//   }
// }
// class TodoItem extends React.Component {
//   render() {
//     return(
//       <li>
//   {this.props.detail}
//       </li>
//     )
//   }
// }
// ReactDOM.render(
//   <TodoList />
//   ,
//   document.getElementById("root")
// )





// class TodoList1 extends React.Component {
//   constructor() {
//     super();

//   this.state= {
//     names1: ["syeda","syeda","syeda","syeda","syeda","syeda"]
//    }
//   }
//   render() {
//     return(
//       <ul>
//       {
//         this.state.names1.map(function(name){
//           return <TodoItem1 key={name} detail={name} />
//         })
//       }
      
//       </ul>
//     )
//   }
// }
// class TodoItem1 extends React.Component{
//   render() {
//     return(
//       <li>
//         {this.props.detail}
//       </li>
//     )
//   }
// }
// ReactDOM.render(
//   <TodoList1 />
//   ,
//   document.getElementById("root1")
// )



// class TodoList2 extends React.Component {
//   constructor() {
//     super();
//     this.changeStatus=this.changeStatus.bind(this)

//   this.state= {
//     task:[{
//       name:"kashif",
//       completed:false
//     },
//     {
//       name:"raza",
//       completed:false
//     },
//     {
//       name:"bukhari",
//       completed:false
//     },
//     ]
//    }
//   }
//   changeStatus(){

//   }
//   render() {
//     return(
//       <ul>
//       {
//         this.state.task.map(function(task){
//           return <TodoItem2 key={task.name} detail={task} />
//         })
//       }
      
//       </ul>
//     )
//   }
// }
// class TodoItem2 extends React.Component{
//   render() {
//     return(
//       <li className={this.props.detail.completed ? "completed" : ""}>
//         {this.props.detail.name}
//       </li>
//     )
//   }
// }
// ReactDOM.render(
//   <TodoList2 />
//   ,
//   document.getElementById("root2")
// )

class TodoList extends React.Component{
  constructor() {
    super();
    this.changeStutas=this.changeStutas.bind(this);
    
    this.state ={
      task:[{
        name:"syed",
        completed:false
      },
      {
        name:"kashif",
        completed:"false"
      },
      {
        name:"raza",
        completed:false
      },
      ]
    }
    
  }
  changeStutas(index){
    var task=this.state.task;
    var task=task[index];
    task.completed=!task.completed
    this.setState({
      task:task
    })
    console.log(this.state.task[index]);
  }
  render() {
    return(
      <ul>
      {
        this.state.task.map((task ,index) => {
          return <TodoItem key={task.name} index={index} clickHandler={this.changeStutas} detail={task}/>
        })
      }
      
      </ul>
    )
  }
}
class TodoItem extends React.Component{
  render() {
    return(
      <li onClick={ () => {
        this.props.clickHandler(this.props.index);
      }} 
      className={this.props.detail.completed ? "completed" :""}>
        {this.props.detail.name}
      </li>
    )
  }
}

ReactDOM.render(
  <TodoList />
  ,
  document.getElementById("root1")
)

























let headers = [
  "Book", "Author", "Language", "Published", "Sales"
];

let data = [
  ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"],
  ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
  ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
  ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
  ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"],
  ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
  ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"],
];



ReactDOM.render(
  <App headers={headers} initialData={data} />,
  document.getElementById('root2')
);
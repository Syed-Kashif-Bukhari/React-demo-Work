import React from 'react';
import ReactDOM from 'react-dom';


// //import App from './App';
// //import './index.css';

// // ReactDOM.render(
// //   <App />,
// //   document.getElementById('root')
// // );


// //agher aap single lagana chatai hain to yai formula is timaal ho ga 
// // var h1= React.createElement("h1",null,"HelloExample");
// // ReactDOM.render(
// //   h1
// //   ,
// //   document.getElementById("root")
// // )






// // //agher aap 02 ya 02 sai zaid heading ya koch or chiz lagana chatai hain to yai formula is timaal ho ga 


// // var h2 =React.createElement("h2",null,"HelloExample heading2");

// // ReactDOM.render(
// //   React.createElement("div",null,h2,h2,h2,h2)
// //   ,
// //   document.getElementById("root")
// // )












// // //yai b extra kaam ki dosri misal hain
// // var h3 = React.createElement("h3",null,"HelloExample heading 3");
// // ReactDOM.render(
// //   React.createElement("div",null,h3,h3,h3,h3,h3,h3)
// //   ,
// //   document.getElementById("root")
// // )





















// // yai 01 dosri misal hai jis mai hum 01 React.createElement zaria sai kaam kaaingai yai bilkul oper di gai misal ki tarha sai hi hoga
//   var h1 = React.createElement("h1",null,"some thing in strenge");

//   class HelloWorld extends React.Component {
//     render() {
//       return React.createElement("div",null,h1,h1,h1,h1,h1,h1,h1,h1)
//     }
//   }
//   ReactDOM.render(
//     React.createElement(HelloWorld, null)
//     ,
//     document.getElementById("root")
//   )




// //  var h1 = React.createElement("h1",null,"some thing in strenge");


// // class HelloWorld1 extends React.Component {
// // render() {
// // console.log(Object.isFrozen(this.props))
// // return React.createElement('div', null, h1, h1)
// // }
// // }

// // ReactDOM.render(
// //     React.createElement(HelloWorld1, null)
// //     ,
// //     document.getElementById("root1")
// //   )

// // var h1 = React.createElement("h1",null,"some thing in strenge");
// class Heading extends React.Component {
//   render() {
//   if (this.props.Heading)  return <h1>Hello</h1>
//   else return <p>Hello</p>
  
//   }
// }

// ReactDOM.render(
//   React.createElement(Heading,null,)
//   ,
//   document.getElementById("root2")
// )

// // render() {
// // if (this.props.heading) return <h1>Hello</h1>
// // else return <p>Hello</p>
// // }
// ReactDOM.render(<ul>
//                      <li>item 1</li>
//                      <li>item 2</li>
//                      <li>item 3</li>
//                 </ul>,
//                  document.getElementById('react-container'))





















// var em = React.createElement("em",null,"YA Nabi Nazer e Karam Farmana!");

// class Hello1 extends React.Component {
//   render() {
//     return  React.createElement("em",null,"YA Nabi Nazer e Karam Farmana!")
//   }
// }
// ReactDOM.render(
//   React.createElement(Hello1,null,)
//   ,
//   document.getElementById("root4")
// )












// var raza = React.createElement("b",null,"YA Nabi Nazer e Karam Farmana! kasdsdkads");

// class Hello2 extends React.Component {
//   render() {
//     return  React.createElement("b",null,"YA Nabi Nazer e Karam Farmana! kasdsdkads")
//   }
// }
// ReactDOM.render(
//   React.createElement(Hello2,null,)
//   ,
//   document.getElementById("root3")
// )

















// ReactDOM.render(
// React.createElement(
// 'div',
// null,
// React.createElement(HelloWorld, {
// id: 'ember',
// frameworkName: 'Ember.js',
// title: 'A framework for creating ambitious web applications.'}),
// React.createElement(Hello1, {
// id: 'backbone',
// frameworkName: 'Backbone.js',
// title: 'Backbone.js gives structure to web applications...'}),
// React.createElement(Hello2, {
// id: 'angular',
// frameworkName: 'Angular.js',
// title: 'Superheroic JavaScript MVW Framework'})
// ),
// document.getElementById('root5')
// )








// class HelloWorld11 extends React.Component {
// render() {
// return React.createElement(
// 'b',
// null,
// 'ya Nabi Nazer e Karam Farmana ai Hasnain Kai  ' + this.props.frameworkName + ' Nana world!!!' 
// )
// }
// }
// ReactDOM.render(
//   React.createElement(HelloWorld11,null,)
//   ,
//   document.getElementById("root6")
// )





















// class HelloWorld12 extends React.Component {
// render() {
// return React.createElement(
// 'h1',
// this.props,
// 'ya Nabi Nazer e Karam Farmana ai Hasnain Kai  ' + this.props.frameworkName + ' Nana world!!!' 
// )
// }
// }
// ReactDOM.render(
// React.createElement(
// 'div',
// null,
// React.createElement(HelloWorld12, {
// id: 'ember', 
// frameworkName: 'Ember.js',
// title: 'A framework for creating ambitious web applications.'}), 
// React.createElement(HelloWorld12, {
// id: 'backbone',
// frameworkName: 'Backbone.js', 
// title: 'Backbone.js gives structure to web applications...'}),
// React.createElement(HelloWorld12, {
// id: 'angular',
// frameworkName: 'Angular.js',
// title: 'Superheroic JavaScript MVW Framework'})
// ),
// document.getElementById('content')
// )
// ReactDOM.render(
//   React.createElement(HelloWorld12,null,)
//   ,
//   document.getElementById("root8")
//   )





















// let helloWorldReactElement = <h1>Hello world!</h1>
// class HelloWorld extends React.Component {
// render() {
// return <div>
// {helloWorldReactElement}
// {helloWorldReactElement}
// </div>
// }
// }
// ReactDOM.render(
// <HelloWorld/>,
// document.getElementById('root')
// )

























// var helloWorldReactElement1 = <h1>Hello world!</h1>
// class HelloWorld1 extends React.Component {
// render() {
// return <div>
// {helloWorldReactElement1}
// {helloWorldReactElement1}
// </div>
// }
// }
// ReactDOM.render(
// <HelloWorld1/>,
// document.getElementById('root1'))




// //jub aap ko page mai link daini hoto get url 01 function banaingai

// let helloWorldReactElement = <h1>Hello world!</h1>
// class HelloWorld2 extends React.Component {
// // bilkul is tarha sai    
//     getUrl() {
// return (
// // return mai aap 02 ya 02 sai ziyada link ko zahir karna chatai hai to <div> bana kar is mai aap link dai daingai     
//     <div>
//     'http://webapplog.com',
//     <br /><br />
//     'http://www.dawateislami.net'
//     <br /><br />
//     'http://www.saylaniwelfare.com',
//     </div>
// )
// }
// render() {
// return (
// // or phir usi getUrl() ko call kar daingai     
// <div>
// <p>Your REST API URL is:

// <a href={this.getUrl()}> 
//     {this.getUrl()}
// </a>
// </p>


// </div>
// )
// }
// }

// ReactDOM.render(
// <HelloWorld2/>,

// document.getElementById('root2'))







//let helloWorldReactElement2 = <h1>Hello world!</h1>
// class HelloWorld3 extends React.Component {
   
//     getUrl() {
// return (

//     <div>
//     'http://webapplog.com',
//     <br /><br />
//     'http://www.dawateislami.net'
//     <br /><br />
//     'http://www.saylaniwelfare.com',
//     </div>
// )
// }
// render() {
//     if (this.props.user.session)
// return <a href="/logout">Logout</a>
// else
// return <a href="/login">Login</a>
// return (

// <div>
// <p>Your REST API URL is:

// <a href={this.getUrl()}> 
//     {this.getUrl()}
// </a>
// </p>


// </div>
// )
// }
// }

// ReactDOM.render(
// <HelloWorld3/>,

// document.getElementById('root3'))



























// let helloWorldReactElement4 = <h1>Hello world!</h1>
// class HelloWorld4 extends React.Component {
   
//     getUrl() {
// return (

//     <div>
//     'http://webapplog.com',
//     <br /><br />
//     'http://www.dawateislami.net'
//     <br /><br />
//     'http://www.saylaniwelfare.com',
//     </div>
// )
// }
// render() {
//     if (this.props.user.session)
// return <a href="/logout">Logout</a>
// else
// return <a href="/login">Login</a>
// return (

// <div>
// <p>Your REST API URL is:

// <a href={this.getUrl()}> 
//     {this.getUrl()}
// </a>
// </p>


// </div>
// )
// }
// }

// ReactDOM.render(
// <HelloWorld4/>,

// document.getElementById('root4'))














//let helloWorldReactElement5 = <h1>Hello world!</h1>
class HelloWorld5 extends React.Component {


    //jub b hamai styling karni hogi ya ni css ka istimal karna ho ga to hum is tarha sai kar tai hain
    //<div style={{backgroundColor: "black"}} jub b hamai forn kaam karwana ho to double {{}} bracket dal ka kaam kar daingai
    // or baad mai kaam karwana ho to is tarha karaingai <div style={smallFontSize}>
    getUrls() {
        return(
            <div style={{backgroundColor: "black"}}>
             http://www.dawateislami.net,
             <br />
             http://www.saylaniwelfare.com,
            </div>
        )
        
    }
    render() {
        return(
            <a href={this.getUrls()} style={{fontSize: "30px"}}>
              {this.getUrls()}
            </a>
        )
    }
}

ReactDOM.render(
    <HelloWorld5/>
    ,
    document.getElementById("root3")
    
)


















//clock for current time


class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {currentTime: (new Date()).toLocaleString()}


//     }


// launchClock() {
// setInterval(()=>{
// console.log('Updating time...')
// this.setState({
// currentTime: (new Date()).toLocaleString() 
// })
// }, 1000) 
// }





//     render() {
//         return(
//             <div>
//                 {this.state.currentTime}
//             </div>
//         )
//     }
// }
constructor(props) {
super(props)
this.launchClock() 
this.state = {
currentTime: (new Date()).toLocaleString() 
}
}





launchClock() {
setInterval(()=>{
console.log('Updating time...')
this.setState({
currentTime: (new Date()).toLocaleString() 
})
}, 1000) 
}








render() {
console.log('Rendering Clock...')
return <div>{this.state.currentTime}</div> 
}
}






ReactDOM.render(
   <center style={{padding: "50px"}}> <Clock /></center>
    ,
    document.getElementById("content")
)

















//demo clock
class Clock1 extends React.Component{
    constructor(props){
        super(props);
       this.continueClock()
        this.state= {
            currentTime1: (new Date()).toLocaleString()
        }
    }






continueClock() {
    setInterval(()=> {
        console.log("Updating time ...")
        this.setState({
            currentTime1: (new Date().toLocaleString())
        }) 
    }, 1000) 
}




    render() {
        console.log("Rendering Clock...")
        return(
            <div>
                {this.state.currentTime1 }
            </div>
        )
    }
}

ReactDOM.render(
    <Clock1 />
    ,
    document.getElementById("content1")
)





//demo clock for practice



class Clock2 extends React.Component {
constructor(props) {
    super(props);
    this.lonchClock()
    this.state = {
        currentTime2: (new Date()).toLocaleString() 
    }

}

lonchClock() {
    setInterval(()=> {
        console.log("Updating Time ...")
       this.setState({
         currentTime2: (new Date()).toLocaleString()  
       })

        },1000 )

    

}




    render() {
        console.log("Rendering Clock...")
        return(
            
            <div>
          
                {this.state.currentTime2}
            </div>
        )
    }
} 


ReactDOM.render(
    <Clock2/>
    ,
    document.getElementById("content2")
)






























//demo clock 
class Clock3 extends React.Component {
constructor(props) {
    super(props);
    this.lonchClock3()
    this.state = {
        currentTime3: (new Date()).toLocaleString()
    }
}

// lonchClock3() {
//     setInterval({
//         console.log("Updating Time ....")
//         setState ({
//             currentTime3: (new Date()).toLocaleString()
//         })
//     })
// }




lonchClock3 () {
    setInterval(()=>{
        console.log("updating Time.....")
        this.setState({
            currentTime3: (new Date()).toLocaleString()
        })
    }, 1000)
}


    render() {
        console.log("Rendering Clock....")
        return(
            <div>
                {this.state.currentTime3}
            </div>
        )
    }
}
ReactDOM.render(

    <Clock3/>
    ,
    document.getElementById("content3")
)
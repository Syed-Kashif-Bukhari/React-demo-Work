import React from 'react';
import ReactDOM from 'react-dom';
//  import {Router, Route, browserHistory, Link, IndexRoute } from "react-router";

import './index.css';


// // ReactDOM.render(
// // React.DOM.h1(null, "Hello World!"),
// // document.getElementById("app")
// // );
 
// // ReactDOM.render(
// //   React.DOM.h1(
// //     {
// //       id: "salam",
// //     }
// //     ,
// //     "Ya NAbi Salam Alaika"
// //   )
// //   ,
// //   document.getElementById("app")
// // )
// // ReactDOM.render(
// //   React.DOM.h1(
// // {id: "my-heading"},
// // React.DOM.span(null, "Hello"),
// // " World!"
// // )
// //   ,
// // React.DOM.h1(
// // {id: "my-heading"},
// // React.DOM.span(null,
// // React.DOM.em(null, "Hell"),
// // "o"
// // ),
// // " world!"
// // ),
// //   document.getElementById("app")
// // )
// // var Component = React.createClass({
// // render: function() {
// // return React.DOM.span(null, "I'm so custom");
// // }
// // });
// // ReactDOM.render(
// // React.createElement(Component),
// // document.getElementById("app")
// // );















































// // <br />







// // var myComponent = React.createClass({
// //   render: function() {
// //     return React.DOM.span(
// //       null,"ya Habi Salam Alaika"
// //     );
// //   }
// // }

// // );

// // ReactDOM.render(
// //   React.createElement(myComponent)
// //   ,
// //   document.getElementById("root")
// // );



// // var myComponent1 = React.createClass({
// // render: function() {
// // return React.DOM.em(null,"Ya Rasool Allah");
// // }
// // });

// // ReactDOM.render(
// //   React.createElement(myComponent1)
// //   ,
// //   document.getElementById("app")
// // )














// // var myComponent2 = React.createClass({
// // render: function() {
// //   return React.DOM.b(null,"karam Ya Rasool Allah....................");
// // } 
// // });
// // ReactDOM.render(
// //   React.createElement(myComponent2)
// //   ,
// //   document.getElementById("salam")
// // );




// // var myComponent3 = React.createClass({
// // render: function() {
// //   return React.DOM.h1(null,"jumma Mubarak")
// // }
// // });

// // ReactDOM.render(
// //   React.createElement(myComponent3)
// // ,
// // document.getElementById("labaik")
// // );








// // var Component4 = React.createClass({
// // render: function() {
// // return React.DOM.span(null, "My name is " + this.props.name);
// // }
// // });
// // ReactDOM.render(
// // React.createElement(Component4, {
// // name: "Bob",
// // }),
// // document.getElementById("app1")
// // );












// // var Component5 = React.createClass({
// // render: function() {
// //   return React.DOM.i(null,"ya Nabi Nazer e Karam farmana ai hasnain kai nana aia hasnain kai nana" + this.props.name)
// // }
// // });
// // ReactDOM.render(
// //   React.createElement(Component5, {
// //     name: "syed kashif bukhari"
// //   })
// //   ,
// //   document.getElementById("app2")
// // )













// // var Component6 = React.createClass({
// // render: function() {
// //   return React.DOM.i(
// //     null,"yai naza mairai peer ki  " +  this.props.name
// //   )
// // }
// // });

// // ReactDOM.render(
// // React.createElement(Component6,
// // {
// //   name: "Attar..............."
// // }
// // )
// //   ,
// //   document.getElementById("app3")
// // )




// // var Component7 = React.createClass({
// // render: function() {
// //   return React.DOM.h6(null,"lasdkajsdjsalkdjsalk" + this.props.name)
// // }
// // });

// // ReactDOM.render(
// //   React.createElement(Component7,{
// //     name: "syed*******************"
// //   })
// //   ,
// //   document.getElementById("app3")
// // );

























// // var Component8 =React.createClass({
// //   render: function() {
// //     return React.DOM.h1(null,"aksdsadsajd      " + this.props.name)
// //   }
// // });

// // ReactDOM.render(
// //   React.createElement(Component8,{
// //     name: "ttttttttttttttttttttttt"
// //   })
// //   ,
// //   document.getElementById("app8")
// // );










// // var Component9 = React.createClass({
// // propTypes: {
// // name: React.PropTypes.string.isRequired,
// // },
// // render: function() {
// // return React.DOM.span(null, "My name is " + this.props.name);
// // }
// // });
// // ReactDOM.render(
// // React.createElement(Component9, {
// // // name: "Bob",
// // }),
// // document.getElementById("app8")
// // );




// // var Component10 = React.createClass({
// //   render: function() {
// //     return React.DOM.h2(null,
// //       "salam and salat9999999999999999" + this.props.name
// //    )
// //   }
// // });

// // ReactDOM.render(
// //   React.createElement(Component10,{
// //     name: "salat9999999999999999 "
// //   }
// //   )
// //   ,
// //   document.getElementById("app9")
// // );










// // var Component11 = React.createClass({
// // PropTypes: {
// //   name: React.PropTypes.string.isRequired
// // },
// // render: function() {
// //   return React.DOM.h1(null,"ajshdkahsdsahsahd " + this.props.name)
// // }
// // });

// // ReactDOM.render(
// //   React.createElement(Component11,{
// //     name: "lkasdkasdas" ,
// //     //name: 123456,
// //   })
// //   ,
// //   document.getElementById("app9")
// // )


// // var Component12 = React.createClass({
// // propTypes: {
// // firstName: React.PropTypes.string.isRequired,
// // middleName: React.PropTypes.string,
// // familyName: React.PropTypes.string.isRequired,
// // address: React.PropTypes.string,
// // },
// // getDefaultProps: function() {
// // return {
// // middleName: '',
// // address: 'n/a',
// // };
// // },
// // render: function() {/* ... */}
// // });
// // //  ReactDOM.render(Component12,{
// // //    firstName:"asda;sdk  " ,
// // //    middleName: "asdsad",
// // //    familyName: "aksksadj",
// // //    address:"sadsada"
// // //  }
// // //    ,
// // //      document.getElementById("app9")
// // //  )



// // var TextAreaCounter = React.createClass({
// // propTypes: {
// // text: React.PropTypes.string,
// // },
// // getDefaultProps: function() {
// // return {
// // text: '',
// // };
// // },
// // render: function() {
// // return React.DOM.div(null,
// // React.DOM.textarea({
// // defaultValue: this.props.text,
// // }),
// // React.DOM.h3(null, this.props.text.length)
// // );
// // }
// // });

// // ReactDOM.render(
// // React.createElement(TextAreaCounter, {
// // text: "Bob",
// // }),
// // document.getElementById("app")
// // );













// // // var Component13 = React.createClass({
// // //   PropTypes:{
// // //     firstName: React.propTypes.string.isRequired,
// // //     lastName: React.propTypes.string,
// // //     familyName: React.propTypes.string.isRequired,
// // //     address:React.propTypes.string,
// // //   },
// // //   getDefaultProps: function() {
// // //     return {
// // //       lastName:" ",
// // //       address: " ",
// // //     },
// // //   };
// // // // })



// // // // var  Component15 = React.createClass({
// // // // PropTypes: {
// // // //   name: React.propTypes.string.isRequired,
// // // // },
// // // // render: function() {
// // // //   return React.DOM.h3(null, " it is My Name " + this.props.name);
// // // // }
// // // // });
// // // // ReactDOM.render(React.createElement(Component15,{
// // // // name: "sulaiman",
// // // // })
// // // //   ,
// // // //   document.getElementById("app9")
// // // // )





// // // // var Component15 = React.createClass({
// // // // propTypes: {
// // // //   name: React.propTypes.string
// // // // },
// // // // render: function() {
// // // //   return React.DOM.h1(null, "my name is" + this.props.name

// // // // ),
 

// // // // }),

// // var Component = React.createClass({
// // propTypes: {
// // name: React.PropTypes.string.isRequired,
// // },
// // render: function() {
// // return React.DOM.span(null, "My name is " + this.props.name);
// // }
// // });

// // ReactDOM.render(
// // React.createElement(Component, {
// // // name: "Bob",
// // }),
// // document.getElementById("app8")
// // );

// // var component1 = React.createClass({
// // PropTypes: {
// //   name: React.propTypes.string,
// // },
// // render: function() {
// //   return React.DOM.span(null,
// //     "asdsdsdfsdf " + this.props.name
// //   );
// // }
// // });
// // ReactDOM.render(
// //   React.createElement(component1,{
// //     name: "salman",
// //   })
// //   ,
// //   document.getElementById("app3")
// // );




// // var Component3 = React.createClass({
// // propTypes: {
// // firstName: React.PropTypes.string.isRequired,
// // middleName: React.PropTypes.string,
// // familyName: React.PropTypes.string.isRequired,
// // address: React.PropTypes.string,
// // },
// // getDefaultProps: function() {
// // return {
// // middleName: '',
// // address: 'n/a',
// // };
// // },
// // render: function() {/* ... */}
// // });
// // ReactDOM.render(
// // React.createElement(Component3, {
// // // name: "Bob",
// // }),
// // document.getElementById("app2")
// // );



















// // var Component14 = React.createClass({
// // PropTypes: ""
// // });







// // const App=() => (
// //   <div>
// //   <Link to="About">About Here</Link>
// //   <br />
// //   <Link activeClassName="active" to="/About/city">City</Link>
// //   { " "}
// //   <Link activeClassName="active" to="/About/sport">sport</Link>
// //   <h2>App</h2>
// //   </div>
// // );
// // const About=(props) => (
// //    <div>
// //    <div>{props.children}</div>
// //   <Link to="App">App Here</Link>
// //   <h2>About</h2>
// //   </div>
// // );
// // const city =() => (
// //   <img src="https://www.google.com.pk/imgres?imgurl=http%3A%2F%2Fwww.really-learn-english.com%2Fimage-files%2F214x214xb-sound.jpg.pagespeed.ic.JKI1l4jYHZ.jpg&imgrefurl=http%3A%2F%2Fwww.really-learn-english.com%2Fhow-to-teach-the-alphabet-esl.html&docid=FLsCll8oF2tfbM&tbnid=POdI4urpnW4CgM%3A&vet=1&w=214&h=214&bih=667&biw=1024&ved=0ahUKEwjZ6NeAq_HRAhUEChoKHQpADVcQxiAIAygB&iact=c&ictx=1" />
// // )
// // const sport =() => (
// //   <img src="https://www.google.com.pk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiZ7cKAq_HRAhWBfxoKHS-eBVAQjRwIBw&url=http%3A%2F%2Fwww.really-learn-english.com%2Fenglish-pronunciation-lesson-25-s-and-z-sounds.html&psig=AFQjCNHX0WlFVbJJ2S7Tm2NrbpyvjjEf_g&ust=1486122253864089" />
// // )
// // const indexRoute = () => (
// //   <div>Index</div>
// // )
// // ReactDOM.render(
// //   <Router history={browserHistory}>
// //   <Route path="/" component={App} />
// //   <Route path="/About" component={About}>
// //     <IndexRoute component={index} />
// //     <Route path="city" component={city} />
// //     <Route path="sport" component={sport} />
// //   </Route>
// //   </Router>
// //   ,
// //   document.getElementById("root")
// // )


// /*
// const App=() => (
//   <div>
//   <Link to="/About">About</Link>
//   <h2>App</h2>
//   </div>
// );
// const About =() => (
//   <div>
//   <Link to="/">App</Link>
//   <h2>About</h2>
//   </div>
// )

// ReactDOM.render(
//   <Router history={browserHistory}>
//   <Route path="/" component={App} />
//   <Route path="/About" component={About} /> 
//   </Router>
//   ,
//   document.getElementById("root")
// )




// const App =() => (
//   <div>
//   <Link to="/About">About</Link>
//   <h2>App</h2>
//   </div>
// );
// const About =(props) => (
//   <div>
//   <Link to="/">App</Link>
//   <div>{props.children}</div>
//   <h2>About</h2>
//   </div>
// );
// const city =() => (
//   <img src="salam.jpg" alt="" /> 
// )
// const sport =() => (
//   <img src="salam.jpg" alt="" />
// )

// ReactDOM.render(
//   <Router history={browserHistory}>
//   <Route path="/" component={App} />
//   <Route path="/About" component={About}>
//     <Route path="city" component={city} />
//     <Route path="sprot" component={sport} />
//   </Route>
//   </Router>
//   ,
//   document.getElementById("root")
// )



// const App=() => (
//   <div>
//   <Link to="/About"><img src="salam.jpeg" />pic</Link>
//   <h2>App</h2>
//   </div>
// );
// const About=() => (
//   <div>
//   <Link to="/">App</Link>
//   <h2>About</h2>
//   </div>
// ); 

//  ReactDOM.render(
//    <Router history={browserHistory}>
//    <Route path="/" component={App} />
//    <Route path="/About" component={About} />
//    </Router>
//    ,
//    document.getElementById("root")
//  );

// class Hello extends React.Component {
//   render() {
//     return(
//       <h1>Hello Sir</h1>
//     )
//   }
// }
// class World extends React.Component {
//   render() {
//     return(
//       <h2>Sir salam</h2>
//     )
//   }
// }
// class HelloWorld extends React.Component {
//   render() {
//     return(
//       <div>
//       <section>
//       <center>
//       <Hello />
//       <World />
//       </center>
//       </section>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<HelloWorld />, document.getElementById("root"))
// */
// // var TextAreaCounter = React.createClass({
// // propTypes: {
// // text: React.PropTypes.string,
// // },
// // getDefaultProps: function() {
// // return {
// // text: '',
// // };
// // },
// // render: function() {
// // return React.DOM.div(null,
// // React.DOM.textarea({
// // defaultValue: this.props.text,
// // }),
// // React.DOM.h3(null, this.props.text.length)
// // );
// // }
// // });
// // ReactDOM.render(
// // React.createElement(TextAreaCounter, {
// // text: "Bob",
// // }),
// // document.getElementById("app")
// // );

// // var TextAreaCounter = React.createClass({
// // _log: function(methodName, args) {
// // console.log(methodName, args);
// // },
// // componentWillUpdate: function() {
// // this._log('componentWillUpdate', arguments);
// // },
// // componentDidUpdate: function() {
// // this._log('componentDidUpdate', arguments);
// // },
// // componentWillMount: function() {
// // this._log('componentWillMount', arguments);
// // },
// // componentDidMount: function() {
// // this._log('componentDidMount', arguments);
// // },
// // componentWillUnmount: function() {
// // this._log('componentWillUnmount', arguments);
// // },
// // // ...
// // // more implementation, render(), etc.
// // };
// // var headers = [
// // "Book", "Author", "Language", "Published", "Sales"
// // ];
// // var data = [
// // ["The Lord of the Rings", "J. R. R. Tolkien",
// // "English", "1954–1955", "150 million"],
// // ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
// // "French", "1943", "140 million"],
// // ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
// // "English", "1997", "107 million"],
// // ["And Then There Were None", "Agatha Christie",
// // "English", "1939", "100 million"],
// // ["Dream of the Red Chamber", "Cao Xueqin",
// // "Chinese", "1754–1791", "100 million"],
// // ["The Hobbit", "J. R. R. Tolkien",
// // "English", "1937", "100 million"],
// // ["She: A History of Adventure", "H. Rider Haggard",
// // "English", "1887", "100 million"],
// // ];
// // var Excel = React.createClass({
// // render: function() {
// // return (
// // React.DOM.table(null,
// // React.DOM.thead(null,
// // React.DOM.tr(null,
// // this.props.headers.map(function(title) {
// // return React.DOM.th(null, title);
// // })
// // )
// // )
// // )
// // );
// // }
// // });
// // ReactDOM.render(
// // React.createElement(Excel, {
// // headers: headers,
// // initialData: data,
// // }),
// // document.getElementById("app")
// // );


































// var headers = ["Faizan-e-Sunnat","Faizan-e-Ramzan","Mahnama Faizan-e-Madina","Gibbat Ki Tabha Kariya","Gussai Ka Ilajh"];
// var data = [
// ["The Lord of the Rings", "J. R. R. Tolkien",
// "English", "1954–1955", "150 million"],
// ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
// "French", "1943", "140 million"],
// ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
// "English", "1997", "107 million"],
// ["And Then There Were None", "Agatha Christie",
// "English", "1939", "100 million"],
// ["Dream of the Red Chamber", "Cao Xueqin",
// "Chinese", "1754–1791", "100 million"],
// ["The Hobbit", "J. R. R. Tolkien",
// "English", "1937", "100 million"],
// ["She: A History of Adventure", "H. Rider Haggard",
// "English", "1887", "100 million"],
// ];


// // getInitialState: function() {
// // return {data: this.props.initialData};
// // },
// // render: function() {
// // return (
// // React.DOM.table(null,
// // React.DOM.thead(null,
// // React.DOM.tr(null,
// // this.props.headers.map(function(title, idx) {
// // return React.DOM.th({key: idx}, title);
// // })
// // )
// // ),
// // React.DOM.tbody(null,
// // this.state.data.map(function(row, idx) {
// // return (
// // React.DOM.tr({key: idx},
// // row.map(function(cell, idx) {
// // return React.DOM.td({key: idx}, cell);
// // })
// // )
// // );
// // })
// // ReactDOM.render(
// // React.createElement(Excel, {
// // headers: headers,
// // initialData: data,
// // }),
// // document.getElementById("app")
// // );



//   //  var Excel = React.createClass({
//   //           displayName: 'Excel',
//   //           getInitialState: function(){
//   //          return {
//   //               data:this.props.initialData,
//   //               sortby: null,
//   //               descending: false,
//   //               edit: null,
//   //               search: false,
//   //                };
//   //        },
//   //        propTypes: {
//   //            headers: React.PropTypes.arrayOf(
//   //               React.PropTypes.string
//   //             ),
//   //             initialData: React.PropTypes.arrayOf(
//   //                  React.PropTypes.arrayOf(
//   //                     React.PropTypes.string
//   //               )
//   //             ),
//   //           },
//   //          _shot: function(e){
//   //              var column = e.target.cellIndex;
//   //              var data = this.state.data.slice();
//   //              var descending = this.state.sortby  === column  && !this.state.descending;
//   //               data.sort( function(a,b){
//   //                  return  descending ? a[column] < b[column]
//   //                                     : a[column] > b[column] ;
//   //              }) ;
//   //              this.setState({
//   //                  data: data,
//   //                  sortby:column,
//   //                  descending: descending,
//   //              });

//   //          },
//   //          _showEditor: function(e){
//   //             this.setState({
//   //                 edit:{
//   //                     row: parseInt(e.target.dataset.row, 10),
//   //                     cell: e.target.cellIndex,
//   //                 }
//   //             });
//   //          },
//   //          _save: function(e){
//   //              e.preventDefault();
//   //              var input = e.target.firstChild;
//   //              var data = this.state.data.slice();
//   //              data[this.state.edit.row][this.state.edit.cell] = input.value;
//   //              this.setState({
//   //                  edit: null,
//   //                  data:data,
//   //              })

//   //          },
//   //          _rendreTable : function(){
//   //            return(
//   //                  React.DOM.table(null,
//   //                    React.DOM.thead({onClick: this._shot},
//   //                      React.DOM.tr(null,
//   //                        this.props.headers.map(function(title , idx) {
//   //                          if(this.state.sortby === idx){
//   //                              title += this.state.descending ? ' \u2191' : ' \u2193'
//   //                          }
//   //                         return React.DOM.th({key: idx}, title);
//   //                        },this)
//   //                       )
//   //                    ),
//   //                      React.DOM.tbody({onDoubleClick: this._showEditor},
//   //                        this._renderSearch(),
//   //                        this.state.data.map(function(row , rowidx) {
//   //                         return (
//   //                          React.DOM.tr({key: rowidx},
//   //                             row.map(function(cell, idx) {
//   //                                 var content = cell;
//   //                                 var edit = this.state.edit;
//   //                                 if(edit && edit.row ===  rowidx && edit.cell === idx){
//   //                                     content = React.DOM.form({onSubmit: this._save},
//   //                                     React.DOM.input({
//   //                                         type:'text',
//   //                                         defaultValue: content,
//   //                                     })
//   //                                     )
//   //                                 }

//   //                               return React.DOM.td({
//   //                                   key: idx,
//   //                                   'data-row': rowidx
//   //                               }, content);
//   //                           },this)
//   //                         )
//   //                        );
//   //                     },this)
//   //                 )   
//   //               )
//   //              );
//   //          },
//   //          _renderSearch: function(){
//   //              if(!this.state.search){
//   //                  return null;
//   //                  console.log('asdsa')
//   //              }
//   //              return (
//   //                  React.DOM.tr({onChange:this._search},
//   //                     this.props.headers.map(function(_ignor, idx){
//   //                       return React.DOM.td({key:idx},
//   //                          React.DOM.input({
//   //                             type: 'text',
//   //                            'data-idx': idx,
//   //                            })
//   //                         )
//   //                      })
//   //                  )
//   //              )

//   //          },
//   //          // for search 
//   //          _search: function(e){
//   //            var needle = e.target.value.toLowerCase();
//   //            if(!needle){
//   //                this.setState({data:this._preSearchData});
//   //                return;
//   //            }
//   //            var idx = e.target.dataset.idx;
//   //            var searchData = this._preSearchData.filter(function(row){
//   //               return row[idx].toString().toLowerCase().indexOf(needle) > -1;
//   //            }) 
//   //            this.setState({data: searchData});
//   //          },
//   //          // for toggle search fields
//   //           _preSearchData: null,
//   //          _toggleSearch: function() {
//   //           if (this.state.search) {
//   //               this.setState({
//   //                   data: this._preSearchData,
//   //                    search: false,
//   //                });
//   //               this._preSearchData = null;
//   //         } else {
//   //             this._preSearchData = this.state.data;
//   //             this.setState({
//   //               search: true,
//   //                });
//   //               }
//   //          },    
//   //          // for render Tool bar
           
//   //          _renderToolbar: function(){
//   //            return(
//   //                React.DOM.div({id:'tool-bar'},
//   //                React.DOM.button(
//   //                    {
//   //                        className:'search-btn',
//   //                        onClick: this._toggleSearch
//   //                     },
//   //                    "search"
//   //                ),
//   //                 React.DOM.a({
//   //                     className:'download-btn',
//   //                    onClick: this._download.bind(this, 'json'),
//   //                    href: 'data.json'
//   //                 }, 'Export JSON'),
//   //                 React.DOM.a({
//   //                    className:'download-btn',
//   //                    onClick: this._download.bind(this, 'csv'),
//   //                    href: 'data.csv'
//   //                 },  'Export CSV'))
 
//   //            );
//   //          },
//   //          // for reply
//   //           _log: [],
//   //           _logSetState: function(newState) {
//   //               // remember the old state in a clone
//   //               this._log.push(JSON.parse(JSON.stringify(
//   //                   this._log.length === 0 ? this.state : newState
//   //               )));
//   //                 this.setState(newState);
//   //          },
//   //          _replay: function() {
//   //              if (this._log.length === 0) {
//   //                 console.warn('No state to replay yet');
//   //                 return;
//   //              }
//   //            var idx = -1;
//   //            var interval = setInterval(function() {
//   //              idx++;
//   //             if (idx === this._log.length - 1) { // the end
//   //                clearInterval(interval);
//   //              }
//   //            this.setState(this._log[idx]);
//   //              }.bind(this), 1000);
//   //           },

//   //          componentDidMount: function() {
//   //             document.onkeydown = function(e) {
//   //               if (e.altKey && e.shiftKey && e.keyCode === 82) { // ALT+SHIFT+R(eplay)
//   //                 this._replay();
//   //               }
//   //             }.bind(this);
//   //           },
//   //           // for download  file
           
//   //        _download: function(format, ev) {
//   //           var contents = format === 'json'
//   //               ? JSON.stringify(this.state.data)
//   //               : this.state.data.reduce(function(result, row) {
//   //                  return result
//   //                       + row.reduce(function(rowresult, cell, idx) {
//   //                       return rowresult
//   //                           + '"'
//   //                           + cell.replace(/"/g, '""')
//   //                           + '"'
//   //                           + (idx < row.length - 1 ? ',' : '');
//   //                       }, '')
//   //                    + "\n";
//   //                 }, '');
//   //                var URL = window.URL || window.webkitURL;
//   //                var blob = new Blob([contents], {type: 'text/' + format});
//   //                ev.target.href = URL.createObjectURL(blob);
//   //                ev.target.download = 'data.' + format;
//   //           },



//   //          render: function(){
//   //            return (
//   //               React.DOM.div(null,
//   //               this._renderToolbar(),
//   //               this._rendreTable()
//   //               )
//   //            );
//   //          }
//   //      });
       
//   //      ReactDOM.render(
//   //          React.createElement(Excel ,{
//   //              headers: headers,
//   //              initialData: data,
//   //          }),
//   //          document.getElementById('app')
//   //      );
       























// // var Excel = React.createClass({
// //   render: function() {
// //     return (
// //       React.DOM.table(null,
// //         React.DOM.thead(null,
// //           React.DOM.tr(null,
// //             this.props.thead.map(function(title) {
// //               return React.DOM.th(null,title);
// //             })
// //           )
// //         )
// //       )
// //     );
// //   }
// // });
// // ReactDOM.render(
// //   React.createElement(Excel, {
// //     headers: headers,
// //     initialData: data, 
     
// //   })
// //   ,
// //   document.getElementById("app")
// // );























// // var Excel = React.createClass({
// //   render: function() {
// //     return (
// //       React.DOM.table(null,
// //         React.DOM.thead(null,
// //           React.DOM.tr(null,
// //             this.props.headers.map(function(title) {
// //               return React.DOM.th(null,title);
// //             })
// //           )
// //         )
// //       )
// //     );
// //   }
// // });
// // ReactDOM.render(
// //   React.createElement(Excel,{
// //     headers: headers,
// //     intialDAta: data,
// //   })
// //   ,
// //   document.getElementById("app")
// // );


















// // var Excel1 = React.createClass({
// //   render: function() {
// //     return React.DOM.table(null,
// //       React.DOM.thead(null,
// //         React.DOM.tr(null,
// //           this.props.headers.map(function(title,idx) {
// //             return React.DOM.th({key: idx},title);
// //           })
// //         )
// //       )
// //     );
// //   }
// // });
// // ReactDOM.render(
// //   React.createElement(Excel1,{
// //     headers: headers,
// //     initialData: data,
// //   })
// //   ,
// //   document.getElementById("app1")
// // )


// // class ShoppingList extends React.Component {
// //   render() {
// //     return (
// //       <div className="shopping-list">
// //         <h1>Shopping List for {this.props.name}</h1>
// //         <ul>
// //           <li>Instagram</li>
// //           <li>WhatsApp</li>
// //           <li>Oculus</li>
// //         </ul>
// //       </div>
// //     );
// //   }
// // }
// // class ListA extends React.Component {
// //   render() {
// //     return(
// //       <h1>ki hi zoq afza</h1>
// //     );
// //   }
// // }
// // ReactDOM.render(
// //   ,
// //   document.getElementById("")
// // )








// // var h1 = React.createElement('h1', null, 'Hello world!') 
// // ReactDOM.render(
// // React.createElement('div', null, h1, h1), 
// // document.getElementById('content')
// // )


// // import React, { Component } from 'react';
// // import { render } from 'react-dom';

// // class Home extends Component {
// //     render() {
// //         return (
// //             <div className="main">
// //                 <h1>Galleria</h1>
// //             </div>
// //         );
// //     }
// // }

// // render(<Home />, document.getElementById('container'));



















































































// //jub b aap ko varible ko render karwana ho to is tarha kartai hain yahan per Names var hai

// var Names = React.createElement("Names",null,"salam to Ya Muhammada")
// ReactDOM.render(
//   Names
//   ,
//   document.getElementById("app")
// );













//  // heading k  liyai yai istimal kartai hai h1 h2 h3 h4 h5 wagaira
// ReactDOM.render(
  
//   // React.createElement("h1",null,"sallal la ho alahi wasallam"),
//   // React.createElement("h2",null,"sallal la ho alahi wasallam"),
//   // React.createElement("h3",null,"sallal la ho alahi wasallam"),
//   React.createElement("h1",null,"sallal la ho alahi wasallam")

//   ,
  
//   document.getElementById("app1")
// );
//  // paragrah  k  liyai yai istimal kartai p wagaira
// ReactDOM.render(
  
//   // React.createElement("h1",null,"sallal la ho alahi wasallam"),
//   // React.createElement("h2",null,"sallal la ho alahi wasallam"),
//   // React.createElement("h3",null,"sallal la ho alahi wasallam"),
//   React.createElement("p",null,"jhaskjdhjashdjkash kjkalsjdksajdlsakjd kjaksljdksaljdksaljd kjsadlkjaksdjkasj kjkasjdkasdkalsjd kasjkdaskldlkjd kjalksdklsakjsd kjkalsjdklasjdkjsd kjklasjdklsajkals sallal la ho alahi wasallam jhjakshdsaashksajhdjksa jkhasjkdhsajkhdsakjdsa jjkasdjsajsa")

//   ,
  
//   document.getElementById("app2")
// );
//  // bold, italic, em  k  liyai yai istimal kartai b, i, em wagaira
// ReactDOM.render(
  
//   // React.createElement("h1",null,"sallal la ho alahi wasallam"),
//   // React.createElement("h2",null,"sallal la ho alahi wasallam"),
//   // React.createElement("h3",null,"sallal la ho alahi wasallam"),
//   React.createElement("b",null,"sallal la ho alahi wasallam jhjakshdsaashksajhdjksa jkhasjkdhsajkhdsakjdsa jjkasdjsajsa")

//   ,
  
//   document.getElementById("app3")
// );




















// var h2 = React.createElement("h2",null,"ya nabi nazer e karam");
// ReactDOM.render(
//   React.createElement("div",null,h2,h2,h2,h2,h2)
//   ,
//   document.getElementById("app9")

// )







// var p = React.createElement("p",null,"salat o salam");
// ReactDOM.render(
//   React.createElement("div",null,p,p,p,p,p,p,p,p)
//   ,
//    document.getElementById("labaik")

// )







// //ager aap ko class k zariai sai component per kaam karna hai to ya method istimal karangai

// // class  HelloWorld  extends React.Component {
// //   render() {
// //     return React.createElement("div",null,h1,h1)
// //   }
// // }
// // ReactDOM.render(
// //   ,
// //   document.getElementById("app3")
// // )


//  var Excel1 = React.createClass({
//   render: function() {
//     return React.DOM.table(null,
//       React.DOM.thead(null,
//         React.DOM.tr(null,
//           this.props.headers.map(function(title,idx) {
//             return React.DOM.th({key: idx},title);
//           })
//         )
//       )
//     );
//   }
// });
// ReactDOM.render(
//   React.createElement(Excel1,{
//     headers: headers,
//     initialData: data,
//   })
//   ,
//   document.getElementById("app9")
//  )
















// //// jub aap ko bohat sari haidings ya paira gaph banai ho 


// //let h1 = React.createElement('h1', null, 'Hello world!')
// //or
// var h1 = React.createElement('h1', null, 'ya Nabi Salam Alaika ')
// class HelloWorld extends React.Component { 
// render() { 
// return React.createElement('div', null,h1,h1,h1,h1  )
// }
// }
// ReactDOM.render( 
// React.createElement(HelloWorld, null), 
// document.getElementById('app8')
// )






// // class HelloWorld1 extends React.Component {
// // render() {
// // console.log(Object.isFrozen(this.props))
// // return React.createElement('div', null, h2, h1)
// // }
// // }

// // ReactDOM.render( 
// // React.createElement(HelloWorld1, null), 
// // document.getElementById('root1')
// // )


// var h1 = <h1>Hello world</h1>;







// class navbar extends React.Component {
//   render() {
//     return(
//       <div>
//       <center>
//       <h1>Menu</h1>
//       </center>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <navbar />
//   ,
//   document.getElementById("app")
// )




class Hello extends React.Component {
  constructor() {
    super();
    this.nabi = "Nabi Sallal la ho alaihi wasallam"; 
  }
  render() {
    return(
      <div><center>
      <marquee><h1>Breaking News! </h1></marquee>
      <h1>salam</h1>
      {this.nabi}
      </center>
      </div>
    )
  }
}
ReactDOM.render(
  <Hello />
  ,
  document.getElementById("root")
)
// todo list banai k liyai constructor mai state paas karna hai
// class TodoList extends React.Component {
//   constructor() {
//     super();
//     // jaisai k ya han paas kiya gaya 
//         this.state = {
//       name: "Ya Ilahi Raham Kar "
//     }
    
//   }
//   render() {
//     return(
//       <ul>
//           {this.state.name}
//       </ul>
//     )
//   }
// }
// class TodoItem extends React.Component{
//   render() {
//     return(
//       <li></li>
//     )
//   }
// }
// ReactDOM.render(
//   <TodoList />
//   ,
//   document.getElementById("root1")
// )


class Menu extends React.Component {
  render() {
    return(
      <div>
      <a href="#">Home</a> <br />
      <a href="#">About</a> <br />
      <a href="#">Services</a> <br />
      <a href="#">Portfolio</a> <br />
      <a href="#">Contact us</a> <br />
      
      </div>
    )
  }
}
ReactDOM.render(
<Menu />
  ,
  document.getElementById("root2")
)

// var Table = Reactable.Table;
// ReactDOM.render(
//     <Table className="table" data={[
//         { Name: 'Griffin Smith', Age: 18 },
//         { Age: 23,  Name: 'Lee Salminen' },
//         { Age: 28, Position: 'Developer' },
//     ]} />,
//     document.getElementById('table')
// );







// var headers = [
// "Book", "Author", "Language", "Published", "Sales"
// ];
// var data = [
// ["The Lord of the Rings", "J. R. R. Tolkien",
// "English", "1954–1955", "150 million"],
// ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
// "French", "1943", "140 million"],
// ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
// "English", "1997", "107 million"],
// ["And Then There Were None", "Agatha Christie",
// "English", "1939", "100 million"],
// ["Dream of the Red Chamber", "Cao Xueqin",
// "Chinese", "1754–1791", "100 million"],
// ["The Hobbit", "J. R. R. Tolkien",
// "English", "1937", "100 million"],
// ["She: A History of Adventure", "H. Rider Haggard",
// "English", "1887", "100 million"],
// ];
// var Excel = React.createClass({
//   render: function() {
//     return (
//       React.DOM.table(null,
//         React.DOM.thead(null,
//           React.DOM.tr(null,
//             this.props.headers.map(function(title){
//               return React.DOM.th(null,title)
//             })
//           )
//         )
//       )
//     )
//   }
// });
// Excel = React.createClass({
//   render: function() {
//     return (
//       React.DOM.table(null,
//         React.DOM.thead(null,
//           React.DOM.tr(null,
//             this.props.headers.map(function(cell){
//               return React.DOM.th(null,cell)
//             })
//           )
//         )
//       )
//     )
//   }
// });
// var SubList = React.createClass({
// //  this.state.data.map(function(row) {
// // return (
// // React.DOM.tr(null,
// // row.map(function(cell) {
// // return React.DOM.td(null, cell);
// // })
// // )
// // );
// // })
// // })
// ReactDOM.render(React.createElement(Excel,{
//   headers: headers,
//   initialData: data
// })
// ,
// document.getElementById("table")
// );
// // var React = require('react');
// // var Dropdown = require('react-simple-dropdown');
// // var DropdownTrigger = Dropdown.DropdownTrigger;
// // var DropdownContent = Dropdown.DropdownContent;
 
// // var Menu = React.createClass({
// //     render: function () {
// //         return (
// //             <Dropdown>
// //                 <DropdownTrigger>Profile</DropdownTrigger>
// //                 <DropdownContent>
// //                     <img src="avatar.jpg" /> Username
// //                     <ul>
// //                         <li>
// //                             <a href="/profile">Profile</a>
// //                         </li>
// //                         <li>
// //                             <a href="/favorites">Favorites</a>
// //                         </li>
// //                         <li>
// //                             <a href="/logout">Log Out</a>
// //                         </li>
// //                     </ul>
// //                 </DropdownContent>
// //             </Dropdown>
// //         )
// //     }
// // });
// var MyMenuBar = React.createClass({
//   render: function () {
//     return (
//       <MenuBar onSelect={this.onSelect}>
//         <MenuItem label="File">
//           <Menu>
//             <MenuItem command="new-window">New Window</MenuItem>
//             <MenuItem command="new-file">New File</MenuItem>
//           </Menu>
//         </MenuItem>
 
//         <MenuItem label="Edit">
//           <Menu>
//             <MenuItem command="undo">Undo</MenuItem>
//             <MenuItem command="redo">Redo</MenuItem>
//             <Separator />
//             <MenuItem label="Find">
//               <Menu>
//                 <MenuItem command="find">Find…</MenuItem>
//                 <MenuItem command="find-next">Find Next</MenuItem>
//                 <MenuItem command="find-previous">Find Previous</MenuItem>
//                 <MenuItem command="use-selection-for-find">Use Selection For Find</MenuItem>
//               </Menu>
//             </MenuItem>
//           </Menu>
//         </MenuItem>
 
//         <MenuItem label="Help">
//           <Menu>
//             <MenuItem command="terms-of-use">Terms of Use</MenuItem>
//             <MenuItem command="documentation">Documentation</MenuItem>
//             <Separator />
//             <MenuItem command="release-notes">Release Notes</MenuItem>
//           </Menu>
//         </MenuItem>
//       </MenuBar>
//     );
//   },
 
//   onSelect: function (command) {
//     console.log('Selected: %s', command);
//   }
// });
// Let's create a "real-time search" component

var SearchExample = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

                    <ul> 

                        { libraries.map(function(l){
                            return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                        }) }

                    </ul>

                </div>;

    }
});

                                                                                                                                                             
var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

// Render the SearchExample component on the page

ReactDOM.render(
    <SearchExample items={ libraries } />,
    document.getElementById('container')
);






var MenuExample = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },

    clicked: function(index){

        // The click handler will update the state with
        // the index of the focused menu entry

        this.setState({focused: index});
    },

    render: function() {

        // Here we will read the items property, which was passed
        // as an attribute when the component was created

        var self = this;

        // The map method will loop over the array of menu entries,
        // and will return a new array with <li> elements.

        return (
            <div>
                <ul>{ this.props.items.map(function(m, index){
        
                    var style = '';
        
                    if(self.state.focused == index){
                        style = 'focused';
                    }
        
                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:
        
                    return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
        
                }) }
                        
                </ul>
                
                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );

    }
});

// Render the menu component on the page, and pass an array with menu options

ReactDOM.render(
    <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('container1')
);
var Item = React.createClass({
    render: function(){
        return <li><a href={this.props.url}>{this.props.children}</a></li>
    }
});

// var Menu = React.createClass({
//     render: function(){
//         return (
//             <ul>
//                 {
//                     this.props.items.map(function(item){
//                         return <Item key={item.title} url={item.url}>{item.title}</Item> 
//                     })
//                 }
//             </ul>
//         );
//     }
// });

// var App = React.createClass({
//     "items":[
//         {"title":"Home", url:"#home"},
//         {"title":"About", url:"#about"},
//         {"title":"Services", url:"#services"},
//         {"title":"Portfolio", url:"#portfolio"},
//         {"title":"Contact Us", url:"#contact"}
//     ],
//     render: function(){
//         return (
//             <Menu items={this.items}/>
//         );
//     }
// });

// ReactDOM.render(<App />, document.querySelector('.root11'));

            var MyComponent = React.createClass({
               render() {
                     return <div>
                         <h1>{this.props.text}</h1>
                         <p>{this.props.children}</p>
                     </div>
                 }
             })
 
            ReactDOM.render(<div>
                 <MyComponent text="Hello World">
                 This is message 1
                 </MyComponent>
                 <MyComponent text="I am a Component">
                 This is message 2
                 </MyComponent>
                 <MyComponent text="I have been reused!">
                 This is message 3
                 </MyComponent>
                 </div>,
                 document.getElementById('react-container'))






                 var MyComponent1 = React.createClass({
                   render() {
                     return(
                       <div>
                       <h1>{this.props.text}</h1>
                       <h5>{this.props}</h5>
                       </div>
                     )
                   }
                 });
                 ReactDOM.render(
                   <section>
                   
                   <MyComponent1 text="Hello" >
                   this is message 1
                   </MyComponent1>
                    <MyComponent1 text="world" >
                   this is message 2
                   </MyComponent1>
                    <MyComponent1 text="world" >
                   this is message 3
                   </MyComponent1>
                    </section>         
                   ,
                   document.getElementById("react-container1")
               )














   class SomeThing extends React.Component{
                 constructor() {
                   super();
                   this.state = {
                     firstName: "kashif"
                   }
                 }
                 render() {
                   return(
                     <ul>
                     {this.state.firstName}
                    
                     </ul>
                   )
                 }
               }
               ReactDOM.render(
                 <SomeThing />
                 ,
                 document.getElementById("root12")
               )            
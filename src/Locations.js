import React , { userState} from 'react';

import Sidebar from './Sidebar.js';

import './App.css';

class Locations extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
          list: {
            results:[]
          },
        lists:{},
        Names:{}, 
        error:null,
        input:'',
        count:1,
    
        showHome:true,
        showMe:false,
        showUs:false,
        showLoc:true,
        showHometag:false,
        }
      }
      redirect = () => {                     
        this.setState({showMe:true});
        this.setState({showUs:false});
        this.setState({showLoc:true}); 
        this.setState({showHome:false});
        this.setState({showHometag:true}); 
        this.setState({count:1});
      }
      Handler = (f) => { 
        this.setState({showHome:false});
        this.setState({showHometag:true});
        this.setState({id:false});
        this.setState({showMe:false});
        this.setState({showUs:true});
        this.setState({showLoc:true});
        this.setState({count:1});
        this.componentMount(f);
      }
      homeredirect = () => { 
        this.setState({showMe:false});
        this.setState({showHome:true});
        this.setState({showUs:false});
        this.setState({count:1});
      }
    componentMount(f) {
        // var a = f;
        // let url="https://rickandmortyapi.com/api/episode/" + a;         
        // fetch(url).then((resp) => resp.json()).then(json => {
        //   this.setState({lists: json})
   
        // })
        fetch("https://rickandmortyapi.com/api/episode/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
    
    
      componentDidCatch(e) {
        let b = e;
        for (let i in b) {
          let url1 = b[i]; 
          fetch(url1).then((respp) => respp.json()).then(json => {
          this.setState({Names: json})
          this.component(this.state.Names.name, i,b);
        })
        }
      }
    
    
      component(e) {
        let c = this.state.count;
        document.getElementById("residents").innerHTML +=   c+ ".<b id ='resinames'> " +e+"</b><br/>";
        this.setState({count :c+1});
      }
    
    componentDidMount() {
        let url="https://rickandmortyapi.com/api/episode/";
        fetch(url).then((resp) => resp.json()).then(json => {
         this.setState({list: json})
       })
     }
    render(){
        let res = this.state.list.results;          
    let r = this.state.lists;                     
    let date; //= require('dateformat');  
        const {error, isLoaded,items} = this.state;
        if(error){
        return <div>Error : {error.message}</div>;
        }
        else if(!isLoaded)
        {
            return <div>Loading......</div>;
        }
        else{

        return (
            <div>
            <div className="mainn" id="Locationdata">
            {this.state.showUs?
            <div className="Location">
              <div className="head">
                <h1  style={{borderBottom: "2px solid #CECBCE", fontFamily:"times new roman" ,fontStyle:"oblique", fontWeight:"bolder", fontSize:"40px"}}>Episode - <span>{r.name}</span></h1>
              </div>
              <div className="Locationdatas" style={{marginLeft:"50px"}}>
                <br/><br/>
                <h3 className="locationtitle">Episode Number :  <span style={{fontSize:"20px", fontWeight:"lighter"}}>{r.episode}</span></h3>
                <h3 className="locationtitle">Air date :    <span style={{fontSize:"20px" ,fontWeight:"lighter"}}>{date(r.air_date, "ddd mmm dd yyyy")}</span></h3>
                <h3 className="locationtitle">Created :     <span style={{fontSize:"20px", fontWeight:"lighter"}}>{date(r.created, "ddd mmm dd yyyy")}</span></h3>
                <br/>
              </div>
              <div className="residents" style={{marginLeft:"20px"}}>
                <h3 className="locationtitle">Characters</h3>
                <div id="residents" style={{cursor:"pointer"}}>
                </div>
              </div>
            </div>
            :null}
             {this.state.showMe?
             <div className="Location">
              <div className="head">
                <h1 id="headingg"  style={{borderBottom: "2px solid #CECBCE", marginBottom:"30px", fontFamily:"times new roman" ,fontStyle:"oblique", fontWeight:"bolder", fontSize:"40px"}}>Locations</h1>
              </div>
              <div className="pagination">
                <a href="#about">Prev</a>
                <a href="#about">1</a>
                <a href="#about">2</a>
                <a href="#about" className="active">3</a>
                <a href="#about">5</a>
                <a href="#about">6</a>
                <a href="#about">Next</a>
              </div>
              <div className="row"> {
                res.map( sub => {
                return <div key={sub.id} id="key" className="column" style={{marginTop:"20px"}}>
                <div className="w3-card-4" onClick={this.Handler.bind(this,sub.id)}>
                  <header className="w3-container w3-white" style={{textAlign:"center" ,height:"35px"}}>
                    <h5 style={{marginTop:"5px"}} >{sub.type}</h5>
                  </header>
                  <div id="locationnameclass" className="w3-container" style={{height:"150px", backgroundColor:"#E8EAE3"}}>
                  <h4 style={{marginTop:"50px"}} className="locationame" >{sub.name}</h4>
                  </div>
                  <footer className="w3-container w3-white"  style={{textAlign:"center" ,height:"35px"}} >
                 <h5 style={{marginTop:"5px"}}>{sub.characters.length}<span>Characters</span></h5>
                  </footer>
                </div>
                </div>
                })
                }
            </div>
            </div>
            :null
            }
          </div>
        </div>
        );
      }
  
        
    }
}

export default Locations;
import React , { userState} from 'react';

import Sidebar from './Sidebar.js';

import './App.css';

class Locations extends React.Component{
    state={
        loading: true,
        planets : [],
        // resident: [],
    };
    async componentDidMount(){
        const url="https://rickandmortyapi.com/api/location/";
        const response=await fetch(url);
        const data=await response.json();
        this.setState({planets: data.results, loading:false})
        console.log(data.results);
    }
    render(){
        if (this.state.loading)
        {
            return <div>loading..</div>;
        }
        if(!this.state.planets.length)
        {
            return <div>Didn't get a planet</div>;
        }    
        return(
            <div>
                <h1>Locations</h1>
                {this.state.planets.map(planet =>(
                    <div className="planet" key={planet.id} >
                        
                        <a href="./resident.js" onClick={()=> {sessionStorage.setItem("id",planet.id)}} style={{ textDecoration: 'none' }}>
                        <div className="name" >{planet.name}</div>
                        <div className="type">{planet.type}</div>
                        <div className="resident">{planet.residents.length} Residents</div>
                        </a>
                    </div>
                ) )}
            </div>
        );
    }
}
// function MovieSelected(id) {
//     console.log(id);    
//     sessionStorage.setItem('movieId', id);
//     window.location = 'movie.html';
//     return false;
// }
export default Locations;
// export {MovieSelected};

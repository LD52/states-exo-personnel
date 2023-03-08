import {Component} from 'react';
import './App.css';
import Photo from './photo.jpeg';
import Identité from './ingram.jpeg';
class App extends Component{  

  state = {
  congrats : '', 
  name : '', 
  filière : '', 
  établissement : '', 
  âge : '', 
  verdict : '', 
  img : <img src= {Photo} alt='img'/>,
  }
showMe = () => {
  this.setState({
  congrats : 'Félicitations vous êtes admis ',
  name : 'Killson Kouamé Jean Jores',
  filière : ' étudiant en Banque-Assurance',
  établissement : "fréquentant à l'Institut Universitaire",
  âge : "21 ans", 
  verdict : "est admis(e) avec une moyenne de 13/20",
  img : <img src ={Identité}  className= 'pic' alt ='img'/>,
  
})

  }
  
  render () {
    return (
       <div className="App">
        <div className="root">
<div className="top"> 
<p> <h1>{this.state.congrats}</h1></p></div>
  <div className ='middle'>
    <div className='writing'>
     
         <h2>{this.state.name}</h2>
    <h2>{this.state.filière}</h2>
    <h2>{this.state.établissement}</h2>
    <h2>{this.state.âge}</h2>
    <p><h2>{this.state.name}  {this.state.verdict}</h2></p>
     
     
    </div>

    <div className='medias'>
     <p>{this.state.img}</p> 
    </div>
  </div>
  <div className='bottom'>
  <button className='butt' onMouseOver={this.showMe}><h3>See the results</h3></button> 
  </div>
     
    </div>
    </div>
    );
  }

}

export default App;


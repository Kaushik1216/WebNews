
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import {Route,Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
   page=6;
   
   apikey="93eb8297130f4257b79c7416c2fea7cc";
   state={
    progress:0
   }
   setProgress=(progress)=>{
    this.setState({progress: progress})
   }
  render(){
  return (
    <>  
    <div className="App">
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
    <Routes>
        <Route path="/" element={<News setProgress={this.setProgress}  apikey={this.apikey} key={'home'}pageSize={this.page} country={'in'} category={'general'}/>}></Route>
        <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}   key={'business'} pageSize={this.page} country={'in'} category={'business'}/>}></Route>
        <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}  key={'science'} pageSize={this.page} country={'in'} category={'science'}/>}></Route>
        <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}  key={'entertainment'} pageSize={this.page} country={'in'} category={'entertainment'}/>}></Route>
        <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}   key={'health'} pageSize={this.page} country={'in'} category={'health'}/>}></Route>
        <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}   key={'sports'} pageSize={this.page} country={'in'} category={'sports'}/>}></Route>
        <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}  key={'technology'} pageSize={this.page} country={'in'} category={'technology'}/>}></Route>
        <Route path="*" element={<h1>This is 404 error page</h1>}></Route>
    </Routes>
    </div>
    
    </>
  );
}

}



import React, { Component } from 'react';
import './App.css';
import Articles from "./components/Articles";
// const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// const api_key = "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

class App extends Component {
  state={
    URL :"https://api.nytimes.com/svc/search/v2/articlesearch.json",
    api_key :"?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931",    
    searchTerm:"",
    recordNumber:5,
    sartYear:2017,
    endYear:2018
  }
 
  handleChanges = event =>{
    console.log(event.target.value);
    this.setState({
      [event.target.name]:event.target.value
    });
    
  }
  searchArticles = event=>{
    event.preventDefault();
    console.log(this.state)
    const queryURL=`${this.state.URL}${this.state.api_key}&q=${this.state.searchTerm}&begin_date=${this.state.sartYear}0101&end_date=${this.state.endYear}0101`
    console.log(queryURL)
  }
  
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
        <Articles
        searchTerm={this.state.searchTerm}
        recordNumber={this.state.recordNumber}
        startYear={this.state.sartYear}
        endYear={this.state.endYear}
        handleChanges={this.handleChanges}
        searchArticles ={this.searchArticles}
         />
        </div>
      </div>
    );
  }
}

export default App;

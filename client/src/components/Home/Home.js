import React, { Component } from 'react';
import './Home.css';
import Articles from "../Articles";
import axios from "axios";
import Search from '../Srearch';
import API from "../utils/API";

class App extends Component {
  state={
    URL :"https://api.nytimes.com/svc/search/v2/articlesearch.json",
    api_key :"?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931",    
    searchTerm:"",
    recordNumber:5,
    sartYear:"",
    endYear:"",
    title:"",
    db_title:"",
    db_url:"",
    db_Date:"",
    date:"",
    web_url:"",
    db_articles:"",
    output_articles:[],
  }
  componentDidMount() {
    this.loadSearchedArticles();
  }
 
  handleChanges = event =>{
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  searchArticles = event=>{
    event.preventDefault();
    const queryURL=`${this.state.URL}${this.state.api_key}&q=${this.state.searchTerm}&begin_date=${this.state.sartYear}0101&end_date=${this.state.endYear}0101`
    // console.log(queryURL);
    axios.get(queryURL).then(article=>{
      // console.log(article.data.response.docs);
      this.setState({
        output_articles:article.data.response.docs
      })
      article.data.response.docs.forEach(article => {
        this.setState({
          title:article.headline.print_headline,
          date:article.pub_date,
          web_url:article.web_url,
          db_articles:{
            title:article.headline.print_headline,
            date :article.pub_date,
            web_url:article.web_url
          }
        });
        
        //======Saving NYT-API articles====

        axios.post("/api/articles", this.state.db_articles).then(db_articles=>{
        //   console.log(db_articles)
        });
        // console.log(this.state.db_articles);
      });
      // console.log(this.state.output_articles)
      
    });
  }

  loadSearchedArticles = () =>{
    API.getArticles().then(db_articles=>{
        this.setState({
            db_title: db_articles.title,
            db_Date: db_articles.date,
            db_url: db_articles.web_url
        })
        console.log(this.setState.db_title)
      });
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Search
          searchTerm={this.state.searchTerm}
          recordNumber={this.state.recordNumber}
          startYear={this.state.sartYear}
          endYear={this.state.endYear}
          handleChanges={this.handleChanges}
          searchArticles ={this.searchArticles}
          
          />
          <div className ="article-box">
            <div className="article-header">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADnSURBVHhe7dCxbcRAEARBhv05KAXl+sIBbcgeemQ1cMA4t0ZdkiRJD+zz8/t9+4ti6xy40xP+R7EFEGBrCyBAgK0tgAABRrEFEGBrCyBAgK0tgAABRrF1Drz9RbF1DtzpCf+j2AIIsLUFECDA1hZAgACj2AIIsLUFECDA1hZAgACj2DoH3v6i2DoH7vSE/1FsAQTY2gIIEGBrCyBAgFFsAQTY2gIIEGBrCyBAgFFsnQNvf1FsnQN3esL/KLYAAmxtAQQIsLUFECDAKLYAAmxtAQQIsLUFECDAKLbOgbe/KCRJkqR/Xdcf0qJvIZJWaAwAAAAASUVORK5CYII=" alt="Grid icone"/>
              <h4>Articles</h4>
            </div>
          {this.state.output_articles.map(article =>(
            <Articles
              key={article.pub_date}
              url={article.web_url}
              title={article.headline.print_headline}
              date={article.pub_date}
              dataId={article.web_url}
            />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

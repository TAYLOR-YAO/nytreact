import React, { Component } from 'react';
// import axios from "axios";
import "./Saved.css";
import API from '../utils/API';
class Saved extends Component {
    state = {
        artiles: [],
        title: "",
        date: "",
        url: ""
      };
    componentDidMount = () =>{
        API.getArticles()
        .then(response =>{console.log(response)});
      }

       

    render(){
    return (
        <div className="container-fluid">
            <div className ="article-box">
                <div className="article-header">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADnSURBVHhe7dCxbcRAEARBhv05KAXl+sIBbcgeemQ1cMA4t0ZdkiRJD+zz8/t9+4ti6xy40xP+R7EFEGBrCyBAgK0tgAABRrEFEGBrCyBAgK0tgAABRrF1Drz9RbF1DtzpCf+j2AIIsLUFECDA1hZAgACj2AIIsLUFECDA1hZAgACj2DoH3v6i2DoH7vSE/1FsAQTY2gIIEGBrCyBAgFFsAQTY2gIIEGBrCyBAgFFsnQNvf1FsnQN3esL/KLYAAmxtAQQIsLUFECDAKLYAAmxtAQQIsLUFECDAKLbOgbe/KCRJkqR/Xdcf0qJvIZJWaAwAAAAASUVORK5CYII=" alt="Grid icone"/>
                <h4>Saved Articles</h4>
                </div> 
                <div className="article">
                <a href=""target="_blank">
                    <h5 ><span>Title: </span></h5>
                    <p><span>Publish date: </span></p>
                </a>
                </div>
            </div>
        </div>
        )
        }
    }
export default Saved;
import React from "react";
import "./Articles.css"
const Articles = props => (  
    <div className="article">
        <a href={props.url} target="_blank">
            <h5><span>Title: </span>{props.title}</h5>
            <p><span>Publish date: </span>{props.date}</p>
        </a>
        <button className="save" sata-id={props.dataId} onClick={props.saveArticle}>Save Articles</button>  
    </div>
);
export default Articles;
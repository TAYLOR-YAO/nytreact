import axios from "axios";

export default {
  
  nytArticle:function(){
    return axios.get();
  },
  // Gets allarticles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticles: function() {
    return axios.delete("/api/articles");
  },
  // Saves an article to the database
  saveArticles: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
import React from "react";
import "./Search.css"
// import Navbar from "../Navbar";
// import Articles from "../Articles";

const Search = props=> (
    <div>
        {/* <Navbar/> */}
        <div className="input-div">
            <div className="form-header">
                <h4>Search Parameters</h4>
            </div>
            <form>
                <div className="group">
                    <label htmlFor="formGroupExampleInput">Search Term:</label>
                    <br/>
                    <input type="text" name="searchTerm" value={props.searchTerm} onChange={props.handleChanges}/>
                    <br/>
                    <label htmlFor="exampleFormControlSelect1">Number of Records to Retrieve:</label>
                    <select className="form-control" name="recordNumber" value={props.recordNumber} onChange={props.handleChanges}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    </select>
                    <label htmlFor="formGroupExampleInput">Start Year (Optional):</label>
                    <br/>
                    <input type="text" name="sartYear" value={props.startYear} onChange={props.handleChanges}/>
                    <br/>
                    <label htmlFor="formGroupExampleInput">End Year (Optional):</label>
                    <br/>
                    <input type="text" name="endYear" value={props.endYear} onChange={props.handleChanges}/>
                    <div className="btn-div">
                        <button onClick={props.searchArticles}>
                            <img src="data:image/png;base64,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" alt="Search Icone"/>
                            <p>Search</p>
                        </button>
                        <button className="clear">
                        <img src="data:image/png;base64,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" alt="Delete Icone"/>
                            <p>Clear Reasults</p>
                        </button>   
                    </div>
                </div>
            </form>
        </div>
    </div>
);

export default Search;
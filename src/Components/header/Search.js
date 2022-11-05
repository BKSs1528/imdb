import { React, useState } from "react";
import "./search.css"

function Search() {
    return (
        <>
            <form>
                <div className="main">
                    <input type="text" placeholder="search" />
                </div>
            </form>
        </>
    );
}

export default Search;
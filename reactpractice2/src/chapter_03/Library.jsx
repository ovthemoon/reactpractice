import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="토지" numOfPage={300}></Book>
            <Book name="해리포터" numOfPage={500}></Book>
            <Book name="메이즈 러너" numOfPage={350}></Book>
        </div>
    );
}

export default Library;
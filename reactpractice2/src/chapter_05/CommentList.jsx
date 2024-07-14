import React from "react"
import Comment from "./Comment"

const comments = [
    {
        name: "John",
        comment: "This is awesome!",
    },
    {
        name: "Sarah",
        comment: "I love it!",
    },
    {
        name: "Michael",
        comment: "Great job!",
    },
    {
        name: "Emily",
        comment: "Amazing work!",
    },
    {
        name: "David",
        comment: "Impressive!",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return( 
                <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );

}

export default CommentList;
import React from "react"
const styles={
    wrapper:{
        margin :8,
        padding:8,
        display:"flex",
        flexDirection:"row",
        border:"1px solid gray",
        borderRadius:16,
    },
    imageContainer:{
     
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    contentContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    nameText:{
        color:"black",
        fontSize:16,
        fontWeight:"bold",
    },
    commentText:{
        color:"black",
        fontSize:14,
    },
    
}
function Comment(props){
    return (
        <div>
            <h1>this is my brand new website!</h1>
        </div>
    );
}

export default Comment;
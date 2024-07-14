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
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                style={styles.image} 
                src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;
const { useState } = require("react");

const BlogList = () => { 

    
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId);
 

    const getBlogs=  async () => {
        /*
        get the blogs from the backend  
        */     

    }
    return(
        /* 
        1. create a button to load the blogs
        2. map over the blogs and display them
        */
        
        <div>
            Hi
        </div>    

    )
}
export default BlogList;
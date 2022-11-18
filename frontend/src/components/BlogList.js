import axios from 'axios';
import Button from '@mui/material/Button';



// import {Link} from 'react-router-dom';
const { useState } = require("react");

const BlogList = () => { 
    const [blogs,setBlog] = useState([]);

    // console.log(window.location.search)
    
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId);
       

    const getBlogs=  async () => {
        //get the blogs from the backend
        
            await axios.get(`http://localhost:8000/filter?userId=${userId}`).then(
            (res) => { 
                const blogs = res.data
                console.log(blogs)
                setBlog(blogs)
                
            }
            );
        

    }
    return(
        // create a button to load the blogs
        // map over the blogs and display them
        <div className="blogList">
            <Button variant="contained" onClick={getBlogs}>{
                blogs[0]? blogs[0].author.name : 'Load Blogs'
            }</Button>
            
          {blogs.map((blog) => (
            <div>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
                </div>
          ))}
                </div>
          
       
                

    )
}
export default BlogList;
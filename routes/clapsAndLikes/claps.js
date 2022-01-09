const express = require("express");
const router = express.Router();
const ListOfBlogData = require("../blog-folder/blogsData");
const verifyToken = require('../middleware'); 

router.post("/updateClap", verifyToken, (req, res) => {
    const blogId = req.query.blogId;
    console.log(blogId);
    const blogMatchById = ListOfBlogData.find((blog) => {
        if(blog.id == blogId){

            const clonedMatchById = {...blog};
            blog.claps = ++clonedMatchById.claps;
            
            return clonedMatchById;
        }
    })     
    console.log(blogMatchById);

    res
    .status(200)
    .json({success : true, message : "Blog updated with clap", blogMatchById})
})
    // const clonedBlogMatchById = [{...blogMatchById}]
    // console.log(clonedBlogMatchById.claps);



module.exports = router;


// blog.id == blogId
// const blogMatchById = ListOfBlogData.find((blog) => {
//     if (blog.id == blogId ) {
//         const updatedClaps = blog.claps + 1;
//         // console.log(updatedClaps);
//         return updatedClaps
//     }
// })
// // console.log(blogMatchById);
// const clonedBlogMatchById = [{...blogMatchById}]
// console.log(clonedBlogMatchById.claps);
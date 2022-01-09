const ListOfBlogData = require("./blogsData");
const express = require("express");
const router = express.Router();
const verifyToken = require('../middleware'); 

router.get("/", verifyToken, (req, res ) => {
    const category = req.query.category;
    // console.log(category);
    const filteredData = ListOfBlogData.filter((blog)=> {
        return blog.category === category
    })
    // console.log(filteredData);
    res
    .status(200)
    .json({ success : true , message : "sending blogs which match to category", filteredData})
})

router.get("/singlePost", verifyToken, (req,res) => {
    const blogId = req.query.blogId;
    const blogMatchById = ListOfBlogData.find((blog) => {
        return blog.id == blogId   
    })
    //    console.log("Single Blog id should come",blogMatchById);
    if(blogMatchById === undefined) {
        res
        .status(404)
        .json({success : false, message : "blog Not found"})
        return
    }

    res
    .status(200)
    .json({success : true, message : "Blog Found", blogMatchById})

})




module.exports = router;
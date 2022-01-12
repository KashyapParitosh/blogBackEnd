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

router.get("/filterByClap", verifyToken, (req,res)=> {
    const clapCount = 55;
    

    const filterDataByClap = ListOfBlogData.filter((blog)=> {
        return blog.claps >= clapCount;
    })
    
    if(filterDataByClap === undefined ){
        res.status(400)
        .json({success : false, message: "No blogs available"})
        return
    }
    res
    .status(200)
    .json({success:true, message: "blogs filtered by clap count", filterDataByClap})
})

router.get("/filterByIsLiked", verifyToken, (req,res)=> {
    const clapCount = 52;
    const filterDataByIsLiked = ListOfBlogData.filter((blog)=> {
        
        return blog.claps > clapCount;
    }).sort(function(a,b) {
        if(b.claps > a.claps) return 1
        if(b.claps < a.claps) return -1
        return 0;
    })

    console.log(filterDataByIsLiked)
    if(filterDataByIsLiked === undefined || filterDataByIsLiked === null ){
        res.status(400)
        .json({success : false, message: "No blogs available"})
        return
    }
    res
    .status(200)
    .json({success:true, message: "blogs filtered by IsLiked", filterDataByIsLiked})
})


router.get("/filterByDate", verifyToken, (req,res)=> {
    const filterDataByDate = ListOfBlogData.filter((blog)=> {
        const newDate = new Date(blog.time).getFullYear();
        // const currentDate =  new Date()
        return newDate >= 2020;
      })
    
    if(filterDataByDate === undefined || filterDataByDate === null ){
        res.status(400)
        .json({success : false, message: "No blogs available"})
        return
    }
    res
    .status(200)
    .json({success:true, message: "blogs filtered by IsLiked", filterDataByDate})
})

module.exports = router;
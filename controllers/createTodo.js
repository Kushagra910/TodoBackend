// import the model

const Todo = require('../models/Todo');

// define route handler

// sath me export kardiya 
exports.createTodo = async(req,res) => {
  try{
    // fetch title and description from request body
    const {title,description} = req.body;
    // create a new Todo Obj and insert in DB
    const response = await Todo.create({title,description});
    // send a json response with a success flag
    res.status(200).json({
      success:true,
      data:response,
      message:'Entry Created Successfully'
    });
  }
  catch (err){
    console.log(err);
    res.status(500).json({
      success:false,
      data:"internal Server error",
      message:err.message,
    })
  }
}
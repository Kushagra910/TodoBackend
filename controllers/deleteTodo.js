const Todo = require('../models/Todo');

exports.deleteTodo = async(req,res) => {
  try{
    const {id}= req.params;

    await Todo.findByIdAndDelete(id);

    res.json({
      success:true,
      message:"entry Deleted Successfully"
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      error:err.message,
      message:"Some Error Occurred in Deleting"
    })
  }
}
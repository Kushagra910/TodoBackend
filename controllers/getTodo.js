// import the model 
 const Todo = require('../models/Todo');

 // define the route handler
 
 exports.getTodo = async(req,res) => {
  try{
    const todos = await Todo.find({});
    res.status(200).json({
      success:true,
      data:todos,
      message:"Entire TodoData is Fetched"
    })
  }
  catch(err){
    console.error(err);
    res.status(500).json({
      success:false,
      data:"internal Server error",
      error:err.message,
    })
  }
 }


 exports.getTodoById = async(req,res) => {
  try{
    // fetch todo item on basis of id
    const id = req.params.id;
    const todo = await Todo.findById({_id:id});

    // data given not found
    if(!todo){
      return res.status(404).json({
        success:false,
        message:"No data found for this given id"
      })
    }
    // data given is found 
    res.status(200).json({
      success:true,
      data:todo,
      message:`Todo ${id} data successfully fetched`
    })

  }
  catch(err){
    console.error(err);
    res.status(500).json({
      success:false,
      error:err.message,
    })


  }
 }
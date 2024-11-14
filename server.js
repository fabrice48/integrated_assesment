const express= require ('express');
const app = express();
const port =3000;
app. get ('/',(req,res)=>{
    res.status(200).json({message:"get all published by user"});
});

  app. listen (port,()=>{
    console.log (`server is lunning on the port localhost:${port}`);
  });
  app. post ('/',(req,res)=>{
    res.status(200).json({message:"creating post"});
  });

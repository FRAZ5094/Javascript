const express = require("express");
const app=express();
app.listen(8080, ()=> console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({limit:"1mb"}));

app.post("/api",(request,response)=>{
    console.log("I got a request");
    console.log(request.body);
    const data=request.body
    response.json({
        status:"sucess",
        latitude:data.lat,
        longitude:data.lon
    });
});
const http=require('http')
const fs=require('fs')
const url=require('url')
const express=require('express')
const path=require('path')
const app=express()
const router=express.Router()
const body=require('body-parser')


router.use(body.urlencoded({ extended: false }));

  


/*const server=http.createServer((req,res)=>{
    const q=url.parse(req.url,true);
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");
    if(q.pathname=='/'){
        res.statuscode=200;
        res.end("<h1>Welcome To Lab 9</h1>")
    }
    else if(q.pathname=='/read'){
        res.statusCode=200;
       const data= fs.readFile('lab7json.json','utf8',(err,data)=>{
            if(err) throw err;
            res.end(data.toString());
        });
     }
     else if(q.pathname=='/write'){
        const queryobject=url.parse(req.url).query;
        console.log(queryobject.name)
        res.end("Bye Bye")
     }   
     })*/

router.get('/',(req,res)=>{
    res.send("<h1>Welcome to Lab 9</h1>")
});

router.get('/read',(req,res)=>{
  const data=fs.readFile("lab8.json","utf-8",(err,data)=>{
    if(err) throw err;
    res.send(data.toString())
  });
});
router.get('/write',(req,res)=>{
    res.sendFile(path.join(__dirname+'/form1.html'));
});
router.post("/sign_up",(req,res)=>{
var id=req.body.vid;
 var name=req.body.vname;
 var species=req.body.vspecies;
 var alive=req.body.valive;
 var habitat=req.body.vhabitat;
var data1={
    "id":id,
    "name":name,
    "species":species,
    "alive":alive,
    "habitat":habitat
}
fs.readFile("lab8.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        const json=require('./lab8.json');
         json.records.push(data1);
         fs.writeFile("lab08.json",JSON.stringify(json),err=>{
            if(err) throw err;
         });
         res.send(json);
    }
       /*obj=JSON.parse(data);
        obj.records.push(data1);
       var json=JSON.stringify(obj);
        fs.writeFile("lab8.json",json,"utf-8",(err)=>{
         if(err){
            console.log(err);
         }
        })*/
    })
});
app.use("/",router);
app.listen(3000,(err)=>{
    console.log("The app is listening on port number 3000");
})
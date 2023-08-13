let e=require("express")
let app=e()
let os=require("os")
let ejs=require("ejs")
app.set("view engine","ejs")
// let path=require("path")
// let pathdir=path.join(__dirname,"public")
// app.use(e.static(pathdir))

app.get("/",(req,res)=>{    
   res.render("index",{
      title:"Home"
   })
})
app.get("/about",(req,res)=>{
   res.render("about",{
      title:"About"
   })

})
app.get("/dnld",(req,res)=>{
   res.download("./views/index.ejs")
})
app.listen(3100,()=>{
    console.log("Server working")
})
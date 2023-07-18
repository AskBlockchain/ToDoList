const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

console.log(date());



const app = express();
let newItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); // Solution to recieve Input from list.ejs
app.use(express.static("public"));

app.get("/", function(req, res){

  let day = date();

  res.render('list', {listTitle: day, newListItem: newItems});

});

app.post("/", function(req, res) {  // Solution to recieve Input from list.ejs
  newItem = req.body.newItem; // Solution to recieve Input from list.ejs
  if (req.body.listTitle === 'Work') {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    newItems.push(newItem);
    res.redirect("/"); // Solution to recieve Input from list.ejs
  }
  console.log(req.body);
  console.log(workItems);

})


app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItem: workItems});
})

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  res.redirect("/work");
})

app.get("/about", function(req, res) {
  res.render("about");
})



app.listen(3000, function(){
  console.log("Server started on port 3000");
})

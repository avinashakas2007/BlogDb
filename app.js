const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const homeStartingContent = "Welcome to Wander & Wonder! I'm Hariharan, the creator of this platform, and I'm excited to have you here. This space is designed for sharing stories, exploring new ideas, and connecting with a vibrant community. Whether you're looking to discover fresh perspectives or share your own experiences, I hope you find inspiration and creativity in every corner of this site. Let's embark on this journey together and start sharing today!";
const aboutContent = "Welcome to Wander & Wonder, a platform designed to foster creativity, connection, and knowledge-sharing. Created by Hariharan, this space allows individuals from all walks of life to share their stories, experiences, and insights. Whether you're here to explore new perspectives, express your thoughts, or connect with like-minded individuals, Wander & Wonder offers a dynamic space for everyone. Join our growing community and start sharing today!";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Connecting to database
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/blogDB', { useNewUrlParser: true });
}

//let posts = [];

//Creating Schema for the posts
const postSchema = new mongoose.Schema({
  title : String,
  content : String
});

//Creating a mongoose model based on this Schema
const Post = mongoose.model("Post", postSchema);

// Schema for contact form data
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// Model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

app.get("/", function(req, res){
  Post.find().then(posts => {
    res.render("home", {
      startingContent: homeStartingContent, 
      posts: posts
    });
  });
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

 //Saved the title and the post into our blogDB database
app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  //posts.push(post); instead of pushing post to array we are adding it to db.
  post.save().then(() => {
    console.log('Post added to DB.');
    res.redirect('/');
  })
  .catch(err => {
    res.status(400).send("Unable to save post to database.")
  });

});

app.get("/posts/:postId", function(req, res){

  //We are storing the _id of our created post in a variable named requestedPostId
  const requestedPostId = req.params.postId;

  Post.findOne({_id:requestedPostId})
  .then(function (post) {
    res.render("post", {
            title: post.title,
            content: post.content
          });
    })
    .catch(function(err){
      console.log(err);
    })

  });

  app.post("/contact", (req, res) => {
    const contactData = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
  
    contactData
      .save()
      .then(() => {
        console.log("Contact form data saved to database.");
        
        res.redirect("/");
      })
      .catch((err) => {
        console.error("Error saving contact form data:", err);
        res.status(500).send("An error occurred while saving your message. Please try again later.");
      });
  });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
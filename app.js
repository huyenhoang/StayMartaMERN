// ============== App dependencies ================
var express         = require("express"),
    app             = express(),
    bodyParser     = require("body-parser")

// ============== Databases ================
var articles = [
            {
                title: "3 Reasons Why You Should Host Travellers", 
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "4 Reasons Why You Should Meet More Strangers",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "5 Ways You Can Grow Spiritually On The Road",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "6 Reasons Why You Should Travel Alone",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "6 Reasons Why You Should Travel Alone",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "6 Reasons Why You Should Travel Alone",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]

var adventures = [
            {
                name: "Spiritual Retreat", 
                image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5 
            },
            {
                name: "Beach Retreat",
                image: "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5 
            },
            {
                name: "Youth Camp",
                image: "https://images.unsplash.com/photo-1436505743955-a98c0d3eb1a8?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5 
            },
            {
                name: "Bridge Town Prayer Fest",
                image: "https://images.unsplash.com/photo-1512283939286-4ec053b257a0?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5 
            }
        ]
var listings = [
            {
                name: "Los Angeles", 
                image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 2.5 
            },
            {
                name: "San Diego Bay",
                image: "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 3.5 
            },
            {
                name: "Portland",
                image: "https://images.unsplash.com/photo-1436505743955-a98c0d3eb1a8?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5 
            },
            {
                name: "Bridge Town",
                image: "https://images.unsplash.com/photo-1512283939286-4ec053b257a0?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5 
            },
            {
                name: "Paradise Cabin",
                image: "https://images.unsplash.com/photo-1491931466419-0ec3344c8f5e?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5 
            },
            {
                name: "Seattle",
                image: "https://images.unsplash.com/photo-1503431393106-cc9d072ab1e9?auto=format&fit=crop&w=1050&q=80",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                rating: 4.5 
            }
        ]

// ============== Other app configurations =======
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


// ================== General App Routes ===============
app.get("/", function(req, res){
    res.render("index", {articles: articles, listings: listings, adventures: adventures });
});

app.get("/hello", function(req, res){
    res.render("landingpage");
});

app.get("/listings", function(req, res){
    res.render("listings", {listings: listings });
});


// how it work route
app.get("/howitwork", function(req, res){
   res.render("howitwork");
});

// about route
app.get("/about", function(req, res){
    res.render("about", {articles: articles });
});

// blog route 
app.get("/blog", function(req, res){
    res.render("blog", {articles: articles });
});

// terms & privacy route
app.get("/terms", function(req, res){
    res.render("terms", {articles: articles });
});
// cancellation route
app.get("/cancel", function(req, res){
    res.render("cancel", {articles: articles });
});
// contact route
app.get("/contact", function(req, res){
    res.render("contact");
});


// ================= Sign up routes ===============
// show signup form
app.get("/signup", function(req, res){
   res.render("signup"); 
});

// handling sign up logics
app.post("/signup", function(req, res){
});

// ============== Login/Logout routes =============

// show login form
app.get("/login", function(req, res){
    res.render("login");
});
// handling login logics
app.post("/login", function(req, res) {    
        
});

// logout route
app.get("/logout", function(req, res){
   req.logout();
   res.redirect("/listings");
   
});

// ================ Host routes ====================

//host route
app.get("/host", function(req, res){
   res.render("host");
});


// =============== Booking routes ===================

// search route
app.get("/search", function(req, res){
   res.render("/listings");
});

//adventures
app.get("/adventures", function(req, res){
   res.render("/listings");
});

//accomodations
app.get("/accomodations", function(req, res){
   res.render("/listings");
});

// ============== App route usage ================
// not in use yet
//app.use("/", indexRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The StayMarta Server Has Started!");
});
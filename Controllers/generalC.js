const express = require ('express')
const router = express.Router ();

// routing home
router.get ("/", (req,res) => {
    res.render("home",
    {title: " "});

});
// routing login
router.get ("/login", (req,res) => {
    res.render("login",
    {title: "Sign In"});

});
//routing dashboard
router.get ("/dashboard", (req,res) => {
    res.render("dashboard",
    {title: " "});

});
// routing registration
router.get ("/registration", (req,res) => {
    res.render("registration",
    {title:'Sign Up'});

});

router.get ("/package", (req,res) => {
    res.render("package",
    {title:'package'});

});
// routing 404
router.get ("/404", (req,res) => {
    res.render("404",
    {title:'Coming Soon'});

});

//Handle the post data
router.post("/registration",(req,res)=>{
const errorMessages = [];  
//fields value holder
var form= 
{
nameholder : req.body.yourName,
emailholder : req.body.email
};

    //validation for null ptr
    if(req.body.yourName=="")
    {  // document.getElementById('name_val').innerHTML="You must enter your name";
            errorMessages.push("You must enter your name");
    }
    // validation for null ptr
    if(req.body.email=="")
    {
       // document.getElementById('pass_val').innerHTML="You must enter an email.";
        errorMessages.push ("You must enter an email.");
    }
    // Check to see if password is blank
    if(req.body.password=="" )
    {
       // document.getElementById('pass_val').innerHTML="password cannot be blank.";
        errorMessages.push ("password cannot be blank.");
    }
    // validation to check password for a digit,lowercase and uppercase
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(!re.test(req.body.password ))
    {
     //  document.getElementById('pass_val').innerHTML="password must include one numeric digit one upper case and one lower case character";
       errorMessages.push ("password must include one numeric digit one upper case and one lower case character");
    }
    //valdiation to check if both password matches
    if(req.body.password2 != req.body.password)
    {
       // document.getElementById('pass2_val').innerHTML="Password does not match.";
        errorMessages.push ("Password does not match.");
    }

    //If the user does not enter all the information
    if(errorMessages.length >0 )
    {
            res.render("registration",{
                    title : "Sign up page",
                    errors : errorMessages,
            form:form
            });
    }
    
    //If the user enters all the data and submit the form 
    else
    {
            // redirect user once successful
            res.render("dashboard",{
                    title : "dashboard",
                    successMessage :`Confirmation number has been sent to the email`
            });

            // sends email once completed
            const sgMail = require('@sendgrid/mail');
                sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
                const msg = {
                to: req.body.email,
                from: 'test@example.com',
                subject: 'Testing',
                html: '<strong>One step closer</strong>',
                };
                sgMail.send(msg);
                
    }

    router.get("/logout",(req,res)=>{
    res.redirect("login")
    
    })


});
module.exports =router;
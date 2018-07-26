var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const pn = require('../config/paynow');
const bcrypt = require('bcryptjs');
var request = require("request");
var uniqid = require('uniqid');



// database models
var User = require('../models/user');
var City = require('../models/surbub');
var Property = require('../models/property');
var Payment = require('../models/payments');
var Membership = require('../models/membership');


//Get Register
router.get('/signup', function (req, res) {
    let msg=req.flash('signupMessage');
    res.render('signup', { msg:msg });
});

// Register User
router.post('/signup',passport.authenticate('local-signup', {
        successRedirect: '/users/signin',
        failureRedirect: '/users/signup',
        failureFlash: true
    }));



// Get Login
router.get('/signin', function (req, res) {
    delete req.session.returnTo;
    res.render('signin', { msg: req.flash('loginMessage')});
});

//  login post
router.post('/signin', passport.authenticate('local-login', { failureRedirect: '/users/signin',failureFlash: true}),
    function (req,res) {
            if (req.user.admin === true) {
                res.redirect('/users/dashboard');
            }
            if (req.user.admin === false) {
                res.redirect('/users/userdashboard');
            }
    }




);



// Get Admin
router.get('/admin',loggedIn, function (req, res) {
    User.find({admin: true }, { _id:0,  username: 1,department: 1,title: 1 }, function (err, users) {
        if (err) throw err;
        let admin = [];
        admin= users;
        res.render('admin',{admin:admin});
    });
    
});

// add admin route
router.post('/admin', passport.authenticate('local-asignup', {
    successRedirect: '/users/admin',
    failureRedirect: '/users/admin',
    failureFlash: true
})); 

// product route
router.post('/product', function (req, res) {
    var Area = [];
    var suburb_name = req.body.myCountry;
        suburb_name = convertCase(suburb_name);
        console.log(suburb_name);
    City.find({ "suburbs.suburb_name": suburb_name},"suburbs",function(err, area) {
        
        if (err) throw err;
          
        var s = City.find({ "suburbs.suburb_name": suburb_name});
          console.log(s);
          var me = area;
          
          
       if (s == true){
           console.log("Here i am");
             res.render('index');
        }
        else{
            let suburb = area[0].suburbs.filter(suburb => suburb.suburb_name == suburb_name)[0];

            res.render('product', {
            suburb: suburb
            });
          
        }
      });
});
// Get Pricing
router.get('/pricing', function (req, res) {
    res.render('pricing');
});



// Get Dashboard
router.get('/dashboard',loggedIn,IsAdmin, function (req, res) {
    res.render('dashboard');
});

// Get user dashboard
router.get('/userdashboard',loggedIn, function (req, res) {
    
    res.render('userdashboard',{user:req.user});
});

// Get suburb
router.get('/surburb',loggedIn,IsAdmin, function (req, res) {
    
    City.find({}, {
                _id: 0,
                suburbs: 1
            }, function (err, suburbs) {
        if (err) throw err;
        var suburb = [];
        suburb = suburbs[0];
            res.render('suburb', { 
                suburb:suburb
            });
    });

});

// submit suburb
router.post('/surburb', function (req, res, done) {
        var suburb_name = req.body.name;
        suburb_name = convertCase(suburb_name);
        var city_name = req.body.city;
        var slongitude = req.body.longitude;
        var slatitude = req.body.latitude;

        // Validation
        req.checkBody('name', 'Name is required').notEmpty();
        req.checkBody('city', 'City is required').notEmpty();
        req.checkBody('longitude', 'Longitude is required').notEmpty();
        req.checkBody('latitude', 'Latitude is required').notEmpty();

        var errors = req.validationErrors();

        if (errors) {
            res.render('suburb', {
                errors: errors
            });
        } else {
            var newSuburb = {
                suburb_name: suburb_name,
                slongitude: slongitude,
                slatitude: slatitude
            };
            var newProperty = new Property({
                suburb_name: suburb_name
            });

            newProperty.save(function (err, success) {
                if (err) {
                    console.log(error);
                } else {
                    console.log(success);
                }
                // thats it!
            });
            City.findOneAndUpdate({
                    city_name: city_name
                }, {
                    $push: {
                        suburbs: newSuburb
                    }
                },
                function (error, success) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(success);

                        req.flash('success_msg', 'You have add a new suburb');

                          res.redirect('surburb');
                    }

                });
          
        }

    }


);



// Get customer
router.get('/customer',loggedIn,IsAdmin, function (req, res) {
    User.find({admin: false}, {_id: 0,username: 1, join_date: 1, email: 1}, function (err, users) {
        if (err) throw err;
        let customers = [];
        customers = users;
        res.render('customer', {customers: customers});
    });
    
});

// Get membership
router.get('/membership',loggedIn,IsAdmin, function (req, res) {

        User.find({admin: false}, {_id: 0,username: 1, join_date: 1, email: 1}, function (err, users) {
        if (err) throw err;
        let customers = [];
        customers = users;
        res.render('membership', {customers: customers});
    });
    
});


// Get data entry
router.get('/data',loggedIn,IsAdmin, function (req, res) {
    Property.find({}, function (err, users) {
                if (err) {
                    console.log(err);
                } else {
                    const sdata = [];
                    for (i = 0; i < users.length; i++) {
                        sdata.push(users[i].suburb_name);
                    }
                    res.render('data', {
                        sdata: sdata
                    });
                }
            });
        });


//data entry 
router.post('/data', function (req, res) {
        let city_name = "harare";
        let suburb_name = req.body.myCountry;
        suburb_name = convertCase(suburb_name);
        var year = req.body.year;
        var size = req.body.size;
        var bedrooms = req.body.bedrooms;
        var kitchen = req.body.kitchen;
        var bathroom = req.body.bathroom;
        var dining = req.body.dining;
        var borehole = req.body.borehole;
        var pool = req.body.pool;
        var list_price = req.body.list_price;
        var sell_price = req.body.sell_price;
        var title = req.body.title;

        // Validation
        req.checkBody('myCountry', 'Suburb is required').notEmpty();
        req.checkBody('year', 'Year is required').notEmpty();
        req.checkBody('size', 'Size  is required').notEmpty();
        req.checkBody('bedrooms', 'Bedrooms is required').notEmpty();
        req.checkBody('kitchen', 'Kitchen is required').notEmpty();
        req.checkBody('bathroom', 'Bathroom is required').notEmpty();
        req.checkBody('dining', 'Dining  is required').notEmpty();
        req.checkBody('borehole', 'Borehole is required').notEmpty();
        req.checkBody('pool', 'Pool is required').notEmpty();
        req.checkBody('list_price', 'List Price is required').notEmpty();
        req.checkBody('sell_price', 'Sell Price is required').notEmpty();
        req.checkBody('title', 'Title is required').notEmpty();

        var errors = req.validationErrors();

        if (errors) {
            console.log(errors);
            res.render('data', {
                errors: errors
            });
        } else {
            
            var newProperty = new Property({
                suburb_name: suburb_name,
                year: year,
                size: size,
                bedrooms: bedrooms,
                kitchen: kitchen,
                bathroom: bathroom,
                dining: dining,
                borehole: borehole,
                pool: pool,
                list_price: list_price,
                sell_price: sell_price,
                title: title
            });
            newProperty.save(function (err) {
                if (err)
                    throw err;
                req.flash('success_msg', 'You have add a new property');

                res.redirect('data');
            
            });
           
            
         }

     });




// Get Logout
router.get('/logout', function (req, res) {
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/users/signin');
});
// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
}));


// callback route for google to redirect to
// hand control to passport to use code to grab profile info

router.get('/google/redirect',
    passport.authenticate('google', {
        successRedirect: '/users/pricing',
        failureRedirect: '/users/signin'
    }));


// auth with facebook
router.get('/facebook', passport.authenticate('facebook', {
    scope: ['profile',"email"]
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info

router.get('/facebook/redirect',
    passport.authenticate('facebook', {
        successRedirect: '/pricing',
        failureRedirect: '/signin'
    }));


//Get payment
router.get('/payment',loggedIn,IsAdmin, function (req, res) {
Payment.find({}, function (err, payments) {
    if (err) throw err;
    var payment = payments;

    res.render('payment',{payment:payment});
   
});

});


//Get payments
router.get('/payments',loggedIn, function (req, res) {
        res.render('payments');
    });



/*/Get product
router.get('/product', function (req, res) {
    res.render('product');
});*/


//Get products
router.post('/products', function (req, res) {
        let suburb_name= req.body.suburb;
        suburb_name = convertCase(suburb_name);
         
    Property.aggregate( [ { $match : { suburb_name : suburb_name } } ]).group({
        _id: {
            suburb_name: "$suburb_name",
            bedrooms: "$bedrooms"
        }, average: {
            $avg: "$sell_price"
        },min: {
            $min: "$sell_price"
        }, max: {
            $max: "$sell_price"
        }
        
    }).exec(function (err, data,req) {
        if (err) console.log(err);
        else 
           // var data= data;
            
           res.render('products',{data:data,
           suburb:suburb_name});
        
    });
    
     
   
    
});

//Get report


router.get('/report',loggedIn, function (req, res) {
    

    res.render('reports');
});


//Get search
router.get('/search', function (req, res) {
    res.render('search');
});

function convertCase(str) {
  var lower = String(str).toLowerCase();
  return lower.replace(/(^| )(\w)/g, function(x) {
    return x.toUpperCase();
  });
}


router.get('/result', function (req, res) {
    var reference = 1234;
    console.log("propsight.com/paynow/payment/"+reference);
    res.render('result');
});


router.get('/return', function (req, res) {
    res.render('return');
});


//Get user
router.get('/user',loggedIn,IsAdmin, function (req, res) {
        let admin =req.user;
        res.render('user',{admin:admin});
    
   
});




// pricing  route
router.post('/pricing',loggedIn, function (req, res) {
    const package = req.body.plan;

   
    if(package === "basic")
    { let info = {
            price: 19.99,
            plan: "BASIC"
        };
        
        res.render('payments',{info:info});
    }
    if (package === "pro") {
        let info = {
            price: 39.99,
            plan:"PRO"
        };
        res.render('payments', {
            info: info
        });
    }
    if (package === "unlimited") {
        let info = {
            price: 99,
            plan: "UNLIMITED"
        };
        res.render('payments', {
            info: info
        });
    }

});


router.post('/user/:reference/docs', function (req, res) {
    var reference = req.params.reference;
    Payment.findOne({reference},function (err,result) {
        result.status="success";
        result.save(function (err) {
            if (err) throw err;

            console.log('Transaction successfully updated!');
        });  
    });
    Membership.findOne({ reference }, function (err, result) {
        result.active = true;
        result.save(function (err) {
            if (err) throw err;

            console.log('membership activated');
        });
    });
 


});







function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        //req.session.returnTo = '/users'+req.path;
        res.redirect('/users/signin');
    }
    
}

function IsAdmin(req, res, next) {
    if (req.user.admin===true) {
        next();
    } else {
        //req.session.returnTo = '/users'+req.path;
        res.redirect('/');
    }
    
}

router.post('/payments', (req, res) => {
    var plan = req.body.plan;
    if (plan==="BASIC") {
        let reference = uniqid();
        let amount = 19.99;
        let area_searches = 10;
        let title_search = 1;
        let reports = 5;
        let description = "Payment for Basic Plan";
        let user = req.user.username;
        new_payment(amount, description, reference, area_searches, title_search, reports, user);
        paynow(amount, reference).then(response=>{
            
             res.redirect(response.redirectUrl);
        }).catch(e=>{
            console.log('Exception',e);
        });
//        res.render('userdashboard');
    }
    if (plan === "PRO") {
        let reference = uniqid();
        let amount =39.99;
        let area_searches = 30;
        let title_search = 10;
        let reports = 20;
        let description = "Payment for Pro Plan";
        let user = req.user.username;
        new_payment(amount, description, reference, area_searches, title_search, reports, user);
        paynow(amount, reference).then(response => {
            res.redirect(response.redirectUrl);
        }).catch(e => {
            console.log('Exception', e);
        });
  //      res.render('userdashboard');
    }
    if (plan === "UNLIMITED") {
        let reference = uniqid();
        let amount = 99;
        let area_searches = 100000000;
        let title_search = 100000000;
        let reports = 100000000;
        let description = "Payment for Unlimited Plan";
        let user = req.user.username;
        new_payment(amount, description, reference, area_searches, title_search, reports, user);
        paynow(amount, reference).then(response => {
            res.redirect(response.redirectUrl);
        }).catch(e => {
            console.log('Exception', e);
        });
    //    res.render('userdashboard');
    }
});

    
function paynow(amount,reference) {
    return new Promise((resolve,reject)=>{
        let paynow = new pn.Paynow(5408, "f5cda99d-4f59-4962-b324-5b7b62a9f03e");
        paynow.resultUrl = "https://propsight.com/paynow/payment/"+reference;
        paynow.returnUrl = 'https://facebook.com';


        let payment = paynow.createPayment(reference);
        payment.add("Item", amount);

        paynow.send(payment).then(response => {
            resolve(response);
            console.log('got here', response);
            if (response.success === true) {
                console.log('Response Successful');
            } else {
                console.log('Response not Successful', e);
            }
        }).catch(e => {
            reject(e);
            console.log('Exception when calling Paynow');
        });
    });
}


function new_payment(amount, description, reference, area_searches, title_search, reports, user) {

                var newPayment = new Payment({
                    amount: amount,
                    user: user,
                    description: description,
                    reference: reference
                });
                var active = false;
                var newMember = new Membership({
                    payment: amount,
                    name: user,
                    description: description,
                    area_searches: area_searches,
                    title_search: title_search,
                    reports: reports,
                    reference: reference,
                    active:active

                    
                });
                // save the user
                newPayment.save(function (err) {
                    if (err) throw err;

                    console.log('New Payment saved!');
                newMember.save(function (err) {
                    if (err) throw err;
                });

            });


    
}


function upperCaseFirst(str){
    return str.charAt(0).toUpperCase() + str.substring(1);
}


/*function requireAdmin() {
    return function (req, res, next) {
        var username = req.body.username;
        User.findOne({username}, function (err, user) {
            if (err) { return next(err); }

            if (!user) {
                // Do something - the user does not exist
            }

            if (!user.admin) {
                // Do something - the user exists but is no admin user
            }

            // Hand over control to passport
            next();
        });
    };
}


app.get('/user/:id/docs', function (req, res) {
    var id = req.params.id;
});


// trial period code

const TestSchema = new Schema({
    expire_at: {type: Date, default: Date.now, expires: 7200}
})

//expired in 2 





*/



/*let { amount, reference, status } = req.query;
console.log('amount', amount);
    var url = "https://www.paynow.co.zw/Interface/CheckPayment/?guid=94a50fcb-4cdb-4b70-b9b4-e5002d3a4bb6";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        var paynow =JSON.stringify(body);
        /*var extracted = paynow.split("&").find(function (v) {
            return v.indexOf("status=Paid") > -1;
        });

        var payment_status = extracted.split("=");
        var status = payment_status[1];
        var splitted = paynow.split("&");
        var reference =  splitted[0];
        var refnumber = reference.split("=");
        var sys_ref =refnumber[1];
        var paynow_reference = splitted[1];
        var ref = paynow_reference.split("=");
        var paynow_ref = ref[1];
        var amount_paynow = splitted[2];
        var cash = amount_paynow.split("=");
        var  amount= cash[1];
        User.findById(req.user._id, function (err, user) {
            if (err) throw err;

            // change the users location
            user.payment = {amount:amount,
                            reference:sys_ref,
                            paynow_reference:paynow_ref,
                            description: "Basic membership payment"
                            };

            // save the user
            user.save(function (err) {
                if (err) throw err;

                console.log('User successfully updated!');
            });

        }
        
        );}
});*/








        /*City.findById("5ae6e793c173490ab08a4887", function (err, restaurant) {
            var arr = restaurant.suburbs;
            var picked = arr.find(o => o.suburb_name === 'mbare');
            
                    console.log(picked);
        });*/





module.exports = router;
    
    
const Appt = require('../models/appointment'); 
const User = require('../models/user'); 
const Reviews = require ('../models/reviews')
const jwt = require('jsonwebtoken')


const SECRET = process.env.SECRET; 

  module.exports = {
    signup,
    login, 
    index,
    showOne,
    showAll, 
    createAppt, 
    showAppt, 
    deleteAppt, 
    createBeaut,
    updateBeaut, 
    deleteBeaut,
    showAllRevUser,
    showAllRevBeaut,
    createReview,
    updateReview
  }; 


async function signup(req,res){
  console.log(req)
  if (req.body.password.length < 8) return res.status(400).json({
    error: 'Password is short'
  }); 

    const user = new User(req.body);
    try {
      await user.save(); 
    const token = createJWT(user);
    res.json({
      token
    }); 
  } catch (err){
      res.status(400).json(err)
    }
} 


function createJWT(user){
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn:'24h'}
  ); 
}

async function login(req, res) {
  console.log(req.body)
  try {
    const user = await User.findOne({
      email: req.body.email
    });
    console.log(user)
    if (!user) return res.status(401).json({
      err: 'bad credentials'
    });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({
          token
        });
      } else {
        return res.status(401).json({
          err: 'bad password'
        });
      }
    });
  } catch (err) {
    console.log(err)
    return res.status(401).json(err);
  }
}
  
async function index(req, res) {
  const beaut = await User.find({beautician:{$eq: true}}
  );
  // console.log(beaut)
  res.status(200).json(beaut);
}

// show all the beautician the user searched for (filter: location,typeOfService)
function showAll(req, res) {
  let search = {}; 
    if (req.query.location){
     search.location = req.query.location
  }
    if (req.query.typeOfService){
      search.typeOfService = req.query.typeOfService
  }
    User.find(search)
     .then(beaut => {
      res.status(200).json(beaut);
  })
    .catch(err => {
      if (err) {
        console.log("query error: " + err);
      }
      res.sendStatus(500)
  });
}; 

//show one beautician profile 
function showOne(req, res) {
  User.findById(req.params.id)
    .then(beaut => {
      res.status(200).json(beaut);
  })
  .catch(err => {
    if (err) {
      console.log("id error: " + err);
    }
    res.sendStatus(500)
  });
}; 

// creating an appt 
function createAppt(req, res) {
  Appt.create(req.body)
  .then(appt => {
    res.status(200).json(appt);
})
  .catch(err => {
    if (err) {
      console.log("create error: " + err);
    }
    res.sendStatus(500)
});
}; 

//show all the appts a user has 
function showAppt(req, res){
  Appt.find({user:req.params.id})
    .populate('user') 
    .populate('beautician')
    .exec((err, appt)=> {
      if (err) {
      console.log("index error:" + err);
      res.sendStatus(500);
  }
      res.json(appt);
  });
};

// delete an appt 
function deleteAppt(req, res) {
  Appt.findByIdAndRemove(req.params.id)
    .populate('user') 
    .populate('beautician')
    .exec((err, appt)=> {
      if (err) {
      console.log("delete error:" + err);
      res.sendStatus(500);
    }
      res.json(appt);
     // res.redirect(`/${user._id}/appt`) //this would take the user back to their appt page
  });
};

//create a beautician profile
async function createBeaut(req, res) {
  req.body.beautician = true
  const createBeaut = await User.findByIdAndUpdate(req.user._id, req.body, {new: true})
  res.status(200).json(createBeaut)
}

//update a beautician profile 
async function updateBeaut(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, {new: true})
    .then(updateBeaut => {
      res.status(200).json(updateBeaut);
  })
    .catch(err => {
      if (err) {
      console.log("update error: " + err);
    }
      res.sendStatus(500)
  });
}; 

//delete a beautician profile 
function deleteBeaut(req, res) {
  User.findByIdAndRemove(req.params.id)
  .then(beaut => {
    res.status(200).json(beaut);
    // res.redirect(`/`) // it would redirect to the homepage 
  })
  .catch(err => {
    if (err) {
      console.log("delete error: " + err);
    }
    res.sendStatus(500)
  });
}; 

// creating a review
function createReview(req, res) {
  Reviews.create(req.body)
  .then(review => {
    res.status(200).json(review);
})
  .catch(err => {
    if (err) {
      console.log("create error: " + err);
    }
    res.sendStatus(500)
});
}; 


//show all the user reviews 
function showAllRevUser(req,res){
  Reviews.find({user:req.params.id})
    .populate('user') 
    .populate('beautician')
    .exec((err, review)=> {
      if (err) {
      console.log("index error:" + err);
      res.sendStatus(500);
  }
    res.json(review);
  });
}

//show all the reviews for a beautician
function showAllRevBeaut(req, res){
  Reviews.find({beautician:req.params.id})
    .populate('user') 
    .populate('beautician')
    .exec((err, review)=> {
      if (err) {
      console.log("index error:" + err);
      res.sendStatus(500);
  }
      res.json(review);
  });
};

//update a review profile 
function updateReview(req, res) {
  req.body.user = req.params.user_id
  Reviews.findByIdAndUpdate(req.params.rev_id, req.body, {new: true})
  .populate('user') 
  .populate('beautician')
  .exec((err, review)=> {
    if (err) {
    console.log("index error:" + err);
    res.sendStatus(500);
}
    res.json(review);
});
};
























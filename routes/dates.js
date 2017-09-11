var express = require('express');
var router = express.Router();
var Date = require('../models/date');

/* GET users listing. */
router.get('/:date', function(req, res, next) {
  var date = req.params.date;
  var testArray = [{},{},{},{}];
  Date.findOrCreate({day: date}, function(err, response, created){
    console.log(created);
    res.json(response);
  });


});

router.put('/book', function(req, res, next) {
  console.log(req);
  var date = req.body.time;
  var slot = req.body.slot;
  var booker = req.body.booker;
  console.log(date);
  Date.findOne(
    { day: date },
    function (err, doc) {
      console.log(doc);
      doc.timeslots.set(slot, {time: doc.timeslots[slot].time, booked: true, booker: booker});
      console.log(doc.timeslots[slot]);
      doc.save((error, result) => {
        if (error) {
          res.status(500).send(error)
        }
        console.log(result);
        res.status(200).send(result);

      });
    }
  )


});


router.put('/unbook', function(req, res, next) {
  var date = req.body.time;
  var slot = req.body.slot;
  Date.findOne(
    { day: date },
    function (err, doc) {
      doc.timeslots.set(slot, {time: doc.timeslots[slot].time, booked: false, booker: "none"});
      doc.save((error, result) => {
        if (error) {
          res.status(500).send(error)
        }
        res.status(200).send(result);
      });
    }
  )


});






module.exports = router;

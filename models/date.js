var Mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

//Define messages model
const dateSchema = new Mongoose.Schema({

  day: String,
  timeslots: { type: Array, default: [
    {time: '00:00-01:00', booked: false, booker: 'none' },
    {time: '01:00-02:00', booked: false, booker: 'none' },
    {time: '02:00-03:00', booked: false, booker: 'none' },
    {time: '03:00-04:00', booked: false, booker: 'none' },
    {time: '04:00-05:00', booked: false, booker: 'none' },
    {time: '05:00-06:00', booked: false, booker: 'none' },
    {time: '06:00-07:00', booked: false, booker: 'none' },
    {time: '07:00-08:00', booked: false, booker: 'none' },
    {time: '08:00-09:00', booked: false, booker: 'none' },
    {time: '09:00-10:00', booked: false, booker: 'none' },
    {time: '10:00-11:00', booked: false, booker: 'none' },
    {time: '11:00-12:00', booked: false, booker: 'none' },
    {time: '12:00-13:00', booked: false, booker: 'none' },
    {time: '13:00-14:00', booked: false, booker: 'none' },
    {time: '14:00-15:00', booked: false, booker: 'none' },
    {time: '15:00-16:00', booked: false, booker: 'none' },
    {time: '16:00-17:00', booked: false, booker: 'none' },
    {time: '17:00-18:00', booked: false, booker: 'none' },
    {time: '18:00-19:00', booked: false, booker: 'none' },
    {time: '19:00-20:00', booked: false, booker: 'none' },
    {time: '20:00-21:00', booked: false, booker: 'none' },
    {time: '21:00-22:00', booked: false, booker: 'none' },
    {time: '22:00-23:00', booked: false, booker: 'none' },
    {time: '23:00-24:00', booked: false, booker: 'none' }
    ]}

});

dateSchema.plugin(findOrCreate);

module.exports = Mongoose.model('Date', dateSchema);
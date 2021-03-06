var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    from: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    order: {type: Schema.Types.ObjectId, required: true, ref: 'Ride'},
    content: String,
    type: {type: Number, min: 1, max: 2}, //1 -- passenger->driver, 2 -- driver->passenger
    date: {type: Date, default: Date.now },
    rate: {type: Number, min: 0, max: 10}
});

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {type: String, lowercase: true, required: true, unique: true},
    number: String,
    avatar: {type: Schema.Types.ObjectId, default: null},
    payment: {
        paypal: {type: String, default: null},
        wechat: {type: Schema.Types.ObjectId, default: null},
        alipay: {type: Schema.Types.ObjectId, default: null}
    },
    admin: {type: Boolean, default: false},
    password: {type: String, required: true},
    score: {type: Number, default: 10},
    verified: {type: Boolean, default: false},
    verifyCode: Number,
    gender: Boolean, //true for male, false for female
    driverPermission: {type: Boolean, default: false},
    driversLicense: {type: String, default: null},
    notifications: [Number],
    vehiclePlate: {type: String, default: null},
    comments: [commentSchema]
    }, {
        runSettersOnQuery: true
    });

module.exports = mongoose.model('User', userSchema);

const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    mname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    mothername: {
        type: String,
        required: true,
        trim: true
    },
    Education: {
        type: String,
   
        trim: true
    },
    age: {
        type: String,
        required: true,
        trim: true
    },
    Occupation: {
        type: String,
        required: true,
        trim: true
    },
   
    // email: {
    //     type: String,
    //     unique: true,
    //     sparse: true, // Allows null or empty values to be unique
    //     default: function() {
    //         if (this.email === null) {
    //             return 'unique_' + Math.random().toString(36).slice(2, 11); // Generate a unique value for null emails
    //         }
    //         return this.email;
    //     },
    //     validate(value) {
    //         if (value && !validator.isEmail(value)) {
    //             throw Error("Invalid email address");
    //         }
    //     }
    // },
    
    
    
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    gender: {
        type: String,
        required: true,
    },
    Anganwadi: {
        type: String,
        required: true,
    },
    ANGANWADIBeneficial: {
        type: String,
        required: true,
    },

    MGNREGABeneficial: {
        type:String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    MGNREGA: {
        type: String,
        required: true,
    },
    KALIA: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    Husband: {
        type: String,
        
    },
    Reason: {
        type: String,
        
    },
    


    sons: [{
        name: {
            type: String,
          
            trim: true
        },
        age: {
            type: Number,
          
            min: 0 // Assuming age cannot be negative
        },
       
    }],
    brothers: [
        {
            name: {
                type: String,
                required: true,
                trim: true
            },
            age: {
                type: String, // Change this to String to match the modified code
                required: true,
                trim: true
            }
        }
    ],
    datecreated:Date,
    dateUpdated:Date
});

// model
const users = new mongoose.model("users",usersSchema);

module.exports = users;

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength:3,
        maxlength: 100
    },
    sexo:{
       type: String,
       required: true,
       minlength:2,
       maxlength:10
    },
    idade: {
        type: Number,
        required: true,
    },
    hobby: {
        type: String,
        required: true,
        minlength:3,
        maxlength: 100
    },
    dataNascimento: {
       type: Date,
       required: true
    }
    
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);
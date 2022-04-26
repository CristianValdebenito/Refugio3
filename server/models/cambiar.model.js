const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const MascotaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [
            true,
            "El nombre es requerido"
        ],
        minlength: [3, 'El nombre no puede tener menos de 3 caracteres'],
        unique: true
    },
    tipo:{
        type: String,
        required: [
            true,
            "El tipo es requerido"
        ],
        minlength: [3, 'El tipo no puede tener menos de 3 caracteres'],
    },
    descripcion:{
        type: String,
        minlength: [3, 'La descripcion no puede tener menos de 3 caracteres']
    },
    habilidad1:{
            type: String,
            required: false
        } ,
        habilidad2:{
            type: String,
            required: false
        },
        habilidad3:{
            type: String,
            required: false
        } 

    
},{timestamps: true});


//Validacion en update
MascotaSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
  });

MascotaSchema.plugin(uniqueValidator);

const Mascota = mongoose.model("Mascota",MascotaSchema);

module.exports = Mascota;
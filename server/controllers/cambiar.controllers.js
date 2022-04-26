const Mascota = require("../models/cambiar.model");


module.exports = {
    createNewMascota: (req, res) => {
        const { nombre, tipo, descripcion, habilidad1, habilidad2, habilidad3 } = req.body;
        Mascota.create({
            nombre,
            tipo,
            descripcion,
            habilidad1,
            habilidad2,
            habilidad3
           
        })
            .then(mascota => res.json(mascota))
            .catch(err => res.status(400).json(err))
    }
}

module.exports.findAllMascotas = (req,res) => {
    Mascota.find()
        .then((allMascotas)=>res.json({mascota:allMascotas}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOneMascota = (req,res)=>{
    Mascota.findOne({_id: req.params.id})
        .then((mascota)=>res.json({detalle:mascota}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.updateMascota = (req,res)=>{
    Mascota.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((mascota)=>res.json({mascota:mascota}))
        .catch((err)=>res.status(400).json(err))
}

module.exports.deleteMascota = (req,res)=>{
    Mascota.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

//dfdfdfdfdf

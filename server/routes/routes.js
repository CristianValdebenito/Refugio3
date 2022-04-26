const MascotaController = require ("../controllers/cambiar.controllers");

module.exports = app =>{

    app.post("/api/mascotas/new",MascotaController.createNewMascota);
    app.get("/api/mascotas",MascotaController.findAllMascotas);
    app.get("/api/mascotas/:id",MascotaController.findOneMascota);
    app.put("/api/mascotas/update/:id",MascotaController.updateMascota);
    app.delete("/api/mascotas/delete/:id",MascotaController.deleteMascota);
}
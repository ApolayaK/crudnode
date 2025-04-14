const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

//req = solicitud | res = respuesta
router.get('/', (req, res)=>{
  //Retornamos una coleccion de datos. Consulta exitosa "results", fallo "error"
  conexion.query("SELECT * FROM vehiculos", (error, results)=>{
    if (error){
      throw error;
    }else{
      res.send(results);
    }
  });
});

module.exports = router;
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
      //Enviamos "json" los datos al navegador
      //res.send(results);
      //res.render('edit', {dev: 'Mariana', skill: 'JS', friends: ['A1','A2','A3']});
      res.render('index', {registros: results})
    }
  });
});

//Enrutador paqra el registro
router.get('/create',(req, res)=>{
  res.render('create')
});

//Acceder a toda la logica
const crud = require('./controllers/crud');
router.post('/save', crud.save);

module.exports = router;
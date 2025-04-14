const conexion = require('../database/db');

exports.save = (req, res) => {
  //Acceder a los datos enviados (vistas)
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  //NOTA: Se debe especificar como capturar lso datos de los <from></from> app.js
  //Evidencia de captura de datos
  //console.log(tipo,marca,color);

  conexion.query(`INSERT INTO vehiculos SET ?`, 
    { tipo: tipo, marca: marca, color: color}, (error, results)=>{
      if(error){
        console.log(error);
      }else{
        //Redireccionar
        //console.log("Grabado correctamente");
        res.redirect('/');
      }
    });
};
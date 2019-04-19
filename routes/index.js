var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ejercicio1/', function(req, res, next) {
 var params = req.query;
 var cadena = params.cadena;
 var resultado = cadena.split("-");
 for (var i = 0; i < resultado.length; i++){
  //var cadenaRes = parseInt(resultado[i]);
   if(i % 2 == 0){
     var equipo1+=resultado[i];
   }
   else{
     var equipo2+=resultado[i];
   }
   var arreglo=[];
   arreglo.push(equipo1,equipo2);
 }
 res.status(200).json({msn: arreglo})

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ejercicio1', function(req, res, next) {
 var params = req.query;
 var cadena = params.cadena;
 var resultado = cadena.split("-");
 var array = new Array(0,0);
 for (var i = 0; i < resultado.length; i++){
   if(i % 2 == 0){
     array[0]+=parseInt(resultado[i]);
   }
   else{
     array[1]+=parseInt(resultado[i]);
   }
 }
 res.status(200).json({msn: array})

});

/*module.exports = router;

/* ejercicio2*/
router.post('/ejercicio2', function(req, res, next){
  var picture = req.body.split(",");
  var array = new Array();
  var asteristic = "";
  for (var i = 0; i<picture[0].length+2;i++){
    asteristic = asteristic +"*";
    array[0] = asteristic;
    array [picture.length+1]=asteristic;
  }
  for (var j=1; j<picture.length+1;j++){
    array[j]="*"+picture[j-1]+"*";
  }

  res.status(200).json({msn: array})
});
 /*ejercicio3*/

 router.get('/ejercicio3', function(req, res, next){
   var params = req.query;
   var res = params.res;
   var matrix1 = new Array();
   var matrix2 = new Array();
   var cont=0;
   var consulta;
   matrix1 = matrix1[0].split(",");
   matrix2 = matrix2[1].split(",");
   for (var i = 0; i < matrix1.length; i++) {
     for (var j = 0; j < matrix2.length; j++) {
       if(matrix1[i] == matrix2[j]){
         cont ++;
       }
     }
   }
   if(const==matrix1.length && const==matrix2.length){
     consulta = true;
   }
   else{
     consulta = false;
   }
 });

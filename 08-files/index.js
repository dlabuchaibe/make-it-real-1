const fs = require('fs');

fs.readFile('./files/datos.csv', 'utf8', (err, data)=>{
    if(err){
        console.log("Ocurrió un error leyendo el archivo");
    }
    console.log(data);
});

fs.appendFile('./files/datos.csv', ', Juan Leaño;30;F;Calle 32 # 41', (err) => {
    if(err){
        console.log("Ocurrió un error leyendo el archivo");
    }
    console.log('Ok');
});
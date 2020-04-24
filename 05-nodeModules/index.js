//own modules
const {iva, ivaVehiculos, ivaCanastaFamiliar} = require("./modules/iva");
const log = require("./modules/logs");
//third party modules
const faker = require("faker");

log.info(`el valor del iva es ${iva}%`);
log.info(`el valor del iva para vehículos es ${ivaVehiculos}%`);
log.info(`el valor del iva de la canasta familiar es ${ivaCanastaFamiliar}%`);
console.log("\n\n");
log.info(`${faker.name.findName()} - ${faker.internet.email()}`);
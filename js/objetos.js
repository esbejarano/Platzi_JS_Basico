function auto(marca, modelo, annio) {
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
    this.detalleAuto = function(){
        console.log(`Auto ${this.modelo} ${this.marca} ${this.annio}`);
    }
}


const miAuto = new auto("Mazda", "6", 2022);
const miAuto2 = new auto("Mazda", "2", 2021);
const miAuto3 = new auto("Toyota", "Corolla", 2020);
miAuto.detalleAuto();
miAuto2.detalleAuto();
miAuto3.detalleAuto();
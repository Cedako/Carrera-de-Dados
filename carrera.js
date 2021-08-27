class Carrera{
    constructor(){
        this.activitionBlizzard = 0;
        this.ubisoftSingapur = 0;
        this.otraDemanda = 100;
        this.victimasBlizzard = new Array();
        this.victimasUbisoft = new Array();

        //console.log(this.dado());
    }

    dado(){
        let tirada = Math.floor(Math.random()*6)+1;
        return tirada
    }

    farmeoDeAcosos(){
        for(let i = 0; i<this.otraDemanda; i++){
            let empleadoPromedioB = this.dado();
        }
    }
}
new Carrera;
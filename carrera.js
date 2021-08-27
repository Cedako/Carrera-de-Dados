class Carrera{
    constructor(){
        this.activitionBlizzard = 0;
        this.ubisoftSingapur = 0;
        this.otraDemanda = 100;
        this.victimasBlizzard = new Array();
        this.victimasUbisoft = new Array();

        //console.log(this.dado());
        this.farmeoDeAcosos();
    }

    //Este es el dado
    dado(){
        let tirada = Math.floor(Math.random()*6)+1;
        return tirada
    }

    //Este método determina la cantidad de cuadros a avanzar dependiendo del número del dado y devuelve la cantidad.
    acosos(oportunidades){
        if(oportunidades == 6){
            return 3;
        }
        else if((oportunidades == 1) || (oportunidades == 2)){
            return 1;
        }
        else if((oportunidades == 3)|| (oportunidades == 4) || (oportunidades == 5)){
            return 2;
        }
    }

    //Este método hace que cada participante haga sus tiradas y avance sus cuadros correspondientes.
    farmeoDeAcosos(){
        for(let i = 0; i<=this.otraDemanda; i++){
            let empleadoPromedioB = this.dado();
            this.activitionBlizzard += this.acosos(empleadoPromedioB)
            //Aquí se guardan en un array la posición del corredor 1 en cada tirada.
            this.victimasBlizzard.push(this.activitionBlizzard);
            if(this.activitionBlizzard >= 100){
                i = 100
            }
        }

        for(let i = 0; i<=this.otraDemanda; i++){
            let empleadoPromedioU = this.dado();
            this.ubisoftSingapur += this.acosos(empleadoPromedioU)
            this.victimasUbisoft.push(this.ubisoftSingapur);
            if(this.ubisoftSingapur >= 100){
                i = 100
            }
        }

        console.log(this.yElGanadorEs(this.victimasBlizzard.length, this.victimasUbisoft.length));
        console.log(this.victimasBlizzard);
        console.log(this.victimasUbisoft);
    }

    yElGanadorEs(oportunidadesB, oportunidadesU){
        if(oportunidadesB<oportunidadesU){
            return "Blizzard es el ganador!"
        }
        else if(oportunidadesB>oportunidadesU){
            return "Ubisoft Singapur es el ganador!"
        }
        else if(oportunidadesB === oportunidadesU){
            return "Es un empate!"
        }
    }
}
new Carrera;
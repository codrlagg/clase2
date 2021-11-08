// submenu para division
else if(menum == 4){
    console.log("Operación seleccionada: division");    let submenu = prompt("Selecciona cuantas variables vas a dividir: (1)dividir 2 variables  (2)dividir 3 variables");
    let subnum = parseInt(submenu);
    // division de dos varibles
    // if(subnum == 1){
        console.log("Variables a dividir: dos");
        // solicitar datos variable 1
        let var1 = prompt("Ingresa el primer número a dividir");
        let var1num = parseInt(var1);
        console.log("var1: "+var1num);
        // solicitar datos variable 2
        let var2 = prompt("Ingresa el valor del divisor");
        if((var2 =="")||(var == 0)){
            console.log("Ingresar un número válido");
        }
        else{
            let var2num = parseInt(var2);
            console.log("var2: "+var2num);
            // dividir valores
            let resultado = var1num * var2num;
            console.log("resultado: "+resultado);
            alert("La division es " + resultado);
        }
}
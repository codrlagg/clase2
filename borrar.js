// submenu para multiplicacion
else if(menum == 3){
    console.log("Operación seleccionada: multiplicacion");
    let submenu = prompt("Selecciona cuantas variables vas a multiplicar: (1)multiplicar 2 variables  (2)multiplicar 3 variables");
    let subnum = parseInt(submenu);
    // multiplicacion de dos variables
    if(subnum == 1){
        console.log("Variables a multiplicar: dos");
        // solicitar datos variable 1
        let var1 = prompt("Ingresa el primer número a multiplicar");
        let var1num = parseInt(var1);
        console.log("var1: "+var1num);
        // solicitar datos variable 2
        let var2 = prompt("Ingresa el segundo número a multiplicar");
        let var2num = parseInt(var2);
        console.log("var2: "+var2num);
        // multiplicar valores
        let resultado = var1num * var2num;
        console.log("resultado: "+resultado);
        alert("La multiplicacion es " + resultado);
    }
    // multiplicacion de tres variables
    else if (subnum == 2){
        console.log("Variables a multiplicar: tres");
        // solicitar datos variable 1
        let var1 = prompt("Ingresa el primer número a multiplicar");
        let var1num = parseInt(var1);
        console.log("var1: "+var1num);
        // solicitar datos variable 2
        let var2 = prompt("Ingresa el segundo número a multiplicar");
        let var2num = parseInt(var2);
        console.log("var2: "+var2num);
        // solicitar datos variable 3
        let var3 = prompt("Ingresa el tercer número a multiplicar");
        let var3num = parseInt(var3);
        console.log("var3: "+var3num);
        // multiplicar valores
        let resultado = var1num * var2num * var3num;
        console.log("resultado: "+resultado);
        alert("La multiplicacion es " + resultado);
    }
    // ingreso de un valor fuera de rango o no valido
    else{
        alert("Valor inválido");
    }
}
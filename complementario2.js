
/* La idea es que las primeras 5 personas en registrarse en la página tengan medio kilo de helado gratis*/


class Cliente{
    constructor(nombre , apellido , telefono , dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.dni = dni;

    }
}

let lista_cliente = [];

for (let i = 0 ; i < 5 ; i++){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let telefono = prompt("Ingrese su telefono");
    let dni = prompt("Ingrese su dni");
    

    let nuevo_cliente = new Cliente(nombre , apellido , telefono , dni);
    lista_cliente.push(nuevo_cliente);
}

console.log(lista_cliente);



for(let cliente of lista_cliente){
    console.log("<--------->")
    console.log("Nombre " , cliente.nombre);
    console.log("Apellido " , cliente.nombre);
    console.log("Telefono " , cliente.telefono);
    console.log("DNI " , cliente.dni);
    
}
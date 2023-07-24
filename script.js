let usuario;

for (let i=1; i <= 5; i++){
    usuario = prompt('Ingrese su nombre de usuario');
    contrasena = prompt('Ingrese su contraseña');
    if((usuario == 'Tutor') && (contrasena == '1234')){
        alert('Bienvenido tutor!')
        break;
    }else{
        alert('Usuario y/o contraseña no encontrados!')
    }
}

let totalApagar = 0;

let juegos = prompt('1-Resident evil 4 Remake ($11000)\n2-Elden Ring ($5999)\n3-Mortal Kombat 1 ($9999)\n4-Outlast ($129.99)\n5-Sea of Thieves ($749)\n6-FIFA 23 ($2600)\n7-Far Cry 6 ($4100)\n0-Finalizar pedido');

while(juegos != '0'){
    switch(juegos){
        case '1':
            alert('Agregaste Resident evil 4 Remake a tu carrito de compras ($11000)');
            incrementarTotalApagar(11000);
            break;
        case '2':
            alert('Agregaste Elden Ring a tu carrito de compras ($5999)');
            incrementarTotalApagar(5999);
            break;
        case '3':
            alert('Agregaste Mortal Kombat 1 a tu carrito de compras ($9999)');
            incrementarTotalApagar(9999);
            break;
        case '4':
            alert('Agregaste Outlast a tu carrito de compras ($129.99)');
            incrementarTotalApagar(129.99);
            break;
        case '5':
            alert('Agregaste Sea of Thives a tu carrito de compras ($749)');
            incrementarTotalApagar(749);
            break;
        case '6':
            alert('Agregaste Fifa 23 a tu carrito de compras ($2600)');
            incrementarTotalApagar(2600);
            break;
        case '7':
            alert('Agregaste Far Cry 6 a tu carrito de compras ($4100)');
            incrementarTotalApagar(4100);
            break;
        default:
            alert('Código de juego no encontrado');
            break;
    }
    juegos = prompt('1-Resident evil 4 Remake ($11000)\n2-Elden Ring ($5999)\n3-Mortal Kombat 1 ($9999)\n4-Outlast ($129.99)\n5-Sea of Thieves ($749)\n6-FIFA 23 ($2600)\n7-Far Cry 6 ($4100)\n0-Finalizar pedido');
}

alert('Total a pagar de su compra $ ' +totalApagar)

function incrementarTotalApagar(preciojuegos){
    totalApagar = totalApagar + preciojuegos;
    console.log('Subtotal de la compra por el momento $' +totalApagar);
}
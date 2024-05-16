// Use node.js to run this file with the command: 
// "node --watch asincronismo.js"

//// 8. Sync vs Async Code

    // Sync Code -> This type of code is executed in a linear way, that is, it waits for a task to be completed to execute the next one
    
    console.log("Codigo síncrono\n");
    const producto = function() {
        console.log("Seleccione un producto");
    }

    const metodoPago = function() {
        console.log("Seleccione un método de pago");
    }

    const mensaje = function() {
        console.log("Compra realizada con éxito, vuelva pronto\n");
    }

    producto()
    metodoPago()
    mensaje()
    
    // Async Code -> This type of code is executed in a non-linear way, that is, it does not wait for a task to be completed to execute the next one

    console.log("Codigo asíncrono\n");

    const productos = function(){
        console.log("Seleccione un producto para su compra");
    }

    const metodoPago2 = function() {
        console.log("Seleccione un método de pago para su compra");
    }

    const esperaPago = function() {
        setTimeout(() => { 
            console.log("\x1b[32mEl pago de su compra anterior se realizó con éxito (código asíncrono)");
        }, 2000) // -> Asynchronous code that waits 2 seconds to execute the next task
    }
        
    const navegando = function() {
        console.log("Mientras espera que su pago se procese puede seleccionar nuevos productos");
    }

    productos()
    metodoPago2()
    esperaPago()
    navegando()

////

//// 9. Callback Functions

    function hacerPedido(callback){
        setTimeout(() => {
            callback(); // -> Callback function
        }, 2000); 
    }

    hacerPedido(() => {
        console.log("\n\x1b[0mCallback Functions\n");
        console.log("\x1b[33mSu primer pedido fue procesado con exito (callback)");
        console.log("Gracias por visitarnos");
    });

    hacerPedido(() => {
        console.log("\x1b[35mSu segundo pedido fue procesado con exito (callback)");
        console.log("Gracias por visitarnos");
    });

////

//// 10. Promises

    function cargarProductos(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const productos = {
                    id: 1,
                    nombre: 'Computadora',
                    precio: 100
                }
                resolve(productos);

                reject(new Error("No se pudo cargar los datos"));
            },3000)
        })
    }

    cargarProductos()
    .then((productos) => {
        console.log("\n\x1b[0mPromises\n");
        console.log("Los productos se cargaron exitosamente : ", productos);
    })
    .catch((error) => {
        console.log("Error al cargar los productos : ", error);
    })

////

//// 11. Async/Await

    const mercadolibre = async(id) =>{
        try {
            const request = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            let data = await request.json()
            console.log("\nAsync/Await\n");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    mercadolibre(38)

////

//// 12. .then().catch()

    fetch("https://api.escuelajs.co/api/v1/products/37")
        .then(response => response.json())
            .then(data => {
                console.log("\n.then().catch()\n");
                console.log(data)
            }) 
            .catch(error => console.error(error))

////
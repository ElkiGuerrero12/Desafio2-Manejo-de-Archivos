const ProducManager = require("./ProductManager")
const manager = new ProducManager("products.json")

const main = async () =>{

    let product1 = {
        title : "Maca",
        descripction : "Maca Gelatinizada", 
        price : 70,
        thumbnail : "image",
        code : 12,
        stock : 20
    }

    let product2 = {
        title : "Malta",
        descripction : "Malta Atomizada", 
        price : 50,
        thumbnail : "image",
        code : 13,
        stock : 10
    }

    let product3 = {
        title : "Algas",
        descripction : "Extracto de Algas", 
        price : 69,
        thumbnail : "image",
        code : 14,
        stock : 15
    }

    let actualizar = {
        title : "Uña de gato",
        descripction : "Uña de gato Atomizada", 
        price : 79,
        thumbnail : "image",
        code : 15,
        stock : 20
    }

    await manager.addProduct(product1)
    await manager.addProduct(product2)
    await manager.addProduct(product3)
    console.log(await manager.getProducts())
    //console.log(await manager.getProdctById(2))
    //await manager.updateProduct(2,actualizar)
    //await manager.deleteProduct(3)
    //console.log(await manager.getProducts())
}

main()
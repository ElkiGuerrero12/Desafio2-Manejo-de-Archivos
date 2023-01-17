const fs = require("fs")

class ProducManager{
    products;
    constructor(file){
        this.products = file
    }

    async getNewId(){
        let productosId = await this.getProducts()
        if (productosId.length == 0){
            return 1
        } else{
          return productosId[productosId.length - 1].id + 1 
        }
    }

    async addProduct(nuevoProducto){
        nuevoProducto.id = await this.getNewId()
        let productos = await this.getProducts()
        productos.push(nuevoProducto)
        await fs.promises.writeFile(this.products, JSON.stringify(productos))
    }

    async getProducts(){
        let productos = await fs.promises.readFile(this.products, "utf-8")
        let objProduct = JSON.parse(productos)
        return objProduct
    }

    async getProdctById(id){
        let array =  await this.getProducts()
        return array.find(busq => busq.id == id)
        
    }

    async updateProduct(id,actualizar){
        let array =  await this.getProducts()
        let cambiar = array.findIndex(ele => ele.id === id)
        actualizar.id = id
        array.splice(cambiar,1,actualizar)
        await fs.promises.writeFile(this.products, JSON.stringify(array))
    }

    async deleteProduct(id){
        let array =  await this.getProducts()
        let eliminar = array.findIndex(ele => ele.id === id)
        array.splice(eliminar,1)
        await fs.promises.writeFile(this.products, JSON.stringify(array))
    } 
}

module.exports = ProducManager;
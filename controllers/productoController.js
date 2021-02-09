const Producto = require( "../models/Producto");


exports.crearProducto= async (req, res) => {
    try {
        //Creamos nuestro producto
        
        let producto = new Producto(req.body)
        await producto.save()
        res.send(producto)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
        
    }
}
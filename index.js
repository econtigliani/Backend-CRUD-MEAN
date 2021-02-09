const exrpress = require('express')

const app = exrpress()

app.get('/', (req,res)=>{
    res.send('Hola mundo!')
})

app.listen(4000,()=>{
    console.log('el servidor esta corriendo correctamente')
})
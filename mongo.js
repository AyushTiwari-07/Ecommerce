const mongoose= require('mongoose')

mongoose.connect("mongodb://localhost:27017/EcomDB")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('error');
})
const ecoSchema=new mongoose.Schema({
    data:[{
        Username: {
            type: string
        
        },
        Email: {
            type: string
        },
        MobileNo: {
            type: Number
        },
        password: {
            type: string
        },
        Cpassword: {
            type: string
        },
    

    }]

})
const collection=new mongoose.model('ecom',ecoSchema)
const router_mhs = require('express').Router();
const mongoose = require ('mongoose');
const Mahasiswa = require ('../models/schemaMhs');

mongoose.connect('mongodb://localhost:27017/REST_API',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).catch(e => {
    console.log(e);
})

router_mhs.use((req,res,next)=>{
    console.log('Masuk MiddleWare');
    next();
});

router_mhs.get('/',(req,res)=>{
    console.log("Get di /mahasiswa");
    res.send("Anda Berada di localhost/mahasiswa");
})

router_mhs.get('/:nama', async (req,res) => {
    const mhs = await Mahasiswa.find({nama:req.params.nama});
    console.log("Masuk Get by Nama");
    res.send(mhs);
});

router_mhs.post('/',(req,res)=>{
    const mahasiswa = new Mahasiswa({
        _id: new mongoose.Types.ObjectId(),
        nama:req.body.nama,
        jurusan:req.body.jurusan
    });
    mahasiswa.save().then(result=>{
        console.log(result);
    })
    .catch(err=>console.log(err));
    res.status(200).json({
        message:"Data Mahasiswa telah ditambahkan",
        mahasiswaBaru:mahasiswa
    })
})

module.exports = router_mhs;

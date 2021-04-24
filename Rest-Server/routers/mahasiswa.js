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

//READ ALL
router_mhs.get('/',async (req,res)=>{
    const mahasiswa = await Mahasiswa.find({});
    console.log("Get di /mahasiswa");
    res.status(200).send(mahasiswa);
})

//READ BY NAME
router_mhs.get('/:nama', async (req,res) => {
    const mahasiswa = await Mahasiswa.find({nama:req.params.nama});
    console.log("Masuk Get by Nama");
    // if (mahasiswa.nama==req.params.nama){
    //     res.send(mahasiswa);
    //     console.log(mahasiswa)
    // }
    // else{
    //     res.status(404).send("Data Tidak Ditemukan");
    // }
});

//CREATE
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

//UPDATE
router_mhs.put('/:nama',(req,res)=>{
    const mahasiswa = Mahasiswa.findOneAndUpdate({nama:req.params.nama},{nama:req.body.nama,jurusan:req.body.jurusan},{new:true},(err,data)=>{
        if(err){
            console.log(error);
        }
        else{
            res.send(data)
            console.log(data);
        }
    })
})

//DELETE
router_mhs.delete('/:nama',(req,res)=>{
    const mahasiswa = Mahasiswa.findOneAndDelete({nama:req.params.nama},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Data Telah Dihapus");
        }
    })
})

module.exports = router_mhs;

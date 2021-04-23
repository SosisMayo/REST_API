const express = require('express');
const app = express();
const router_mhs = require('./routers/mahasiswa');

//MIDDLEWARE
app.use(express.json());
app.use('/mahasiswa',router_mhs);

//GET di ROOT
 app.get('/',(req,res)=>{ 
     res.send("HALAMAN DEPAN");
});

// //READ ALL
// app.get('/mahasiswa',(req,res)=>{
//     res.json(daftarMahasiswa);
// });

// //CREATE
// app.post('/mahasiswa',(req,res)=>{
//     const mahasiswa={
//         id:daftarMahasiswa.length+1,
//         nama:req.body.nama,
//         jurusan:req.body.jurusan,
//     }
//     daftarMahasiswa.push(mahasiswa);
//     res.send(mahasiswa);
//     fs.writeFileSync('./data.json',JSON.stringify(daftarMahasiswa));
// })

// //READ BY ID
// app.get('/mahasiswa/:nama',(req,res)=>{
//     const mahasiswa = daftarMahasiswa.find(data=>data.id === parseInt(req.params.id));
//     if(!mahasiswa) res.status(404).send('Data mahasiswa dengan ID tersebut tidak ditemukan !');
//     res.json(mahasiswa);
// })

// //UPDATE
// app.put('/mahasiswa/:id',(req,res)=>{
//     const mahasiswa = daftarMahasiswa.find(data=>data.id === parseInt(req.params.id));

//     //jika data mhs yang akan diupdate tidak ada
//     if(!mahasiswa) res.status(404).send('Data mahasiswa dengan ID tersebut tidak ditemukan !');

//     //jika ditemukan
//     daftarMahasiswa[parseInt(req.params.id)-1].nama = req.body.nama;
//     daftarMahasiswa[parseInt(req.params.id)-1].jurusan=req.body.jurusan;
//     fs.writeFileSync('./data.json',JSON.stringify(daftarMahasiswa));
//     res.json(mahasiswa);
// })

// //DELETE
// app.delete('/mahasiswa/:id',(req,res)=>{
//     const mahasiswa = daftarMahasiswa.find(data=>data.id === parseInt(req.params.id));

//     //jika data mhs yang akan dihapus tidak ada
//     if(!mahasiswa) res.status(404).send('Data mahasiswa dengan ID tersebut tidak ditemukan !');

//     //jika ditemukan 
//     daftarMahasiswa=daftarMahasiswa.filter((mahasiswa)=>{
//         mahasiswa.id==parseInt(req.params.id);
//     })
//     fs.writeFileSync('./data.json',JSON.stringify(daftarMahasiswa));
//     res.send("Data berhasil dihapus!");
// })

app.listen(5000,()=> console.log("Listening on Port 5000..."));
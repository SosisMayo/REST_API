const axios = require("axios");

axios.get('http://localhost:5000/mahasiswa').then((res)=>{
  console.log(res.data);  
});

// axios.get('http://localhost:5000/mahasiswa/Baba').then((res)=>{
//    console.log(res.data);  
// });

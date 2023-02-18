const db = require('./config');

const GetUser = (req,res)=>{
db.db.query("SELECT * FROM data_mahasiswa",(err,data)=>{
    if (err) {
        console.log(err);
        return;
    }
        res.send({data : data,status: true})

});
}

const CreateUser = (req,res)=>{
let nama =req.body.nama;
let nim = req.body.nim;
let kelas = req.body.kelas;
db.db.query(`INSERT INTO data_mahasiswa (nama,nim,kelas)
VALUES ('${nama}',${nim},'${kelas}')`,(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
        res.send({status :true,data :result})

});
}

const EditUser = (req,res)=>{
let id = req.params.id
let nama =req.body.nama;
let nim = req.body.nim;
let kelas = req.body.kelas;
db.db.query(`UPDATE data_mahasiswa SET nama ='${nama}',nim = ${nim},kelas = '${kelas}' WHERE id = ${id}`,
(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
        res.send({status :true,data :result})

});
}

const DeleteUser = (req,res)=>{
let id = req.params.id
db.db.query(`DELETE FROM data_mahasiswa WHERE id = ${id}`,(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
        res.send({status :true,data :result})

});
}








module.exports = {
    GetUser,
    CreateUser,
    EditUser,
    DeleteUser
}
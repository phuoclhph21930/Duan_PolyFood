const mongoose = require('mongoose');

const NhanVienSchema =new mongoose.Schema({
manv:{
    type: String,
    require:true
},
tennv:{
    type: String,
    require: true
},
username:{
    type: String,
    require: true
},
password:{
    type: String,
    require: true
},
phone:{
    type: String,
    require: true
},
image:{
    type: String,
    require: true
},
diachi:{
    type: String,
    require: true
},
role:{
    type: String,
    require: true
}
});
const NhanVien= mongoose.model('nhanvien',NhanVienSchema);
module.exports=NhanVien;
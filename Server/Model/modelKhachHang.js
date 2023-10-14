const mongoose = require('mongoose');

const KhachHangSchema =new mongoose.Schema({
tenkh:{
    type: String,
    require: true
},
phone:{
    type: String,
    require: true
},
username:{
    type: String,
    require:true
},
password:{
    type: String,
    require: true
}

});
const KhachHang= mongoose.model('khachhang',KhachHangSchema);
module.exports=KhachHang;
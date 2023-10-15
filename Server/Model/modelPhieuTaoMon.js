const mongoose = require('mongoose');

const PhieuTaoMonSchema =new mongoose.Schema({
maphieu:{
    type: String,
    require:true
},
makh:{
    type: String,
    require: true
},
manv:{
    type: String,
    require: true
},
thoigian:{
    type: String,
    require: true
},
tongtien:{
    type: String,
    require: true
}
});
const PhieuTaoMon= mongoose.model('phieutaomon',PhieuTaoMonSchema);
module.exports=PhieuTaoMon;
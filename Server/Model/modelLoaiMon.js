const mongoose = require('mongoose');

const LoaiMonSchema =new mongoose.Schema({
maloai:{
    type: String,
    require:true
},
tenloai:{
    type: String,
    require: true
}
});
const LoaiMon= mongoose.model('loaimon',LoaiMonSchema);
module.exports = LoaiMon;
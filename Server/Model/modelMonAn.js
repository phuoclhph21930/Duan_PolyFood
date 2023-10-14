const mongoose = require('mongoose');

const MonAnSchema =new mongoose.Schema({
mamon:{
    type: String,
    require:true
},
maloai:{
    type: String,
    require: true
},
tenmon:{
    type: String,
    require: true
},
image:{
    type: String,
    require: true
},
price:{
    type: String,
    require: true
},
mota:{
    type: String,   
    require: true
},
trangthai:{
    type: String,
    require: true
}
});
const MonAn= mongoose.model('monan',MonAnSchema);
module.exports=MonAn;
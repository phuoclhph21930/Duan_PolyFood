const mongoose = require('mongoose');

const HoaDonSchema =new mongoose.Schema({
mahd:{
    type: String,
    require:true
},
tenmon:{
    type: String,
    require: true
},
giamon:{
    type: String,
    require: true
},
soluong:{
    type: String,
    require: true
},
makh:{
    type: String,
    require: true
},
tongtien:{
    type: String,
    require: true
}
});
const HoaDon= mongoose.model('hoadon',HoaDonSchema);
module.exports=HoaDon;
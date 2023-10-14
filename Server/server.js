var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer= require('multer');
var HoaDon= require('./Model/modelHoaDon');
var KhachHang= require('./Model/modelKhachHang');
var LoaiMon=require('./Model/modelLoaiMon');
var MonAn= require('./Model/modelMonAn');
var NhanVien= require('./Model/modelNhanvien');
var PhieuTaoMon=require('./Model/modelPhieuTaoMon');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri='mongodb+srv://polyfood:nhom3@cluster0.wyl09fn.mongodb.net/Polyfood';
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var apihoadon= require('./api/apihoadon');
app.use('/api/hoadon',apihoadon);

var apikh= require('./api/apikh');
app.use('/api/khachhang',apikh);

var apiloaimon= require('./api/apiloaimon');
app.use('/api/loaimon',apiloaimon);

var apimonan= require('./api/apimonan');
app.use('/api/monan',apimonan);

var apinv= require('./api/apinv');
app.use('/api/nhanvien',apinv);

app.listen(8000,function() {
    console.log("Server is running on port 8000");
});
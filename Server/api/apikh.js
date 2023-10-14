var express=require('express');
var router=express.Router();
var app = express();
const KhachHang = require('../Model/modelKhachHang');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const imagePath='./uploads';
app.use('/uploads',express.static(imagePath));

const uri='mongodb+srv://polyfood:nhom3@cluster0.wyl09fn.mongodb.net/Polyfood';

router.get('/', async (req, res) => {
    await mongoose.connect(uri);
    try {
        const khachhang= await KhachHang.find();
        res.json(khachhang);
       } catch (error) {
        res.status(500).json({message: error.message});
       }
    
})

router.post('/', async (req, res) => {
    await mongoose.connect(uri);
    try {
      const newKhachHang= new KhachHang(req.query);
      const khachhang = await newKhachHang.save();
      res.json(khachhang);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
})

router.put('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const KhachHangId = req.params.id;
    const updatedKhachHang = req.query;
    try {
      const khachhang = await KhachHang.findByIdAndUpdate(KhachHangId, updatedKhachHang, { new: true });
      res.json(khachhang);
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});
 
router.delete('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const KhachHangId = req.params.id;
    try {
      await KhachHang.findByIdAndRemove(KhachHangId);
      res.json({ message: 'Xóa khách hàng thành công' });
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});


module.exports = router;
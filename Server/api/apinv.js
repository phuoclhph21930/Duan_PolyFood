var express=require('express');
var router=express.Router();
var app = express();
const NhanVien = require('../Model/modelNhanvien');
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
        const nhanvien= await NhanVien.find();
        res.json(nhanvien);
       } catch (error) {
        res.status(500).json({message: error.message});
       }
    
})

router.post('/', async (req, res) => {
  await mongoose.connect(uri);
  try {
      const newNhanVien = new NhanVien({
          hoten: req.query.hoten,
          username: req.query.username,
          password: req.query.password,
          image: req.query.image,
          diachi: req.query.diachi,
          phone: req.query.phone,
          role: req.query.role,
          manv: req.query.manv
      });
      const nhanvien = await newNhanVien.save();
      res.json(nhanvien);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const nhanvienId = req.params.id;
    const updatedNhanVien = req.query;
    try {
      const nhanvien = await NhanVien.findByIdAndUpdate(nhanvienId, updatedNhanVien, { new: true });
      res.json(nhanvien);
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});
 
router.delete('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const nhanvienId = req.params.id;
    try {
      await NhanVien.findByIdAndRemove(nhanvienId);
      res.json({ message: 'Xóa nhân viên thành công' });
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});


module.exports = router;
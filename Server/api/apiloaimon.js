var express=require('express');
var router=express.Router();
var app = express();
const LoaiMon = require('../Model/modelLoaiMon');
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
        const loaimon= await LoaiMon.find();
        res.json(loaimon);
       } catch (error) {
        res.status(500).json({message: error.message});
       }
    
})

router.post('/', async (req, res) => {
    await mongoose.connect(uri);
    try {
        const newLoaiMon= new LoaiMon(req.query);
        const loaimon = await newLoaiMon.save();
        res.status(201).json(loaimon);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
})

router.put('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const LoaiMonId = req.params.id;
    const updatedLoaiMon = req.query;
    try {
      const loaimon = await LoaiMon.findByIdAndUpdate(LoaiMonId, updatedLoaiMon, { new: true });
      res.json(loaimon);
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});
 
router.delete('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const LoaiMonId = req.params.id;
    try {
      await LoaiMon.findByIdAndRemove(LoaiMonId);
      res.json({ message: 'Xóa khách hàng thành công' });
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});


module.exports = router;
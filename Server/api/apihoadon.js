var express=require('express');
var router=express.Router();
var app = express();
const HoaDon = require('../Model/modelHoaDon');
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
        const hoadon= await HoaDon.find();
        res.json(hoadon);
       } catch (error) {
        res.status(500).json({message: error.message});
       }
    
})

router.post('/', async (req, res) => {
    await mongoose.connect(uri);
    try {
        const newHoaDon= new HoaDon(req.query);
        const hoadon = await newHoaDon.save();
        res.status(201).json(hoadon);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
})

router.put('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const HoaDonId = req.params.id;
    const updatedHoaDon = req.query;
    try {
      const hoadon = await HoaDon.findByIdAndUpdate(HoaDonId, updatedHoaDon, { new: true });
      res.json(hoadon);
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});
 
router.delete('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const HoaDonId = req.params.id;
    try {
      await HoaDon.findByIdAndRemove(HoaDonId);
      res.json({ message: 'Xóa khách hàng thành công' });
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});


module.exports = router;
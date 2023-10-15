var express=require('express');
var router=express.Router();
var app = express();
const MonAn = require('../Model/modelMonAn');
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
        const monan= await MonAn.find();
        res.json(monan);
       } catch (error) {
        res.status(500).json({message: error.message});
       }
    
})

router.post('/', async (req, res) => {
    await mongoose.connect(uri);
    try {
        const newMonAn= new MonAn(req.query);
        const monAn = await newMonAn.save();
        res.status(201).json(monAn);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
})

router.put('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const MonAnId = req.params.id;
    const updatedMonAn = req.query;
    try {
      const monan = await MonAn.findByIdAndUpdate(MonAnId, updatedMonAn, { new: true });
      res.json(monan);
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});
 
router.delete('/:id', async (req, res) => {
    await mongoose.connect(uri);
    const MonAnId = req.params.id;
    try {
      await MonAn.findByIdAndRemove(MonAnId);
      res.json({ message: 'Xóa món ăn thành công' });
    } catch (error) {
      res.status(500).json({ error: 'Lỗi server' });
    }
});


module.exports = router;
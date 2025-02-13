const express = require("express");
const multer = require("multer");
const docxConverter = require('docx-pdf');
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) { 
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post('/convertFile', upload.single('file'), function (req, res, next) {
    try{
        if(!req.file){
            return res.status(400).json({
                message: "No file was uploaded"
            });
        }
        let outputPath = path.join(__dirname, "files", `${req.file.originalname}.pdf`);
        docxConverter(req.file.path, outputPath, function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "error converting docx to pdf"
                });
            }
            res.download(outputPath, () => {
                console.log("file downloaded");
            });
        });

    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "internal server error"
        });
    }
});


app.listen(3000);
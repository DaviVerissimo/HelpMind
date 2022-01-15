const express = require('express');
var cors = require('cors');

const app = express();
const uploadUser = require('./middlewares/uploadImage');

/*const db = require('./models/db');*/

const Image = require('./models/Images');
const Reporte = require('./models/Reportes');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.post("/upload-image", uploadUser.single('image'), async (req, res) => {

    if (req.file) {
        //console.log(req.file);

        await Image.create({image: req.file.filename})
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Upload realizado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Upload não realizado com sucesso!"
            });
        });
        
    }else{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
        });
    }

});

app.post("/reportes-list", uploadUser.single('reporte'), async (req, res) => {

    if (req.file) {
        //console.log(req.file);

        await Reporte.create({Reporte: req.file.filename})
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Reporte realizado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Reporte não realizado com sucesso!"
            });
        });
        
    }else{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Reporte não realizado "
        });
    }

});



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require('multer');

const app = express();
app.use(cors({
  origin: "*"
}));
app.use(bodyParser.json());

const port = 3000;
app.listen(port, () => {
  console.log("The server started on port " + port);
});

app.use('/export', express.static('export'))

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, 'export/assets')
  },
  filename: (req, file, callBack) => {
    callBack(null, `${file.originalname}`)
  }
})

const upload = multer({
  storage: storage
})

//let upload = multer({ dest: 'uploads/' })

app.get("/", (req, res) => {
  res.send(
    `API is working on port 3000`
  );
});

app.post('/file', upload.single('file'), (req, res, next) => {
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file);
})

app.post('/multipleFiles', upload.array('files'), (req, res, next) => {
  const files = req.files;
  console.log(files);
  if (!files) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send({
    status: 'ok'
  });
})

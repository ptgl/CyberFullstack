const multer = require("multer");
const path = require("path");

const uploadImage = type =>{

    
    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
          //   cb(null, path.join(__dirname + "../../../../uploads/avatars")); absolute path
          cb(null, `./uploads/${type}s`);
        },
        filename: function(req, file, cb) {
          cb(null,  Date.now() + "-" + file.originalname );
        }
      });
      const upload = multer({ storage });
      return upload.single(type);
}

module.exports = {
    uploadImage
}
const constant = require("../constant/constant")
const errorhandler = (err, req, res , next)=>{
   const statuscode= res.statuscode ? res.statuscode : 500
   switch(statuscode){
    case constant.VALIDATION_ERROR:
        res.json({tittle : "validation error",message : err.message , stackTrace : err.stack});
        break;
    case constant.NOT_FOUND:
        res.json({tittle : "not found",message : err.message , stackTrace : err.stack});
        break;
    case constant.SERVER_ERROR:
        res.json({tittle : "server error",message : err.message , stackTrace : err.stack});
        break;
    default:
        console.log("Not in error");
       break;
   }
  
}

module.exports = errorhandler;
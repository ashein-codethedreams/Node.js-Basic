const formattedMessage = async(res,result=[])=>{
    res.status(200).json({
        condition:true,
        message,
        result
    })
}
module.exports ={formattedMessage}
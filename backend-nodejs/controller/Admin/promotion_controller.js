var database = require("../../config/db_connect");

module.exports.getPromotion = (req,res)=>{
    const sql_query = "select * from sale "
    database.query(sql_query, (err,result)=>{
        if(err){
            return res.json({msg:err});
        }else{
            return res.json(result)
        }
    }) // ok
} 


// update time sale
module.exports.updateTimeSale = (req, res) => {
const {id, date_start, date_end} = req.body;
const sql_query = "update `sale` set date_start= ?, date_end = ? where id = ? ";
 database.query(sql_query, [date_start, date_end, id], (err,rows)=>{
    if(err){
        return res.json({msg:err});
    }else{
        return res.json({msg:"Success"})
    } // done
})
}

//update quantity sale

// add promotion

// delete sale
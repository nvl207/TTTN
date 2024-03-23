var database = require("../../config/db_connect");


// get account
module.exports.getAccount = (req, res) => {
    const sql = "SELECT * FROM account";
    database.query(sql, (err, result) => {
        if (err) {
            return res.json({ msg: err });
        } else {
            return res.json(result);
        }
    });  // ok
};


// update account

module.exports.updateAccountRole = (req, res) => {
    const { id, role_id } = req.body;
    const sql = `
      UPDATE account a 
      SET a.role_id = ?
      WHERE a.id = ?`;
    database.query(sql, [role_id, id], (err, result) => {
      if (err) {
        return res.json({ msg: err });
      } else {
        return res.json({ msg: "Cập nhật vai trò của tài khoản thành công" });
      }
    });
}; // cần xem lại csdl


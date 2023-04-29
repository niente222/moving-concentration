import db from '../../../config/db.js';

class User {
    constructor(userId, password, insDate,updDate) {
      this.userId = userId;
      this.password = password;
      this.insDate = insDate;
      this.updDate = updDate;
    }

    static async getUserId(userId) {
      return new Promise((resolve, reject) => {
          const sql = 'SELECT * FROM USER_T WHERE USER_ID = ?';
          const data = [userId];
      
          db.query(sql, data, (err, results) => {
            if (err || results.length === 0) {
              resolve(null);
            } else {
              resolve(new User(results[0].USER_ID, results[0].PASSWORD, results[0].INSDATE, results[0].UPDDATE));
            }
          });
        });
    }
  }

  export default User;
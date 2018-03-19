const sql = require('../sql').attractions;

class AttractionsRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;    
  }
  
  create() {
    return this.db.none(sql.create);
  }

  drop() {
    return this.db.none(sql.drop);
  }
}

module.exports = AttractionsRepository;
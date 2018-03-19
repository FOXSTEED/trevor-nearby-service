const sql = require('../sql').hotels;

class HotelsRepository {
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

module.exports = HotelsRepository;
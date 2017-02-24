const connectionString: string =
'mongodb://drew:saturday@ds161059.mlab.com:61059/codercampsdw';

import * as mongodb from 'mongodb';

export default class Database {
  public static db: mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
      this.db = db;
    }).catch((err) => {
      console.error(err);
    });
  }
}

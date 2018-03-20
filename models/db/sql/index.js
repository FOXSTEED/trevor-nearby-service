const QueryFile = require('pg-promise').QueryFile;
const path = require('path');


module.exports = {
  restaurants: {
    create: sql('restaurants/create.sql'),
    drop: sql('restaurants/drop.sql')
  },
  hotels: {
    create: sql('hotels/create.sql'),
    drop: sql('hotels/drop.sql')
  },
  attractions: {
    create: sql('attractions/create.sql'),
    drop: sql('attractions/drop.sql')
  }
}

function sql(file) {

  const fullPath = path.join(__dirname, file); // generating full path;

  const options = {

      // minifying the SQL is always advised;
      // see also option 'compress' in the API;
      minify: true,

      // Showing how to use static pre-formatting parameters -
      // we have variable 'schema' in each SQL (as an example);
      params: {
          schema: 'public' // replace ${schema~} with "public"
      }
  };

  const qf = new QueryFile(fullPath, options);

  if (qf.error) {
      // Something is wrong with our query file :(
      // Testing all files through queries can be cumbersome,
      // so we also report it here, while loading the module:
      console.error(qf.error);
  }

  return qf;

  // See QueryFile API:
  // http://vitaly-t.github.io/pg-promise/QueryFile.html
}
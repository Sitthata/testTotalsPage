const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  // Argument Validation
  if(arrayItems == null) return undefined;
  if(rowsPerPage == null || rowsPerPage <= 0) return 1;
  return Math.ceil(arrayItems.length / rowsPerPage);
}
console.log("test git flow");
module.exports = totalPages

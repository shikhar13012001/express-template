const fs = require('fs');

const path = require('path');

// read xlsx file
const file= fs.readFileSync(path.join(__dirname, './file.xlsx'));
 
const excelToJson = require("convert-excel-to-json");

const result = excelToJson({
  sourceFile: path.join(__dirname, "./file.xlsx"),
    header: {
        rows: 1
    },
  sheets: ["Classroom"],

});

console.log(result);
// write result in json file
fs.writeFile(path.join(__dirname, "./file.json"), JSON.stringify(result), function(err) {
    if(err) {
        return console.log(err);
    }
    
    console.log("The file was saved!");
    }
);

 
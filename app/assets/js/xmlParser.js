const fs = require('fs'),
      xml2js = require('xml2js');

var jsonXml = {};

module.exports = {
    processXml : function(path){
        return new Promise(function(resolve, reject){
            let parser = new xml2js.Parser();
            fs.readFile(path, function(err, data) {
                parser.parseString(data, function (err, result) {
                    if (err)
                        return reject();
                    debugger
                    resolve();
                    console.dir(result);
                    console.log('Done');
                });
            });
        });

    }
}

$(function(){
    $('button').click(function(){
        return false;
    });

    const {dialog} = require('electron').remote,
           xmlParser = require('../assets/js/xmlParser.js');

    $('#select-file').click(function(){
        dialog.showOpenDialog({
            title:"Seleccione archivo xml",
            properties: ["openFile"],
            filters: [
                { name: 'Xml', extensions: ['xml']}
            ]
        }, files => {
            if (files)
                xmlParser.processXml(files[0]);
        });
    });

});

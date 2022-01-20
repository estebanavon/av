$(document).ready(function(){
    var zip = new JSZip();
    $('#test').click(function(){
        
        zip.file('hola.txt', "test");
        zip.generateAsync({type:"blob"})
            .then(function (blob) {
                saveAs("https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/BellezaMx5_22.pdf", "hello.zip");
                saveAs("https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/BellezaMx3_22.pdf", "hello.zip");
            });
        console.log(zip);
    });
    
});

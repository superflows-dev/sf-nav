function downloadFile(path: string): any {

    var promise = new Promise(function (fulfill: any) {
        
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", path, false);
        rawFile.onreadystatechange = () =>
        {
            if(rawFile.readyState === 4)
            {
                
                fulfill({status: rawFile.status, text: rawFile.responseText})

            }
        }
        
        rawFile.send(null);
    });


    return promise;

}

const exportFunctions = {
    downloadFile
};

export default exportFunctions;
function downloadFile(path) {
    var promise = new Promise(function (fulfill) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", path, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                fulfill({ status: rawFile.status, text: rawFile.responseText });
            }
        };
        rawFile.send(null);
    });
    return promise;
    // const hashRef = window.location.href.split('#');
    // const routePath = (window.location.hash.length > 0 ? hashRef[1] : this.getHome()) + '.html'; 
    // var rawFile = new XMLHttpRequest();
    // rawFile.open("GET", window.location.origin + '/' + routePath, false);
    // rawFile.onreadystatechange = () =>
    // {
    //     if(rawFile.readyState === 4)
    //     {
    //         if(rawFile.status === 200 || rawFile.status == 0)
    //         {
    //           this._sfNav404.style.display = 'none';
    //           var allText = rawFile.responseText;
    //           this._content[0].innerHTML = allText;
    //         } else if(rawFile.status === 404) {
    //           this._content[0].innerHTML = '';
    //           this._sfNav404.children[0].innerHTML = "Could not find " + routePath;
    //           this._sfNav404.style.display = 'block';
    //         }
    //     }
    // }
    // rawFile.send(null);
}
const exportFunctions = {
    downloadFile
};
export default exportFunctions;
//# sourceMappingURL=downloadFile.js.map
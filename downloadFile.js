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
}
const exportFunctions = {
    downloadFile
};
export default exportFunctions;
//# sourceMappingURL=downloadFile.js.map
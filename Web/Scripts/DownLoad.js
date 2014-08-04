function DownloadFile(path) {
    var downloadBox = document.getElementById("download");
    downloadBox.src = "/Tools/DownLoad.aspx?filepath=" + encodeURI(path);
}
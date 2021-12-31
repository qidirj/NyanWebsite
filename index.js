function needUpdate() {
    alert("抱歉，镜像站建设未完成，请您从源站点下载！");
}

function downloadMirror(href) {
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.click();
}

function downloadSource(href) {
    var r = window.confirm("源站点可能访问较慢，确认从源站点下载吗？");
    if (r == true) {
        const a = document.createElement('a');
        a.setAttribute('href', href);
        a.click();
    }
}

function downloadArchive(href) {
    var r = window.confirm("归档版本可能不再可用，并包含安全问题。确认下载归档版本吗？");
    if (r == true) {
        const a = document.createElement('a');
        a.setAttribute('href', href);
        a.click();
    }
}
//获取base64图片大小，返回KB数字
function getBase64Size(base64url) {
    var str = base64url.replace('data:image/png;base64,', '');
    var equalIndex = str.indexOf('=');
    if (str.indexOf('=') > 0) {
        str = str.substring(0, equalIndex);
    }
    var strLength = str.length;
    var fileLength = parseInt(strLength - (strLength / 8) * 2);
    // 由字节转换为KB
    var size = '';
    size = (fileLength / 1024).toFixed(2);
    var sizeStr = size + ''; //转成字符串
    var index = sizeStr.indexOf('.'); //获取小数点处的索引
    var dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
    if (dou === '00') { //判断后两位是否为00，如果是则删除00
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return parseInt(size);
}

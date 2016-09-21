//var word : string = "请输入想要输出的金字塔层数"
function pyramid(totalLine) {
    for (var currentLine = 1; currentLine <= totalLine; currentLine++) {
        var singleLineStr = "";
        for (var spaceCount = totalLine - currentLine; spaceCount > 0; spaceCount--) {
            singleLineStr += " ";
        }
        for (var starCount = 1; starCount <= (currentLine * 2) - 1; starCount++) {
            singleLineStr += "*";
        }
        console.log(singleLineStr);
    }
}
var num = process.argv[2];
if (!num) {
}
else {
    pyramid(parseInt(num));
}
//# sourceMappingURL=main.js.map
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
window.onload = function () {
    pyramid(5);
};
//# sourceMappingURL=main.js.map
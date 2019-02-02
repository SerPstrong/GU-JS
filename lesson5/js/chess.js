function chessboard() {
    var newTable = document.createElement('table'),
        lets = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        var newTr = newTable.insertRow(i);
        for (var j = 0; j < 10; j++) {
            var newTd = newTr.insertCell(j);
            switch (i) {
                case 0:
                    newTd.innerText = lets[j];
                    break;
                case 9:
                    newTd.innerText = lets[j];
                    break;
                default:
                    if (j === 0 || j === 9) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.appendChild(newTable);
}
chessboard();
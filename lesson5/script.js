        
        var rows = [' ','8','7','6','5','4','3','2','1',' '];
        var cols = [' ','A','B','C','D','E','F','G','H',' '];
        black1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],
        white1 = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1' ],
        black2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
        white2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];
        
        var table = document.createElement("table");
        for (var i = 0; i < 10; i++) {
            var tr = document.createElement("tr");
            table.append(tr);
            for (var j = 0; j < 10; j++) {
                var td = document.createElement("td");
                if ((i == 0 || i == 9) || (j == 0 || j == 9)) {
                    if(j == 9 || i == 0){
                        td.className += 'rotate';
                }
                    td.innerText = rows[i];
                    td.innerText += cols[j];
                    //почему-то  td.innerText = rows[i] || cols[j]; выводило только rows
                }else {
                    td.className = (i + j) % 2 == 0 ? 'white-cell' : 'black-cell';
                }
                if(i == 1){
                    td.innerHTML = black1[j];
                }
                else if (i == 2){
                    td.innerHTML = black2[j];
                }else if (i == 7){
                    td.innerHTML = white2[j];
                }
                else if (i == 8){
                    td.innerHTML = white1[j];
                }
                tr.append(td);
            }
        }
        document.querySelector('div').append(table);
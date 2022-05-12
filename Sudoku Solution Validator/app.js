board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]];
validSolution(board);

function validSolution(board){
    console.log(checkRow(board) == true);
    console.log(checkColumn(board) == true);
    console.log(checkGrids(board) == true);
    return (checkRow(board) == true && checkColumn(board) == true && checkGrids(board) == true);
    //Check 3x3 grids    
}
function checkRow(board){
    let numsContained = {};
    for(let y = 0;y< board.length;y++){
        [...board[y]].forEach(c=>{
            if(numsContained.hasOwnProperty(c)){
                return false;//Contains 2 of the same number
            }
            numsContained[c] = true;
        });
        numsContained = {};
    }
    return true;
}
function checkColumn(board){
    let numsContained = {};
    for(let x = 0;x< board.length;x++){
        for(let y = 0;y< board.length;y++){
            c = board[y][x];
            if(numsContained.hasOwnProperty(c)){
                return false;//Contains 2 of the same number
            }
            numsContained[c] = true;
        }
        numsContained = {};
    }
    return true;
}
function checkGrids(board){
    let numsContained = {};
    gridNum = 0;
    while(gridNum != 9){
        for(let i = gridNum * 3;i < 3;i++){
            for(let j = gridNum * 3; j < 3;j++){
                c = board[i][j];
                if(numsContained.hasOwnProperty(c)){
                    console.log(c + ' at ' + i + ', ' + j);
                    return false;//Contains 2 of the same number
                }
                numsContained[c] = true;
            }
            console.log(JSON.stringify(board[i]));
        }
        gridNum++
        numsContained = {};
    }
    return true;
}
function superbowlWin(){
    const record = [
        {year: "2015", result:"w"},
        {year: "2014", result:"N/A"},
        {year: "2013", result: "L"}
    ]
}
function isW(result){
    return (element (result === "W"));
}

function superbowlWin(record){
    const winningGame = record.find(game => game.result === "W");
    return winningGame? winningGame.year:undefined;
}
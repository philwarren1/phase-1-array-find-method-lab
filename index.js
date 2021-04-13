const record = []

    function superbowlWin(record){
    const win = record.find(record => record.result === "W");
        if (win)
    {
       return win.year;
}
    }
//     1) returns a year the KC Chiefs won the superbowl
//     2) returns undefined if the record has no win objects

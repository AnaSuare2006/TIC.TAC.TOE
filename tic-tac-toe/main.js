console.log("functioneste");

let text="X";
function write() {
    console.log("button pressed");
    let uwu=this.id;
    console.log(uwu);
    if(arr[uwu]==null)
    {
        arr[uwu]=1;
        let btn=document.getElementById(`${uwu}`);
        btn. textContent = text ;
        if(text=="X")
        {
            text="0";
        }
        else
        {
            text="X";
        }
    }
    else
    {
        console.log("button already used")
    }
}

for (i = 1; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener("click", write);
}

let arr = [null, null, null, null, null, null, null, null ,null];
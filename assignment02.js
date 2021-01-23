
    //----ans to the question no 01------


// questiion no    05/

const office = false;
const beef = false;
if (office ==true){
    console.log("office a sata niye jabo");
}
else if (office==false){
    if (office== false && beef == true){
        console.log("khichori beef diye khabo ");
    }
    else{
        console.log("dim khichiri khabo");
        
    }
}
else{
    console.log("office a mail  dibo je soril kharap");
}

// // // question no 04


function friensname(){
    let friens =["anika","bipasha","sabina","ealy","luxmee","pinky","lamiya"];
    let result = friens.filter(friens => friens.length <= 5);
    // const result = friens.filter(friens =>friens.length > 5)
    console.log(result);
   
}
friensname();




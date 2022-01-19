//Utility function to generate random strings to be used as the Content ID (PRIMARY KEY) of each Content Item
const generateContentID=()=>{

    var char_store=['abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYS','0123456789']
    var uid='';

    for(let i=0;i<26;i++)
    {
        let r1=Math.floor((Math.random()*4)%3);
        let r2=Math.floor((Math.random()*((char_store[r1]).length+1))%(char_store[r1]).length);

        uid=uid+(char_store[r1]).charAt(r2);
    }

    return uid;
}

module.exports=generateContentID
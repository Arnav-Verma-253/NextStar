users=[{name:"Arnav", password:"ARV",score:0,cur:false}]; //will have data imported from SQl stored in this

signout=document.body.querySelevtor("#last");

signout.addEventListener("click",()=>{
    for(user of users){
        if(user.cur==true){
            user.cur=false;
        }
    }
});
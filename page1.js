users=[{name:"Arnav", password:"ARV",score:0,cur:false}]; //will have data imported from SQl stored in this

btn=document.body.querySelector("#Submit");

btn.addEventListener("click",()=>{
    usr=document.body.querySelector("#few");
    pass=document.body.querySelector("#pass");
    let flag=1;
    for(user of users){
        if(user.name===usr.value&&user.password===pass.value){
            alert("You already have an account");
            flag=0;
        }
        else if(user.name===usr.value){
            alert("This user name already exists.");
            flag=0;
        }
        else if(user.password===pass.value){
            alert("This password already belongs to someone.");
            flag=0;
        }
        else if(usr.value==""||pass.value==""){
            flag=0;
        }
    }
    if(flag){
        new_user={name:usr.value,password:pass.value,score:0,cur:false};
        users.push(new_user);
        console.log(users);
        //export back to sql
        }
});



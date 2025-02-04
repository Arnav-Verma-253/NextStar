answers=[4,3,2,1,4];
selected=[null,null,null,null,null];

let q1=document.getElementsByName("q1");
let q2=document.getElementsByName("q2");
let q3=document.getElementsByName("q3");
let q4=document.getElementsByName("q4");
let q5=document.getElementsByName("q5");
let sub=document.querySelector("#submit");
let sco=document.querySelector("#Score");

let score=0;

q1.forEach((option)=>{
    option.addEventListener("change",()=>{
        selected[0]=option.value;
    });
});

q2.forEach((option)=>{
    option.addEventListener("change",()=>{
        selected[1]=option.value;
    });
});

q3.forEach((option)=>{
    option.addEventListener("change",()=>{
        selected[2]=option.value;
    });
});


q4.forEach((option)=>{
    option.addEventListener("change",()=>{
        selected[3]=option.value;
    });
});

q5.forEach((option)=>{
    option.addEventListener("change",()=>{
        selected[4]=option.value;
    });
});

sub.addEventListener("click",()=>{
    for(let i=0;i<5;i++){
        if(selected[i]==answers[i]){
            score++;
        }
    }
    sco.innerText=`Score: Your Score is ${score*10} out of 50`;
});

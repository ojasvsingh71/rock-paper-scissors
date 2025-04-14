let btns=document.querySelectorAll(".btns");
let user_ptn=document.querySelector("#userptn");
let comp_ptn=document.querySelector("#comptn");
let msg=document.querySelector(".msg");
let reset=document.querySelector(".reset");



choices=["rock","paper","scissor"];

const comp_output=()=>{
    comp_choice=choices[Math.floor(Math.random()*3)];
    
    return comp_choice;
    
}


const game_mechanism=(first_choice,second_choice)=>{
    if(first_choice==second_choice){
        msg.innerText="DRAW"
    }
    if(first_choice=="rock" && second_choice=="scissor"){
        user_count+=1;
        msg.innerText="YOU WON!!!";
    }else if(first_choice=="paper" && second_choice=="rock"){
        user_count+=1;
        msg.innerText="YOU WON!!!";
    }else if(first_choice=="scissor" && second_choice=="paper"){
        user_count+=1;
        msg.innerText="YOU WON!!!";
    }else if(second_choice=="rock" && first_choice=="scissor"){
        comp_count+=1;
        msg.innerText="SORRY YOU LOST";
    }else if(second_choice=="paper" && first_choice=="rock"){
        comp_count+=1;
        msg.innerText="SORRY YOU LOST";
    }else if(second_choice=="scissor" && first_choice=="paper"){
        comp_count+=1;
        msg.innerText="SORRY YOU LOST";
    }
    user_ptn.innerText=user_count;
    comp_ptn.innerText=comp_count;
}
const game=()=>{
    btns.forEach((btn)=>{
        user_count=0;
        comp_count=0;
        btn.addEventListener(("click"),()=>{
            // console.log(btn.id);
            user_choice=btn.id;
            compuer_choice=comp_output();
            console.log(compuer_choice);
            game_mechanism(user_choice,compuer_choice);
            
        })
    })
}
game();

reset.addEventListener(("click"),()=>{
    user_ptn.innerText=0;
    comp_ptn.innerText=0;
    user_count=0;
    comp_count=0;
    msg.innerText="";
})




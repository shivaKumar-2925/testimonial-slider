(function(){
const customerImage = document.querySelector('#customer-image')
const customerName = document.querySelector('#customer-name')
const customerText = document.querySelector('#customer-text')

 const btn = document.querySelectorAll(".btn")
 

let index =0;
const costumers =[];
 
function Customer(img,name,text){
this.img=img;
this.name=name;
this.text=text;
 }


 function createCustomer(img,name,text){
   let Img = `${img}.jpeg`;
   let customer =new Customer(Img,name,text)
   costumers.push(customer)

 }
createCustomer("virat",'virat kohli','ccapitain of the team ,left hand batsman vk has registered lot of records in his carrier and also called by run machine')
createCustomer("dhawan",'shikar dhawan','dhawan is opener in team , he is a batsman he recently got devorced he has selected in wc 2021')
createCustomer("rohit",'rohit sharma',' rohit sharma is claasic batsmen in indian cricket team ,opener of the team and rejistererd lots of record in his carrier')
createCustomer("kl",'kl rahul','k rahul is classic batsmen in indian team capitain of punjub in ipl and wicket keeper he has lots of records')
createCustomer("hardik",'hardik pandya','hardic pandya is all rounder in indian cricket team supper bowler and power hitter mix of both calm and aggression')
 btn.forEach((button)=>{
   button.addEventListener('click',(e)=>{
     e.preventDefault();
     if(e.target.parentElement.classList.contains("prevButton")){
        if(index===0){
          index=costumers.length
        }
        index--
        customerImage.src=costumers[index].img;
        customerName.innerHTML=costumers[index].name;
        customerText.innerHTML= costumers[index].text;
     }

     if(e.target.parentElement.classList.contains("nxtButton")){
       index++
      if(index===costumers.length){
        index=0
      }
      
      customerImage.src=costumers[index].img;
      customerName.innerHTML=costumers[index].name;
      customerText.innerHTML= costumers[index].text;
   }

   })
 })

 
})()
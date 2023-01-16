add = document.getElementById("add");
one = document.getElementById("todo1");
two = document.getElementById("todo2");
//    three = one+" " +two;
// three = one;
// add.addEventListener("click",()=>{
   
   function update()
   {
      one = document.getElementById("todo1").value;
    two = document.getElementById("todo2").value;
    three = one+" " +two;
   //  three = a;
     let arr=[];
     user=JSON.parse(localStorage.getItem("user"))
     if(user==null){
        arr=[]
     }
     else{
        arr=JSON.parse(localStorage.getItem("user"))
     }
     arr.push(three)
     localStorage.setItem("user",JSON.stringify(arr))
      document.getElementById("todo1").value=''
      document.getElementById("todo2").value=''

      adi();
   }
   function adi(){
    
      if (localStorage.getItem("user") == null)
      {
         arr = [];
         localStorage.setItem('user',JSON.stringify(arr))
      }
      else 
      {
         ar = localStorage.getItem('user');
         arr = JSON.parse(ar);
      }
      // Showing data on Our Page :

      let tableBody = document.getElementById("tableBody");
      let str="";
      console.log(arr);
      arr.forEach((element,index) =>{
        str += `
        
        <tr id="ite" class="list-group-items">
        <th scope="row" class ="sh text-light">${index+1}</th>
        <td class="sh text-light">${element}</td>
        
        <td><button class="btn btn-dark text-danger" id="de" onclick="edit(${index})"><b>Edit</b></button>
        <button class="btn btn-dark text-danger" id="de" onclick ="del(${index})"><b>Delete</b></button>
        
        </td>
        
        </tr>
        `
      });
      tableBody.innerHTML=str+" ";
// })
}
add = document.getElementById("add");
add.addEventListener("click",update);
adi();

function del(index)
{
   
   arr=JSON.parse(localStorage.getItem("user"))
   arr.splice(index,1);
   localStorage.setItem("user",JSON.stringify(arr));
   adi();
}

 function cle()
 {
   if(confirm("Do you really want to clear ?"))
   {
      localStorage.clear();
      adi();
   }
 }

//  var list = document.querySelector('tr');
// list.addEventListener("click", function(e) {
//   if (e.target.tagName === 'th') {
//     e.target.classList.toggle('checked');
//   }
// }, false);


function sort1()
{
   arr=JSON.parse(localStorage.getItem("user"));
   ar =Array.from(arr).sort();
   localStorage.setItem("user",JSON.stringify(ar));
   adi();
}
function sort2()
{
   arr=JSON.parse(localStorage.getItem("user"));
   ar =Array.from(arr).sort(function(a,b){
      return a === b ?0 : a < b ? 1 : -1;
   });
   localStorage.setItem("user",JSON.stringify(ar));
   adi();
}
function sort3()
{
   arr=JSON.parse(localStorage.getItem("user"));
   ar =arr.slice().sort(function(a, b) {
      const A = a.split(" ")[1];
      const B = b.split(" ")[1];
      if(A < B) {return -1;}
      if(A > B){ return 1;}
      return 0;
     });

   
   localStorage.setItem("user",JSON.stringify(ar));
   adi();
}
function sort4()
{
   arr=JSON.parse(localStorage.getItem("user"));
   ar =arr.slice().sort(function(a, b) {
      const A = a.split(" ")[1];
      const B = b.split(" ")[1];
      if(A > B) return -1;
      if(A < B) return 1;
      return 0;
     });

   
   localStorage.setItem("user",JSON.stringify(ar));
   adi();
}



function edit(index)
{
   let saveindex = document.getElementById("saveindex");
   let addbutton = document.getElementById("add");
   let savebutton = document.getElementById("save");
   saveindex.value = index;
  let  arr=localStorage.getItem("user");
let ar = JSON.parse(arr);
// console.log(ar.toString());
// console.log(ar);
let p = ar[index].split(" ");
// console.log(p[0],p[1]);
 one.value = p[0];
two.value = p[1];
addbutton.style.display = "none";
savebutton.style.display = "initial";
// savebutton.style.text = "center";
}
let savebutton = document.getElementById("save");
function save()
{
   let  arr=localStorage.getItem("user");
   let ar = JSON.parse(arr);
   // let resu = ar.split(" ");
   // console.log(ar);
   let saveindex = document.getElementById("saveindex").value;
   // console.log(ar[saveindex[0]]);
   let final = ar[saveindex[0]].split(" ")
   final[0] = one.value;
   final[1] = two.value;
   let result = final[0] +" " +final[1];  // firstName  lastName 
   ar[saveindex[0]] = result;
   // console.log(result);
   // console.log(arr);
   let fu = localStorage.setItem("user",JSON.stringify(ar));
   adi();

   // console.log(fu);

}



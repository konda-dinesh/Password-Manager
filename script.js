// logic to fil the table
const deletePassword = (website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrupdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords",JSON.stringify(arrupdated))
    alert(`deleted successfully ${website}'s password`)
    showPasswords()
}
function maskPassword(pass){
    let str = ""
    for( let index =0;index <pass.length;index++){
        str+= "*"
    }
    return str
}

const  showPasswords = () =>{
let tb = document.querySelector("table")
let data = localStorage.getItem("passwords")
if(data == null){
    tb.innerHTML = "NO DATA TO SHOW"
}
else{
    tb.innerHTML = `<tr>
    <th>website</th>
    <th>username</th>
    <th>password</th>
    <th>Delete</th>
     </tr>`
    let arr = JSON.parse(data);
    let str = ""
    for (let index = 0; index < arr.length;index++){
        const element = arr[index];


     str += `<tr>
       <td>${element.website}</td>
       <td>${element.username}</td>
       <td>${maskPassword(element.password)}</td>
       <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
       </tr>`
    }
     tb.innerHTML =      tb.innerHTML + str
      
}
website.value=""
username.value=""
password.value=""
}
       
console.log("Working");
showPasswords()
document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("Clicked...")
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords == null){
        let json = []
        json.push({website: website.value,username:username.value,password: password.value})
        alert("password saved")
        localStorage.setItem("passwords",JSON.stringify(json))
    }
    else{
     
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({website: website.value,username : username.value, password : password.value})
        alert("password saved")
        localStorage.setItem("passwords",JSON.stringify(json))
    }
    showPasswords()

    
})
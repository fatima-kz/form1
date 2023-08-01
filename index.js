document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.but').addEventListener('click',()=>{const password = document.getElementById("pass")
    const cpassword = document.getElementById("cpass")
        if(password!=cpassword){
            window.alert("password does not match")
        }})
        
})
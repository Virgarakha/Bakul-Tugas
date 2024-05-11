      
function loginsu(){
    const namaInput = document.getElementById("nama").value;
    const passInput = document.getElementById("pass").value;
    const passuInput = document.getElementById("passu").value;
    let s1 = document.getElementById("salah1");
    let s2 = document.getElementById("salah2");
    let kosong = document.getElementById("kosong");

    const nama = "gedang";
    const pass = 12;


    if( namaInput == "" && passInput == ""){
        s1.style.display ="none";
        kosong.style.display = "block";
        s2.style.display = "none";
    }
    else if(namaInput != nama || passInput != pass || passuInput != pass){
        s1.style.display ="flex"
        s2.style.display = "none"
        kosong.style.display = "none"
    }
    else if(passInput != passuInput){
        s1.style.display ="none"
        kosong.style.display = "none"
        s2.style.display = "flex"
    }
    else{
        alert("Login Sukses",document.getElementById("masuk").click());
    }
}
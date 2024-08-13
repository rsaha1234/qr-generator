let image = document.getElementById("image");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");

function getqrimg(){
    if(qrtext.value.length>0)
{
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}
else{
    qrtext.classList.add('error');
    setTimeout(()=>{
        qrtext.classList.remove('error');
    },1000);
}
} 
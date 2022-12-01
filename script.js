function Login (){
    window.location="textCompanyPro.html";
    alert("Berhasil Masuk");
}

function myFunction(){
    var menu1 = Number(document.getElementById("menu1").value);
    var menu2 = Number(document.getElementById("menu2").value);
    var menu3 = Number(document.getElementById("menu3").value);
    var menu4 = Number(document.getElementById("menu4").value);
    var menu5 = Number(document.getElementById("menu5").value);
    var menu6 = Number(document.getElementById("menu6").value);
    var menu7 = Number(document.getElementById("menu7").value);
    var menu8 = Number(document.getElementById("menu8").value);
    var menu9 = Number(document.getElementById("menu9").value);
    var menu10 = Number(document.getElementById("menu10").value);
    var menu11 = Number(document.getElementById("menu11").value);
    var menu12 = Number(document.getElementById("menu12").value);
    var menu13 = Number(document.getElementById("menu13").value);
    var menu14 = Number(document.getElementById("menu14").value);
    var hasil = menu1*11000+menu2*12000+menu3*12000+menu4*13000+menu5*3000+menu6*3000+menu7*3000
    +menu8*14000+menu9*11000+menu10*12000+menu11*10000+menu12*3000+menu13*3000+menu14*3000;
    
    console.log('klik')
    alert("Berhasil Terkonfirmasi, Silakan Melakukan Pembayaran");
    document.getElementById('sum').value = hasil;
}

function PESAN(){
    window.location="textPemesanan.html";
}

function konfirmasi(){
    alert("Terima Kasih Telah Membeli Produk Kami, Kami Akan Datang Dalam Waktu ± 1 Jam Kedepan")
}

function Pendapat(){
    console.log('klick')
    alert("Pendapat Anda Telah Terkirim, Terima Kasih");
}


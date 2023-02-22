function oyunuBaslat(secim){
    let kullaniciSecimi = secim.id;

    let rastgeleSayi = Math.floor(Math.random()*3);
    let bilgisayarSecimi = ["tas", "kagit", "makas"][rastgeleSayi];

    let oyunPuanlamalari ={
        "tas":{"makas":1,"tas":0.5,"kagit":0},
        "kagit":{"tas":1,"kagit":0.5,"makas":0},
        "makas":{"kagit":1,"makas":0.5,"tas":0}
    };

    let kullaniciPuani = oyunPuanlamalari[kullaniciSecimi][bilgisayarSecimi];

    let kayitliResimler = {
        "tas":document.getElementById("tas").src,
        "kagit":document.getElementById("kagit").src,
        "makas":document.getElementById("makas").src
    };

    document.getElementById("tas").remove();
    document.getElementById("kagit").remove();
    document.getElementById("makas").remove();

    let kullaniciResmi = document.createElement("img");
    let bilgisayarResmi = document.createElement("img");
    let sonucMesaji = document.createElement("div");

    kullaniciResmi.src=kayitliResimler[kullaniciSecimi];
    bilgisayarResmi.src=kayitliResimler[bilgisayarSecimi];

    document.getElementById("container").appendChild(kullaniciResmi);
    document.getElementById("container").appendChild(sonucMesaji);


document.getElementById("container").appendChild(bilgisayarResmi);

sonucMesaji.classList.remove("basarili","basarisiz","berabere");

if(kullaniciPuani === 0){
    sonucMesaji.innerHTML="Maalesef Kaybettiniz :(";
    sonucMesaji.classList.add("basarisiz")
}
else if(kullaniciPuani === 0.5){
    sonucMesaji.innerHTML="Berabere Kaldınız";
    sonucMesaji.classList.add("berabere")
}
else{
    sonucMesaji.innerHTML="Tebrikler Kazandınız :)";
    sonucMesaji.classList.add("basarili")
}
}
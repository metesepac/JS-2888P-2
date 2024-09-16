getdatas();
mydata=[];
const mycontainer= document.querySelector(".mycontainer");
async function getdatas(){
    await fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        mydata=data;
      /* console.log(data); */
    })
    .catch((err) => {
      console.log("Bir hata oluştu: " + err);
    })
    .finally(() => {
      /* console.log("İşlemler gerçekleşti. Yapabileceğimizi yaptık"); */
    });

    i=0;

    while (mydata[i]!=undefined) {
        mycontainer.innerHTML += `
        <div class="col d-flex justify-content-center align-items-center" >
        <div class="mycolumn">
        <div class="card-body">
            <h4 class="card-title">Kullanıcı Kodu: ${mydata[i].id}</h4>
            <div>
                <p class="card-text">İsim:${mydata[i].name}</p>
                <p class="card-text">Kullanıcı İsmi:${mydata[i].username}</p>
                <p class="card-text">E-Posta Adresi:${mydata[i].email}</p>                              
                <p class="card-text">Adres Bilgileri:</p>
                <div style="margin-left: 70px;margin-bottom: 25px;">
                    <p class="card-text">Cadde:${mydata[i].address.street}</p>
                    <p class="card-text">Apartman:${mydata[i].address.suite}</p>
                    <p class="card-text">Şehir:${mydata[i].address.city}</p>
                    <p class="card-text">Posta Kodu:${mydata[i].address.zipcode}</p>
                    <p class="card-text">Boylam Değeri:${mydata[i].address.geo.lat}</p>
                    <p class="card-text">Enlem Değeri:${mydata[i].address.geo.lng}</p>
                </div>
    
                <p class="card-text">Telefon Numarası:${mydata[i].phone}</p>
                <p class="card-text">İnternet Adresi:${mydata[i].website}</p>
                <p class="card-text">Kuruluş Bilgileri:</p>
                <div style="margin-left: 70px;margin-bottom: 25px;">
                    <p class="card-text">Şirket İsmi:${mydata[i].company.name}</p>
                    <p class="card-text">Şirket Sloganı:${mydata[i].company.catchPhrase}</p>
                    <p class="card-text">Şirket Derecesi:${mydata[i].company.bs}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    `
    i++;
    }
}




function gonderigoruntule(){

do {
  id =  prompt("Görüntülenecek Kullanıcının Kodunu Giriniz.");
  if (id>0 && id<11){
    window.location.href = "http://127.0.0.1:5500/post.html?userid="+id.toString();
  } else{id="jhbhj"}
} while (isNaN(id));
}
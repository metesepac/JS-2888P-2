getID();
mydata=[];
const mycontainer= document.querySelector(".mycontainer");
async function getID(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('userid');
    await fetch("https://jsonplaceholder.typicode.com/users/"+myParam)
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

    mycontainer.innerHTML += `
    <div class="col d-flex justify-content-center align-items-center" >
    <div class="mycolumn">
    <div class="card-body">
        <h4 class="card-title">Kullanıcı Kodu: ${mydata.id}</h4>
        <div>
            <p class="card-text">İsim:${mydata.name}</p>
            <p class="card-text">Kullanıcı İsmi:${mydata.username}</p>
            <p class="card-text">E-Posta Adresi:${mydata.email}</p>                              
            <p class="card-text">Adres Bilgileri:</p>
            <div style="margin-left: 70px;margin-bottom: 25px;">
                <p class="card-text">Cadde:${mydata.address.street}</p>
                <p class="card-text">Apartman:${mydata.address.suite}</p>
                <p class="card-text">Şehir:${mydata.address.city}</p>
                <p class="card-text">Posta Kodu:${mydata.address.zipcode}</p>
                <p class="card-text">Boylam Değeri:${mydata.address.geo.lat}</p>
                <p class="card-text">Enlem Değeri:${mydata.address.geo.lng}</p>
            </div>

            <p class="card-text">Telefon Numarası:${mydata.phone}</p>
            <p class="card-text">İnternet Adresi:${mydata.website}</p>
            <p class="card-text">Kuruluş Bilgileri:</p>
            <div style="margin-left: 70px;margin-bottom: 25px;">
                <p class="card-text">Şirket İsmi:${mydata.company.name}</p>
                <p class="card-text">Şirket Sloganı:${mydata.company.catchPhrase}</p>
                <p class="card-text">Şirket Derecesi:${mydata.company.bs}</p>
            </div>
            </div>
        </div>
    </div>
</div>
    </div>
`

}

function gonderigoruntule(){
    window.location.href = "http://127.0.0.1:5500/index.html"
}
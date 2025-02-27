// document.querySelector('.fikstur-class').addEventListener('click', () => {
//     document.querySelector('.matches').scrollIntoView({ block: 'end',  behavior: 'smooth' });
// });

// document.querySelector('.players-class').addEventListener('click', () => {
//     document.querySelector('#players').scrollIntoView({ block: 'start',  behavior: 'smooth' });
// });

// document.querySelector('.home-class').addEventListener('click', () => {
//     document.querySelector('#ev').scrollIntoView({ block: 'start',  behavior: 'smooth' });
// });

// document.querySelector('.game-plan').addEventListener('click', () => {
//     document.querySelector('#game-plan').scrollIntoView({ block: 'start',  behavior: 'smooth' });
// }); 

// document.querySelector('.navbar').addEventListener('click', (event) => {
//     const currentTarget = event.target.className;
//     console.log(currentTarget)
//         if(currentTarget === 'fikstur-class') {
//             document.querySelector('.matches').scrollIntoView({ block: 'end', behavior: 'smooth'});
//         }
//         else if(currentTarget === 'players-class') {
//             document.querySelector('#players').scrollIntoView({ block: 'end', behavior: 'smooth'});
//         }
//         else if(currentTarget === 'home-class')
//             document.querySelector('#ev').scrollIntoView({ block: 'end', behavior: 'smooth'});
//         else if(currentTarget === 'game-plan')
//             document.querySelector('#game-plan').scrollIntoView({ block: 'end', behavior: 'smooth'});
// });

document.querySelector('.navbar').addEventListener('click', (event) => {
    const text = event.target.innerText;
    console.log(text); 
    if(text === 'Fikstür')
        document.querySelector('#fixture').scrollIntoView({ block: 'start', behavior: 'smooth'});
    if(text === 'Oyuncular')
        document.querySelector('#players').scrollIntoView({ block: 'end', behavior: 'smooth'});
    if(text === 'Oyun Planı')
        document.querySelector('#game-plan').scrollIntoView({ block: 'end', behavior: 'smooth'});
    if(text === 'Özetler')
        document.querySelector('#highlights').scrollIntoView({ block: 'end', behavior: 'smooth'});
});


const manu_image = "//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png";
const erenkoy_image = "//assets.manutd.com/AssetPicker/images/0/0/19/38/1255052/FC_Twente_Crest_Comp_180x1801695916184769.png"
const gokyuva_image = './images/gokyuvafc.png';

const fiksturData = {
    "matches": [
        {
            "date": "3 Eylül 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "7-6",
            "goals": {
                "Arda": 1,
                "Yunus": 4,
                "Ömer": 2
            },
            "assists": {
                "Arda": 2,
                "Makara": 3
            }
        },
        {
            "date": "10 Eylül 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Gökyuva FC",
            "team2_logo": gokyuva_image,
            "score": "13-6",
            "goals": {
                "Arda": 1,
                "Seçkin": 1,
                "Emin": 2,
                "Yunus": 1,
                "Ömer": 8
            },
            "assists": {
                "Arda": 4,
                "Seçkin": 2,
                "Makara": 2,
                "Ömer": 1,
                "Emin": 2,
                "Yunus": 2,
            }
        },
        {
            "date": "17 Eylül 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "5-2",
            "goals": {
                "Makara": 1,
                "Yunus": 1,
                "Seçkin": 1,
                "Ömer": 2,
            },
            "assists": {
                "Yunus": 1,
                "Seçkin": 1,
                "Makara": 1,
                "Emin": 1,
            }
        },
        {
            "date": "24 Eylül 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "4-4",
            "goals": {
                "Makara": 1,
                "Emin": 1,
                "Seçkin": 1,
                "Ömer": 1,
            },
            "assists": {
                "Arda": 3,
            }
        },
        {
            "date": "1 Ekim 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "7-6",
            "goals": {
                "Arda": 2,
                "Yunus": 2,
                "Seçkin": 1,
                "Ömer": 1,
            },
            "assists": {
                "Arda": 2,
                "Seza": 1,
            }
        },
        {
            "date": "8 Ekim 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "17-10",
            "goals": {
                "Makara": 4,
                "Yunus": 4,
                "Arda": 1,
                "Ömer": 7,
                "Emin": 1,

            },
            "assists": {
                "Yunus": 4,
                "Seçkin": 3,
                "Makara": 3,
                "Emin": 2,
                "Arda": 1,
                "Ömer": 1,
            }
        },
        {
            "date": "10 Ekim 2024",
            "time": "21:00",
            "location": "Garden Park",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Karakaş FC",
            "team2_logo": erenkoy_image,
            "score": "2-4",
            "goals": {
                "Arda": 1,
                "Makara": 1,
            },
            "assists": {
                "Arda": 1,
            }
        },
        {
            "date": "15 Ekim 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "8-9",
            "goals": {
                "Yunus": 3,
                "Makara": 1,
                "kk": 1,
                "Ömer": 1,
                "Emin": 2,
            },
            "assists": {
                "Yunus": 2,
                "Makara": 1,
                "Ömer": 1,
                "Arda": 1,
            }
        },
        {
            "date": "22 Ekim 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "11-5",
            "goals": {
                "Arda": 1,
                "Yunus": 4,
                "Makara": 3,
                "Ömer": 2,
                "Emin": 1,
            },
            "assists": {
                "Arda": 2,
                "Yunus": 2,
                "Makara": 2,
                "Ömer": 3,
            }
        },
        {
            "date": "29 Ekim 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Boğaç Deniz FC",
            "team2_logo": erenkoy_image,
            "score": "9-8",
            "goals": {
                "Yunus": 4,
                "Ömer": 4,
                "Emin": 1,
            },
            "assists": {
                "Arda": 2,
                "Yunus": 3,
                "Makara": 1,
                "Ömer": 1,
                "Seçkin": 1,
            }
        },
        {
            "date": "5 Kasım 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "6-9",
            "goals": {
                "Yunus": 2,
                "Ömer": 3,
                "Makara": 1,
            },
            "assists": {
                "Arda": 1,
                "Ömer": 2,
            }
        },
        {
            "date": "19 Kasım 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "",
            "goals": {
                
            },
            "assists": {
                
            }
        },

        {
            "date": "21 Kasım 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "",
            "goals": {
                
            },
            "assists": {
                
            }
        },
        {
            "date": "10 Aralık 2024",
            "time": "21:00",
            "location": "1923 Esenkent",
            "team1": "Fbal U",
            "team1_logo": manu_image,
            "team2": "Erenköy FC",
            "team2_logo": erenkoy_image,
            "score": "",
            "goals": {
                
            },
            "assists": {
                
            }
        },
    ]
};

const playersData = {
    "players": [
        {
            "name": "Seçkin Berke Özdemir",
            "age": 26,
            "height": "175cm",
            "weight": "72kg",
            "position": "Sağ Kanat",
            "image": "images/seckin2.png",
            "fixturKey": "Seçkin"
        },
        {
            "name": "Eren Berk Makara",
            "age": 26,
            "height": "178cm",
            "weight": "88kg",
            "position": "Stoper",
            "image": "images/makara.png",
            "fixturKey": "Makara"
        },
        {
            "name": "Yunus Temizel",
            "age": 26,
            "height": "181cm",
            "weight": "82kg",
            "position": "Orta Saha",
            "image": "images/Dolph.png",
             "fixturKey": "Yunus"
        },
        {
            "name": "Arda Bileyci",
            "age": 26,
            "height": "178cm",
            "weight": "82kg",
            "position": "Santrafor",
            "image": "images/Arda.png",
             "fixturKey": "Arda"
        },
        {
            "name": "Ömer Faruk Cirit",
            "age": 26,
            "height": "172cm",
            "weight": "65kg",
            "position": "Sol Kanat",
            "image": "images/Omer.png",
             "fixturKey": "Ömer"
        },
        {
            "name": "Emin Coskun",
            "age": 26,
            "height": "175cm",
            "weight": "72kg",
            "position": "Stoper",
            "image": "images/Emcox.png",
             "fixturKey": "Emin"
        },
        {
            "name": "Kutay Torunoglu",
            "age": 26,
            "height": "203cm",
            "weight": "105kg",
            "position": "Kaleci",
            "saves": 24,
            "image": "images/Kutay.png",
             "fixturKey": "Kutay"
        },
        {
            "name": "Seza Akgün",
            "age": 26,
            "height": "172cm",
            "weight": "75kg",
            "position": "Kaleci",
            "saves": 16,
            "image": "images/Seza.png",
             "fixturKey": "Seza"
        },
        {
            "name": "Hakan Doğan",
            "age": 26,
            "height": "183cm",
            "weight": "90kg",
            "position": "Teknik Direktör",
            "image": "images/hakan.png",
             "fixturKey": "Hakan"
        }
    ]
};

document.getElementById('sign-in').addEventListener('click', function() {

    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.pop-up.secret').style.display = 'none';
    document.querySelector('.login-class').style.display = 'none';
    document.querySelector('.signin-class').style.display = 'none';
    document.querySelector('.logout-class').style.display = 'flex';
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const rememberMe = document.getElementById('remember-me').checked;

    const user = {
        email: email,
        password: password,
        name: name,
        date: date,
    }

    let list = JSON.parse(localStorage.getItem('list'))

    if(!list){
        list = [];
        list.push(user);
        localStorage.setItem('list', JSON.stringify(list));
    }else{
        list.push(user);
        localStorage.setItem('list', JSON.stringify(list));
    }

    localStorage.setItem('user', JSON.stringify(user));

    if (rememberMe) {
        localStorage.setItem('rememberMe', JSON.stringify(user));
    }
});

window.onload = function() {
    const user = localStorage.getItem('user');
    if(user){
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.pop-up.secret').style.display = 'none';
        document.querySelector('.login-class').style.display = 'none';
        document.querySelector('.signin-class').style.display = 'none';
    }else{
        document.querySelector('.overlay2').style.display = 'block';
        document.querySelector('.pop-up2.secret2').style.display = 'flex';
        document.querySelector('.logout-class').style.display = 'none';
    }
 
    const rememberMe = JSON.parse(localStorage.getItem('rememberMe'));

    if(rememberMe){
        document.getElementById('email2').value = rememberMe.email;
        document.getElementById('password2').value = rememberMe.password;
    }
};

document.querySelector('.signin-class').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.pop-up.secret').style.display = 'flex';    
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.pop-up.secret').style.display = 'none';
});

document.querySelector('.login-class').addEventListener('click', function(){
    document.querySelector('.overlay2').style.display = 'block';
    document.querySelector('.pop-up2.secret2').style.display = 'flex';
});

document.querySelector('.close-btn2').addEventListener('click', function() {
    document.querySelector('.overlay2').style.display = 'none';
    document.querySelector('.pop-up2.secret2').style.display = 'none';
});

document.getElementById('log-in2').addEventListener('click', function () {
    const list2 = JSON.parse(localStorage.getItem("list")) || [];
    const inputEmail = document.querySelector("#email2").value;
    const inputPassword = document.querySelector("#password2").value;

    let isMatch = false;
    list2.forEach((element) => {
        if (element.email === inputEmail && element.password === inputPassword) {
            isMatch = true;
        }
    });

    if (isMatch) {
        document.querySelector('.overlay2').style.display = 'none';
        document.querySelector('.pop-up2.secret2').style.display = 'none';
        document.querySelector('.logout-class').style.display = 'flex';
        document.querySelector('.login-class').style.display = 'none';
        document.querySelector('.signin-class').style.display = 'none';
    }
    else{
        alert("Giriş yapılamadı, lütfen kayıt olunuz :)");
    }
});

document.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        const list2 = JSON.parse(localStorage.getItem("list")) || [];
        const inputEmail = document.querySelector("#email2").value;
        const inputPassword = document.querySelector("#password2").value;
    
        let isMatch = false;
        list2.forEach((element) => {
            if (element.email === inputEmail && element.password === inputPassword) {
                isMatch = true;
            }
        });
    
        if (isMatch) {
            document.querySelector('.overlay2').style.display = 'none';
            document.querySelector('.pop-up2.secret2').style.display = 'none';
            document.querySelector('.logout-class').style.display = 'flex';
            document.querySelector('.login-class').style.display = 'none';
            document.querySelector('.signin-class').style.display = 'none';
        }
        else{
            alert("Giriş yapılamadı, lütfen kayıt olunuz :)");
        };
    };
});

document.addEventListener("keyup", function(e){
    if(e.key === "Escape"){
    document.querySelector('.overlay2').style.display = 'none';
    document.querySelector('.pop-up2.secret2').style.display = 'none'
    }
})

document.getElementById('log-in').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.pop-up.secret').style.display = 'none';
    document.querySelector('.overlay2').style.display = 'block';
    document.querySelector('.pop-up2.secret2').style.display = 'flex';
    
});

document.getElementById('sign-in2').addEventListener('click', function() {
    document.querySelector('.overlay2').style.display = 'none';
    document.querySelector('.pop-up2.secret2').style.display = 'none';
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.pop-up.secret').style.display = 'flex';
});

document.querySelector('.logout-class').addEventListener('click', function(){
    localStorage.removeItem('user');
    document.querySelector('.login-class').style.display = 'flex';
    document.querySelector('.signin-class').style.display = 'flex';
    document.querySelector('.logout-class').style.display = 'none';
     
    const rememberMe = JSON.parse(localStorage.getItem('rememberMe'));

    if(rememberMe){
        document.getElementById('email2').value = rememberMe.email;
        document.getElementById('password2').value = rememberMe.password;
    }
})






// Tüm oyuncu elemanlarını seç
const players = document.querySelectorAll(".oyuncu");

players.forEach(player => {
    player.addEventListener("mousedown", startDrag);
});

function startDrag(e) {
    const player = e.target;

    // Oyuncunun başlangıç pozisyonlarını al
    const startX = e.clientX;
    const startY = e.clientY;

    // Oyuncunun mevcut sol (left) ve üst (top) pozisyonlarını alın
    const initialLeft = player.offsetLeft;
    const initialTop = player.offsetTop;

    // Oyuncuyu sürükleme işlemi
    function drag(e) {
        // Yeni pozisyonları ayarla
        player.style.left = `${initialLeft + (e.clientX - startX)}px`;
        player.style.top = `${initialTop + (e.clientY - startY)}px`;
    }

    // Sürüklemeyi durdurma
    function stopDrag() {
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
    }

    // Hareket ve bırakma olaylarını başlat
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);

    // Varsayılan davranışı engelle
    e.preventDefault();
}

// Oyuncu ve pet şişe öğelerini seçin
const hareketliOyuncu = document.querySelector('.hareketli-oyuncu');
const petSise = document.querySelector('.pet-sise');

// Pet şişeyi atan fonksiyon
function firtlatPetSise() {
    // Oyuncunun o anki pozisyonunu al
    const oyuncuRect = hareketliOyuncu.getBoundingClientRect();
    const sahaRect = document.querySelector('.saha').getBoundingClientRect();

    // Rastgele bir konum belirle (sahanın içi)
    const randomX = Math.floor(Math.random() * (sahaRect.width - 40)); // 40: pet şişesinin genişliği
    const randomY = Math.floor(Math.random() * (sahaRect.height - 60)); // 60: pet şişesinin yüksekliği

    // Pet şişeyi görünür yap ve oyuncunun pozisyonundan başla
    petSise.style.left = `${oyuncuRect.left}px`;
    petSise.style.top = `${oyuncuRect.top}px`;
    petSise.style.display = 'block';
    
    // Pet şişeye fırlatma animasyonu ekle
    petSise.style.animation = 'firlat 0.5s ease forwards'; // Animasyonu başlat

    // Fırlatma animasyonu sona erdikten sonra hedef konuma hareket ettir
    setTimeout(() => {
        petSise.style.transform = `translate(${randomX - oyuncuRect.left}px, ${randomY - oyuncuRect.top}px)`;
    }, 1000); // Fırlatma animasyonu tamamlandığında hedefe doğru hareket ettir

    // Şişeyi tekrar gizlemek için bir süre sonra başlangıç pozisyonuna döndür
    setTimeout(() => {
        petSise.style.display = 'none';
        petSise.style.transform = 'none'; // Konumu sıfırla
        petSise.style.animation = ''; // Animasyonu sıfırla
    }, 4000); // 2.5 saniye sonra kaybolur (0.5s fırlatma + 2s hedefe ulaşma)
}

// Hareketli oyuncunun 1 saniye durmasını sağlayacak fonksiyon
function duraksama() {
    // Hareketli oyuncunun animasyonunu duraklat
    hareketliOyuncu.style.animationPlayState = 'paused'; // Animasyonu durdur
    setTimeout(() => {
        firtlatPetSise(); // Pet şişeyi fırlat
        hareketliOyuncu.style.animationPlayState = 'running'; // Animasyonu yeniden başlat
    }, 1000); // 1 saniye bekle
}

// Her 5 saniyede bir duraksama ve fırlatma işlemi
setInterval(duraksama, 5000);


/* const binary = Number(5678).toString(2);
const array = binary.split("");
let yunus = 0;
console.log(array[array.length -1]);
array.forEach(zero => {
    if(zero === '0'){
        yunus++
    }
    else if(array[array.length -1] === '0'){
        array.pop();
    }

});

console.log(array);
console.log("binary değerinde 1 lerin arasında", yunus, "tane 0 vardır."); */


/* function plus(x,y) {
    return x + y;
};

function carp(x,y) {
    return x * y;
};

let a = carp(30,plus(204,124))
console.log(a); */

/* function factoriala(x){
    if(x === 0){
        return 1
    }
    else{
        return x * factoriala(x-1)
    }
};

console.log(factoriala(6)); */

const array = [0,1]
function fibonacci(x){
    for (let i = 2; i < x; i++) {
        const plus = array[i-1] + array[i-2]
        array.push(plus)
    }
    return array
};


console.log(fibonacci(100));


let yunus = 0
const arda = setInterval(() => {
    console.log("Arda Bileyci")
    yunus++
    if(yunus > 9){
        clearInterval(arda)
        console.log("10 tane yazdırıldı")
    }
}, 1000);



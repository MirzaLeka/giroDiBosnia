
var globalSrc = 0;
let changeCaption = 0;

// open modal

function openModal(src) {
    modal.style.display = "flex";

   $(".modalImg").attr("src", pageImages[src]);

   globalSrc = src;

   changeCaption =  Math.floor(globalSrc / 4);

   $(".modalCaption").text(arrangementsTitles[changeCaption]);

   }


function nextImg() {
    globalSrc++;

    if (globalSrc == pageImages.length) {
        globalSrc = 1;
    }
    
    $(".modalImg").attr("src", pageImages[globalSrc]);

    changeCaption =  Math.floor(globalSrc / 4);
 
    $(".modalCaption").text(arrangementsTitles[changeCaption]);

}

function prevImg() {
    globalSrc--;

    if (globalSrc < 1) {
        globalSrc = pageImages.length-1;
    }

    $(".modalImg").attr("src", pageImages[globalSrc]);

    changeCaption =  Math.floor(globalSrc / 4);
  
    $(".modalCaption").text(arrangementsTitles[changeCaption]);


}

const pageImages = [
    '/assets/img/M1.jpg',
    '/assets/img/M2.jpg',
    '/assets/img/M3.jpg',
    '/assets/img/M4.jpg',
    '/assets/img/J1.jpg',
    '/assets/img/J2.jpg',
    '/assets/img/J3.jpg',
    '/assets/img/J4.jpg',
    '/assets/img/B1.jpg',
    '/assets/img/B2.jpg',
    '/assets/img/B3.jpg',
    '/assets/img/B4.jpg',
    '/assets/img/V1.jpg',
    '/assets/img/V2.jpg',
    '/assets/img/V3.jpg',
    '/assets/img/V4.jpg',
    '/assets/img/T1.jpg',
    '/assets/img/T2.jpg',
    '/assets/img/T3.jpg',
    '/assets/img/T4.jpg',
    '/assets/img/N1.jpg',
    '/assets/img/N2.jpg',
    '/assets/img/N3.jpg',
    '/assets/img/N4.jpg',
    '/assets/img/G1.jpg',
    '/assets/img/G2.png',
    '/assets/img/G3.jpg',
    '/assets/img/G4.jpg',
    '/assets/img/BL1.jpg',
    '/assets/img/BL2.jpg',
    '/assets/img/BL3.jpg',
    '/assets/img/BL4.jpg'
];

// Arrangements routes

const arrangementsTitles = [
    'Mostar - Počitelj - Konjic',
    'Jajce - Travnik',
    'Bihać - Ostrožac - Una',
    'Višegrad - Srebrenica',
    'Tuzla - Srebrenik - Bijambare',
    'Neum - Stolac - Kravice',
    'Goražde - Foča - Tjentište',
    'Banja Luka - Doboj - Tešanj'
];

// Adding Arrangements

let arrangements = '';
j = 0;

for (let i = 0; i < arrangementsTitles.length; i++) {
    arrangements += `<div class="extendDiv">  <h2 class="excursionTitle">${arrangementsTitles[i]}</h2> <br> `

for (; j < pageImages.length; j++) {

arrangements+=`
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="${pageImages[j]}" class="img-responsive arrangementsImg" onclick='openModal(${j})' alt="Image"/>
            </div>  `;

if (j == 0) {
    continue;
}

 if ((j+1) % 4 == 0) {
    break;
}

}
++j;

arrangements+= `<br><div class="toShow">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div><br>`;

arrangements+= `<button style="width: 100%;" class="btn btn-success extendBtn" onclick="expandMe(${i})">SHOW MORE</button>  </div>`;
}

$("#arrangementsList").append(arrangements);


// Expand Div

var activeArr = [false, false, false, false, false, false, false, false];

function expandMe(counter) {

 if (!activeArr[counter]) {
    $(`.extendDiv:eq(${counter})`).css({
  height: "100%"
}); 

$(`.toShow:eq(${counter})`).fadeIn();

  $(`.extendBtn:eq(${counter})`).text("SHOW LESS");

activeArr[counter] = true;
}
  else {

    $(`.extendDiv:eq(${counter})`).css({
  height: "100%"
});

$(`.toShow:eq(${counter})`).css({
    display: "none"
  }); 

  $(`.extendBtn:eq(${counter})`).text("SHOW MORE");

activeArr[counter] = false;
}


}
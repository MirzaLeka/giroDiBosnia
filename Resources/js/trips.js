

const pageImages = [
    '../Resources/img/SS1.jpg',
    '../Resources/img/SS2.jpg',
    '../Resources/img/SS3.jpg',
    '../Resources/img/SS4.jpg',
    '../Resources/img/SS5.jpg',
    '../Resources/img/SS6.jpg',
    '../Resources/img/SS7.jpg',
    '../Resources/img/SS8.jpg',
    '../Resources/img/SS9.jpg',
    '../Resources/img/Trebevic1.jpg',
    '../Resources/img/Trebevic2.jpg',
    '../Resources/img/Tunel1.jpg',
    '../Resources/img/Tunel2.jpg',
    '../Resources/img/Bjelasnica1.jpg',
    '../Resources/img/Bjelasnica2.jpg',
    '../Resources/img/Visoko1.jpg',
    '../Resources/img/Visoko2.jpg',
    '../Resources/img/Skakavac1.jpg',
    '../Resources/img/Skakavac2.jpg',
    '../Resources/img/Lukomir1.jpg',
    '../Resources/img/Lukomir2.jpg',
    '../Resources/img/Umoljani1.jpg',
    '../Resources/img/Umoljani2.jpg',
    '../Resources/img/VreloBosne1.jpg',
    '../Resources/img/VreloBosne2.jpg',
    '../Resources/img/Jahorina1.jpg',
    '../Resources/img/Jahorina2.jpg',
];

// Trips routes

const tripsTitles = [
    'Sarajevo Sightseeng',
    'Trebević',
    'Tunel Spasa',
    'Bjelašnica',
    'Piramide Visoko',
    'Vodopad Skakavac',
    'Lukomir',
    'Umoljani',
    'Vrelo Bosne',
    'Jahorina'
];

// Adding Trips

let trips = '';
let k = 8;

for (let i = 0; i < tripsTitles.length; i++) {
    trips += ` <div class="extendDiv">  <h2 class="excursionTitle">${tripsTitles[i]}</h2> <br> `;

if (i == 0) {

    for (let j = 0; j < 9; j++) {

        trips+=` 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <img src="${pageImages[j]}" class="img-responsive arrangementsImg" alt="Image"/>
                    </div> `;
        
        }

}

else {

    for (; k < pageImages.length; k++) {

        trips+=` 
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <img src="${pageImages[k]}" class="img-responsive arrangementsImg" alt="Image"/>
                    </div> `;

                    
        if (k % 2 == 0) {
            break;
        }
        
        }
   

}
k++;

trips+= `<br><div class="toShow">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div><br>`;

trips+= `<button style="width: 100%;" class="btn btn-success extendBtn" onclick="expandMe(${i})">SHOW MORE</button> </div> `;
}

$("#tripsList").append(trips);


// Expand Div

var activeArr = [false, false, false, false, false, false, false, false, false, false];

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


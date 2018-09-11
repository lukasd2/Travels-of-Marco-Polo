    var icon = "M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z";
    var pathIcon = "M412.861,78.976c3.404-6.636,2.831-14.159-0.15-20.404c0.84-7.106-1.02-14.321-7.746-19.855  c-6.262-5.151-12.523-10.305-18.781-15.457c-11.005-9.055-28.237-11.913-38.941,0c-48.619,54.103-99.461,105.856-152.167,155.725  c-39.185-36.605-78.846-72.713-118.223-108.868c-13.82-12.693-33.824-8.71-42.519,6.411c-12.665,6.286-22.931,14.481-31.42,28.468  c-4.042,6.664-3.727,15.076,0,21.764c25.421,45.578,74.557,85.651,114.957,122.529c-5.406,4.839-10.772,9.724-16.287,14.461  c-54.43,46.742-91.144,76.399-23.029,124.325c0.919,0.647,1.856,0.504,2.789,0.882c1.305,0.602,2.557,1.026,4.004,1.264  c0.45,0.017,0.87,0.093,1.313,0.058c1.402,0.114,2.774,0.471,4.195,0.192c36.621-7.18,70.677-35.878,101.576-67.48  c30.1,29.669,62.151,58.013,97.395,74.831c8.391,4.005,18.395,1.671,24.855-3.931c10.832,0.818,20.708-5.913,25.665-15.586  c0.734-0.454,1.207-0.713,2.002-1.21c15.748-9.838,17.187-29.431,5.534-42.936c-26.313-30.492-54.284-59.478-82.798-87.95  C316.426,196.043,380.533,141.939,412.861,78.976z";
    // Creazione della mappa con la libreria amCharts maps
    var map = AmCharts.makeChart( "mapdiv", {
    
  "type": "map",
  "dataProvider": {
    "map": "chinaHigh",
    "getAreasFromMap": true,
    "lines": [
      {
        "id": "line1",
        "arc": -0.80,
        //"arrow": "end",
        //"arrowSize": 12,
        //"thickness": 2,
        "latitudes": [39.9138, 39.4833, 39.4833, 36.0888, 34.8335, 34.2666, 33.0422, 30.6582, 30.5064, 25.0230, 24.3531, 23.4966],
        "longitudes": [116.3636, 115.9666, 112.5602, 111.5188, 110.3293, 108.9, 107.0149, 103.7953, 95.2363, 102.4218, 99.5723, 96.0122]
      }],
     "images": [{
        "type": "circle",
        "id": "#Cambaluc",
        "label": "Cambaluc",
        "latitude":39.9138,
        "longitude":116.3636,
        "title": "Cambaluc",
        "description": "Cambaluc corrisponde all'attuale Pechino",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Giongiu",
        "label": "Giongiu",
        "latitude":39.4833,
        "longitude":115.9666,
        "title": "Giongiu",
        "description": "Giongiu corrisponde all'attuale Zhuozhou",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Taianfu",
        "label": "Taianfu",
        "latitude":39.4833,
        "longitude":112.5602,
        "title": "Taianfu",
        "description": "Taianfu corrisponde all'attuale Taiyuan",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Pianfu",
        "label": "Pianfu",
        "latitude":36.0888,
        "longitude":111.5188,
        "title": "Pianfu",
        "description": "Pianfu corrisponde all'attuale Pingyang",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Cacianfu",
        "label": "Cacianfu",
        "latitude":34.8335,
        "longitude":110.3293,
        "title": "Cacianfu",
        "description": "Cacianfu corrisponde all'attuale Puzhou ",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Chengianfu",
        "label": "Chengianfu",
        "latitude":34.2666,
        "longitude":108.9,
        "title": "Chengianfu",
        "description": "Chengianfu corrisponde all'attuale Kenjanfu/Hsi-an/Xi'an",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Han-chung",
        "label": "Han-chung",
        "latitude":33.0422,
        "longitude":107.0149,
        "title": "Han-chung",
        "description": "Han-chung",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Sindufu",
        "label": "Sindufu",
        "latitude":30.6582,
        "longitude":103.7953,
        "title": "Sindufu",
        "description": "Sindufu corrisponde all'attuale Cheng-tu/Chengdu",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Tebet",
        "label": "Tebet",
        "latitude":30.5064,
        "longitude":95.2363,
        "title": "Tebet",
        "description": "Tebet corrisponde all'attuale area del Tibet",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Iaci",
        "label": "Iaci",
        "latitude":25.0230,
        "longitude":102.4218,
        "title": "Tebet",
        "description": "Iaci corrisponde all'attuale Kunming",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Vocian",
        "label": "Vocian",
        "latitude":24.3531,
        "longitude":99.5723,
        "title": "Vocian",
        "description": "Vocian corrisponde all'attuale Yunxian",
        "zoomLevel": 12
      }, {
        "type": "circle",
        "id": "#Mien",
        "label": "Mien",
        "latitude":23.4966,
        "longitude":96.0122,
        "title": "Mien",
        "description": "Mien corrisponde all'attuale Tagaung",
        "zoomLevel": 12
      },
      {
      "id": "plane1",
      "animateAlongLine": true,
      "svgPath": pathIcon,
      "positionOnLine": 0,
      "color": "#666",
      "lineId": "line1",
      "flipDirection": false,
      "loop": true,
      "positionScale": 1.1,
      "scale": 0.04
    }
      ]
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },
  "legend": {
    "backgroundColor": "#fff",
    "backgroundAlpha": 0.7,
    "align": "center",
    "bottom": 0,
    "markerSize": 10,
    "data": [{
      "markerType": "line",
      "title": "Percorso approssimativo di Marco Polo",
      "color": "#585869"
    }, {
      "markerType": "circle",
      "title": "Posizione delle città",
      "color": "#585869"
    }]
  },
  "imagesSettings": {
    "color": "#585869",
    "rollOverColor": "#585869",
    "selectedColor": "#585869",
    "pauseDuration": 0.1,
    "animationDuration": 3,
    "adjustAnimationSpeed": false,
    "selectable": true,
    "selectedScale": 1.5,
    "selectedLabelColor": "red",
    "selectedOutlineColor": "orange",
    "selectedOutlineThickness": 6,
    "descriptionWindowWidth": 160
  },
  "linesSettings": {
    "color": "#585869",
    "alpha": 0.5,
    "dashLength": 1
  }
});

window.onload = function() {
    
    //Event hooks
    var intro = document.getElementById("intro");
    var front = document.getElementById("front");
    var book = document.getElementById("book");
    var mapdiv = document.getElementById("mapdiv");

/* Dev info 
map.addListener("clickMapObject", function(event) {
  document.getElementById("info").innerHTML = 'Clicked ID: ' + event.mapObject.id + ' (' + event.mapObject.title + ')';
});  */


/* Funzioni gestione della mappa */
var showPath = function() {
    mapdiv.classList.add("fixed");
    intro.classList.add("active");
    front.classList.add("active");
    book.classList.add("active");
    btnHideMap.style.display = "block";
    //alert(this.textContent);
    //console.log(map.clickMapObject(map.getObjectById("#"+"this.textContent"))); 
    //console.log(map.linkToObject("#Cambaluc"));
    //alert(this.textContent);
    map.clickMapObject(map.getObjectById("#"+this.textContent));
};

var removePath = function() {
    btnHideMap.style.display = "none";
    mapdiv.classList.remove("fixed");
    book.classList.remove("active");
    intro.classList.remove("active");
    front.classList.remove("active");
}

// Aggiunta di onclick e zoom su ogni città sulla mappa
var cityNames = document.getElementsByClassName("place");

for (var i = 0; i < cityNames.length; i++) {
    cityNames[i].addEventListener('click', showPath, false);
}

//Pulsante nascondi mappa
var btnHideMap = document.getElementById("updatebook");
btnHideMap.addEventListener("click", removePath, false);

/* Gestione checkbox, visualizzazione (aggiunta del background) dei nomi delle persone e delle provincie */

var showPers = function () {
    if (checkPerson.checked) {
        for (var i = 0; i < pers.length; i++) {
            pers[i].classList.add("selectedP");
        }
    } else {
        for (var i = 0; i < pers.length; i++) {
            pers[i].classList.remove("selectedP");
        }
    }
}

var showProv = function () {
    if (checkProv.checked) {
        for (var i = 0; i < prov.length; i++) {
            prov[i].classList.add("selectedProv");
        }
    } else {
        for (var i = 0; i < prov.length; i++) {
            prov[i].classList.remove("selectedProv");
        }
    }
    
}

//Seleziona tutte le persone nel testo
var pers = document.getElementsByClassName("person");
//Checkbox lista persone
var checkPerson = document.getElementById("pcheck");
checkPerson.addEventListener("click", showPers, false);
//Seleziona tutte le provincie nel testo
var prov = document.getElementsByClassName("province");
//Checkbox lista provincie
var checkProv = document.getElementById("provcheck");
checkProv.addEventListener("click", showProv, false);

}


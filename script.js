
var timetable = [
    [],
    [
        {
            title: "Tutorato fondamenti di programmazione (I-Z)",
            group: "1",
            time: "10:30 - 13:30",
            place: "Laboratorio 152",
            teacher: "",
            class: "06127"
        },
        {
            title: "Tutorato fondamenti di programmazione (I-Z)",
            group: "2",
            time: "10:30 - 13:30",
            place: "Aula 21",
            teacher: "",
            class: "06127"
        },
        {
            title: "Fondamenti di programmazione (I-Z)",
            group: "",
            time: "14:30 - 16:30",
            place: "Aula I",
            teacher: "Francesco Tortorella",
            class: "06127"
        },
        {
            title: "Analisi matematica 1 (I-Z)",
            group: "",
            time: "16:30 - 18:30",
            place: "Aula I",
            teacher: "Abdelaziz Rhandi",
            class: "06127"
        }
    ],
    [
        {
            title: "Fisica 1 (I-Z)",
            group: "",
            time: "8:30 - 10:30",
            place: "Aula I",
            teacher: "Michele Guida",
            class: "06127"
        },
        {
            title: "Fondamenti di programmazione (I-Z)",
            group: "",
            time: "10:30 - 12:30",
            place: "Aula I",
            teacher: "Francesco Tortorella",
            class: "06127"
        },
        {
            title: "Tutorato analisi matematica 1 (I-Z)",
            group: "2",
            time: "13:30 - 16:30",
            place: "Aula 21",
            teacher: "",
            class: "06127"
        },
        {
            title: "Tutorato analisi matematica 1 (I-Z)",
            group: "3",
            time: "13:30 - 16:30",
            place: "Laboratorio 152",
            teacher: "",
            class: "06127"
        }
    ],
    [
        {
            title: "Tutorato analisi matematica 1 (I-Z)",
            group: "1",
            time: "10:30 - 13:30",
            place: "Laboratorio 152",
            teacher: "",
            class: "06127"
        },
        {
            title: "Analisi matematica 1 (I-Z)",
            group: "",
            time: "14:30 - 16:30",
            place: "Aula I",
            teacher: "Abdelaziz Rhandi",
            class: "06127"
        },
        {
            title: "Fisica 1 (I-Z)",
            group: "",
            time: "16:30 - 18:30",
            place: "Aula I",
            teacher: "Michele Guida",
            class: "06127"
        },
    ],
    [
        {
            title: "Fondamenti di programmazione (I-Z)",
            group: "",
            time: "8:30 - 10:30",
            place: "Aula I",
            teacher: "Francesco Tortorella",
            class: "06127"
        },
        {
            title: "Analisi matematica 1 (I-Z)",
            group: "",
            time: "10:30 - 12:30",
            place: "Aula I",
            teacher: "Abdelaziz Rhandi",
            class: "06127"
        },
        {
            title: "Tutorato fisica 1 (I-Z)",
            group: "1",
            time: "13:30 - 16:30",
            place: "Aula 21",
            teacher: "",
            class: "06127"
        },
        {
            title: "Tutorato fisica 1 (I-Z)",
            group: "3",
            time: "13:30 - 16:30",
            place: "Laboratorio 152",
            teacher: "",
            class: "06127"
        }
    ],
    [
        {
            title: "Tutorato fondamenti di programmazione (I-Z)",
            group: "3",
            time: "10:30 - 13:30",
            place: "Laboratorio 152",
            teacher: "",
            class: "06127"
        },
        {
            title: "Tutorato fisica 1 (I-Z)",
            group: "2",
            time: "12:30 - 15:30",
            place: "Aula B",
            teacher: "",
            class: "06127"
        }
    ],
    []
];

var colors = [
    'red',
    'green',
    'blue',
    'purple',
    'orange',
    'grey',
    'brown'
]

var days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

$("body").ready(function(){
    var today = new Date().getDay();
    var dayCounter = today;
    for(var i=0; i<7; i++){
        var day = $('<section id="page-' + i + '" class="page"><div class="content"><div class="head"><span>...</span></div><div class="body"></div></div></section>');
        if(i==0) day.find("span").html("Oggi");
        else if(i==1) day.find("span").html("Domani");
        else day.find("span").html(days[dayCounter]);
        if(timetable[dayCounter].length!=0){
            timetable[dayCounter].forEach(function(lesson){
                day.find(".body").append(createCard(lesson, colors[Math.round(Math.random() * 6)]));
            });
        }else{
            day.find(".body").append('<img class="empty" src="empty.png" alt="Ops! Sembra non esserci niente">');
        }
        $(".page-selector").append(day);
        dayCounter++;
        if(days[dayCounter] == undefined) dayCounter = 0;
    }
});

function createCard(lesson, color){
    var card = $('<div class="card-element-list"></div>');
    card.addClass(color);
    var attr = $('<div class="attr"></div>');
    for (key in lesson){
        var element = attr.clone();
        if(lesson[key] != ""){
            element.addClass(key);
            element.html(lesson[key]);
            card.append(element);
        }
    }
    return card;
}

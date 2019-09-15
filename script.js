
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

$("body").ready(function(){
    var today = new Date().getDay();
    if(timetable[today].length!=0){
        timetable[today].forEach(function(lesson){
            $("#page-1 .body").append(createCard(lesson, colors[Math.round(Math.random() * 6)]));
        });
    }else{
        $("#page-1 .body").append('<img class="empty" src="empty.png" alt="Ops! Sembra non esserci niente">');
    }
    if(timetable[today+1].length!=0){
        var colorTomorrow = Math.round(Math.random() * 6)
        timetable[today+1].forEach(function(lesson){
            $("#page-2 .body").append(createCard(lesson, colors[Math.round(Math.random() * 6)]));
        });
    }else{
        $("#page-2 .body").append('<img class="empty" src="empty.png" alt="Ops! Sembra non esserci niente">');
    }
    var colorOther = Math.round(Math.random() * 6)
    timetable.forEach(function(table){
        table.forEach(function(lesson){
            $("#page-3 .body").append(createCard(lesson, colors[Math.round(Math.random() * 6)]));
        });
    });
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

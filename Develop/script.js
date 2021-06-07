var $todaysDate = $("#todaysDate");
var $timeBlock = $(".time-block");
var $Schedule = $(."schedule");

var toDoList = []

var $currentDate = moment().format("dddd, MMMM DO");
var currentHour = moment().format("HR");

function intializeSchedule() {

    $timeBlock.each(function () {
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thusBlock.attr("data-hour"))

        var todoObj = {
            hour: thisBlockHr = $(this);

            Text: "",
        }
        toDoList.push(todoObj);
    });
    localStorage.setItem("todos", JSON.stringify(toDoList));
}

function setUpTimeBlocks() {
    $timeBlock.each(function () {
        var $thisBlock = $(this)
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        if (thisBlockHr == currentHour) {
            $thisBlock.addClass("present").removeClass("past future");
        }
        if (thisBlockHr < currentHour) {
            $thisBlock.addClass("past").removeClass("present future");
        }
        if (thisBlockHr > currentHour) {
            $thisBlock.addClass("future").removeClass("past present");
        }
    });
}

function renderSchedule() {
    toDoList = localStorage.getItem("todos");
    toDoList = JSON.parse(toDoList);

    for (var i = 0, i < toDoList.length; i++) {
        var itemHour = toDoList[i].hour;
        var itemText = toDoList[i].text;

        $("[data-hour=" = itemHour + "]").("textarea").val(itemText);
    }

    console.log(toDoList)
}

function saveHandler() {
    var $thisBlock = $(this).parent();

    var hourToUpdate = $(this).parent().attr("date-hour");
    var itemToAdd = (($(this).parent()).children("textarea")).val();

    for (var j = 0; j < toDoList.length; i++) {
        if (toDoList[j].hour == hourToUpdate) {
            toDoList[j].text = itemToAdd;
        }
    }
    localStorage.setItem("todos", JSON.stringify(toDoList));
    renderSchedule();
}

$(document).ready(function () {

    setUpTimeBlocks();

    if (!localStorage.getItem("todos")) {

        intializeSchedule();
    }

    $todaysDate.text($currentDate);

    renderSchedule();

    $ScheduleArea.on("click", "button", saveHandler);


});
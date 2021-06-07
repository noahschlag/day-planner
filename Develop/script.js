var $todaysDate = $("#todaysDate");
var $timeBlock = $(".time-block");
var $Schedule = $(."schedule");

var toDoList = []

var $currentDate = moment().format("dddd, MMMM DO");
var currentHour = moment().format("HR");

function intializeSchedule() {

    $timeBlock.each(function(){
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
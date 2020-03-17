function help1() {
$("#helpb").css("background-image", "url('Images/help1.png')");
$("#next").attr("onclick", "help2()");
$("#previous").css("visibility", "hidden");

}

function help2() {
$("#helpb").css("background-image" , "url('Images/help2.png')");
$("#next").css("visibility", "visible");
$("#next").attr("onclick" , "help3()");
$("#previous").attr("onclick", "help1()");
$("#previous").css("visibility", "visible");

}

function help3() {
$("#helpb").css("background-image", "url('Images/help3.png')");
$("#next").css("visibility", "visible");
$("#next").attr("onclick", "help4()");
$("#previous").attr("onclick", "help2()");
$("#previous").css("visibility", "visible");


}
function help4() {
    $("#helpb").css("background-image", "url('Images/help4.png')");
    $("#previous").attr("onclick", "help3()");
    $("#next").css("visibility", "hidden");

}
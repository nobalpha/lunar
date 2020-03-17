var i = 0;
var txt1 = "Hello dear gamer, my name is Richard Nixon, 37th President of U.S. and I was the president while Apollo 11 project.";
var speed = 50;
var txt2 = "You are operating Neil Armstrong's probe, who is the first human that reached to the moon, like Yuri Gagarin's. Be careful about the black lines, because they are obstacles; land on the red line with a speed less than 1.5 m/s. Be careful !";
var i2 = 0;
var speed2 = 50;

function part1() {
    if (i < txt1.length) {
        document.getElementById("parole").innerHTML += txt1.charAt(i);

        i++;
        setTimeout(part1, speed);

    }
    $("#next").css("visibility", "visible");
}

function part2() {
    txt1 = "";
    $("#parole").html("");
    if (i2 < txt2.length) {
        document.getElementById("parole2").innerHTML += txt2.charAt(i2);

        i2++;
        setTimeout(part2, speed2);

    }
    $("#next").attr("onclick", "level3()");


}

function level3() {
    window.location.href = 'level3.html';

}
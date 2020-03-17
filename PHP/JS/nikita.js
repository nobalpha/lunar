var i = 0;
var txt1 = "привет, my name is Nikita Sergeyevich Khrushchev. I led the Soviet Union during part of the Cold War as the First Secretary of the Communist Party of the Soviet Union from 1953 to 1964.";
var speed = 50;
var txt2 = "You are operating Laika's probe, who is the first animal (dog) that reached to the moon, like Yuri Gagarin's. Be careful about the black lines, because they are obstacles; land on the red line with a speed less than 2.5 m/s. Be careful !";
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
    $("#next").attr("onclick", "level2()");


}

function level2() {
    window.location.href = 'level2.html';

}
var i = 0;
var txt1 = "Привет, товарищ, my name is Stalin. You know me from the history lessons, huh ? I'm the proudest president of the United Soviet Socialist Republic. I welcome you to the best game (!) you'll ever try ! давай, let's try !";
var speed = 50;
var txt2 = "You are operating Yuri Gagarin's spaceship, who is the first human that reached to the space, by pressing W for Up, S for Down, A for Left and D for Right. Be careful about the black lines, because they are obstacles; land on the red line with a speed less than 5 m/s . Ready comrade ?";
var i2 = 0;
var speed2 = 50;
var x = document.getElementById("myAudio");











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
    $("#next").attr("onclick", "level1()");


}

function level1() {
    window.location.href = 'level1.html';

}
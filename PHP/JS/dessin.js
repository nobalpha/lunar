//Itemlerin Ã§izim fonksiyonu

function dessin_item(item) {
    console.log("dessin");
    $("#game").prepend("<div id='"+item.id+"' class='"+item.status+"'></div>");

    element = $("#" + item.id);
    element.css("left", item.x + "px");
    element.css("top", item.y + "px");
    element.css("width", item.w + "px");
    element.css("height", item.h + "px");
    element.css("visibility", "visible");
    element.css("position", "absolute");
      if (item.status == "lan") {
        element.css("background-color", "red");
    } else if (item.status == "lock") {
        element.css("background-color", "blue");

    } else if(item.status == "porteQuiSeDeplace") {
        element.css("background-color", "rgb(" + item.r + "," + item.g + "," + item.b + ")");
    }

    else if (item.status == "control") {
      if(item.control == "big") {
        element.css("background-color" , "purple"); }
      else {
        element.css("background-color" , "pink");
      }
    }
    
    

}
//.
//Itemlerle tepkime fonksiyonu
function colusion(item) {

    return ((X + ws > item.x && X < item.x + item.w) && (Y < item.y + item.h && Y + hs > item.y));
}

//.

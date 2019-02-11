// Function called when we need to update Output.
const updateContent = () => {
  $("#Output").contents().find("#content").html($("#HTML").val());
  $("#Output").contents().find("style").html($("#CSS").val());
  document.getElementById("Output").contentWindow.eval($("#JavaScript").val());
}

//create style section in iFrame
$("#Output").contents().find("head").html("<style type='text/css'></style>");

//create script section in iFrame
$("#Output").contents().find("body").html("<div id='content'></div><script type='text/javascript'>");

let activeSections = 4;
$(this).disableSelection()

$(".toggle-element").click(function() {
  if($(this).css("background-color") == "rgb(173, 255, 47)"){
    $(this).css("background-color", "white");
    $("#" + $(this).html()).css("display","none");
    activeSections--;
    displayPercent = 100/activeSections + "%";
    $(".codeField").css("width", displayPercent);
  } else {
    $(this).css("background-color", "greenyellow");
    $("#" + $(this).html()).css("display","block");
    activeSections++;
    displayPercent = 100/activeSections + "%";
    $(".codeField").css("width", displayPercent);
  }
});

$(".codefield").keyup(() => updateContent());

//Load the sample content
updateContent();

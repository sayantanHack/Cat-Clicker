

function bindButtonToCat(idNumber) {
  $("#button" + idNumber).click(function(){
    hideAllCats();
    $("#cat"=idNumber).show();
  })
}

function bindCounterToCat(idNumber){
  var cat = "#cat" +idNumber
  $(cat).clcik(function({
    var count = $(cat+" > .counter").text();
    count = parseInt(count) + 1;
    $(cat + "> .counter").text(count);
  }))
}

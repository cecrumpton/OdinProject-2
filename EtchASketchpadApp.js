$( document).ready(function(){

  let totalRows = 16;
  let totalColumns = 16;
  let color1 = '#ff0000';
  let color2 = '#0000ff';

  let $mainDiv = $("<div></div>").attr('id', 'main');
  $("body").append($mainDiv);

  let $formDiv = $('<div></div>').attr('id', 'form');
  $('#main').append($formDiv);

  let $gridButton = $('<button>Change Size</button>').attr('id', 'gridButton');
  $('#form').append($gridButton);
  //include below line if bootstrap works
  $gridButton.attr('class', 'btn btn-primary');

  let $clearButton = $('<button>Clear</button>').attr('id', 'clearButton');
  $('#form').append($clearButton);
  //include below line if bootstrap works
  $clearButton.attr('class', 'btn btn-primary');

  let $rowsText = $('<p>Rows:</p>').attr('id', 'rowsText');
  $('#form').append($rowsText);

  let $inputRows = $('<input>').attr('id', 'inputRows');
  $inputRows.attr('type', 'text');
  $inputRows.attr('name', 'Number of Rows');
  $inputRows.attr('value', totalRows);
  $('#form').append($inputRows);

  let $columnsText = $('<p>Columns:</p>').attr('id', 'columnsText');
  $('#form').append($columnsText);

  let $inputColumns = $('<input>').attr('id', 'inputColumns');
  $inputColumns.attr('type', 'text');
  $inputColumns.attr('name', 'Number of Columns');
  $inputColumns.attr('value', totalColumns);
  $('#form').append($inputColumns);

  let $containerDiv = $("<div></div>").attr('id', 'container');
  $("#main").append($containerDiv);

  //code is repeated in click function below, it works but can be written better
  for (let createBlock=0; createBlock<(totalRows*totalColumns); createBlock++) {
    let $blockDiv = $("<div></div>").attr('class', 'blockDiv');
    $("#container").append($blockDiv);
  }

  //also repeated
  $(".blockDiv").hover(function() {
    $(this).css("background-color", color1);
    }, function() {
    $(this).css("background-color", color2);
  });

  //button functions
  $('#gridButton').on('click', function () {
    $(".blockDiv").remove();
    let totalRows = $('#inputRows').val();
    let totalColumns = $('#inputColumns').val();
    for (let createBlock=0; createBlock<(totalRows*totalColumns); createBlock++) {
      let $blockDiv = $("<div></div>").attr('class', 'blockDiv');
      $("#container").append($blockDiv);
    }
    //repeated, can be simplified
    $('.blockDiv').css({
    'height': 500/totalRows,
    'width': 500/totalColumns,
    'border': '1px solid #000',
    'display': 'inline-block'
     });

    //also repeated
    $(".blockDiv").hover(function() {
      $(this).css("background-color", color1);
      }, function() {
      $(this).css("background-color", color2);
    });
  });

  $('#clearButton').on('click', function () {
    $('.blockDiv').css("background-color", '#fff');
  });

  //Jquery css below this line
  $('body').css({
    'margin': '20px',
  });

  $('#main').css({
    'border': '1px solid #00f',
    'padding': '20px',
    'text-align': 'center'
  });

  $('#form').css({
    'border': '1px solid #f00',
    'display': 'inline-block',
    'padding': '0px 0px 20px 0px'
  });

  $('#gridButton').css({
    'margin': 'auto'
  });

  $('#clearButton').css({
    'margin': 'auto'
  });

  $('#rowsText').css({
    'margin': '0px 0px 10px 0px'
  });

  $('#columnsText').css({
    'margin': '10px 0px'
  });

  $('#inputRows').css({
    'display': 'block',
    'margin': 'auto'
  });

  $('#inputColumns').css({
    'display': 'block',
    'margin': 'auto'
  });

  $('.btn').css({
    'margin': '20px'
  })

  $('#container').css({
    'height': '502px',
    'width': '502px',
    'font-size': '0px',
    'margin': 'auto'
  });

  $('.blockDiv').css({
    'height': 500/totalRows,
    'width': 500/totalColumns,
    'border': '1px solid #000',
    'display': 'inline-block'
  });

}); //end document.ready

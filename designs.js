
//declaring variables
 /*const canvas = $('#pixelCanvas');
  const colorPicker = $('#colorPicker');
  const gridHeight = $('#inputHeight').val();
  const gridWidth = $('#inputWidth').val();

*/

function makeGrid(gridHeight, gridWidth, canvas) {
  'use strict';
/*
When this method is invoked, the nested for loop is used to create a dynamic table.
the outter loop was used to create the row while the nested loop draws the col


*/


    for( let i = 0 ; i < gridHeight; i++){
        let tableRows = document.createElement('tr')
        canvas.append(tableRows);
        // now doing the width loop
        for(let x = 0; x <= gridWidth ; x++){
            let tableColums = document.createElement('td');
            tableRows.append(tableColums)
        }
    }

    /*
    canvas.on('click', 'td', function () {
      let pickedColor = $(colorPicker).val();
      $(this).css('backgroundColor', pickedColor);
    })

    */
    canvas.on('click' , 'td' , function(){
        let pickedColor = $("#colorPicker").val();
        $(this).css('backgroundColor' , pickedColor);
    })



    const colorReset = $('td').addClass('default');
    $('.default').dblclick(function(){
        $(colorReset).css('backgroundColor' , '#fff')
    })

   return

}

const sizePicker = $('#sizePicker').submit(function (evt){
    evt.preventDefault();
    const canvas = $('#pixelCanvas')
    const gridHeight = $('#inputHeight').val()
    const gridWidth = $('#inputWeight').val()

    makeGrid(gridHeight, gridWidth, canvas);
})

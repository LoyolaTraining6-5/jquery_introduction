/*exercise 1 - .on method*/

/* $('selector').on('event', functionToCall ); */
$('.boxExample1').on('click', function() {
  $(this).text('Clicked!');
});

/*exercise 2 - .on method using two events */
$('.boxExample2').on('mouseenter', function() {
  $(this).text('Hovered!');
});
$('.boxExample2').on('mouseleave', function() {
  $(this).text('Ex 2');
})

/* exercise 3 - eventing coded cleaner */
$('.boxExample3').on('dblclick', changeText );

function changeText() {
  $(this).text('dblClicked!');
}

/* functionally this code is EXACTLY the same as ex 2, just more cleanly written */

/* example 4 - arguments won't work! */
/*$('.boxExample4').on('mouseenter', changeTextEx4('works??'));

function changeTextEx4(new_text) {
  $(this).text(new_text);
}*/

/*$('.boxExample4').on('click', function('#333') {
  $(this).css('background-color', '#333');
});*/


/* example 5 - passing in arguments with a new argument .on */
$('.boxExample5').on('click', {newText: "working!"}, changeTextEx5);

function changeTextEx5(the_click_event) {
  $(this).text(the_click_event.data.newText);
}

/* example 6 - logging the event */
$('.boxExample6').on('click', {newText: 'ex 6!'}, changeTextEx6);

function changeTextEx6(event) {
  console.log(event);
}


/* example 7 - logging some good stuff from the eventt */
$('.boxExample6').on('click', changeTextToClickCoords);

function changeTextToClickCoords(event) {
  console.log(event);
  $(this).text('this div is ' + event.target.clientWidth + 'px wide.');
}

/*example 8 - this logger*/

$('.boxExample8').on('click', logThis);

function logThis(event) {
  console.log(this);
  console.log($(this));
  console.log($('.boxExample8'));
}

/* example 9 - targeting properly */

/* the harmless seeming first way we'd do it */
$('.example-list-item').on('click', changeColorOfItem)

function changeColorOfItem() {
  $(this).css('color', 'red');
}

/* a better way that will let us add more list items and they'll have the hanlder attached. Here we clicked on the parent, .example-list but said you need to click on the  */
$('.example-list').on('click', '.example-list-item', changeColorWillWork )

function changeColorWillWork() {
  $(this).css('color', 'blue');
}

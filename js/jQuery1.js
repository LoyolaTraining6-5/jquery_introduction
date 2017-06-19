/*exercise 1*/

/*lets select the box by its class name 'color-to-change'*/

/*$('.color-to-change');
$('.box');
$('div');*/

/*once weve selected it we can now call jQuery functions on it*/

/*$('.color-to-change').css('background-color','red');*/

/*exercise 2*/
/*$('#cool-box').css('background-color', 'orange');*/

/* exercise 4 */
/*$('.adding-props').addClass('two-chained-functions').text('Hi Im put in by JS!');*/


/* exercise 5 - the document ready */

$( document ).ready(function() {
    /*first jQuery mainpulation here*/
  
    /*second here... */
  
    /*until we get to 10! */
});

/* exercise 6 - selecting via child selector */

/*this just utilizes what we know about CSS selectors, and let's us just put the parent in first, this way we don't have to add extraneous classes for us to look for*/

/*$('.box-container .box');
*/
/*see, now we can select just .box divs we want under .box-container, and the rest in the page are left alone*/

/*there's a second method, giving the parent as a second argument to the $ function*/

/*$('.box', '.box-container');
*/
/*$('li', '.example-list').addClass('red-text');
*/
/*notice no other of my list elements were selected!*/
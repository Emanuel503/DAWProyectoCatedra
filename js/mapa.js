window.onload = cargarDepartamentos();

var id=localStorage.getItem("id");

function cargarDepartamentos(){

    $( "#santa-ana, #santa-ana-2" ).on( "click", function() {
        localStorage.setItem("id", "0");
    });

    $( "#santa-ana-mapa").on( "click", function() {
        localStorage.setItem("id", "0");
    });

    $( "#ahuachapan, #ahuachapan-2" ).on( "click", function() {
        localStorage.setItem("id", "1");
    });

    $( "#sonsonate, #sonsonate-2" ).on( "click", function() {
        localStorage.setItem("id", "2");
    });

    $( "#chalatenango, #chalatenango-2" ).on( "click", function() {
        localStorage.setItem("id", "3");
    });

    $( "#la-libertad, #la-libertad-2" ).on( "click", function() {
        localStorage.setItem("id", "4");
    });

    $( "#san-salvador, #san-salvador-2" ).on( "click", function() {
        localStorage.setItem("id", "5");
    });

    $( "#cuscatlan, #cuscatlan-2" ).on( "click", function() {
        localStorage.setItem("id", "6");
    });

    $( "#la-paz, #la-paz-2" ).on( "click", function() {
        localStorage.setItem("id", "7");
    });

    $( "#cabanas, #cabanas-2" ).on( "click", function() {
        localStorage.setItem("id", "8");
    });

    $( "#san-vicente, #san-vicente-2" ).on( "click", function() {
        localStorage.setItem("id", "9");
    });

    $( "#usulutan, #usulutan-2" ).on( "click", function() {
        localStorage.setItem("id", "10");
    });

    $( "#san-miguel, #san-miguel-2" ).on( "click", function() {
        localStorage.setItem("id", "11");
    });

    $( "#morazan, #morazan-2" ).on( "click", function() {
        localStorage.setItem("id", "12");
    });

    $( "#la-union, #la-union-2" ).on( "click", function() {
        localStorage.setItem("id", "13");
    });

    $.ajax({
        url: 'js/departamentos.json',
        method: 'GET'
    }).then(function(departamento){

        

        
    });
}
window.onload = cargarDepartamentos();

var id=localStorage.getItem("id");

function cargarDepartamentos(){

    $( "#santa-ana santa-ana-2" ).on( "click", function() {
        localStorage.setItem("id", "0");
    });

    $( "#ahuachapan ahuachapan-2" ).on( "click", function() {
        localStorage.setItem("id", "1");
    });

    $( "#sonsonate" ).on( "click", function() {
        localStorage.setItem("id", "2");
    });

    $( "#chalatenango" ).on( "click", function() {
        localStorage.setItem("id", "3");
    });

    $( "#la-libertad" ).on( "click", function() {
        localStorage.setItem("id", "4");
    });

    $( "#san-salvador" ).on( "click", function() {
        localStorage.setItem("id", "5");
    });

    $( "#cuscatlan" ).on( "click", function() {
        localStorage.setItem("id", "6");
    });

    $( "#la-paz" ).on( "click", function() {
        localStorage.setItem("id", "7");
    });

    $( "#cabanas" ).on( "click", function() {
        localStorage.setItem("id", "8");
    });

    $( "#san-vicente" ).on( "click", function() {
        localStorage.setItem("id", "9");
    });

    $( "#usulutan" ).on( "click", function() {
        localStorage.setItem("id", "10");
    });

    $( "#san-miguel" ).on( "click", function() {
        localStorage.setItem("id", "11");
    });

    $( "#morazan" ).on( "click", function() {
        localStorage.setItem("id", "12");
    });

    $( "#la-union" ).on( "click", function() {
        localStorage.setItem("id", "13");
    });

    $.ajax({
        url: 'js/departamentos.json',
        method: 'GET'
    }).then(function(departamento){

        

        
    });
}
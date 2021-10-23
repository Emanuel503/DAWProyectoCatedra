//JSON con los datos generales de cada departamento
var elsalvador = {
    "departamento":[
        {
            "nombre" : "Santa Ana",
            "capital" : "(Santa Ana)",
            "superficie" : "408.01 km²",
            "alcalde" : "Gustavo Acevedo",
            "partido" :"Nuevas Ideas",
            "poblacion" : "272.554 habitantes",
            "numMunicipios" : "13 municipios"
        },
        {
            "nombre" : "Ahuachapán",
            "capital" : "(Ahuachapán)",
            "superficie" : "244,8 km²",
            "alcalde" : "Juan Carlos Zepeda Marroquín",
            "partido" :"Nuevas Ideas",
            "poblacion" : "129.750 habitantes",
            "numMunicipios" : "12 municipios"
        },
        {
            "nombre" : "Sonsonate",
            "capital" : "(Sonsonate)",
            "superficie" : "232,5 km²",
            "alcalde" : "Rafael Arévalo",
            "partido" :"Nuevas Ideas",
            "poblacion" : "72.951 habitantes",
            "numMunicipios" : "16 municipios"
        },
        {   
           "nombre" : "Chalatenango",
           "capital" : "(Chalatenango)",
           "superficie" : "131,8 km²",
           "alcalde" : "Alfredo Hernández",
           "partido" :"Nuevas Ideas",
           "Área" : "0,75 km²", 
           "poblacion" : "21.102 habitantes",
           "numMunicipios": "33 municipios"
        },
        { 
          "nombre" : "La Libertad", 
          "capital" : "(Santa Tecla)",
          "superficie" : "1.653 km²",
          "alcalde" : "Adelio Ortiz Hernández", 
          "partido" :"Nuevas Ideas",
          "poblacion" : "843 500 habitantes",
          "numMunicipios" : "22 municipios"
        },
        { 
          "nombre" : "San Salvador",
          "capital" : "(San Salvador)",
          "superficie" : "72,25 km²",
          "alcalde" : "Mario Duran",
          "partido" :"Nuevas Ideas",
          "Área" : "886,15 kilómetros cuadrados",
          "poblacion": "2,750,600 habitantes",
          "numMunicipios": "19 municipios"
        },
        { 
          "nombre" : "Cuscatlán",
          "capital" : "(Cojutepeque)",
          "superficie": "756 km²",
          "alcalde": "Milagro Navas",
          "partido" :"Arena", 
          "poblacion" : "232,238 habitantes",
          "numMunicipios" : "22 municipios"
        },
        { 
          "nombre" : "La Paz",
          "capital" : "(Zacatecoluca)",
          "superficie" : "472 km²",
          "alcalde" : "Osy Swadhy Moreno López",
          "partido" :"Nuevas Ideas",
          "poblacion": "764,617 habitantes",
          "numMunicipios": "22 municipios"           
        },
        { 
          "nombre": "Cabañas",
          "capital" : "(Sensuntepeque)",
          "superficie": "1.104 km²",
          "alcalde" : "José Santos Alfaro Echeverría",
          "partido" :"Gana",
          "poblacion" : "215,400 habitantes",
          "numMunicipios": "9 municipios"
        },
        {
          "nombre" : "San Vicente",
          "capital" : "(San Vicente)",
          "superficie" : "1.184 km²",
          "alcalde" : "Roberto Barrientos",
          "partido" :"Nuevas Ideas",
          "poblacion" : "223,205 habitantes",
          "numMunicipios" : "13 municipios" 
        },
        {
          "nombre" : "Usulután",
          "capital" : "(Usulután)",
          "superficie" : "2.130 km²",
          "alcalde" : "Luis Ernesto Ayala Benítez",
          "partido" :"Nuevas Ideas",
          "poblacion" : "465,383 habitantes",
          "numMunicipios" : "23 municipios" 
        },
        {
          "nombre" : "San Miguel",
          "capital" : "(San Miguel)",
          "superficie" : "594 km²",
          "alcalde" : "José Wilfredo Salgado García",
          "partido" :"Gana",
          "poblacion" : "247,126 habitantes",
          "numMunicipios" : "20 municipios"             
        },
        { 
          "nombre" : "Morazán",
          "capital" : "(San Francisco Gotera)",
          "superficie" : "1.447 km²",
          "alcalde" : "Alfredo Gonzales",
          "partido" :"Nuevas Ideas",
          "poblacion" : "251,447 habitantes",
          "numMunicipios" : "26 municipios"
        },
        { 
          "nombre" : "La Unión",
          "capital" : "(La Unión)",
          "superficie" : "144,4 km²",
          "alcalde" : "Óscar Parada",
          "partido" :"Nuevas Ideas", 
          "poblacion" : "372,271 habitantes",
          "numMunicipios" : "18 municipios"
        }
    ]
  };

//variables para lo elementos del html
var nombreDepartamento = document.getElementById('nombreDepartamento');
var datosGenerales = document.getElementById('datosGenerales');
var id = document.getElementById('identificador').textContent;

//variable que guardara la informacion del JSON para se mostrado en el html
var datos="";

//guarda en la variable los datos dependiendo del departamento
datos='<h4>Datos generales</h4><br>'
datos+='<b>Capital: </b>'+elsalvador.departamento[id].capital+'<br>';
datos+='<b>Superficie: </b>'+elsalvador.departamento[id].superficie+'<br>';
datos+='<b>Alcalde: </b>'+elsalvador.departamento[id].alcalde+'<br>';
datos+='<b>Partido politico: </b>'+elsalvador.departamento[id].partido+'<br>';
datos+='<b>Poblacion: </b>'+elsalvador.departamento[id].poblacion+'<br>';
datos+='<b>Numero de municipios: </b>'+elsalvador.departamento[id].numMunicipios+'<br><br>';

//inserta la informacion del JSON en el html
datosGenerales.innerHTML = datos;
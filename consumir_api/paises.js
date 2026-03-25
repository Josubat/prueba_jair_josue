async function paises() {
    let pais = await fetch ("https://restcountries.com/v3.1/name/peru");
    let Respuesta = await pais.json();
    let c= Respuesta[0].altSpellings;

    for (z in c ){
        console.log(c[z]);
  }
    //console.log(c);
}

paises();
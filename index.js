const btn = $("#btnSubmit")
 btn.on('click', function(e){

    let data = document.getElementById("dataInput").value

   let apiNasa = $.ajax({url: `https://api.nasa.gov/planetary/apod? api_key = ZFE5YeXAQ60uoozSsMtLyp0oSdcpMDTYwWmYILwe&date=${data}`, async: false}).responseJSON;
   console.log(apiNasa);
   e.preventDefault();

   if (document.getElementById("imagemNasa") == null){
    document.getElementById("imagem").innerHTML += `<div id="texto">${apiNasa.explanation}</div>`
    document.getElementById("imagem").innerHTML += `<img src="${apiNasa.url}" id="imagemNasa">`
   }
   else {
       document.getElementById("texto").innerText = apiNasa.explanation;
       document.getElementById("imagemNasa").src = apiNasa.url;
   }
   e.preventDefault();
})
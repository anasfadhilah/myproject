const namaSaya = "anas fadhilah"
let usia = 50;

let biodata = document.getElementById('biodata');


function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) { //false
        // ini kondisi pertama
        generasi = "generasi remaja";
    }
    else if(usia > 18 && usia < 30 ) {
        generasi = "generasi dewasa yang krisis identitas";
    }
    else if (usia >= 30){
        generasi = "Generasi yang sudah melewati krisis identitas";
    }
    else if(usia > 2 && usia < 10){
        generasi = "Generasi bocil";
    }
    else {
        // ini jika kondisi tidak terpenuhi
        generasi = "generasi bayi";
    }
    return biodata.innerHTML= generasi;


}

console.log(namaSaya);
console.log(usia);

generateBiodata();
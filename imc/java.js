function calculate() {
    var height = (document.getElementById("height").value)/100;
    var weight = document.getElementById("weight").value;

    console.log(weight)
    console.log(height)

    var inc = height/height ** 2;
    var text = ''

    if(imc < 18.5){
        window.alert("cadela seca (Magro)")
    } 

    else if(imc < 24.9){
        window.alert("Normal")
    } 
    
    else if (imc < 29.9){
        window.alert("cliente do McDonald's (Sobrepeso) ")
    }

    else if(imc < 39.9){
        window.alert("comeu uma vaca inteira (Obesidade)")
    }

    else if(imc > 39.9){
        window.alert("não cabe no avião (Obesidade Mórbida)")
    }

    document.getElementById("text_area").innerText="calculou"
    
}
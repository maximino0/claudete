console.log("Script Carregado")
function CalcularAnos(){
    let i=1
    while (i <2){
    i=2
    console.log("botão de calcular clicado")
    let popAInput=document.getElementById("popA").value.trim()
    let popBInput=document.getElementById("popB").value.trim()
    let taxaAInput=document.getElementById("taxaA").value.trim()
    let taxaBInput=document.getElementById("taxaB").value.trim()
    if (popAInput=== "" || popBInput=== "" || taxaAInput=== "" || taxaBInput === ""){
        alert("Por favor preencha todos os campos.")
        i=1
    }
    return
    }
}
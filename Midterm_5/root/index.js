fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })


function appendData(data) {
    let mainContainer = document.getElementById("myData1");
    for (let person of data) {
        let div = document.createElement("div");
        div.innerHTML = `<br>
        <h1> Superhero : </h1>
        Firstname : ${person.firstName} <br>
        Lastname : ${person.lastName} <br>
        Job : ${person.job} <br>
        Roll : ${person.roll}`;
        mainContainer.appendChild(div);
    }
} 

function sum(a,b){
    return a+b;
}
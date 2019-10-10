const button = document.getElementById("findButton");


button.onclick = function(){
    let typedText = document.getElementById("input").value;


    display(getAnagramsof(typedText));
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}



function getAnagramsof(input) {
    let holder = [];
    for (let i = 0; i < words.length; i++) {
        
        

        if (alphabetize(input) === alphabetize(words[i])) {
            holder.push(words[i]);
        }
        
         
    }
    return holder;

}
function display(abc) {
    let marker = document.createElement("div");

    let container = document.createTextNode(abc);
    marker.appendChild(container);


    document.body.appendChild(marker);

}

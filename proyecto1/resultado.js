var getData = funtion (){
    var p1 = document.getElementsByvalue("a").value;
    var p2 = document.getElementsByvalue("a").value;
    if (p1 == "") {
        document.getElementsByvalue("a").focus();
    } else {
    if (p2 == "") {
        document.getElementsByvalue("a").focus();
        } else {
            console.log(p1+" "+p2);
        }
    }
}

const button = document-getElementById('button')

button.addEventListener('click',() => {
    axios({
        method: 'POST',
        url:'https://jsonplaceholder.typicode.com/posts'
        data:{
            <h3>1. Nombre </h3>
                    <input type="text" name="nombre" placeholder=" Escribe tu nombre "
                    required><br/>
        }
    }).then(res=>console.log(res.data))
})
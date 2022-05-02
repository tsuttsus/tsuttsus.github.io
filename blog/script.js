
function jsonOutput(){
    let request=new XMLHttpRequest();
    request.open('GET','./blog.json');
    request.send();

    request.onreadystatechange=()=>{
        let html='';
        if(request.readyState==4 && request.status==200){
            let json=JSON.parse(request.responseText);
            let modal='';
            for (let i=0;i<json.length;i++){
                let htmlParts='<h2>'+json[i].title+'</h2>'+"<h4>"+json[i].date+"</h4>"+"<p>"+json[i].text+"</p>";
                html=html+htmlParts;
            }
        }
        document.getElementById('container').innerHTML = html;
    };
}
jsonOutput();


function gate() {
    var UserInput = prompt("パスワードを入力して下さい:","");
    location.href = UserInput + ".html";
}
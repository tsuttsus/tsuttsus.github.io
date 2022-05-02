const form = document.getElementById("form")
const submitButton = document.getElementById("submit-button")

submitButton.onclick = () => {
  const formData = new FormData(form)
  const action = form.getAttribute("action")
  const options = {
    method: 'POST',
    body: formData,
  }
  
  var arr=[];
  let request=new XMLHttpRequest();
  for(let f of formData.entries()){
    arr.push(f[1]);
  }
  
  var jsons=JSON.stringify({title:arr[0],text:arr[1]});
  
  fetch("./blog.json").then(response => {
      return response.json();
  }).then(jsondata => {
      jsondata.push(jsons);
      var test="こんにちは";
      var ary=test.split("");
      let blob = new Blob(ary,{type:"text/plan"}); 
      let link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'test.txt';
      link.click();
  });
}
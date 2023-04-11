function myFunction()
{

    var username=document.form["myForm"]["username"].value;
    var password=document.form["myForm"]["password"].value;
    var user = {"results":[{"gender":"male","name":{"title":"Mr","first":"Noah","last":"Soto"},"location":{"street":{"number":7399,"name":"Westheimer Rd"},"city":"Rockhampton","state":"Queensland","country":"Australia","postcode":8583,"coordinates":{"latitude":"-83.3645","longitude":"-133.0808"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"noah.soto@example.com","login":{"uuid":"bddbfb79-98b8-4228-96d1-42831b262975","username":"ticklishbutterfly369","password":"grease","salt":"LFUHikF1","md5":"a061bcc11c803ccfcf642c925a9bf5f6","sha1":"d256c75023375e6a11e947ed7b490283d87064b5","sha256":"9e57b0f6b90a7f88f53d775d0c0d98b1faeab03613e588898052096f33918ccc"},"dob":{"date":"1954-06-12T20:35:05.979Z","age":68},"registered":{"date":"2012-07-31T14:58:18.203Z","age":10},"phone":"00-7141-6434","cell":"0453-595-024","id":{"name":"TFN","value":"829539117"},"picture":{"large":"https://randomuser.me/api/portraits/men/23.jpg","medium":"https://randomuser.me/api/portraits/med/men/23.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/23.jpg"},"nat":"AU"}],"info":{"seed":"73703a89a4a4647f","results":1,"page":1,"version":"1.4"}}

if(username==user.results[0].login.username && password==user.results[0].login.password)
{
window.location.assign=("page2.html");
}
else{
    alert("invalid username / password");
}
}
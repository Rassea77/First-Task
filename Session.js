var attempt = 3;
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("login Succesfully");
        window.open("http://localhost:63342/untitled6/Meun.html?_ijt=g1qp2emdlpgl6je8u68uq8orll");
        return false;
    } else {
        attempt --;
        alert("Login Credentials Incorrect"+"     "+"You have left" +"  " +attempt  +"   "+ "attempt");
        if( attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("Login").disabled = true;
            return false;
        }
    }

}
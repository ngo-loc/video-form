
function myFunction() {
    var videoid = document.getElementById("video-id").value;
    var videoname = document.getElementById("video-name").value;
    if(videoid.length < 10) {
        myFunction = false;
        //alert("dddddd");
        document.getElementById("video-id-error").innerHTML = "* video id có độ dài ít nhất 10 ký tự.";
    }
    else{
        document.getElementById("video-id-error").innerHTML ="Hợp Lệ!";
        document.getElementById("video-id-error").class="video-ok";
    }
    if(videoname.length < 3) {
        myFunction = false;
        //alert("dddddd");
        document.getElementById("video-name-error").innerHTML = "* video name có độ dài ít nhất 3 ký tự.";
    }
    else{
        document.getElementById("video-name-error").innerHTML ="Hợp Lệ!";
        document.getElementById("video-name-error").class="video-ok";
    }
    return myFunction;
}
{
    function changeContent() {
        let header = document.getElementById("header");
        let para = document.getElementsByClassName("paragraph");
//    console.log(header);
//    console.log(typeof(header));

    header.innerHTML = "I have been changed from JS";
    para[0].innerHTML = "Added content in para"
    }
    
    let button = document.getElementById("button");
    button.addEventListener("click",changeContent);
}
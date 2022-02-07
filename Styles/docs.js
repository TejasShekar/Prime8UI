function copyFunction() {
    const copyText = document.getElementById("myInput").textContent;
    const textArea = document.createElement("textarea");
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    copiedMsg();
  }
  
  document.getElementById("button").addEventListener("click", copyFunction);
  
  function copiedMsg() {
    var copiedSnackbar = document.getElementById("copiedSnackbar");
    copiedSnackbar.className = "show";
    setTimeout(function () {
      copiedSnackbar.className = copiedSnackbar.className.replace("show", "");
    }, 1000);
  }
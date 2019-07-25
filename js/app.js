document.getElementById("darkLight").querySelector


function changeImage() {
    var x = document.getElementById("imageChange");
    if (x.innerHTML === "hdr_weak") {
      x.innerHTML = "hdr_strong";
    } else {
      x.innerHTML = "hdr_weak";
    }
  }
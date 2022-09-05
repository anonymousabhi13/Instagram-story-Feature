var arr = [
  {
    dp: "https://images.unsplash.com/photo-1662314964544-7d75abce9ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    image:
      "https://images.unsplash.com/photo-1662314964544-7d75abce9ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1662323510625-1b2912f71688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    image:
      "https://images.unsplash.com/photo-1662323510625-1b2912f71688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1657214059212-104dac959c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    image:
      "https://images.unsplash.com/photo-1657214059212-104dac959c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1657664072464-e525da1d426e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    image:
      "https://images.unsplash.com/photo-1657664072464-e525da1d426e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
];

var clutter = "";
arr.forEach(function (elem, index) {
  clutter += `<div id="story">

    <img id="${index}"
      src='${elem.dp}'
      alt=""
    />
  </div>`;
});
document.querySelector("#stories").innerHTML = clutter;
var grow = 0;
document.querySelector("#stories").addEventListener("click", function (dets) {
  document.querySelector("#fullpreview").style.display = "initial";
  document.querySelector("#fullpreview").style.backgroundImage = `url(${
    arr[dets.target.id].image
  })`;
  setTimeout(function () {
    document.querySelector("#fullpreview").style.display = "none";
  }, 2500);
  if (grow <= 100) {
    setInterval(function () {
      document.querySelector("#growth").style.width = `${grow++}%`;
    }, 30);
  } else {
    grow = 0;
  }
});
document.querySelector("#cross").addEventListener("click", function () {
  document.querySelector("#fullpreview").style.display = "none";
});


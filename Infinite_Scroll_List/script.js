var listElement = document.getElementById("infinite-list");

// Add 20 items

var nextItem = 1;

function loadMore() {
    for(var i = 0; i < 20; i++) {
        var item = document.createElement("li");
        item.innerText = "Item" + nextItem++;
        listElement.appendChild(item);
    }
}

// Detect when scrolled to bottom

listElement.addEventListener("scroll", function() {
    if (listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight) {
      loadMore();
    }
});
  
  // Initially load some items
  loadMore();


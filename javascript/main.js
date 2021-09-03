const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Responsive topnav bar
function responsiveNav() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  return;
}

async function loadContent() {
  const contentChildren = document.querySelector('.content').childNodes;

  await sleep(300);
  for (i = 0; i < contentChildren.length; i++) {
    if (contentChildren[i].nodeName !== '#text') {
      contentChildren[i].style.visibility = 'visible';
      contentChildren[i].style.animation = 'fade-in-content';
      contentChildren[i].style.animationDuration = '0.5s';
      await sleep(120);
    }
  }
  return;
}

loadContent();
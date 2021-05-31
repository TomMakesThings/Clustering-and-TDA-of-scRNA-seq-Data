function profileHover(element) {
  element.setAttribute('src', 'Assets/Images/Profile-Wink.gif');
}

function profileUnhover(element) {
  element.setAttribute('src', 'Assets/Images/Profile.jpg');
}

window.onscroll = function() {scrollFunction()};

/* Adjust the header when scrolling down */
function scrollFunction() {
  all_content = document.getElementsByClassName('header');
  var position = "absolute";
  var top = "0px";
  if (window.innerWidth <= 721) {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
      position = "fixed";
      top = "-140px";
    }
  }
  else {
    position = "fixed";
  }
  for (i = 0; i < all_content.length; i++) {
    all_content[i].style.position = position;
    all_content[i].style.top = top;
  }
}

var top = this.scrollY, left = this.scrollX;

/* Remove the hash from the URL when the page is reloaded to prevent page jumps */
function anchorLinks() {
  if (location.hash != '') {
      window.history.replaceState('', document.title, location.href.replace(/#.*$/, ''));
  }
}

anchorLinks();

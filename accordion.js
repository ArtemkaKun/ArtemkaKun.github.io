var accordion_buttons = document.getElementsByClassName("accordion");
var button;

for (button = 0; button < accordion_buttons.length; ++button) {
  accordion_buttons[button].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginBottom = "0";

      var other_buttons = document.getElementsByClassName("accordion");
      var other_button;

      for (other_button = 0; other_button < other_buttons.length; ++other_button) {
        if (other_buttons[other_button] != this) {
          other_buttons[other_button].hidden = false;
        }
      }
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginBottom = "3%";

      var other_buttons = document.getElementsByClassName("accordion");
      var other_button;

      for (other_button = 0; other_button < other_buttons.length; ++other_button) {
        if (other_buttons[other_button] != this) {
          other_buttons[other_button].hidden = true;
        }
      }
    }
  });
}

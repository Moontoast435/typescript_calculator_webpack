let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach(button => {
  button.addEventListener("click", (e) => {
    const target = e.target as HTMLButtonElement;
    handleClick(target);
  });
});

function handleClick(button : HTMLButtonElement) {
    if (!isNaN(parseInt(button.innerHTML))) {
        document.querySelector("input").value += button.innerHTML;
        return;
    }

    if (button.innerHTML === "AC") {
        document.querySelector("input").value = "";
        return;
    }

    if (button.innerHTML === "/") {
        
    }
}
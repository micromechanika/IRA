export function createButton(fontAwesomeIcon, buttonClass, accessor) {
  const button = document.createElement("button");
  button.classList.add(buttonClass);
  button.setAttribute("data-accessor", accessor);
  const icon = document.createElement("i");
  const iconarr = fontAwesomeIcon.split(" ");
  iconarr.map((cl) => {
    return icon.classList.add(cl);
  });
  button.appendChild(icon);

  return button;
}

function constructorLabels(klass, text, forr) {
  let label = document.createElement("label");
  label.setAttribute("for", forr);
  label.appendChild(document.createTextNode(text));
  klass == undefined ? "" : (label.className = klass);
  return label;
}
function constructorBotones(type, klass, text) {
  let button = document.createElement("button");
  button.className = klass;
  button.type = type;
  button.appendChild(document.createTextNode(text));
  return button;
}

function constructorInputs(klass, type, placeholder, required, id, name) {
  let input = document.createElement("input");
  input.className = klass;
  input.type = type;
  id == undefined ? "" : (input.id = id);
  name == undefined ? "" : (input.name = name);
  if (required && placeholder == true) {
    input.required = true;
    input.placeholder = true;

    return input;
  } else {
    return input;
  }
}

function constructorLis(
  klass_div,
  klass_span,
  text_span,
  text_h6,
  klass_small,
  text_small
) {
  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between lh-condensed";

  let div = constructorDivs("div", klass_div);
  li.appendChild(div);

  let h6 = constructorDivs("h6", "my-0", text_h6);
  div.appendChild(h6);
  let small = constructorDivs("small", klass_small, text_small);
  div.appendChild(small);

  let span = constructorDivs("span", klass_span, text_span);
  li.appendChild(span);

  return li;
}

function constructorDivs(tag, klass, text) {
  let div = document.createElement(tag);
  div.className = klass;
  if (text == undefined) {
    return div;
  } else {
    div.appendChild(document.createTextNode(text));
    return div;
  }
}

function constructorSelects(klass, id, required, options) {
  let select = document.createElement("select");
  select.className = klass;
  select.id = id;
  select.required == true ? (select.required = true) : "";

  if (options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      select.appendChild(constructorOptions(options[i]));
    }
  }

  return select;
}

function constructorOptions(value) {
  let option = document.createElement("option");
  option.appendChild(document.createTextNode(value));
  return option;
}

function createImg(parent, klass, src, width, height) {
  let img = document.createElement("img");
  img.className = klass;
  img.src = src;
  img.width = width;
  img.height = height;
  parent.appendChild(img);
}

function createDivHeader(parent, tag, text, klass) {
  let element = document.createElement(tag);
  element.appendChild(document.createTextNode(text));
  if (klass == undefined) {
    parent.appendChild(element);
  } else {
    element.className = klass;
    parent.appendChild(element);
  }
}

function constructorA(tag, href, text) {
  let a = document.createElement("a");
  a.href = href;
  a.appendChild(document.createTextNode(text));
  return a;
}

export {
  constructorA,
  constructorBotones,
  constructorDivs,
  constructorInputs,
  constructorLabels,
  constructorLis,
  constructorOptions,
  constructorSelects,
  createDivHeader,
  createImg,
};

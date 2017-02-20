var rule, eng, ara;

function update() {

  var ruleSet = ta7uul.rules[rule.value];
  var result = ta7uul.trans(eng.value, ruleSet);
  ara.innerHTML = result;
}

var fadeTimer;
function updateRule() {

  ara.style.opacity = 0;
  if (fadeTimer) clearTimeout(fadeTimer);
  fadeTimer = setTimeout(function () {
    update();
    ara.style.opacity = 1;
    fadeTimer = null;
  }, 150);
}

function listRules() {

  var allRules = Object.keys(ta7uul.rules);
  allRules.forEach(function (ruleName) {
    var opt = document.createElement("option");
    opt.value = ruleName;
    opt.innerHTML = ruleName;
    rule.appendChild(opt);
  });
}

function checkEnter(ev) {
  if (ev.keyCode !== 13)
    return;

  ev.preventDefault();
  eng.blur();

  selectOutput();
}

function selectOutput() {
  var range = document.createRange();
  range.selectNodeContents(ara);

  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

window.onload = function () {

  eng = document.getElementById("eng");
  rule = document.getElementById("rule");
  ara = document.getElementById("ara");

  listRules();

  eng.oninput = update;
  eng.addEventListener("keyup", checkEnter);
  rule.onchange = updateRule;
  ara.onclick = selectOutput;

  eng.focus();
};

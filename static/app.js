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

window.onload = function () {

  eng = document.getElementById("eng");
  rule = document.getElementById("rule");
  ara = document.getElementById("ara");

  listRules();

  eng.oninput = update;
  rule.onchange = updateRule;
  eng.focus();
};

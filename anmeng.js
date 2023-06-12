let fr = function (triggerMain, targetMain) {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(triggerMain).forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll(targetMain)
          .forEach((target) => target.classList.remove("show"));
      });
    });
  });
};

let fa = function (triggerMain, targetMain) {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(triggerMain).forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll(targetMain)
          .forEach((target) => target.classList.add("show"));
      });
    });
  });
};

let faddclass = function (triggerMain, targetMain, addclass) {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(triggerMain).forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll(targetMain)
          .forEach((target) => target.classList.add(addclass));
      });
    });
  });
};

// fa("#openlist", "#openlist-target");
fr("#close-button-back", "#openlist-target");

fa("#gender-open-asha", "#gender-open-asha-target");
fa("#status-open-asha", "#status-open-asha-target");
fa("#age-open-asha", "#age-open-asha-target");

fr("#close-button-back-gender", "#gender-open-asha-target");
fr("#close-button-back-status", "#status-open-asha-target");
fr("#close-button-back-age", "#age-open-asha-target");

function fropen(
  listTrigger,
  listText,
  number,
  colorcodebg,
  fontColor,
  statustab,
  agetab
) {
  document.querySelectorAll(listTrigger).forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document.querySelector("#openlist-target").classList.add("show");

      // wb-list-number
      const statusTabcomponent = document.querySelector("#status-open-asha");
      const genderTabcomponent = document.querySelector("#age-open-asha");

      const bgtextcolor = document.querySelector("#change-bg");
      const textNumber = document.querySelectorAll('[wb-list-number="number"]');
      const textHeadings = document.querySelectorAll(
        '[wb-text-heading="enrolled"]'
      );
      textHeadings.forEach((textHeading) => {
        textHeading.textContent = listText;
      });
      textNumber.forEach((textNumber) => {
        textNumber.textContent = number;
      });

      bgtextcolor.style.backgroundColor = colorcodebg;
      bgtextcolor.style.color = fontColor;

      statusTabcomponent.style.display = statustab ? "flex" : "none";
      genderTabcomponent.style.display = agetab ? "flex" : "none";
    });
  });
}

// Enrolled
fropen("#openlist", "Enrolled", "4231", "#F0E8FA", "#4A2587", true, false);

// Your Enrollments
fropen("#enrollments", "Enrolled", "4321", "#F0E8FA", "#4A2587", true, false);

// Pending Screening
fropen(
  "#pending-screening-asha",
  "Pending screening",
  "168",
  "#FFF7E3",
  "#A45B05",
  true,
  false
);

// Follow-Up
fropen("#follow-up-asha", "Follow-Up", "71", "#F0E8FA", "#4A2587", false, true);

fropen(
  "#pending-cbac-asha",
  "Pending CBAC",
  "49",
  "#E0F2FF",
  "#4C71C0",
  false,
  true
);

// age-open-asha , status-open-asha

// Sub CBAC ASHA
fa("#cbac-asha-trigger-sub", "#cbac-asha-trigger-sub-main");

fr("#cbac-asha-trigger-sub-close", "#cbac-asha-trigger-sub-main");

fa("#screening-asha-trigger-sub", "#screening-asha-trigger-sub-main");

fr("#screening-asha-trigger-sub-close", "#screening-asha-trigger-sub-main");

fa("#treament-asha-trigger-sub", "#treament-asha-trigger-sub-main");

fr("#treament-asha-trigger-sub-close", "#treament-asha-trigger-sub-main");

// pending-screening-asha , pending-status-list , enrolled-status-list(hideit) follow-status-list

// close-button-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pending-screening-asha").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#pending-status-list")
        .forEach((target) => target.classList.add("show"));
    });
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enrolled-status-list")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#follow-up-asha").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#follow-status-list")
        .forEach((target) => target.classList.add("show"));
    });
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enrolled-status-list")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#close-button-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#pending-status-list")
        .forEach((target) => target.classList.remove("show"));
    });
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#follow-status-list")
        .forEach((target) => target.classList.remove("show"));
    });
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enrolled-status-list")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// opencbacflow , cbacpanel , early-flow , back-cbac-panel , early-panel ,back-close-early

// CBAC FLow

fa("#opencbacflow", "#cbacpanel");
fa("#early-flow", "#early-panel");
fr("#back-cbac-panel", "#cbacpanel");
fr("#back-close-early", "#early-panel");
fr("#back-close-early", "#test-analysis");
fr("#back-cbac-panel", "#summary-screen");

faddclass("#early-flow", "#progressbarcbac", "second");

// Get all elements with the class "options"
const optionsElements = document.querySelectorAll(".options");

// Define a function to toggle the class "optionsactive" on the clicked element
function toggleOptionsActive() {
  // Toggle the class "optionsactive" on the clicked element only
  this.classList.toggle("optionsactive");
}

// Add a click event listener to each "options" element
optionsElements.forEach((element) => {
  element.addEventListener("click", toggleOptionsActive);
});

// test-analysis, test-analysis-close
fr("#test-analysis-close", "#test-analysis");
fr("#test-analysis-close", "#early-panel");

// Early add it here early-risk test-analysis-close early-arrow

fa("#test-analysis-close", "#early-risk");
fa("#test-analysis-close", "#early-arrow");

//copd-trigger , copd-panel , copd-first-button , copd-back , progressbarcbac

fa("#copd-trigger", "#copd-panel");
fr("#copd-back", "#copd-panel");

fa("#copd-trigger", "#copd-panel");

// first-cback-frame , copd-first-button , second-cback-frame

fr("#copd-first-button", "#first-cback-frame");
fa("#copd-first-button", "#second-cback-frame");

faddclass("#copd-trigger", "#progressbarcbac", "third");

// copd notification

// options , optionsactive

// copd-confirmation , copd-analysis-close , copd-second-button

fa("#copd-second-button", "#copd-confirmation");

// copd-second-button // copd-confirmation // copd-analysis-close-back // copd-analysis-close

fr("#copd-analysis-close", "#copd-confirmation");
fa("#copd-analysis-close", "#first-cback-frame");
fr("#copd-analysis-close", "#second-cback-frame");
fr("#copd-analysis-close", "#copd-panel");

fa("#copd-analysis-close", "#notification-copd");
fa("#copd-analysis-close", "#arrow-copd");
fa("#copd-analysis-close", "#copd-risk");
// notification-copd , arrow-copd , copd-risk

// mental

fa("#mental-trigger", "#mental-panel");
fr("#mental-back", "#mental-panel");

// copd-first-button-m , first-cback-frame-m , second-cback-frame-m

fr("#copd-first-button-m", "#first-cback-frame-m");
fa("#copd-first-button-m", "#second-cback-frame-m");

// mental-first-button , mental-confirmation

fa("#mental-first-button", "#mental-confirmation");

//
fr("#mental-analysis-close", "#mental-confirmation");
fa("#mental-analysis-close", "#first-cback-frame-m");
fr("#mental-analysis-close", "#second-cback-frame-m");
fr("#mental-analysis-close", "#mental-panel");

faddclass("#mental-analysis-close", "#progressbarcbac", "full");

fa("#mental-analysis-close", "#notification");

fa("#mental-analysis-close", "#summary-screen");

//

// risk - flow ,risk-panel ,risk-back

fa("#riskflow ", "#risk-panel");
faddclass("#riskflow", "#progressbarcbac", "first");

fr("#risk-back ", "#risk-panel");

//risk2-inside-button ,risk2-inside-frame
fa("#risk2-inside-button", "#risk2-inside-frame");
fa("#risk3-inside-button", "#risk3-inside-frame");
fa("#risk4-inside-button", "#risk4-inside-frame");
fa("#risk5-inside-button", "#risk5-inside-frame");

// risk-confirmation , confrim-5-risk-button , risk-analysis-close

fa("#confrim-5-risk-button", "#risk-confirmation");

fr("#risk-analysis-close", "#risk-confirmation");
fr("#risk-analysis-close", "#risk2-inside-frame");
fr("#risk-analysis-close", "#risk3-inside-frame");
fr("#risk-analysis-close", "#risk4-inside-frame");
fr("#risk-analysis-close", "#risk5-inside-frame");
fr("#risk-analysis-close", "#risk-panel");

fa("#risk-analysis-close", "#rm-icon");

fa("#risk-analysis-close", "#riskaroww");

$(".list-wrapper-item-human").on("click", function () {
  $(this).find(".new-profile-custom").addClass("active");
});

$(".cross-back-notworking").on("click", function (event) {
  event.stopPropagation();
  $(this).closest(".new-profile-custom").removeClass("active");
});

$(".wrapper-profile-home.wq").on("click", function () {
  $(this).find(".new-profile-custom").addClass("active");
  console.log("newWorking");
});

$(".wrapper-profile-home").on("click", function (event) {
  event.stopPropagation();
  $(this).closest(".new-profile-custom").removeClass("active");
});

const araaymain = document.querySelectorAll(".wrapper-profile-home");

//
fa("#pink-button-edt", "#pink-bitton-container-wrapper-edt");
fr("#pink-button-cross-edt", "#pink-bitton-container-wrapper-edt");

// edt-triiger , edt-flow, edt-flow-cross
fa("#edt-triiger", "#edt-flow");
fr("#edt-flow-cross", "#edt-flow");

//
fa("#etd-hypertension-t", "#etd-hypertension-screen");
fr("#etd-hypertension-back", "#etd-hypertension-screen");

//diagnosis=hypertention , etd-hypertension-diag-screen
fa("#diagnosis-hypertention", "#etd-hypertension-diag-screen");
fr("#etd-diag-back", "#etd-hypertension-diag-screen");

// med-button
fa("#med-button", "#kqwhbe");
fa("#med-button", "#insaid");

fr("#insaid", "#insaid");
fr("#insaid", "#kqwhbe");

//medication open
fa("#mediaction-hypertention", "#etd-hypertension-med-screen");
fr("#etd-med-back", "#etd-hypertension-med-screen");

//summary
fa("#summary-hypertention", "#etd-hypertension-sum-screen");
fr("#etd-sum-back", "#etd-hypertension-sum-screen");

//endexam-main
fr("#endexam-main", "#etd-hypertension-sum-screen");
fr("#endexam-main", "#etd-hypertension-med-screen");
fr("#endexam-main", "#etd-hypertension-diag-screen");
fr("#endexam-main", "#etd-hypertension-screen");
fr("#endexam-main", "#edt-flow");
fr("#endexam-main", "#pink-bitton-container-wrapper-edt");

// Button cross oral cancer
$(document).ready(function () {
  $(".chipssymptoms").click(function () {
    $(this).addClass("active");
    $(this).children(".cross").addClass("show");
  });

  $(".cross").click(function (event) {
    event.stopPropagation(); // Prevent event bubbling
    $(this).removeClass("show");
    $(this).parent(".chipssymptoms").removeClass("active");
  });
});

// edt-oral ,oralcancer-screen,  etd-oral-back

fa("#edt-oral", "#oralcancer-screen");
fr("#etd-oral-back", "#oralcancer-screen");

// oral-screen-stack-screen , open-chip-stack

fa("#open-chip-stack", "#oral-screen-stack-screen");
fr("#oral-screen-save-screen", "#oral-screen-stack-screen");
// oral-screen-cross-screen
fr("#oral-screen-cross-screen", "#oral-screen-stack-screen");

// close-hypertention-oral
fr("#close-hypertention-oral", "#oralcancer-screen");
///

// frommhere new code for anmcho starts

// opendashboard

fa("#opendashboard", "#dboarda");
fr("#closedashboard", "#dboarda");

//
//vinayaka

// // rajugowda
fa("#rajugowda", "#profile-mo-1");
fr("#close-rajugowda", "#profile-mo-1");

// //vinayaka
fa("#vinayaka", "#profile-mo-3");
fr("#close-vinayaka", "#profile-mo-3");

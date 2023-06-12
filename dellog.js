console.log("Dell Webflow Jquery Code File Advance");

//pink button open
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pink-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll(".pink-bitton-container-wrapper")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//pink button close
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pink-button-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll(".pink-bitton-container-wrapper")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// ------------------------------------------------------------------------------------
//Drawer Diabetes - Open

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#diabetes").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#diabetesdrawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//Drawer Diabetes - Close

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#d-drawercross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#diabetesdrawer")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});
// ------------------------------------------------------------------------------------
//Drawer Hypertension - Open

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#hypertension").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#drawer-hypertension")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//Drawer Hypertension - Close

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#h-drawercross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#drawer-hypertension")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});
// ------------------------------------------------------------------------------------

// // Set the date

// document.addEventListener("DOMContentLoaded", () => {
//   const date = new Date();
//   let day = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();

//   // This arrangement can be altered based on how we want the date's format to appear.
//   let currentDate = `${day}.${month}.${year}`;
//   console.log(currentDate); // "20.10.2022"
//   document.getElementById("today").innerHTML = currentDate;
// });

// Add Readings Button

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#readings-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#vitalswrapper")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#closevitals").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#vitalswrapper")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// ------------------------------------------------------------------------------------

// Vitals hba1cd Screen
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#hba1cd-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#hba1cd")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#hba1cdcross, #hba1cdarrow, #hb-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#hba1cd")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#hb-input").on("input", function () {
  if (this.value.length > 0) $("#hb-button").show();
  else $("#hb-button").hide();
});

//  tick logic h1b
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#hb-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#hb-tick")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// ------------------------------------------------------------------------------------
// Breathing Rate - br

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#br-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#breathingrate")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#br-arrow, #br-cross, #br-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#breathingrate")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#br-input").on("input", function () {
  if (this.value.length > 0) $("#br-button").show();
  else $("#br-button").hide();
});

//  tick logic h1b
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#br-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#br-tick")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// ------------------------------------------------------------------------------------
// Pulse Rate

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pulse-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#pulse-rate")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#pulse-arrow, #pulse-cross, #pulse-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pulse-rate")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#pulse-input").on("input", function () {
  if (this.value.length > 0) $("#pulse-button").show();
  else $("#pulse-button").hide();
});

//  tick logic h1b
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pulse-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#pulse-tick")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// ------------------------------------------------------------------------------------
// Blood Sugar

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bloodsugar-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bloodsugar")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#bloodsugar-arrow, #bloodsugar-cross, #bloodsugarpink-button"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#bloodsugar")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#bloodsugar-input").on("input", function () {
  if (this.value.length > 0) $("#bloodsugarpink-button").show();
  else $("#bloodsugarpink-button").hide();
});

//  tick logic bs

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bloodsugarpink-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bs-tick")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// ------------------------------------------------------------------------------------
// BMI Sugar

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bmi-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bmi")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#bmi-arrow, #bmi-cross, #bmi-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#bmi")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#bmi-weight").on("input", function () {
  if (this.value.length > 0) $("#bmi-button").show();
  else $("#bmi-button").hide();
});

//  BMI tick logic

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bmi-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bmi-tick")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//  BMI Calculation here Pending

//  BMI Calculation here Pending

//  BMI Calculation here Pending

//  BMI Calculation here Pending

//  BMI Calculation here Pending

// ------------------------------------------------------------------------------------
// Other Vital entry

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#other-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#vital-other")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#other-arrow, #other-cross, #other-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#vital-other")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#other-reading").on("input", function () {
  if (this.value.length > 0) $("#other-button").show();
  else $("#other-button").hide();
});

// Other tick logic

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#other-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#other-tick")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//  BMI Calculation here Pending

// ------------------------------------------------------------------------------------
// Blood Pressure

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bp-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bloodpressure")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#bp-arrow, #bp-cross, #bp-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#bloodpressure")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#bp-input").on("input", function () {
  if (this.value.length > 0) $("#bp-button").show();
  else $("#bp-button").hide();
});

//  tick logic h1b
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bp-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bp-tick")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// // Editable Div ID #diveditable

// let symptomDiv = document.querySelector(#diveditable);

// ------------------------------------------------------------------------------------
// Symptoms Opening DIV

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#symptrigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#sympwrapper")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#sym-cross, #sym-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#sympwrapper")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// Hyp BOX

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#hypertension-pink-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#hyp-examine")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#hyp-arrow, #hyp-crossLol, #hyp-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#hyp-examine")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#hypertension-cross-examine")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#drawer-hypertension")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#hyp-input").on("input", function () {
  if (this.value.length > 0) $("#hyp-button").show();
  else $("#hyp-button").hide();
});

// FOllow BOX

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#followup-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#followup-box")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#follow-upadd-text")
        .forEach((target) => target.classList.add("dhide"));
      document
        .querySelectorAll("#followup-text")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#follow-up-pencil")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#plus-icon-embed")
        .forEach((target) => target.classList.add("dhide"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#close-followcross, #save-button-date")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#followup-box")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#date-save-input").on("input", function () {
  if (this.value.length > 0) $("#save-button-date").show();
  else $("#save-button-date").hide();
});

// Filters Box  trigger sessions

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#filter-past-visits").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#filters-box")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#filter-records-cross, #filter-records-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#filters-box")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

$("#date-save-input").on("input", function () {
  if (this.value.length > 0) $("#save-button-date").show();
  else $("#save-button-date").hide();
});

// CBAC Box  trigger sessions

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#cbac-profile").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#cbac-box")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#cbac-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#cbac-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// Bp record  trigger sessions

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bp-check").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bp-box")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bp-check-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bp-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// Bsugar record  trigger sessions

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bs-check").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bs-box")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bs-check-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bs-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// Examtrigger

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#examtrigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#examscreen")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#exam-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#examscreen")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//
// frequency medicine
$(".fre-wrapper").on("click", function () {
  $(this).find(".wrapppermedicine").toggleClass("now");
});

// Med Trigger.

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#medicine-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#med-box")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#med-cross,#med-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#med-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// Increment Decrement Logic

$(document).ready(function () {
  const minus = $(".quantity__minus");
  const plus = $(".quantity__plus");
  const input = $(".quantity__input");
  minus.click(function (e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });

  plus.click(function (e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  });
});
//Lunch
$(document).ready(function () {
  const minus1 = $(".quantity__minus1");
  const plus1 = $(".quantity__plus1");
  const input1 = $(".quantity__input1");
  minus1.click(function (e) {
    e.preventDefault();
    var value = input1.val();
    if (value > 1) {
      value--;
    }
    input1.val(value);
  });

  plus1.click(function (e) {
    e.preventDefault();
    var value = input1.val();
    value++;
    input1.val(value);
  });
});
//Dinner
$(document).ready(function () {
  const minus2 = $(".quantity__minus2");
  const plus2 = $(".quantity__plus2");
  const input2 = $(".quantity__input2");
  minus2.click(function (e) {
    e.preventDefault();
    var value = input2.val();
    if (value > 1) {
      value--;
    }
    input2.val(value);
  });

  plus2.click(function (e) {
    e.preventDefault();
    var value = input2.val();
    value++;
    input2.val(value);
  });
});

//Duration
$(document).ready(function () {
  const minus3 = $(".quantity__minus3");
  const plus3 = $(".quantity__plus3");
  const input3 = $(".quantity__input3");
  minus3.click(function (e) {
    e.preventDefault();
    var value = input3.val();
    if (value > 1) {
      value--;
    }
    input3.val(value);
  });

  plus3.click(function (e) {
    e.preventDefault();
    var value = input3.val();
    value++;
    input3.val(value);
  });
});

// $("#sameday").on("input", function () {
//   if (this.value.length > 0) $("#med-button").show();
//   else $("#med-button").hide();
// });

// EXam -1 Trigger

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#exam-1-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#exam-1-box")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#exam-1-cross,#med-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#exam-1-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// record-readings
$("#dia-input-lol").on("input", function () {
  if (this.value.length > 0) $("#recordings-button").show();
  else $("#recordings-button").hide();
});

//EXam -1 -Dia Trigger Next Step

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#skip-exam-step-1,#recordings-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#exam-dia-1-box")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#exam-1-dia-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#exam-dia-1-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//EXam - 1 -Treat Trigger Next Step

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#skip-exam-step-1,#recordings-button")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#exam-dia-1-box")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#exam-1-dia-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#exam-dia-1-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// EXam - Open Treat Screen

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#save-exam--button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#exam-treat-1-box")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#exam-1-treat-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#exam-treat-1-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// EXam - Open Med Box from treat Screen

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#add-medication").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#med-box-2")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#med-cross-2").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#med-box-2")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// EXam - Open Summarrrrrry

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#med-button-open-summary,#open-summary-treat")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#exam-summ-1-box")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#back-arrow-summary").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#exam-summ-1-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// CLose med-box-2

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#med-button-open-summary,#open-summary-treat")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#med-box-2")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//end Exam Flow
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#close-end-exam").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll(
          "#exam-summ-1-box,#exam-treat-1-box, #exam-dia-1-box,#exam-1-box,#examscreen,#pink-bitton-container-wrapper"
        )
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// refer patient

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#refer-patient-trigger,#refer-patient-light")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#referral-1-box")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#refer-1-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#referral-1-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// record-readings
$("#symptominput").on("input", function () {
  if (this.value.length > 0) $("#sym-button").show();
  else $("#sym-button").hide();
});

//Select Medicine Button

// Executed when DOM is loaded
$(document).ready(function () {
  // Executed when select is changed
  $("#med-box").on("change", function () {
    var x = this.selectedIndex;

    if (x == "") {
      $("#med-button").hide();
    } else {
      $("#med-button").show();
    }
  });

  // It must not be visible at first time
  $("#med-button").css("display", "none");
});

// Executed when DOM is loaded
$(document).ready(function () {
  // Executed when select is changed
  $("#Selectmedicine").on("change", function () {
    var x = this.selectedIndex;

    if (x == "") {
      $("#med-button-open-summary").hide();
    } else {
      $("#med-button-open-summary").show();
    }
  });

  // It must not be visible at first time
  $("#med-button-open-summary").css("display", "none");
});

// Executed when DOM is loaded
$(document).ready(function () {
  // Executed when select is changed
  $("#hasbd").on("change", function () {
    var x = this.selectedIndex;

    if (x == "") {
      $("#dakjsbadkj").hide();
    } else {
      $("#dakjsbadkj").show();
    }
  });

  // It must not be visible at first time
  $("#dakjsbadkj").css("display", "none");
});

// Referral Screen close
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#dakjsbadkj").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#referral-1-box")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// --------------------------------------------------------------------------------------
// More Dev Work On different File
console.log("Phase 2");

// Edit Profile Open
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#editprofiel").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#main-panel-1")
        .forEach((target) => target.classList.add("profile-show"));
      document
        .querySelectorAll("#profile-panel")
        .forEach((target) => target.classList.remove("hide"));
    });
  });
});

// Edit Profile Close
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#profile-back-arrow,#savprofile")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#main-panel-1")
          .forEach((target) => target.classList.remove("profile-show"));
        document
          .querySelectorAll("#profile-panel")
          .forEach((target) => target.classList.add("hide"));
      });
    });
});

// MO HOME SCREEN
//____________________________________________________________________________

console.log(`lol--> delll`);

// Enroll-home - Open Summarrrrrry

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enroll-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enroll-darwer")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// Enroll-home-status

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-status").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#home-enroll-status-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#enrolled-cross-status,#button-status-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#home-enroll-status-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-on-treatment

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-s-1").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#home-enroll-treat-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#cross-treat-enroll,#button-treat-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#home-enroll-treat-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-on-suspect

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-s-2").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#home-enroll-suspected-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#cross-sus-enroll,#button-sus-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#home-enroll-suspected-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-on-NAD

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-s-3").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#home-enroll-nad-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#cross-nad-enroll,#button-nad-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#home-enroll-nad-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-CBAC-NAD

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-s-4").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#home-enroll-cbac-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#cross-cbac-enroll,#button-cbac-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#home-enroll-cbac-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-home-enroll-screen-drawer

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-s-5").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#home-enroll-screen-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#cross-screen-enroll,#button-screen-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#home-enroll-screen-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-gender-enroll-screen-drawer

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#enrolled-trigger-gender-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#enroll-gender-drawer")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#enroll-gender-scross,#button-gender-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#enroll-gender-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-gender-enroll-screen-drawer

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-location").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enroll-location-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#enroll-location-scross,#button-location-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#enroll-location-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll- pending-referrals-trigger

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pending-referrals-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#preferral-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#referal-main-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#preferral-darwer")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// -----------------------------------------------------------------------
// Referral
//referral-trigger-location

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#referral-trigger-location").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#referral-trigger-location-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#referral-location-scross,#referral-location-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#referral-trigger-location-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-gender-referral-screen-drawer

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#rferral-trigger-gender-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#ref-gender-drawer")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#ref-gender-scross,#button-gender-ref")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#ref-gender-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Enroll-Refeee status-drawer

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#refeee-trigger-status").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#reeeeff-st-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#reffee-cross-status,#button-reffee-status")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#reeeeff-st-darwer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// -----------------------------------------------------------------------
// followUp
//followUp-trigger

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#follow-up-msied-triggers").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#follow-missed-wp-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#follow-main-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#follow-missed-wp-darwer")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// -----------------------------------------------------------------------
// followUp
//opd

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#opd-triggger-list").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#opd--wp-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#opd-main-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#opd--wp-darwer")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//Open Search

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#search-name-window-trigger")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#search-name-window-drawer")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#search-name-window-back-cross")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#search-name-window-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Search Open Location

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#location-searrch-t").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#location-search-d")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#search-name-window-drawer")
        .forEach((target) => target.classList.add("over-hidden"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#d-location-scross-search, #button-location-d-search")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#location-search-d")
          .forEach((target) => target.classList.remove("show"));
        document
          .querySelectorAll("#search-name-window-drawer")
          .forEach((target) => target.classList.remove("over-hidden"));
      });
    });
});

// Search Open , GEnder FIlters

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#gender-searrch-t").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#gender-search-d")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#search-name-window-drawer")
        .forEach((target) => target.classList.add("over-hidden"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#d-gednder-scross-search, #button-gender-d-search")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#gender-search-d")
          .forEach((target) => target.classList.remove("show"));
        document
          .querySelectorAll("#search-name-window-drawer")
          .forEach((target) => target.classList.remove("over-hidden"));
      });
    });
});

// Search Open , Sort FIlters

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#sort-searrch-t").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#sort-search-d")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#search-name-window-drawer")
        .forEach((target) => target.classList.add("over-hidden"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#d-sort-scross-search, #button-sort-d-search")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#sort-search-d")
          .forEach((target) => target.classList.remove("show"));
        document
          .querySelectorAll("#search-name-window-drawer")
          .forEach((target) => target.classList.remove("over-hidden"));
      });
    });
});

// Follow Status Open

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#follow-trigger-status").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#followup-st-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#follow-cross-status, #button-follow-status")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#followup-st-darwer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// Follow Location Open

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#follow-trigger-location").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#fol-trigger-location-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#follow-location-scross, #follow-location-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#fol-trigger-location-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// follow-gender-drawer

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#follow-trigger-gender-enroll")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#follow-gender-drawer")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#fol-gender-scross, #button-gender-fol")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#follow-gender-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// opd-location-drawer

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#opd-trigger-location").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#opd-trigger-location-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#opd-gender-scross, #opd-gender-fol")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#opd-trigger-location-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// opd-gender-drawer

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#opd-trigger-gender").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#opd-gender-drawer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#opsd-gender-scross, #button-gender-opd")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#opd-gender-drawer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// opd-st-atusdrawer

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#opd-trigger-status").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#opd-st-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#opsd-sta-scross, #button-sta-opd")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#opd-st-darwer")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

////
// Enroll-home - Open Summarrrrrry -diabetes

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-d").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#text-enrolled")
        .forEach((target) => target.classList.add("active"));
      document
        .querySelectorAll("#text-enrolled-d")
        .forEach((target) => target.classList.add("active"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#text-enrolled")
        .forEach((target) => target.classList.remove("active"));
      document
        .querySelectorAll("#text-enrolled-d")
        .forEach((target) => target.classList.remove("active"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-d").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enroll-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// Enroll-home - Open Summarrrrrry - Hypertension

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-h").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#text-enrolled")
        .forEach((target) => target.classList.add("active"));
      document
        .querySelectorAll("#text-enrolled-h")
        .forEach((target) => target.classList.add("active"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#text-enrolled")
        .forEach((target) => target.classList.remove("active"));
      document
        .querySelectorAll("#text-enrolled-h")
        .forEach((target) => target.classList.remove("active"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-h").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enroll-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// Enroll-home - Open Summarrrrrry - Orla

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-o").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#text-enrolled")
        .forEach((target) => target.classList.add("active"));
      document
        .querySelectorAll("#text-enrolled-o")
        .forEach((target) => target.classList.add("active"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#text-enrolled")
        .forEach((target) => target.classList.remove("active"));
      document
        .querySelectorAll("#text-enrolled-o")
        .forEach((target) => target.classList.remove("active"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-o").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enroll-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// Enroll-home - Open Summarrrrrry - Breast

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-b").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#text-enrolled")
        .forEach((target) => target.classList.add("active"));
      document
        .querySelectorAll("#text-enrolled-b")
        .forEach((target) => target.classList.add("active"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enroll-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#text-enrolled")
        .forEach((target) => target.classList.remove("active"));
      document
        .querySelectorAll("#text-enrolled-b")
        .forEach((target) => target.classList.remove("active"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#enrolled-trigger-b").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#enroll-darwer")
        .forEach((target) => target.classList.add("show"));
    });
  });
});
// -----------------------------
console.log("ANM SCREEN -----------------------------");

// addhar -screen 1
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#generate-addhar").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#addhar-screen-1")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#arrow-screen-1").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#addhar-screen-1")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// // addhar -screen 2
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll("#submit-addhar-button-ac").forEach((trigger) => {
//     trigger.addEventListener("click", function () {
//       document
//         .querySelectorAll("#addhar-screen-2")
//         .forEach((target) => target.classList.add("show"));
//     });
//   });
// });

$("#verify-addhar-input").on("input", function () {
  if (this.value.length === 6) $("#addhar-button-verify").hide();
  else $("#addhar-button-verify").show();
});

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll("#addhar-arrow-screen-2").forEach((trigger) => {
//     trigger.addEventListener("click", function () {
//       document
//         .querySelectorAll("#addhar-screen-2")
//         .forEach((target) => target.classList.remove("show"));
//     });
//   });
// });

// screen - 3

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#submit-addhar-button-ac").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#add-details-screen")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// screen - 4

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#addhar-button-verify-next").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#add-details-screen")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

$("#normal-number-beneficiary").on("input", function () {
  if (this.value.length > 9) $("#active-enrol-anm-bene").hide();
  else $("#active-enrol-anm-bene").show();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#addhar-back-arrow").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#add-details-screen")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// patient added

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#active-enrol-anm-bene-verify")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#paitent-added")
          .forEach((target) => target.classList.add("show"));
      });
    });
});
// cross
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#crss-patient-sceess").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#main-final-screen-anm0-orp")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//go-to-home-anm

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#go-to-home-anm").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#paitent-added")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#add-details-screen")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#addhar-screen-1")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#pink-bitton-container-wrapper")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// share-screeen-open
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#share-screeen-open").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-share-screen")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// share-screeen-close
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#share-screeen-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-share-screen")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// detailed-button-anma
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#detailed-button-anma").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#patiend-details-s1")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//backpatiend-details-s1
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#backpatiend-details-s1").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#patiend-details-s1")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

$("#Head-of-the-Household").on("input", function () {
  if (this.value.length > 4) $("#inactive-finish").hide();
  else $("#inactive-finish").show();
});

// active-finish

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#active-finish").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#patiend-details-s2")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//crooss--open-dinal
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#crooss--open-dinal").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#main-final-screen-anm0-orp")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//bac-normal-deatils

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bac-normal-deatils").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#paitent-added")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#add-details-screen")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#addhar-screen-1")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#pink-bitton-container-wrapper")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#main-final-screen-anm0-orp")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#patiend-details-s2")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#share-screeen-open")
        .forEach((target) => target.classList.remove("show"));

      document
        .querySelectorAll("#anm-share-screen")
        .forEach((target) => target.classList.remove("show"));

      document
        .querySelectorAll("#patiend-details-s1")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// patiend-details-s2, share-screeen-open , anm-share-screen, patiend-details-s1
//Checbox HIde SHow

$("#addhar-input").on("input", function () {
  if (this.value.length > 9) $("#addhar-button-ac").hide();
  else $("#addhar-button-ac").show();
});

$("#checkbox-10").click(function () {
  if ($(this).is(":checked")) {
    $("#addhar-button-ac").hide();
  } else {
    $("#addhar-button-ac").show();
  }
});
///////////////////////////---------------------- HOME

// status-triigger-anm-list-1 , status-target-anm-list-1 , status-cross-anm-list-1 , status-button-anm-list-1

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-triigger-anm-list-1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-target-anm-list-1")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-cross-anm-list-1 , #status-button-anm-list-1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-target-anm-list-1")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//status-disease-trigger-anm-list-1 , #status-disease-target-anm-list-1 ,
//status-back-target-anm-list-1 , status-button-target-anm-list-1

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-disease-trigger-anm-list-1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-disease-target-anm-list-1")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#status-back-target-anm-list-1 , #status-button-target-anm-list-1"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-disease-target-anm-list-1")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// #status-dia-trigger-anm-list-1, #status-dia-target-anm-list-1
// #dia-back-target-anm-list-1 , #dia-button-target-anm-list-1

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-dia-trigger-anm-list-1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-dia-target-anm-list-1")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#dia-back-target-anm-list-1 , #dia-button-target-anm-list-1"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-dia-target-anm-list-1")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// #status-fup-trigger-anm-list-1, #status-fup-target-anm-list-1
// #status-fup-button-target-anm-list-1 ,#status-fup-button-target-anm-list-1

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-fup-trigger-anm-list-1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-fup-target-anm-list-1")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#status-fup-back-target-anm-list-1 ,#status-fup-button-target-anm-list-1"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-fup-target-anm-list-1")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//#status-Cbac-trigger-anm-list-1, #status-cbac-target-anm-list-1
//#status-cbac-back-target-anm-list-1 ,#status-cbac-button-target-anm-list-1
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-Cbac-trigger-anm-list-1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-cbac-target-anm-list-1")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#status-cbac-back-target-anm-list-1 ,#status-cbac-button-target-anm-list-1"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-cbac-target-anm-list-1")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// status-ss-trigger-anm-list-1 , status-ss-target-anm-list-1
// status-ss-back-target-anm-list-1 ,#status-ss-button-target-anm-list-1

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-ss-trigger-anm-list-1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-ss-target-anm-list-1")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#status-ss-back-target-anm-list-1 ,#status-ss-button-target-anm-list-1"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-ss-target-anm-list-1")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//status-tp-trigger-anm-list-1, status-tp-target-anm-list-1
// status-tp-back-target-anm-list-1 , #status-tp-button-target-anm-list-1

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-tp-trigger-anm-list-1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-tp-target-anm-list-1")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#status-tp-back-target-anm-list-1 , #status-tp-button-target-anm-list-1"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-tp-target-anm-list-1")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//pedning-anm-trigger-list-2 , #pending-anm-target-list-2
//pending-back-target-anm-list-2

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#pedning-anm-trigger-list-2")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pending-anm-target-list-2")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#pending-back-target-anm-list-2")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pending-anm-target-list-2")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// #pending-anm-trigger-location-list-2 , pending-anm-target-location-list-2
// #pending--cross-anm-target-location-list-2, #pending-button-anm-target-location-list-2

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#pending-anm-trigger-location-list-2")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pending-anm-target-location-list-2")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#pending--cross-anm-target-location-list-2, #pending-button-anm-target-location-list-2"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pending-anm-target-location-list-2")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// #pending-anm-trigger-gender-list-2 , pending-anm-target-gender-list-2
// #pending--cross-anm-target-gender-list-2, #pending-button-anm-target-gender-list-2

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#pending-anm-trigger-gender-list-2")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pending-anm-target-gender-list-2")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#pending--cross-anm-target-gender-list-2, #pending-button-anm-target-gender-list-2"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pending-anm-target-gender-list-2")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// #pending-anm-trigger-disease-list-2 , pending-anm-target-disease-list-2
// #pending--cross-anm-target-disease-list-2, #pending-button-anm-target-disease-list-2

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#pending-anm-trigger-disease-list-2")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pending-anm-target-disease-list-2")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#pending--cross-anm-target-disease-list-2, #pending-button-anm-target-disease-list-2"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pending-anm-target-disease-list-2")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// #overdue-anm-trigger-list-3 , #overdue-anm-target-list-3
//overdue-back-anm-target-list-3

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#overdue-anm-trigger-list-3")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#overdue-anm-target-list-3")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#overdue-back-anm-target-list-3")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#overdue-anm-target-list-3")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// overdue-anm-trigger-location-list-3 , overdue-anm-target-location-list-3
//overdue--cross-anm-target-location-list-3 , #overdue-button-anm-target-location-list-3

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#overdue-anm-trigger-location-list-3")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#overdue-anm-target-location-list-3")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#overdue--cross-anm-target-location-list-3 , #overdue-button-anm-target-location-list-3"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#overdue-anm-target-location-list-3")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//overdue-anm-trigger-gender-list-3,#overdue-anm-target-gender-list-3
//overdue--cross-anm-target-gender-list-3, #overdue-button-anm-target-gender-list-3

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#overdue-anm-trigger-gender-list-3")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#overdue-anm-target-gender-list-3")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#overdue--cross-anm-target-gender-list-3, #overdue-button-anm-target-gender-list-3"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#overdue-anm-target-gender-list-3")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//overdue-anm-trigger-status-list-3,#overdue-anm-target-status-list-3
//overdue--cross-anm-target-status-list-3, #overdue-button-anm-target-status-list-3

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#overdue-anm-trigger-status-list-3")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#overdue-anm-target-status-list-3")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#overdue--cross-anm-target-status-list-3, #overdue-button-anm-target-status-list-3"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#overdue-anm-target-status-list-3")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//status-disease-overdue-trigger-anm-list-3, status-disease-overdue-target-anm-list-3
//status-disease-overdue-cross-anm-list-3 ,  status-disease-overdue-button-anm-list-3

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-disease-overdue-trigger-anm-list-3")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-disease-overdue-target-anm-list-3")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#status-disease-overdue-cross-anm-list-3 ,  #status-disease-overdue-button-anm-list-3"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-disease-overdue-target-anm-list-3")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// status-disease-tp-trigger-anm-list-3 , #status-disease-tp-target-anm-list-3
//status-disease-tp-back-anm-list-3  , status-disease-tp-button-anm-list-3

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-disease-tp-trigger-anm-list-3")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-disease-tp-target-anm-list-3")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#status-disease-tp-back-anm-list-3  , #status-disease-tp-button-anm-list-3"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-disease-tp-target-anm-list-3")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//pendingcbac-anm-trigger-list-4 , pendingcbac-anm-target-list-4
// pendingcbac-back-anm-target-list-4

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#pendingcbac-anm-trigger-list-4")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pendingcbac-anm-target-list-4")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#pendingcbac-back-anm-target-list-4")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#pendingcbac-anm-target-list-4")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//manjula-profile-empty-target , .trigger-class-manjula
//manjula-profile-scross-target

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#trigger-class-manjula").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#manjula-profile-empty-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#manjula-profile-scross-target")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#manjula-profile-empty-target")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

/// Screeeening ANM PRocess

// anm-ss-1-trigger, anm-ss-1-target

//anm-ss-1-cross ,  ? anm-ss-home

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-1-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-1-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-1-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-1-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// anm-ss-2-target , anm-ss-2-trigger
//anm-ss-2-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-2-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-2-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-2-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-2-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//button
$("#weight-bmi").on("input", function () {
  if (this.value.length > 0) $("#bmi-inactive-button").hide();
  else $("#bmi-inactive-button").show();
});

// anm-ss-3-target , anm-ss-3-trigger-bmi
//anm-ss-3-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-3-trigger-bmi").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-3-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-3-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-3-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-4-target , anm-ss-4-trigger
//anm-ss-4-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-4-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-4-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-4-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-4-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});
//nad-confiremd-trigger , nad-confiremd-target
// nad-confiremd-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#nad-confiremd-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#nad-confiremd-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#nad-confiremd-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#nad-confiremd-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

$("#bloodsugar-input-anm").on("input", function () {
  if (this.value.length > 0) $("#nad-confiremd-trigger").show();
  else $("#nad-confiremd-trigger").hide();
});

//anm-ss-5-target , anm-ss-5-trigger
//anm-ss-5-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-5-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-5-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-5-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-5-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-6-target , anm-ss-6-trigger
//anm-ss-6-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-6-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-6-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-6-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-6-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//chiplets

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".chilet-anm").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        this.querySelectorAll(".chiplet").forEach((target) =>
          target.classList.add("selected")
        );
        this.querySelectorAll(".chip-scross").forEach((target) =>
          target.classList.add("selected")
        );
      } else {
        this.querySelectorAll(".chiplet").forEach((target) =>
          target.classList.remove("selected")
        );
        this.querySelectorAll(".chip-scross").forEach((target) =>
          target.classList.remove("selected")
        );
      }
    });
  });
});

// let chipletFunction = function chipletNew() {
//   if ($(".chiplet").hasClass("selected")) {
//     $("#nad-button").show();
//   } else {
//     $("#nad-button").hide();
//   }
// };

// // document.addEventListener("onClick", chipletFunction());

// document.addEventListener("DOMContentLoaded", () => {
//   document.addEventListener("onClick", chipletFunction());
// });

// Some turnaround
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#id-non-healing").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        document
          .querySelectorAll("#mark-as-active-refer-ss-anm-t1")
          .forEach((target) => target.classList.add("show"));
        document
          .querySelectorAll("#unable-to-screen-ss-anm-t1")
          .forEach((target) => target.classList.add("hide"));
      } else {
        document
          .querySelectorAll("#mark-as-active-refer-ss-anm-t1")
          .forEach((target) => target.classList.remove("show"));
        document
          .querySelectorAll("#unable-to-screen-ss-anm-t1")
          .forEach((target) => target.classList.remove("hide"));
      }
    });
  });
});

//mark-as-active-refer-ss-anm-t1 , mark-as-active-refer-ss-anm-t1-target
//mark-as-active-refer-ss-cross-t1-target

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#mark-as-active-refer-ss-anm-t1")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#mark-as-active-refer-ss-anm-t1-target")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#mark-as-active-refer-ss-cross-t1-target")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#mark-as-active-refer-ss-anm-t1-target")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//anm-ss-8-target , mark-as-active-refer-ss-button-target , anm-ss-8-back

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#mark-as-active-refer-ss-button-target")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#anm-ss-8-target")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-8-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-8-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-9-trigger , anm-ss-9-target
//anm-ss-9-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-9-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-9-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-9-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-9-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-10-trigger, anm-ss-10-target
//anm-ss-10-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-10-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-10-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-10-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-10-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-11-trigger, anm-ss-11-target
//anm-ss-11-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-11-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-11-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-11-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-11-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-12-trigger, anm-ss-12-target
//anm-ss-12-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-12-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-12-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-12-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-12-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-13-trigger, anm-ss-13-target
//anm-ss-13-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-13-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-13-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-13-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-13-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-14-trigger, anm-ss-14-target
//anm-ss-14-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-14-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-14-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-14-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-14-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-15-trigger, anm-ss-15-target
//anm-ss-15-back

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-15-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-15-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ss-15-back").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-15-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// save-med-his , //no-med-his

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#id-non-healing-med").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        document
          .querySelectorAll("#save-med-his")
          .forEach((target) => target.classList.add("show"));
      } else {
        document
          .querySelectorAll("#save-med-his")
          .forEach((target) => target.classList.remove("show"));
      }
    });
  });
});

// no-med-his , save-med-his

//anm-ss-16-trigger, anm-ss-16-target

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#anm-ss-16-trigger,#save-med-his")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#anm-ss-16-target")
          .forEach((target) => target.classList.add("show"));
      });
    });
});

// home-ss-button

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".home-ss-button").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-1-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-2-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-3-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-4-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#nad-confiremd-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-5-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-6-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#mark-as-active-refer-ss-anm-t1-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-8-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-9-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-10-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-11-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-12-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-13-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-14-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-15-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-16-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#pink-bitton-container-wrapper-ss")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#manjula-profile-empty-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#search-name-window-drawer")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-profile-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".anm-ss-profile-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-1-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-2-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-3-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-4-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#nad-confiremd-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-5-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-6-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#mark-as-active-refer-ss-anm-t1-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-8-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-9-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-10-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-11-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-12-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-13-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-14-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-15-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ss-16-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#pink-bitton-container-wrapper-ss")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#cbac-top-ss")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#cbac-bottom-ss")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//
//pink button open-ss
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pink-button-ss").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#pink-bitton-container-wrapper-ss")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//pink button close-ss
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#pink-button-cross-ss").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#pink-bitton-container-wrapper-ss")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//ss-button-trigger

// anm-ss-1-target , anm-ss-16-target

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#ss-button-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ss-1-target")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#anm-ss-16-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

// if All-Villages === kyalnuru then do this.

// $("#All-Villages").on("change", function () {
//   if ("#All-Villages:selected".val() === "kyalnuru") console.log("Working");
//   else console.log("not Working");
// });
// (":selected").val();

// $(document).ready(function () {
//   $("#All-Villages").change(function () {
//     var selectedCountry = $(this).children("option:selected").val();
//     alert("You have selected the country - " + selectedCountry);
//   });
// });

$(document).ready(function () {
  $("#All-Villages").change(function () {
    var selectedCountry = $(this).children("option:selected").val();
    // console.log(selectedCountry);

    if (selectedCountry === "Kyalnuru") {
      document.getElementById("pending-anm-home").innerHTML = "41";
      document.getElementById("overdue-innertext").innerHTML = "20";
      document.getElementById("penidng-inercbac").innerHTML = "109";
    } else {
      document.getElementById("pending-anm-home").innerHTML = "79";
      document.getElementById("overdue-innertext").innerHTML = "49";
      document.getElementById("penidng-inercbac").innerHTML = "111";
    }
  });
});

// overdue-innertext , penidng-inercbac

$(document).ready(function () {
  $("#this-moneth").change(function () {
    var selectedCountry = $(this).children("option:selected").val();
    // console.log(selectedCountry);

    if (selectedCountry === "this-week") {
      document.getElementById("n-1").innerHTML = "42";
      document.getElementById("n-2").innerHTML = "46";
      document.getElementById("n-3").innerHTML = "6";
      document.getElementById("n-4").innerHTML = "38";
      document.getElementById("n-5").innerHTML = "7";
      document.getElementById("n-6").innerHTML = "50";
      document.getElementById("n-7").innerHTML = "35";
    } else {
      document.getElementById("n-1").innerHTML = "170";
      document.getElementById("n-2").innerHTML = "79";
      document.getElementById("n-3").innerHTML = "21";
      document.getElementById("n-4").innerHTML = "150";
      document.getElementById("n-5").innerHTML = "26";
      document.getElementById("n-6").innerHTML = "228";
      document.getElementById("n-7").innerHTML = "141";
    }
  });
});

// BMI CALCULATIon ss

$("#weight-bmi").keyup(function () {
  $("#bmi").val(31.3);
});

//basaavraj-trigger , basaavraj-target

//bsavaraj-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#basaavraj-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#basaavraj-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#bsavaraj-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#basaavraj-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// dia-checbox-epending

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#dia-checbox-epending").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        document
          .querySelectorAll("#dia-checbox-epending-inactive")
          .forEach((target) => target.classList.add("hide"));
        document
          .querySelectorAll("#dia-checbox-epending-active")
          .forEach((target) => target.classList.add("show"));
      } else {
        document
          .querySelectorAll("#dia-checbox-epending-inactive")
          .forEach((target) => target.classList.remove("hide"));
        document
          .querySelectorAll("#dia-checbox-epending-active")
          .forEach((target) => target.classList.remove("show"));
      }
    });
  });
});

// Prashant Flow Starts here

$("#checkbox-101").click(function () {
  if ($(this).is(":checked")) {
    $("#addhar-button-ac-101").hide();
  } else {
    $("#addhar-button-ac-101").show();
  }
});

// when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // on #submit-addhar-button-ac-101 click
  document
    .querySelectorAll("#submit-addhar-button-ac-101")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        // on every click
        document
          .querySelectorAll("#red-blood-cell")
          .forEach((target) => target.classList.add("show"));
        document
          .querySelectorAll("#diab-active-tag")
          .forEach((target) => target.classList.add("hide"));
        document
          .querySelectorAll("#diab-active-tag-inactive")
          .forEach((target) => target.classList.add("show"));
        document
          .querySelectorAll("#text-anm-dia-top")
          .forEach((target) => target.classList.add("hide"));
        document
          .querySelectorAll("#text-anm-dia-bottom")
          .forEach((target) => target.classList.add("show"));
        document
          .querySelectorAll("#hide-dia-buttton-box")
          .forEach((target) => target.classList.add("hide"));
        document
          .querySelectorAll("#green-diab-tag-bottom")
          .forEach((target) => target.classList.add("show"));
      });
    });
});
// oral
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#oral-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#drawer-oral")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

//Drawer Hypertension - Close

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#oral-drawercross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#drawer-oral")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//med-refill-cross , drawer-med-drawer , drawer-med-drawer-trigger , drawer-med-drawer-target

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#drawer-med-drawer-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#drawer-med-drawer")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#drawer-med-drawer-target")
        .forEach((target) => target.classList.add("hide"));
    });
  });
});

//Drawer Hypertension - Close

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#med-refill-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#drawer-med-drawer")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// chart-icon

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#chart-icon").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bar-graph-wrapper")
        .forEach((target) => target.classList.add("hide"));
      document
        .querySelectorAll("#graph-wrapper")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#list-icon")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#chart-icon")
        .forEach((target) => target.classList.add("hide"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#list-icon").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#bar-graph-wrapper")
        .forEach((target) => target.classList.remove("hide"));
      document
        .querySelectorAll("#graph-wrapper")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#list-icon")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#chart-icon")
        .forEach((target) => target.classList.remove("hide"));
    });
  });
});

// counter anm

$(document).ready(function () {
  const minus = $(".quantity__minus");
  const plus = $(".quantity__plus");
  const input = $(".quantity__input-n");
  minus.click(function (e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });

  plus.click(function (e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  });
});

$("#date-save-input-anm").on("input", function () {
  if (this.value.length > 0) $("#save-button-date-anm").show();
  else $("#save-button-date-anm").hide();
});

//trigger-class-manjula-button-screen , manjula-target-profile-open

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#trigger-class-manjula-button-screen")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#anm-ss-1-target")
          .forEach((target) => target.classList.add("show"));
        document
          .querySelectorAll("#manjula-target-profile-open")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// manjula
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#majula-trigger-screen").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#manjula-target-profile-open")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#manjlua-popup-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#manjula-target-profile-open")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// view profile
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#view-manjula-profile").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#manjula-profile-empty-target")
        .forEach((target) => target.classList.add("show"));
      document
        .querySelectorAll("#manjula-target-profile-open")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// history-screening-triiger , history-screening-target , history-screening-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".history-screening-triiger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#history-screening-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#history-screening-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#history-screening-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll("#submit-addhar-button-ac").forEach((trigger) => {
//     trigger.addEventListener("click", function () {
//       document
//         .querySelectorAll("#addhar-screen-2")
//         .forEach((target) => target.classList.add("show"));
//     });
//   });
// });

$("#verify-addhar-input").on("input", function () {
  if (this.value.length === 6) $("#addhar-button-verify").hide();
  else $("#addhar-button-verify").show();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#addhar-arrow-screen-2").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#addhar-screen-2")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// ffoloow-wup-1-ttrigger , anm-ff-1-target , ffoloow-wup-1-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#ffoloow-wup-1-ttrigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-1-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#ffoloow-wup-1-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-1-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// ffoloow-wup-2-ttrigger , anm-ff-2-target, anm-ff-2-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#ffoloow-wup-2-ttrigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-2-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ff-2-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-2-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// ffoloow-wup-3-ttrigger , anm-ff-3-target, anm-ff-3-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#ffoloow-wup-3-ttrigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-3-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ff-3-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-3-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// ffoloow-wup-4-ttrigger, anm-ff-4-target , anm-ff-4-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#ffoloow-wup-4-ttrigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-4-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#anm-ff-4-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-4-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// End Treatment

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#end-treatment-ff").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#anm-ff-4-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ff-3-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ff-2-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#anm-ff-1-target")
        .forEach((target) => target.classList.remove("show"));
      document
        .querySelectorAll("#pink-bitton-container-wrapper-ss")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

// pink-bitton-container-wrapper-ss

// document.addEventListener("DOMContentLoaded", () => {
//   const datea = new Date();
//   let daya = datea.getDate();
//   let montha = datea.getMonth() + 1;
//   let yeara = datea.getFullYear();

//   // This arrangement can be altered based on how we want the date's format to appear.
//   let currentDatea = `${daya}.${montha}.${yeara}`;
//   console.log(currentDatea); // "20.10.2022"
//   document.getElementById("today-vitals").innerHTML = currentDatea;
// });

// screening-anm-trigger, screening-anm-target , screening-back-anm
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#screening-anm-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#screening-anm-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#screening-back-anm").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#screening-anm-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//anm-ss-screen-status-list-5 , status-target-anm-list-5
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#anm-ss-screen-status-list-5")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-target-anm-list-5")
          .forEach((target) => target.classList.add("show"));
      });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#status-cross-anm-list-5, #status-button-anm-list-5")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-target-anm-list-5")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//t-pstatus-button-anm-list-5 ,t-pstatus-taget-anm-list-5

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#t-pstatus-button-anm-list-5")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-disease-tp-target-anm-list-3")
          .forEach((target) => target.classList.add("show"));
      });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#time-cross-tp-anm-list-5, #time-button-tp-anm-list-5")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#status-disease-tp-target-anm-list-3")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//ss-screning-anm-list-5-trigger , ss-screning-anm-list-5-target

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#ss-screning-anm-list-5-trigger")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#ss-screning-anm-list-5-target")
          .forEach((target) => target.classList.add("show"));
      });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#ss-screening-cross-tp-anm-list-5, #ss-screening-button-tp-anm-list-5"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#ss-screning-anm-list-5-target")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

//completed-fup-triiger, completed-fup-target , completed-fup-cross

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#completed-fup-triiger").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#completed-fup-target")
        .forEach((target) => target.classList.add("show"));
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#completed-fup-cross").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll("#completed-fup-target")
        .forEach((target) => target.classList.remove("show"));
    });
  });
});

//diabetes-status-list06-anm-target , diabetes-status-list06-anm-trigger

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#diabetes-status-list06-anm-trigger")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#diabetes-status-list06-anm-target")
          .forEach((target) => target.classList.add("show"));
      });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#diabetes-status-list06-anm-back")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#diabetes-status-list06-anm-target")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// ontreatement-trigger-list-6 , ontreatement-target-list-6 , ontreatement-target-list-6-cross , ontreatement-target-list-6-button

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#ontreatement-trigger-list-6")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#ontreatement-target-list-6")
          .forEach((target) => target.classList.add("show"));
      });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#ontreatement-target-list-6-cross , #ontreatement-target-list-6-button"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#ontreatement-target-list-6")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

// anm-ss-screen-status-list-6-target, anm-ss-screen-status-list-6-trigger, anm-ss-screen-status-list-6-cross, anm-ss-screen-status-list-6-button

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("#anm-ss-screen-status-list-6-trigger")
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#anm-ss-screen-status-list-6-target")
          .forEach((target) => target.classList.add("show"));
      });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      "#anm-ss-screen-status-list-6-cross, #anm-ss-screen-status-list-6-button"
    )
    .forEach((trigger) => {
      trigger.addEventListener("click", function () {
        document
          .querySelectorAll("#anm-ss-screen-status-list-6-target")
          .forEach((target) => target.classList.remove("show"));
      });
    });
});

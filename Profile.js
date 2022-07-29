// let nameNode = $("#fname");
// let emailNode = $("#emailContact");

// let errName = $(".error1");
// let errEmail = $(".errEmail");

// function validate1() {
//   let name = nameNode.val();
//   let regex = new RegExp("^[A-Za-z]*$");
//   errName.html("");
//   if (name === "") {
//     errName.html("<small>Name is required</small>");
//     nameNode.css("border", "2px solid red");
//     return false;
//   } else if (regex.test(name) == false) {
//     errName.html("<small>Name must have only letters.</small>");
//     nameNode.css("border", "2px solid red");
//     return false;
//   } else {
//     nameNode.css("border", "2px solid blue");
//     return true;
//   }
// }

// function validate2() {
//   let email = emailNode.val();
//   errEmail.html("");
//   if (email === "") {
//     errEmail.html("<small>Email is required</small>");
//     emailNode.css("border", "2px solid red");
//     return false;
//   } else if (!email.includes("@") || email.endsWith("@")) {
//     errEmail.html("<small>Enter a valid email</small>");
//     emailNode.css("border", "2px solid red");
//     return false;
//   } else {
//     emailNode.css("border", "2px solid blue");
//     return true;
//   }
// }

let nameNode = $("#fname");
let emailNode = $("#emailContact");

let errName = $(".error1");
let errEmail = $(".errEmail");
function validate1() {
  let name = nameNode.val();
  let regex = new RegExp("^[A-Za-z]*$");
  errName.html("");
  if (regex.test(name) === false) {
    errName.html("<small>Name must have only letters.</small>");
    nameNode.css("border", "2px solid red");
    return false;
  } else {
    nameNode.css("border", "2px solid blue");
    return true;
  }
}

function validate2() {
  let email = emailNode.val();
  errEmail.html("");
 if (!email.includes("@") || email.endsWith("@")) {
    errEmail.html("<small>Enter a valid email</small>");
    emailNode.css("border", "2px solid red");
    return false;
  } else {
    emailNode.css("border", "2px solid blue");
    return true;
  }
}

function validateContact() {
  let v1 = validate1();
  let v2 = validate2();
  if (v1 && v2){
    alert("Updated");
    return true;
  }
  return false;
}
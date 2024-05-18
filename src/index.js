/** GENERAL FEEDBACK:
 *
 */
const form = document.getElementById("new-user-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e.target)
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
//   console.log(formData);
  data.didLikeAssignment = form.didLikeAssignment.checked ? "Yes" : "No";
//   console.log(data);
  document.querySelector("#results-username").textContent = data.username;
  document.querySelector("#results-coding-level").textContent = data.codingLevel;
  document.querySelector("#results-location").textContent = data.location;
  document.querySelector("#results-did-like-assignment").textContent = data.didLikeAssignment;
  document.getElementById("new-user-form").reset();
});

let form = document.getElementById("form");
form.addEventListener("submit", createCard);
document.getElementById("submitting").style.display = "none";

async function createCard(e) {
  e.preventDefault();
  document.getElementById("submit").style.display = "none";
  document.getElementById("submitting").style.display = "block";
  let data = {
    name: form.name.value,
    description: form.desc.value,
    startDate: form.start.value,
    dueDate: form.due.value,
  };
  try {
    let res = await fetch(
      "https://adorable-leotard-frog.cyclic.app/createCard",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    document.getElementById("submit").style.display = "block";
    document.getElementById("submitting").style.display = "none";
    res = await res.json();
    alert(res.message);
    location.reload();
  } catch (e) {
    alert("Card could not created");
    console.log(e);
  }
}

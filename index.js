//Selection the button and the container
const container = document.querySelector(".container");
const button = document.querySelector("button");

//Adding event listener on button click.
//First making the container empty
//And then call the callFn() function
button.addEventListener("click", () => {
  container.innerHTML = "";
  callFn();
});

//async function for handling the fetch request
//Calling displayUser() function with data for display
async function callFn() {
  try {
    let r1 = fetch("https://reqres.in/api/users?page=2");
    let res = await r1;
    let res2 = await res.json();
    displayUser(res2.data);
  } catch (error) {
    console.log(error);
  }
}

//Displaying the data recieved from callFn() function
function displayUser(data) {
  console.log(data);
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = ele.avatar;

    let name = document.createElement("h3");
    name.textContent = `${ele.first_name} ${ele.last_name}`;

    let email = document.createElement("p");
    email.textContent = ele.email;

    card.append(img, name, email);
    container.append(card);
  });
}

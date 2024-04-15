const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener("click", result);

function result() {
  console.log("Button clicked!");

  let name = "";
  let temperature = "";
  let weight = "";

  const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const insertY = ["the soup kitchen", "Disneyland", "the White House"];
  const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  if (customName.value !== "") {
    name = customName.value;
    console.log(name);
  } else {
    name = "Bob";
    console.log(name);
  }

  if (document.getElementById("uk").checked) {
    weight = Math.round(300) + "stone";
    temperature = Math.round(94) + "centigrade";
  }

  const storyText = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;

  story.textContent = storyText;
  story.style.visibility = "visible";
}

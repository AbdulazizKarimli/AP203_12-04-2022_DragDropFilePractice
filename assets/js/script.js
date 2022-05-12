// const dropArea = document.querySelector(".drop-area");
// const colorItems = document.querySelectorAll(".color-item");

// dropArea.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// colorItems.forEach((colorItem) => {
//   colorItem.addEventListener("dragstart", (e) => {
//     // console.log(e.target.dataset.red);
//     // console.log(e.target.dataset.green);
//     // console.log(e.target.dataset.blue);
//     const { dataTransfer, target } = e;
//     dataTransfer.setData(
//       "color",
//       window.getComputedStyle(target).backgroundColor
//     );
//   });
// });

// dropArea.addEventListener("drop", (e) => {
//   const { dataTransfer, target } = e;
//   target.style.backgroundColor = dataTransfer.getData("color");
// });

// const person = {
//   name: "Ibrahim",
//   position: "Ishveren",
// };

// console.log(person.position, person.name);

// const { name, position } = person;

// console.log(name, position);

// let names = ["Elmin", "Elnur", "Rovshen", "Mushvig"];

// console.log(names[0]);

// const [elmin, elnur, rovshen, mushvig] = names;

// console.log(elmin);

const fileZone = document.querySelector(".file-zone");
const galleryItem = document.querySelector(".images .row");

fileZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

fileZone.addEventListener("drop", (e) => {
  e.preventDefault();

  const fileReader = new FileReader();

  fileReader.readAsDataURL(e.dataTransfer.files[0]);

  fileReader.onload = () => {
    galleryItem.innerHTML += `
    <div class="col-md-3">
      <img src="${fileReader.result}" class="img-fluid" alt="" />
    </div>
    `;
  };
});

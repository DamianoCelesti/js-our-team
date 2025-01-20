const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// seleziono elemento html
const outputTemp = document.getElementById("outputTemp");



let items = "";
// genero le carte dove con il for prendo ogni elemento

for (let i = 0; i < teamMembers.length; i++) {
  let membro = teamMembers[i];


  const { name, role, email, img } = membro;
  console.log(name, role, email, img);


items = items + `
  <div class="col-md-4">
    <div class="card h-100">
      <img src="${img}" class="card-img-top" alt="${name}">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text"><strong>Ruolo:</strong> ${role}</p>
        <p class="card-text"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      </div>
    </div>
  </div>
`;
}


// output

outputTemp.innerHTML = items;
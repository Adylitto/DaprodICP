import { DPD_backend } from "../../declarations/DPD_backend";

window.addEventListener("load", async () => {
  const name = await DPD_backend.getName_MBC();
  document.getElementById("dao-name").innerText = name;

  const manifesto = await DPD_backend.getDescription_MBC();
  document.getElementById("dao-manifesto").innerText = manifesto;

  const socialsAuthor = await DPD_backend.getSocialsAuthor_MBC();
  const socialsProject = await DPD_backend.getSocialsProject_MBC();
  displaySocials(socialsAuthor, "Author's Social Links");
  displaySocials(socialsProject, "Project's Social Links");

  const images = await DPD_backend.getImages_MBC();
  if (images.urlLogo) {
    document.getElementById("dao-logo").src = images.urlLogo;
  }
  if (images.urlBanner) {
    document.getElementById("dao-banner").src = images.urlBanner;
  }
});

function displaySocials(socials, title) {
  const container = document.createElement("div");
  container.innerHTML = `<h3>${title}</h3>`;
  Object.entries(socials).forEach(([key, value]) => {
    if (value) {
      const link = document.createElement("a");
      link.href = value;
      link.innerText = key;
      container.appendChild(link);
      container.appendChild(document.createElement("br"));
    }
  });
  document.getElementById("social-media").appendChild(container);
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("requestForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const offer = document.getElementById("offer").value;
      const name = document.getElementById("name").value;
      const country = document.getElementById("country").value;
      const contact = document.getElementById("contact").value;

      const message = `New Service Request:\nOffer: ${offer}\nName: ${name}\nCountry: ${country}\nContact: ${contact}`;
      const encoded = encodeURIComponent(message);
      window.open(`https://t.me/z_o_w?text=${encoded}`, "_blank");
    });
  }
});

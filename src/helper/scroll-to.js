export default function scrollTo(to) {
  const contactSection = document.getElementById(to);
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

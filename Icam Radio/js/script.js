function Menu() {
  return /*#__PURE__*/React.createElement("div", { class: "w3-top w3-hide-small" }, /*#__PURE__*/
  React.createElement("div", { class: "w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off", id: "myNavbar" }, /*#__PURE__*/
  React.createElement("div", {class:"", id:"logo"}),
  React.createElement("a", { class: "w3-bar-item w3-button", href:"./acceuil.html" }, "Accueil"), /*#__PURE__*/
  React.createElement("a", { class: "w3-bar-item w3-button", href:"./PagePodcast.html" }, "Podcasts"), /*#__PURE__*/
  React.createElement("a", { class: "w3-bar-item w3-button", href:"./Formes.html" }, "Sondage"), /*#__PURE__*/
  React.createElement("a", { class: "w3-bar-item w3-button" }, "Contact"),
  React.createElement("a", { class: "w3-button w3-bar-log", href: "../login/log.html"}, "Connexion")));


}

ReactDOM.render( /*#__PURE__*/React.createElement(Menu, null), document.getElementById("root"));

function Header() {
  return /*#__PURE__*/React.createElement("div", { class: "w3-display-middle w3-center" }, /*#__PURE__*/
  React.createElement("img",{ class:"logo", src: "./Ressource/icamradio.png", alt: "logo.png"}),
  React.createElement("p",{}),
  React.createElement("span", { class: "sondage" }, "Sondage"));

}

ReactDOM.render( /*#__PURE__*/React.createElement(Header, null), document.getElementById("home"));

function Transition() {
  return /*#__PURE__*/React.createElement("div", { class: "orange" });
}

ReactDOM.render( /*#__PURE__*/React.createElement(Transition, null), document.getElementById("transition"));

function Sondage() {
  return /*#__PURE__*/React.createElement("div", { class: "w3-container w3-padding-64 w3-grayscale-min w3-xlarge" }, /*#__PURE__*/
  React.createElement("div", { class: "w3-content" }, /*#__PURE__*/
  React.createElement("h1", { class: "w3-center w3-jumbo" }, "Proposez vos id\xE9es"), /*#__PURE__*/
  React.createElement("p", null, "Elles seront prises en compte pour les prochains podcasts")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Sondage, null), document.getElementById("sondage"));

document.getElementById("form").submit();

function Footer() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Retrouvez nos r\xE9seaux ici : "));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Footer, null), document.getElementById("footer"));
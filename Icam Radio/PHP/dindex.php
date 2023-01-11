<!DOCTYPE html>
<html lang="fr" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - A Pen by Osprei</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div id="root"></div>
<header class="bgimg w3-display-container w3-grayscale-min" id="home"></header>
<section class="transition orange" id="transition"></section>
<div id="sondage"></div>
<form class="w3-xlarge" action="/action_page.php" target="_blank" id="form">
  <p><input class="w3-input w3-padding-16 w3-border w3-content" type="text" placeholder="Musique"></p>
      <p><input class="w3-input w3-padding-16 w3-border w3-content" type="text" placeholder="Sujet"></p>
      <p><input class="w3-input w3-padding-16 w3-border w3-content" type="text" placeholder="Invité"></p> 
      <p><input class="w3-input w3-padding-16 w3-border w3-content" type="datetime-local" placeholder="Date and time" value="2022-12-16T12:00"></p>  
      <p><input class="w3-input w3-padding-16 w3-border w3-content" type="text" placeholder="Message \ Demande particulière"></p>
      <p><button class="w3-button w3-light-grey w3-block w3-content" type="submit">ENVOYER</button></p>
</form>
<footer class="w3-center w3-black w3-padding-48 w3-xlarge" id="footer"></footer>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js'></script><script  src="./script.js"></script>

<?php

// récupère les données du formulaire
$Musique = $_POST['Musique'];
$sujet = $_POST['Sujet'];
$Invité = $_POST['Invité'];

// utilise la fonction mail de PHP pour envoyer l'e-mail
mail('mace.thomas22@gmail.com', 'Sondage ICAM Radio', $message, "Musique: $Musique, $sujet");

?>

</body>
</html>

<?php

//echo "Processing...";

// check for get variable
if (isset($_POST["name"])){
    echo 'POST: Your name is ' . $_POST['name'];
}

if (isset($_GET["name"])){
    echo 'GET: Your name is ' . $_GET['name'];
}


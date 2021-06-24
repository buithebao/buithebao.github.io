<?php
$servername = "sql213.epizy.com";
$username = "epiz_27201891";
$password = "";
$database = "epiz_27201891_buithebao";


// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
<?php
$test = array(
	array(
		"name" => "Gibson",
		"type" => "Electric",
		"year" => 1998
	),
	array(
		"name" => "Yamaha",
		"type" => "Accoustic",
		"year" => 2001
	)
);

 echo json_encode($test);
$string = json_encode($test);
$decode = json_decode($string);
//  echo  '<pre>';
//  print_r($decode);
//  echo '</pre>';








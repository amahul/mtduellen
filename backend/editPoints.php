<?php

require_once 'conn.php';

$name = strip_tags($_POST['name']);
$text = strip_tags($_POST['text']);
$tag = $_POST['tag'];

// var_dump($tag);

$query = 'INSERT INTO training';
$query .= '  VALUES (?, ?, ?, ?, ?);';
$data = array(null, $name, $text, $tag, null);

// var_dump($data);

runQuery($query, false, $data);

header('Location: /admin/training');

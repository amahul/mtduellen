<?php

require_once '../app/backend/conn.php';

$img = $_SESSION['img'];

$ptName = $_POST['ptName'];
$ptText = $_POST['ptText'];
$editId = $_POST['editId'];

$query = 'UPDATE pts ';
$query .= 'set name = ?, text = ? ';
if (!empty($img)) {
    $query .= ', img = ? ';
}
$query .= ' WHERE id = ?';

if (!empty($img)) {
    $data = array($ptName, $ptText, $img, $editId);
} else {
    $data = array($ptName, $ptText, $editId);
}

runQuery($query, false, $data);
$_SESSION['img'] = null;

header('Location: /admin/pts');
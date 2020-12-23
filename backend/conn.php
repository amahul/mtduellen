<?php

$host = 'my81b.sqlserver.se';
$user = '103152_dy38480';
$pass = '#MTD21inte20';
$db = '103152-mtduellen';

$dsn = "mysql:dbname=$db;host=$host;charset=utf8";

$settings = array(
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
);

try {
    $dbm = new PDO($dsn, $user, $pass, $settings);
} catch (PDOException $e) {
    echo 'Kunde inte koppla mot db.<br>'.$e->getMessage();
    exit;
}
/*
 * Sends a request to database and returns an answer if $fetch = true.
 *
 * @param, string, $query, the request sent to database
 * @param, boolean, $fetch, indicates if the function should return data or not
 * @param, array, $data, data sent into the query
 * @return, array, returns the answer from database - only returns if $fetch = true
 */

     function runQuery($query, $fetch = true, array $data)
     {
         global $dbm;
         // var_dump($query);
         try {
             $stmt = $dbm->prepare($query);
             $stmt->execute($data);
             if ($fetch) {
                 return $stmt->fetchAll();
             }
         } catch (PDOException $e) {
             echo 'Frågan gick åt skogen. Förklaring:<br>'
        .$e->getMessage();
             exit;
         }
     }

//$filterDelete = filter_input(INPUT_GET, 'search', FILTER_SANITIZE_SPECIAL_CHARS);

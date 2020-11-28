<?php
//submission handler for artists form


error_reporting(0); //hide errors
include('php_dependencies/airtable/Airtable.php');
include('php_dependencies/airtable/Request.php');
include('php_dependencies/airtable/Response.php');

use \TANIOS\Airtable\Airtable;

$airtable = new Airtable(array(
    'api_key' => "redacted",//GET THE REAL API KEY FROM AIRTABLE
    'base'    => "appKtuF85LWjSPKbi" //id for editorials base
));
$table_name = "published";



//if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $request = $airtable->getContent( $table_name );

    do {
        $response = $request->getResponse();

        header('Content-Type: application/json');
        echo( json_encode($response[ 'records' ]) );
        //echo json_encode($response[ 'records' ])+"\n";
    }
    while( $request = $response->next() );
    
    //print_r($request);

    /* 
    $new_artist_details = array(
        'Name'        => $Name,
        'Email'       => $Email,
        'Media Link'        => $Media,
        'Project Description' => $Description,
    );


    $new_contact = $airtable->saveContent($table_name, $new_artist_details );

    echo "<link rel='stylesheet' href='../index.css'>";
    echo "<div style='text-align: center; font-size: 1.5rem;'>
    <p>Success! - We'll be in touch soon</p>
    <br/>
    <img src='../butterfly_crown.png'/>
    <br/>
    <script>
    function goHome() {
        window.location.href = 'http://monarchmusicgroup.com';
    }
    </script>
    <button onclick='goHome()'>Back To Monarch</button>";
    echo "</div>"; */
//}

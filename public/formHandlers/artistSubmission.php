<?php
//submission handler for artists form


error_reporting(0);//hide errors
include('../php_dependencies/airtable/Airtable.php');
include('../php_dependencies/airtable/Request.php');
include('../php_dependencies/airtable/Response.php');

use \TANIOS\Airtable\Airtable;

$airtable = new Airtable(array(
    'api_key' => "redacted",//GET THE API KEY FROM AIRTABLE
    'base'    => "appUmMHNShZDAYy4R"//id for artists base
));
$table_name = "submissions";



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Media = $_POST['Media'];
    $Description = $_POST['description'];
    if (empty($Name)) {
        echo "Name is required";
        return;
    }
    if (empty($Email)) {
        echo "Email is required";
        return;
    }
    if (empty($Media)) {
        echo "Media link is required";
        return;
    }
    if (empty($Description)) {
        echo "Media link is required";
        return;
    }
    
    


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
    echo "</div>";
}

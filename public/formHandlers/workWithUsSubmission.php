<?php
//submission handler for work with us about page form
error_reporting(0);//hide errors
include('../php_dependencies/airtable/Airtable.php');
include('../php_dependencies/airtable/Request.php');
include('../php_dependencies/airtable/Response.php');

use \TANIOS\Airtable\Airtable;

$airtable = new Airtable(array(
    'api_key' => "redacted",//GET THE API KEY FROM AIRTABLE
    'base'    => "appShfKKDjiSoC2vg"//id for work with us base
));
$table_name = "submissions";

function processCheckboxInput($name) {
    /* handles checkbox inputs to resolve them to a boolean value */
    $var = $_POST[$name];
    if (empty($var)) {
        $var = false;
    } else {
        $var = true;
    }
    return $var;
} 


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Activity = $_POST['Activity'];
    if (empty($Name)) {
        echo "Name is required";
        return;
    }
    if (empty($Email)) {
        echo "Email is required";
        return;
    }
    if (empty($Activity)) {
        echo "Activity is required";
        return;
    }

    /* Checkbox classification inputs */
    $Subscribe = processCheckboxInput("subscribe");
    $Network = processCheckboxInput("network");
    
    


    $new_details = array(
        'Name'        => $Name,
        'Email'       => $Email,
        'Activity'        => $Activity,
        'Wants to Subscribe' => $Subscribe,
        'Wants to join Network' => $Network,
    );


    $new_contact = $airtable->saveContent($table_name, $new_details);

    echo "<link rel='stylesheet' href='../index.css'>";
    echo "<div style='text-align: center; font-size: 1.5rem;'>
    <p>Success! - We appreciate your interest.</p>
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

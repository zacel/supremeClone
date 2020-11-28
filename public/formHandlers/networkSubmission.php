<?php
//submission handler for content creator network form
error_reporting(0);//hide errors
include('../php_dependencies/airtable/Airtable.php');
include('../php_dependencies/airtable/Request.php');
include('../php_dependencies/airtable/Response.php');

use \TANIOS\Airtable\Airtable;

$airtable = new Airtable(array(
    'api_key' => "redacted",//GET THE API KEY FROM AIRTABLE
    'base'    => "app3YckmdlvJqZTAS"//id for Content Creator Network base
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
    $Link = $_POST['Link'];
    if (empty($Name)) {
        echo "Name is required";
        return;
    }
    if (empty($Email)) {
        echo "Email is required";
        return;
    }
    if (empty($Link)) {
        echo "Link is required";
        return;
    }

    /* Checkbox classification inputs */
    $Playlist_Curator = processCheckboxInput("Playlist");
    $Influencer = processCheckboxInput("Influencer");
    $Media_Page = processCheckboxInput("MediaPage");
    $Youtuber = processCheckboxInput("Youtuber");
    $Critic = processCheckboxInput("Critic");
    $Blogger = processCheckboxInput("Blogger");
    $Other = processCheckboxInput("Other");
    
    


    $new_network_contact_details = array(
        'Name'        => $Name,
        'Email'       => $Email,
        'Link'        => $Link,
        'Playlist Curator' => $Playlist_Curator,
        'Influencer' => $Influencer,
        'Media Page' => $Media_Page,
        'Youtuber' => $Youtuber,
        'Critic' => $Critic,
        'Blogger' => $Blogger,
        'Other' => $Other,
    );


    $new_contact = $airtable->saveContent($table_name, $new_network_contact_details);

    echo "<link rel='stylesheet' href='../index.css'>";
    echo "<div style='text-align: center; font-size: 1.5rem;'>
    <p>Success! - We'll let you know if you made the cut</p>
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

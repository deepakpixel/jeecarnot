<?php session_start();
if (!((isset($_SESSION['adminloggedin']))&& $_SESSION['adminloggedin']=="tc-admin"))
header("location: index.php") ?>

<!DOCTYPE html>
<html lang="en">

<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cosmo/bootstrap.min.css">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin | JEE Carnot</title>
</head>

<body>

    <div class=center><strong>ADMIN PANEL (JEE Carnot)</strong>
        <span onclick="window.location.href='process-logout.php'"
            class="login-info">Logout</span>
    </div>
    <!-- ADMIN PANEL -->
    <!-- Show registered candidates with techchef -->
    <p class="alert alert-warning">Do not share the spreadsheet links. Settings are set to anyone can edit.</p>

    <button class="btn btn-info" onclick="window.location.href='registrations.php'">View Mentee Registrations</button>
    <button class="btn btn-info" onclick="window.location.href='mentor-registrations.php'">View Mentor Registrations</button>
    
    <a href="https://docs.google.com/spreadsheets/d/1ImlC1kbV21IwAhS0Rwi79zXJbgL7l5IWTVlI1JhKnNM/edit?usp=sharing" class="btn btn-info" target="_blank">InComplete applications(spreadsheet)</a>

    <a href="https://docs.google.com/spreadsheets/d/1496BPBIZEix3aXNb89u7fByNYCntMoMLbhzvY6KCe0M/edit?usp=sharing" class="btn btn-info" target="_blank">All applications(spreadsheet)</a>


    <!-- show advanced options -->
    <!--Delete event data-->

</body>

</html>

<style>
html,
body {
    margin: 0px 5%;
    padding: 0px;
}

.login-info {
    /* position: absolute; */
    float: right;
    right: 0px;
    padding-right: 10px;
    cursor: pointer;
}

.center {

    background-color: lightgreen;
    margin: 0px 0px 20px 0px;
    text-align: center;
    padding: 0px;

    /* margin: 0px; */
}
button,a{
    width:100%;
    margin-bottom:15px;
}

</style>
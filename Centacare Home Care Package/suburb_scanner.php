<?php
/**
 * Template Name: Centacare Home Safety Funding
 */
?>

<!DOCTYPE html>
<html>

<head>
    <title> Centacare Home Safety Funding </title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="function.js"></script>
</head>

<body>
    <div class="nav">
        <h2> Home Safety Funding Eligibility </h2>
    </div>
<div id="content">
    <div class="main">
      <div id="formwrapper">
				<h4>Please select your suburb: * </h4>
        <form>
          <select class="form-control"  id='suburb' name='suburb' onClick="getSuburb()">
          </select>
                <a href="contact_form.html" class="button"> Next </a>
        </form>
    </div>
</div>
</div>
</body>
<div class="footer">
</div>
</html>

<html>
<body>

<?php
if (empty($_POST['name']) == false) {
    echo $_POST['name'];
}
else{ 
    echo "Name not provided.";
}
?><br>

<?php
if (empty($_POST['uname']) == false) {
    echo $_POST['uname'];
}
else{ 
    echo "username not provided.";
}
?><br>


<?php
if (empty($_POST['password']) == false) {
    echo $_POST['password'];
}
else{ 
    echo "password not provided.";
}?><br>


<?php 
if (empty($_POST['address']) == false) {
    echo $_POST['address'];
}
else{ 
    echo "Address Not provided.";
}
?><br>


<?php
if (empty($_POST['country']) == false) {
    echo $_POST['country'];
}
else{ 
    echo "country Not provided.";
}
?><br>


<?php 
if (empty($_POST['zipcode']) == false) {
    echo $_POST['zipcode'];
}
else{ 
    echo  "Zipcode Not provided.";
}
?><br>


<?php
if (empty($_POST['email']) == false) {
    echo $_POST['email'];
}
else{ 
    echo  "email Not provided.";
}
?><br>


<?php
if (empty($_POST['sex']) == false) {
    echo $_POST['sex'];
}
else{ 
    echo  "sex Not provided.";
}
?><br>


<?php 
if(isset($_POST["language"]) && is_array($_POST["language"])) {
    foreach($_POST["language"] as $language) {
        echo $language . "<br>";
    }
} else {
    echo "No languages selected.";
}
?><br>


<?php 
if (empty($_POST['about']) == false) {
    echo $_POST['about'];
}
else{ 
    echo "About Not provided.";
}
?><br>

</body>
</html>

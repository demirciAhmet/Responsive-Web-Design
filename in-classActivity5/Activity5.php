<!-- Ahmet Kaan Demirci
    21050111031 -->

<!-- Can Kankılıç
    22050911016 -->
    

<!DOCTYPE html>



<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>activity 5</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<form action="Activity5-preview.php" method="POST" >
    <table>
        <h1>Registration Form</h1>
        <tr class="row-margin">
            <td>Name:</td>
            <td><input type="text" name="name" value="name" autofocus/></td>
        </tr>
        <tr>
            <td>Username:</td>
            <td><input type="text" name="uname" value="user name"/></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type="password" name="password" value="Password"/></td>
        </tr>
        <tr>
            <td>Address:</td>
            <td><input type="text" name="address" value="Address"/></td>
        </tr>
        <tr>
            <td>Country:</td>
            <td><select name="country" value="country">
                    <option value="turkey" >Turkey</option>
                    <option value="bulgaria" >Bulgaria</option>
                    <option value="romania" >Romania</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>ZIP Code:</td>
            <td><input type="text" name="zipcode" value="zipcode"/></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input type="text" name="email" value="email"/></td>
        </tr>
        <tr>
            <td>Sex:</td>
            <td><input type="radio" id="Male" name="sex" value="male">
                <label for="Male">Male</label>
                <input type="radio" id="Famale" name="sex" value="famale">
                <label for="Famale">Famale</label>
            </td>
        </tr>
        <tr>
            <td>Language:</td>
            <td>
            <label for="english">English</label>
            <input type="checkbox" id="english" name="language[]" value="English">
            <label for="french">French</label> 
            <input type="checkbox" id="french" name="language[]" value="French">
            <label for="germany">Germany</label>
            <input type="checkbox" id="germany" name="language[]" value="Germany">
            </td> 
        
        </tr>
        <tr>
            <td>About:</td>
            <td>
                <textarea id="about" name="about" value="about" >        
                    Type here
                </textarea>
            </td>
        </tr>
        <tr>    
            <td></td>
            <td> <button type="submit" >Submit</button></td>
        </tr>
    </table>
</form>

</body>
</html>

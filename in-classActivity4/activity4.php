<!-- Ahmet Kaan Demirci
    21050111031 -->

<!-- Can Kankılıç
    22050911016 -->
    
<?php
// Check if the form is real 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the form data
    $fromValue = $_POST["from_value"];
    $fromCurrency = $_POST["from_currency"];
    $toCurrency = $_POST["to_currency"];

    // Perform currency conversion
    $convertedValue = convertCurrency($fromValue, $fromCurrency, $toCurrency);
    
}

// Function for currency conversions based on rates with array
function convertCurrency($value, $fromCurrency, $toCurrency) {
    // Conversion rates
    $conversionRates = [
        "FUSD" => ["TUSD" => 1, "TCAD" => 1.25, "TEUR" => 0.85],
        "FCAD" => ["TUSD" => 0.8, "TCAD" => 1, "TEUR" => 0.68],
        "FEUR" => ["TUSD" => 1.18, "TCAD" => 1.47, "TEUR" => 1],
    ];

    // Convert 
    $conversionRate = $conversionRates[$fromCurrency][$toCurrency];
    $convertedValue = $value * $conversionRate;
    return $convertedValue;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
</head>
<body>

<form method="POST" >
    <table>
        <tr>
            <td>From:</td>
            <td><input type="text" name="from_value" value="<?php echo isset($_POST['from_value']) ? $_POST['from_value'] : ''; ?>" autofocus/></td>
            <td>Currency:</td>
            <td>
    <!-- choose currency -->
                <select name="from_currency">
                    <option value="FUSD" <?php echo ($_POST['from_currency'] == 'FUSD') ? 'selected' : ''; ?>>USD</option>
                    <option value="FCAD" <?php echo ($_POST['from_currency'] == 'FCAD') ? 'selected' : ''; ?>>CAD</option>
                    <option value="FEUR" <?php echo ($_POST['from_currency'] == 'FEUR') ? 'selected' : ''; ?>>EUR</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>To:</td>
            <td><input type="text" name="to_value" value="<?php echo isset($convertedValue) ? $convertedValue : ''; ?>" readonly/></td>
            <td>Currency:</td>
            <td>
                <select name="to_currency">
                    <option value="TUSD" <?php echo ($_POST['to_currency'] == 'TUSD') ? 'selected' : ''; ?>>USD</option>
                    <option value="TCAD" <?php echo ($_POST['to_currency'] == 'TCAD') ? 'selected' : ''; ?>>CAD</option>
                    <option value="TEUR" <?php echo ($_POST['to_currency'] == 'TEUR') ? 'selected' : ''; ?>>EUR</option>
                </select>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="submit" value="Convert" /></td>
        </tr>
    </table>
</form>

</body>
</html>

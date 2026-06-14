<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

$fullName = $_POST["fullName"] ?? "";
$email = $_POST["email"] ?? "";
$phone = $_POST["phone"] ?? "";
$position = $_POST["position"] ?? "";
$coverLetter = $_POST["coverLetter"] ?? "";

if (empty($fullName) || empty($email) || empty($phone) || empty($position)) {
    echo json_encode(["success" => false, "error" => "Required fields are missing."]);
    exit;
}

// SMTP Credentials (configured from your .env.local)
$smtpHost = "ssl://smtp.gmail.com";
$smtpPort = 465;
$smtpUser = "musicalbro123@gmail.com";
$smtpPass = "copzsanxkvdmslbr";
$to = "info@shivcoretech.com";
$subject = "New Job Application: " . strtoupper($position) . " - " . $fullName;

// Helper to write to SMTP socket and read response
function smtp_command($socket, $cmd, $expected_response) {
    if ($cmd !== null) {
        fwrite($socket, $cmd . "\r\n");
    }
    $response = "";
    while ($line = fgets($socket, 515)) {
        $response .= $line;
        if (substr($line, 3, 1) == " ") {
            break;
        }
    }
    $status = intval(substr($response, 0, 3));
    if ($status !== $expected_response) {
        throw new Exception("SMTP Error: " . $cmd . " -> Received: " . $response);
    }
    return $response;
}

try {
    // Establish connection to Gmail SMTP over SSL
    $socket = @fsockopen($smtpHost, $smtpPort, $errno, $errstr, 15);
    if (!$socket) {
        throw new Exception("Could not connect to SMTP host: $errstr ($errno)");
    }

    // Read welcome message
    smtp_command($socket, null, 220);

    // EHLO
    smtp_command($socket, "EHLO localhost", 250);

    // AUTH LOGIN
    smtp_command($socket, "AUTH LOGIN", 334);
    smtp_command($socket, base64_encode($smtpUser), 334);
    smtp_command($socket, base64_encode($smtpPass), 235);

    // MAIL FROM
    smtp_command($socket, "MAIL FROM: <" . $smtpUser . ">", 250);

    // RCPT TO
    smtp_command($socket, "RCPT TO: <" . $to . ">", 250);

    // DATA
    smtp_command($socket, "DATA", 354);

    // Construct MIME headers and body
    $boundary = md5(time());
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: Shiv Core Tech Careers <" . $smtpUser . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Subject: " . $subject . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"\r\n";

    // Plain text content
    $body = "--" . $boundary . "\r\n";
    $body .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= "New Job Application received:\n\n";
    $body .= "Position: " . strtoupper($position) . "\n";
    $body .= "Full Name: " . $fullName . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Phone: " . $phone . "\n\n";
    $body .= "Cover Letter:\n" . $coverLetter . "\n\n";

    // File attachment
    if (isset($_FILES["resume"]) && $_FILES["resume"]["error"] == UPLOAD_ERR_OK) {
        $fileName = $_FILES["resume"]["name"];
        $fileTmpName = $_FILES["resume"]["tmp_name"];
        $fileType = $_FILES["resume"]["type"];

        $fileContent = file_get_contents($fileTmpName);
        $encodedContent = chunk_split(base64_encode($fileContent));

        $body .= "--" . $boundary . "\r\n";
        $body .= "Content-Type: " . $fileType . "; name=\"" . $fileName . "\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"" . $fileName . "\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $encodedContent . "\r\n";
    }

    $body .= "--" . $boundary . "--";

    // Send the headers + message data
    $message = $headers . "\r\n" . $body;
    smtp_command($socket, $message, 250);

    // QUIT
    smtp_command($socket, "QUIT", 221);

    fclose($socket);

    echo json_encode(["success" => true, "message" => "Application submitted and email sent successfully!"]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
?>

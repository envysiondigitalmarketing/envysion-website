<?php
    if(isset($_POST['submit'])) {
        $firstName = $_POST['first-name'];
        $lastName = $_POST['last-name'];
        $company = $_POST['company'];
        $interestedIn = $_POST['interested-in'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
    
        $email_from = 'inbox@envysionwithawhy.com';
        $email_subject = "Interested in $interestedIn";
        $email_body = "Name: $firstName $lastName.\n".
                        "Company: $company.\n".
                            "Contacts: $email $phone.\n".
                                "Interested in: $interestedIn.\n";
        $to = "inbox@envysionwithawhy.com";
        $headers = "From: $email \r\n";
        $headers .= "Reply-To: $email \r\n";

        mail($to, $email_subject, $email_body, $headers);

        if($error == false) {
            echo '<script>alert("Thank you for your inquiry, we will be in touch as soon as possible.")</script>';
        }
    }
>
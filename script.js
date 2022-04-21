function validateForm() {
    let x = document.forms["rating-form"]["select"].value;
    if (x =="") {
        alert('please select a rating.');
        return false;
    }
    else {
        window.location = "./thanks-card/thanks.html";
        return x;
    }
};
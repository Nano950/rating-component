function validateForm() {
    let x = document.forms["rating-form"]["select"].value;
    if (x =="") {
        alert('please select a rating.');
        return false;
    }
    else {
        console.log(x);
        localStorage.setItem("rating", x);
        document.getElementById('rating').setAttribute('action', './thanks-card/thanks.html');
        return x;
    }
};
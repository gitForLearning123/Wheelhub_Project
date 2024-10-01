


function returnValidate() {
    let name_input = document.getElementById("name");
    let email_input = document.getElementById("email");
    let password_input = document.getElementById("password");
    let cpassword_input = document.getElementById("cpassword");
    let male_input = document.getElementById("male");
    let female_input = document.getElementById("female")
    let age_input = document.getElementById("age");
    let agree_input = document.getElementById("agree");

    let input_date = new Date()
    input_date.setHours(0, 0, 0, 0)
    let user_DOB = new Date(age_input.value)


    if (name_input.value === "" || email_input.value === "" || password_input.value === "") {
        alert("All fields must be filled");
        return false;
    } else if (name_input.value.length <= 5) {
        alert("Name must be more than 5 letters");
        return false;
    } else if (!email_input.value.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        return false;
    } else if (!isAlphaNum(password_input.value)) {
        alert("Password must contain both letters and numbers");
        return false;
    } else if (cpassword_input.value !== password_input.value) {
        alert("Confirm Password must be the same as Password");
        return false;
    } else if(user_DOB >= input_date){
        alert("Please input your relevant date of birth")
        return false
    } else if(!male_input.checked && !female_input.checked){
        alert("Please choose gender")
        return false
    } else if(!agree_input.checked){
        alert("Conditions are not agreed")
        return false
    }
    
    alert("Your account has successfully created")
    return true;
}

function isAlphaNum(element) {
    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < element.length; i++) {
        if (element[i] >= 'a' && element[i] <= 'z' || element[i] >= 'A' && element[i] <= 'Z') {
            hasLetter = true;
        } else if (element[i] >= '0' && element[i] <= '9') {
            hasNumber = true;
        }

        if (hasLetter && hasNumber) {
            return true;
        }
    }

    return false;
}

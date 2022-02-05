const Fields = {
    name: document.getElementById("name"),
    branch: document.getElementById("branch"),
    uni: document.getElementById("uni"),
    email: document.getElementById("email"),
    state: document.getElementById("state"),
    address: document.getElementById("address"),
    age: document.getElementById("age"),
    phone: document.getElementById("phone"),
    username: document.getElementById("username"),
    password: document.getElementById("password"),
    submit: document.getElementById("submit")
}

const PasswordErrors = {
    $: document.getElementById("password-errors"),
    pswdLower: document.getElementById("pswd-lower"),
    pswdUpper: document.getElementById("pswd-upper"),
    pswdNum: document.getElementById("pswd-num"),
    pswdSpecial: document.getElementById("pswd-special"),
    pswdCond: document.getElementById("pswd-cond")
}

const errors = ["name-error", "branch-error", "uni-error", "email-error", "state-error", "address-error", "age-error", "phone-error", "username-error"];
const fieldsArr = ["name", "branch", "uni", "email", "state", "address", "age", "phone", "username"];

document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();

    submit();
}

Fields.name.focus();
loadXML();

Fields.name.onblur = () => {
    if (isEmpty(Fields.name))
        document.getElementById("name-error").innerText = "Field cannot be empty.";
    else
        document.getElementById("name-error").innerText = "";
};

Fields.name.onkeydown = (e) => {
    if (!/[a-zA-Z]/.test(e.key) && e.key !== "Backspace" && e.key !== " "
        && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
        e.preventDefault();
    }
    else {
        if (Fields.name.value.length === 0) {
            if (e.key === " ")
                e.preventDefault();
        }
    }
};

Fields.branch.onblur = () => {
    if (isEmpty(Fields.branch)) 
        document.getElementById("branch-error").innerText = "Field cannot be empty.";
    else
        document.getElementById("branch-error").innerText = "";
};

Fields.branch.onfocus = () => {
    checkFocus("branch");
};

Fields.uni.onblur = () => {
    if (isEmpty(Fields.uni))
        document.getElementById("uni-error").innerText = "Field cannot be empty.";
    else
        document.getElementById("uni-error").innerText = "";
};

Fields.uni.onfocus = () => {
    checkFocus("uni");
};

Fields.email.onblur = () => {
    if (isEmpty(Fields.email))
        document.getElementById("email-error").innerText = "Field cannot be empty.";
    else
        validateEmail();
};

Fields.email.onfocus = () => {
    checkFocus("email");
};

Fields.state.onblur = () => {
    if (isEmpty(Fields.state))
        document.getElementById("state-error").innerText = "Field cannot be empty.";
    else
        document.getElementById("state-error").innerText = "";
}

Fields.state.onfocus = () => {
    checkFocus("state");
};

Fields.address.onblur = () => {
    if (isEmpty(Fields.address))
        document.getElementById("address-error").innerText = "Field cannot be empty.";
    else
        document.getElementById("address-error").innerText = "";
}

Fields.address.onfocus = () => {
    checkFocus("address");
};

Fields.age.onblur = () => {
    if (isEmpty(Fields.age))
        document.getElementById("age-error").innerText = "Field cannot be empty.";
    else
        validateAge();
}

Fields.age.onfocus = () => {
    checkFocus("age");
};

Fields.age.onkeydown = (e) => {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (!(keyCode > 47 && keyCode < 58 || e.key === "Backspace" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "-")) {
        e.preventDefault();
    }
}; 

Fields.phone.onblur = () => {
    if (isEmpty(Fields.phone))
        document.getElementById("phone-error").innerText = "Field cannot be empty.";
    else
        validatePhone();
}

Fields.phone.onfocus = () => {
    checkFocus("phone");
};

Fields.phone.onkeydown = (e) => {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (!(keyCode > 47 && keyCode < 58 || e.key === "Backspace" || e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        e.preventDefault();
    }
    else {
        if (Fields.phone.value.length + 1 > 10) {
            if (keyCode !== 8)
                e.preventDefault();
        }
    }
};

Fields.username.onblur = () => {
    if (isEmpty(Fields.username))
        document.getElementById("username-error").innerText = "Field cannot be empty.";
    else
        document.getElementById("username-error").innerText = "";
}

Fields.username.onfocus = () => {
    checkFocus("username");
};

Fields.username.onkeyup = () => {
    if (Fields.username.value.length === 1) {
        Fields.username.value = Fields.username.value.toUpperCase();
    }
};

Fields.password.onblur = () => {
    PasswordErrors.$.style.display = "none";
    validatePassword();

    if (isEmpty(Fields.password))
        document.getElementById("password-error").innerText = "Field cannot be empty.";
    else
        document.getElementById("password-error").innerText = "";
}

Fields.password.onfocus = () => {
    Fields.uni.onfocus = () => {
        checkFocus("uni");
    };

    validatePassword();
    PasswordErrors.$.style.display = "inherit";
};

Fields.password.onkeyup = () => {
    validatePassword();
};

function isEmpty(field) {
    return field.value.length === 0;
}

function validateEmail() {
    const pattern = /^\w+\.\w+@\w+\.in$/;

    if (pattern.test(Fields.email.value)) {
        console.log(Fields.email.value + " " + Fields.uni.value + " " + Fields.email.value.includes(Fields.uni.value));
        if (Fields.email.value.includes(Fields.uni.value.toLowerCase())) {
            document.getElementById("email-error").innerText = "";
            return true;
        }
    }
    
    document.getElementById("email-error").innerText = "Invalid email!";
    return false;
}

function validatePassword() {
    var pswd = Fields.password.value;
    var valid = true;

    if (pswd.search(/[a-z]/) >= 0) {
        PasswordErrors.pswdLower.style.color = "green";
    }
    else {
        PasswordErrors.pswdLower.style.color = "red";
        valid = false;
    }
    
    if (pswd.search(/[A-Z]/) >= 0) {
        PasswordErrors.pswdUpper.style.color = "green";
    }
    else {
        PasswordErrors.pswdUpper.style.color = "red";
        valid = false;
    }
    
    if (pswd.search(/[0-9]/) >= 0) {
        PasswordErrors.pswdNum.style.color = "green";
    }
    else {
        PasswordErrors.pswdNum.style.color = "red";
        valid = false;
    }

    if (pswd.search(/[^\w\s]/) >= 0) {
        PasswordErrors.pswdSpecial.style.color = "green";
    }
    else {
        PasswordErrors.pswdSpecial.style.color = "red";
        valid = false;
    }
    
    pswd = pswd.substring(1, pswd.length - 1);

    if (/^(?=.*\d)(?=.*[A-Z])(?=.*[^\w\s]).+$/.test(pswd)) {
        PasswordErrors.pswdCond.style.color = "green";
    }
    else {
        PasswordErrors.pswdCond.style.color = "red";
        valid = false;
    }

    return valid;
}

function validateAge() {
    if (Fields.age.value.includes("-")) {
        document.getElementById("age-error").innerText = "Age cannot be negative!";
        return false;
    }
    
    document.getElementById("age-error").innerText = "";
    return true;
}

function validatePhone() {
    if (Fields.phone.value.length !== 10) {
        document.getElementById("phone-error").innerText = "Phone number must be 10 digits long!";
        return false;
    }

    document.getElementById("phone-error").innerText = "";
    return true;
}

function checkFocus(fieldName) {
    const index = fieldsArr.indexOf(fieldName);
    console.log(index);

    for (let i = 0; i < index; i++) {
        if (document.getElementById(errors[i]).innerText !== "") {
            document.getElementById(fieldsArr[i]).focus();
        }
    }
}

function submit() {
    if (validateEmail() && validatePassword() && validatePhone() && validateAge() 
    && !isEmpty(Fields.branch) && !isEmpty(Fields.uni) && !isEmpty(Fields.state) && !isEmpty(Fields.address)) {
        setCookie("username", Fields.username.value, 1);
        setCookie("email", Fields.email.value, 1);

        localStorage.setItem("email", Fields.email.value);
        localStorage.setItem("phone number", Fields.phone.value);

        var url = window.location.href;
        url = url.replace("/index.html", "/showxml.html");
        window.location.replace(url);
    }
}

function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

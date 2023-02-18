// step : 1 submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('clicked submit button');
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('user-password');
    const  password = passwordField.value;
    // console.log(password,email);
    
    //validation for login
    if(email === 'shantosikder77@gmail.com' && password === 'admin'){
        window.location.href="bank.html";
    }else{
        alert('Invalid User tui dukte parbi nah amr bank a');
    }
});

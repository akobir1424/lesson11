const username = document.getElementById('username');
const login = document.getElementById('login');



function register(){
    let vallue = username.value;
    let upper = vallue.substr(0,1);
    console.log(upper);
    if(vallue === 'admin'){
        location.href = './admin_page.html'
    }
    else if (vallue.length >= 6 && upper === upper.toUpperCase()){
        localStorage.setItem('username', String(username.value))
        location.href = './login.html'
    }
    else{
        let text = document.getElementById('text')
        text.textContent = 'Error !) nameni bosh harfini kattada kiriting yoki 6ta harfdan ko\'proq harf kiriting'
    }
}

function loginn() {
    if(login.value === localStorage.getItem('username')){
        location.href = './home.html'
    }
    else{
        location.href = './err.html'
    }
}







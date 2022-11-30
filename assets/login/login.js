const loginForm = document.querySelector("#fh5co-header-subscribe");

function SendMail(event) {
  event.preventDefault();
  var link = '../public/otp.html';
  var params = {
    email_id: document.getElementById("email_id").value
  };
  emailjs
    .send("service_wx1tgl8", "template_59h1lc5", params)
    .then(function (res) {
      alert("이메일이 발송되었습니다");
      localStorage.setItem('send_email',document.getElementById("email_id").value);
      document.getElementById("email_id").value = "";
      location.href=link;
      location.replace(link);
      window.open(link);
    });
}

loginForm.addEventListener("submit", SendMail);
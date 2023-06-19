// Configurar a conexão com o Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBwRENnFIHFdB5gr-jcMwN6LrQNmsne0lk",
    authDomain: "tela-de-login-236a7.firebaseapp.com",
    projectId: "tela-de-login-236a7",
    storageBucket: "tela-de-login-236a7.appspot.com",
    messagingSenderId: "745879998146",
    appId: "1:745879998146:web:8a218c07dc1ce9be9df55b"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  function entrar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
  
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function (userCredential) {
        // Autenticação bem-sucedida
        alert("Usuário autenticado");
        window.location.href = "./index.html"; // Redirecionar para index.html
      })
      .catch(function (error) {
        // Autenticação falhou
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
          alert("Email ou senha inválidos. Tente novamente.");
        } else {
          alert(errorMessage);
        }
      });
  }
  
  
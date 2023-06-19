const firebaseConfig = {
    apiKey: "AIzaSyBwRENnFIHFdB5gr-jcMwN6LrQNmsne0lk",
    authDomain: "tela-de-login-236a7.firebaseapp.com",
    projectId: "tela-de-login-236a7",
    storageBucket: "tela-de-login-236a7.appspot.com",
    messagingSenderId: "745879998146",
    appId: "1:745879998146:web:8a218c07dc1ce9be9df55b"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Obtenha uma referência ao formulário e aos campos de entrada
  var form = document.getElementById('form');
  var nomeInput = document.querySelector('input[name="usuario"]');
  var senhaInput = document.getElementById('senha');
  
  // Adicione um ouvinte de evento ao formulário quando for enviado
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    var nome = nomeInput.value;
    var senha = senhaInput.value;
  
    // Aqui você pode fazer a lógica de autenticação e cadastro no Firebase
    // Por exemplo, você pode usar a função createUserWithEmailAndPassword para criar um novo usuário no Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(nome, senha)
      .then(function(userCredential) {
        // Sucesso no cadastro
        console.log('Usuário cadastrado com sucesso:', userCredential.user);
        // Redirecionar para a página "barra.html"
        window.location.href = './login.html';
      })
      .catch(function(error) {
        // Tratar erros de cadastro
        console.log('Erro no cadastro:', error);
        // Exibir uma mensagem de erro para o usuário
        alert('O email ou a senha não estão de acordo.');
      });
  });
  
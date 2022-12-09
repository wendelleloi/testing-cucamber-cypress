Feature: Login site CWI
  Sou um profissional e gostaria de recuperar minha senha esquecida

  Scenario: Visualizar a opção de recuperar senha esquecida
    Given acesso o site CWI.
    When acesso a pagina de login.
    Then devo visualizar botao de recuperar minha senha esquecida.
// ============================================
// JavaScript - PetShop Amigo Fiel (Fase 2)
// Funções dinâmicas e de interatividade
// ============================================

// ===================== RELÓGIO EM TEMPO REAL =====================
// Atualiza o relógio e a saudação no topo da página a cada segundo
function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    // Adiciona zero à esquerda se necessário
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    var horaFormatada = horas + ":" + minutos + ":" + segundos;

    // Define a saudação de acordo com a hora
    var saudacao = "";
    var horaNum = agora.getHours();
    if (horaNum >= 5 && horaNum < 12) {
        saudacao = "Bom dia";
    } else if (horaNum >= 12 && horaNum < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    // Atualiza o elemento na página
    var elemento = document.getElementById("saudacao");
    if (elemento) {
        elemento.textContent = saudacao + "! Agora são " + horaFormatada + " | PetShop Amigo Fiel";
    }
}

// ===================== ANO DINÂMICO NO FOOTER =====================
// Insere o ano atual automaticamente no rodapé
function atualizarAnoFooter() {
    var elementoAno = document.getElementById("ano-atual");
    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }
}

// ===================== VALIDAÇÃO DO FORMULÁRIO DE CADASTRO =====================
// Valida os campos do formulário de cadastro do cliente e pet
function validarFormularioCadastro(event) {
    var nome = document.getElementById("nome-cliente").value.trim();
    var cpf = document.getElementById("cpf-cliente").value.trim();
    var email = document.getElementById("email-cliente").value.trim();
    var telefone = document.getElementById("telefone-cliente").value.trim();
    var endereco = document.getElementById("endereco-cliente").value.trim();
    var nomePet = document.getElementById("nome-pet").value.trim();
    var racaPet = document.getElementById("raca-pet").value.trim();
    var idadePet = document.getElementById("idade-pet").value;

    var mensagensErro = [];

    // Validação do nome
    if (nome.length < 3) {
        mensagensErro.push("O nome do cliente deve ter pelo menos 3 caracteres.");
    }

    // Validação do CPF (formato simples: 11 dígitos)
    var cpfLimpo = cpf.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
        mensagensErro.push("O CPF deve conter 11 dígitos numéricos.");
    }

    // Validação do e-mail
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        mensagensErro.push("Informe um e-mail válido.");
    }

    // Validação do telefone
    if (telefone.length < 10) {
        mensagensErro.push("O telefone deve ter pelo menos 10 dígitos.");
    }

    // Validação do endereço
    if (endereco.length < 5) {
        mensagensErro.push("O endereço deve ter pelo menos 5 caracteres.");
    }

    // Validação do sexo (radio button)
    var sexoSelecionado = document.querySelector('input[name="sexo-cliente"]:checked');
    if (!sexoSelecionado) {
        mensagensErro.push("Selecione o sexo do cliente.");
    }

    // Validação do pet
    if (nomePet.length < 2) {
        mensagensErro.push("O nome do pet deve ter pelo menos 2 caracteres.");
    }
    if (racaPet.length < 2) {
        mensagensErro.push("Informe a raça do pet.");
    }
    if (idadePet === "" || idadePet < 0 || idadePet > 30) {
        mensagensErro.push("A idade do pet deve ser entre 0 e 30 anos.");
    }

    // Se houver erros, exibe alerta e impede envio
    if (mensagensErro.length > 0) {
        event.preventDefault();
        alert("Por favor, corrija os seguintes erros:\n\n" + mensagensErro.join("\n"));
        return false;
    }

    // Se tudo estiver correto, exibe confirmação
    event.preventDefault();
    alert("Cadastro realizado com sucesso!\n\nCliente: " + nome + "\nPet: " + nomePet);
    return true;
}

// ===================== VALIDAÇÃO DO FORMULÁRIO DE AGENDAMENTO =====================
// Valida os campos do formulário de agendamento de serviço
function validarFormularioAgendamento(event) {
    var nomeCliente = document.getElementById("nome-agendamento").value.trim();
    var nomePet = document.getElementById("pet-agendamento").value.trim();
    var telefone = document.getElementById("telefone-agendamento").value.trim();
    var data = document.getElementById("data-agendamento").value;
    var horario = document.getElementById("horario-agendamento").value;

    var mensagensErro = [];

    // Validação dos campos de texto
    if (nomeCliente.length < 3) {
        mensagensErro.push("Informe o nome do cliente.");
    }
    if (nomePet.length < 2) {
        mensagensErro.push("Informe o nome do pet.");
    }
    if (telefone.length < 10) {
        mensagensErro.push("Informe um telefone válido.");
    }

    // Validação do serviço selecionado
    var servicoSelecionado = document.querySelector('input[name="servico"]:checked');
    if (!servicoSelecionado) {
        mensagensErro.push("Selecione pelo menos um serviço (Banho ou Tosa).");
    }

    // Validação do método
    var metodoSelecionado = document.querySelector('input[name="metodo"]:checked');
    if (!metodoSelecionado) {
        mensagensErro.push("Selecione o método (Tele-busca ou Entrega no local).");
    }

    // Validação da data
    if (!data) {
        mensagensErro.push("Selecione a data do agendamento.");
    } else {
        var dataEscolhida = new Date(data);
        var hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        if (dataEscolhida < hoje) {
            mensagensErro.push("A data do agendamento não pode ser no passado.");
        }
    }

    // Validação do horário
    if (!horario) {
        mensagensErro.push("Selecione o horário do agendamento.");
    }

    // Se houver erros
    if (mensagensErro.length > 0) {
        event.preventDefault();
        alert("Por favor, corrija os seguintes erros:\n\n" + mensagensErro.join("\n"));
        return false;
    }

    // Confirmação
    event.preventDefault();
    var servico = servicoSelecionado.value;
    var metodo = metodoSelecionado.value;
    alert("Agendamento realizado com sucesso!\n\nCliente: " + nomeCliente +
          "\nPet: " + nomePet +
          "\nServiço: " + servico +
          "\nMétodo: " + metodo +
          "\nData: " + data +
          "\nHorário: " + horario);
    return true;
}

// ===================== ALERTA DE BOAS-VINDAS =====================
// Exibe um alerta de boas-vindas após 2 segundos (apenas na página inicial)
function alertaBoasVindas() {
    // Verifica se estamos na página inicial
    var titulo = document.title;
    if (titulo.indexOf("Início") !== -1) {
        setTimeout(function() {
            // Usa toast do Bootstrap se disponível
            var toastEl = document.getElementById("toast-boas-vindas");
            if (toastEl && typeof bootstrap !== "undefined") {
                var toast = new bootstrap.Toast(toastEl);
                toast.show();
            }
        }, 2000);
    }
}

// ===================== INICIALIZAÇÃO =====================
// Executa as funções quando a página terminar de carregar
window.onload = function() {
    atualizarRelogio();
    // Atualiza o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);
    atualizarAnoFooter();
    alertaBoasVindas();

    // Adiciona validação ao formulário de cadastro, se existir
    var formCadastro = document.getElementById("form-cadastro");
    if (formCadastro) {
        formCadastro.onsubmit = validarFormularioCadastro;
    }

    // Adiciona validação ao formulário de agendamento, se existir
    var formAgendamento = document.getElementById("form-agendamento");
    if (formAgendamento) {
        formAgendamento.onsubmit = validarFormularioAgendamento;
    }
};

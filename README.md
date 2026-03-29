# 🐾 PetShop Amigo Fiel - Sistema Web

## Descrição do Projeto

Este é o projeto das **Fase 1 e Fase 2** da disciplina de **Fundamentos de Sistemas Web**. Trata-se de um sistema web para um pet shop, desenvolvido utilizando **HTML, CSS, Bootstrap e JavaScript**.

## Objetivo

Desenvolver um sistema web front-end para o PetShop Amigo Fiel que permita a visualização de produtos por categorias, com imagens, descrições e valores, além dos serviços oferecidos, cadastro de clientes e pets, e agendamento de serviços.

## Metas

1. Criar páginas HTML estruturadas com cabeçalho, corpo e rodapé.
2. Apresentar produtos organizados em 3 categorias, com 2 produtos cada (foto, descrição e valor).
3. Listar os serviços do pet shop com descrição, valor e disponibilidade de tele-busca.
4. Estilizar o site com CSS e Bootstrap (carrossel de imagens, cards, tabelas).
5. Implementar funções dinâmicas em JavaScript (relógio, saudação, validação de formulários).
6. Formulário de cadastro do cliente e do pet com diversos tipos de input.
7. Formulário de agendamento de serviço com calendário e horário.
8. Atender requisitos de acessibilidade para deficientes visuais.
9. Publicar o projeto no GitHub e hospedá-lo via GitHub Pages.

## Estrutura do Site

O site possui **6 páginas** interligadas por navegação:

| Página | Arquivo | Descrição |
|--------|---------|-----------|
| **Início** | `index.html` | Carrossel de imagens e produtos em cards por categoria |
| **Serviços** | `servicos.html` | Tabela com serviços, preços e tele-busca |
| **Cadastro** | `cadastro.html` | Formulário de cadastro do cliente e do pet |
| **Agendamento** | `agendamento.html` | Agendamento de banho/tosa com calendário |
| **Sobre Nós** | `sobre.html` | História, missão, valores e equipe |
| **Contato** | `contato.html` | Informações de contato e formulário de mensagem |

## Categorias de Produtos

- **Alimentação**: Ração premium para cães e gatos
- **Brinquedos**: Bola de borracha e arranhador para gatos
- **Higiene e Cuidados**: Shampoo neutro e escova profissional

## Serviços Oferecidos

- Banho (com tele-busca)
- Tosa (com tele-busca)
- Banho + Tosa (com tele-busca)
- Consulta Veterinária
- Hospedagem (com tele-busca)
- Adestramento

## Tecnologias Utilizadas

- **HTML5** — Linguagem de marcação para estruturar as páginas
- **CSS3** — Estilização customizada complementar ao Bootstrap
- **Bootstrap 5** — Framework CSS para layout responsivo, navbar, carrossel, cards, tabelas e formulários (arquivos locais, sem CDN)
- **JavaScript** — Relógio em tempo real, saudação dinâmica, validação de formulários, ano automático no footer

## Ajustes Realizados da Fase 1 para a Fase 2

1. **Layout completo renovado**: todas as páginas receberam estilização com Bootstrap e CSS customizado.
2. **Navegação**: o menu de links simples foi substituído por uma Navbar responsiva do Bootstrap.
3. **Produtos**: as tabelas de produtos foram convertidas em Cards do Bootstrap com grid responsivo.
4. **Tabelas**: as tabelas de serviços e horários foram estilizadas com classes Bootstrap.
5. **Formulários**: os formulários existentes receberam classes Bootstrap e atributos required/placeholder.
6. **Acessibilidade**: todas as imagens receberam atributos alt descritivos, os elementos de navegação receberam aria-label, foi adicionado link skip-nav, e atributos role foram incluídos.
7. **Novas páginas**: cadastro.html (formulário completo de cliente e pet) e agendamento.html (agendamento de serviço com calendário).
8. **JavaScript adicionado**: relógio em tempo real, saudação dinâmica, validação dos formulários, ano automático no copyright.

## Formulário de Cadastro (cadastro.html)

Contém dois blocos:

**Dados do Cliente:**
- Nome completo (text, required, placeholder)
- CPF (text, required, placeholder)
- E-mail (email, required, placeholder)
- Telefone (tel, required, placeholder)
- Endereço (text, required, placeholder)
- Sexo (radio button: Masculino / Feminino / Outro)
- Aceita promoções (checkbox)

**Dados do Pet:**
- Nome do pet (text, required, placeholder)
- Espécie (select: Cão / Gato / Outro)
- Raça (text, required, placeholder)
- Idade (number, required, min/max)

## Agendamento de Serviço (agendamento.html)

- Serviço: checkbox (Banho / Tosa)
- Método: radio button (Tele-busca / Entrega no local)
- Data: input date (calendário nativo HTML5)
- Horário: input time
- Validação com JavaScript

## Acessibilidade

- Atributo `alt` descritivo em todas as imagens (audiodescrição)
- Atributos `aria-label` nos links de navegação
- Atributos `role` nos elementos semânticos (navigation, main, contentinfo, status)
- Link "Pular para o conteúdo" (skip-nav) no topo de cada página
- Idioma `lang="pt-BR"` em todas as páginas

## Estrutura de Arquivos

```
├── index.html            # Página inicial com carrossel e produtos
├── servicos.html         # Página de serviços
├── cadastro.html         # Formulário de cadastro (cliente + pet)
├── agendamento.html      # Formulário de agendamento de serviço
├── sobre.html            # Sobre o pet shop
├── contato.html          # Contato e formulário de mensagem
├── css/
│   ├── bootstrap.min.css # Bootstrap 5 (arquivo local)
│   └── style.css         # CSS customizado do tema
├── js/
│   ├── bootstrap.bundle.min.js  # Bootstrap JS (arquivo local)
│   └── main.js           # JavaScript customizado
├── imagens/
│   ├── racao_caes.png
│   ├── racao_gatos.png
│   ├── brinquedo_bola.png
│   ├── brinquedo_arranhador.png
│   ├── shampoo_pet.png
│   ├── escova_pet.png
│   ├── carousel_1.png    # Banner carrossel: boas-vindas
│   ├── carousel_2.png    # Banner carrossel: serviços
│   └── carousel_3.png    # Banner carrossel: produtos
└── README.md             # Este arquivo
```

## Como Acessar

1. Acesse o link do GitHub Pages: [https://israeldocanto.github.io/fundamentos-de-Sistemas-Web-Projeto-1-e-2/](https://israeldocanto.github.io/fundamentos-de-Sistemas-Web-Projeto-1-e-2/)
2. Navegue pelo menu no topo de qualquer página
3. Explore os produtos, serviços, cadastro e agendamento

## Autor

Israel Canto — Projeto acadêmico para a disciplina de Fundamentos de Sistemas Web.

---

&copy; 2026 PetShop Amigo Fiel - Todos os direitos reservados.

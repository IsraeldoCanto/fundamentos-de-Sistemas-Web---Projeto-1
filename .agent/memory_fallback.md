### [semantic] 2026-03-29 10:07 - Fase 1 Concluída e Arquitetura do Projeto
- **Projeto:** PetShop Amigo Fiel (Fase 1 - Fundamentos de Sistemas Web)
- **Tecnologias atuais:** Apenas HTML puro (Sem CSS, Bootstrap ou JavaScript). O JavaScript e a estilização serão adicionados na Fase 2 e posteriores.
- **Estrutura de Arquivos Base:**
  - `index.html`: Página principal com 3 categorias e 6 produtos no total.
  - `servicos.html`: Tabela de serviços detalhando preços e tele-busca.
  - `sobre.html`: História, missão, valores e equipe.
  - `contato.html`: Tabela de contato e formulário estático.
  - `imagens/`: Diretório contendo 6 imagens de produtos (`racao_caes.png`, `racao_gatos.png`, `brinquedo_bola.png`, `brinquedo_arranhador.png`, `shampoo_pet.png`, `escova_pet.png`).
  - `README.md`: Documentação com objetivo, estrutura e links.

### [procedural] 2026-03-29 10:07 - Acessos, Ferramentas e GitHub
- **Repositório GitHub (Criado Manualmente):** `https://github.com/IsraeldoCanto/fundamentos-de-Sistemas-Web---Projeto-1`
- **GitHub Pages:** `https://israeldocanto.github.io/fundamentos-de-Sistemas-Web---Projeto-1/`
- **Workflow de Deploy Recomendado (Fase 2):** 
  - O repositório já está linkado localmente a `origin`.
  - Use comandos tradicionais de git: `git add .`, `git commit -m "..."`, e `git push`.
  - Motivo: O MCP do GitHub falhou por `Bad credentials` (token inválido na config da extensão) e a configuração do CLI `gh` entrou em conflito temporário com a variável de ambiente. O push nativo pelo git com a origin HTTPS funcionou perfeitamente usando o gerenciador de credenciais do Windows.
- **Ferramentas na máquina local:** O `gh` (GitHub CLI) foi instalado na pasta do usuário via `winget`, caso precise ser usado novamente no futuro (`gh auth login --web`).

### [episodic] 2026-03-29 10:07 - Histórico de Setup da Fase 1
- Ocorreram falhas ao tentar criar o repositório automaticamente via ferramenta MCP do GitHub. A solução adotada em conjunto com o usuário foi a criação manual do repositório remoto ("fundamentos-de-Sistemas-Web---Projeto-1") e posterior conexão e push local.
- O site exige ativação manual do GitHub Pages nas configurações do repósitório via browser.

$(document).ready(function () {

    /**
     * Ocultar DIV para surgir o conteudo lentamente
     */
    $("#descricaoProjeto").css("display", "none")

    /**
     * Pegar codigo (identificacao do projeto) o qual deve retornar a descricao
     */
    var cod = $("#numeroProjeto").val();
    if (cod == null || cod == '' || isNaN(cod)) {
        cod = "nenhumIDinformado";
    }

    /**
     * Criar array com as descricoes dos projetos associados a uma chave (numero)
     */
    var descricoes = {
        "nenhumIDinformado": {
            "topico": "project.not_found",
            "titulo": "Ops... nenhum projeto encontrado",
            "subtitulo": "Nenhum projeto foi localizado para o identificador informado.",
            "imagem": "../assets/projetos/not-found.jpg",
            "tags": "Erro|Projeto não encontrado|Portfólio",
            "tipo": "Página de fallback",
            "dominio": "Navegação do portfólio",
            "papel_tecnico": "Tratamento de estado vazio",
            "complexidade": "Validação de parâmetro e experiência de navegação",
            "contexto": "Essa página é exibida quando nenhum identificador de projeto é informado ou quando o projeto solicitado não existe no array de dados.",
            "arquitetura": "A estrutura funciona como uma resposta de fallback para preservar a navegação e evitar quebra de interface.",
            "arquitetura_topicos": "01 / entrada|02 / validação|03 / fallback|04 / navegação",
            "arquitetura_titulo": "Identificador recebido|Consulta ao array|Estado vazio|Retorno ao portfólio",
            "arquitetura_descricao": "A página recebe um código de projeto pela URL.|O código é validado contra o objeto de projetos disponível.|Caso não exista, uma mensagem amigável é exibida.|O usuário é direcionado de volta para a listagem de projetos.",
            "decisao_titulo": "Evitar página quebrada|Preservar navegação|Mensagem simples",
            "decisao_descricao": "Mesmo sem projeto válido, a experiência deve continuar funcional.|O usuário precisa conseguir voltar rapidamente para a home do portfólio.|A mensagem deve ser clara, objetiva e sem excesso técnico.",
            "tecnologias": "HTML, CSS e JavaScript.",
            "tags_tecnologias": "HTML|CSS|JavaScript",
            "atuacao": "Estruturação de estado de erro para navegação dinâmica entre projetos.",
            "galeria": "../assets/projetos/not-found.jpg",
            "prox_projeto": "1"
        },

        "1": {
            "topico": "iot.research / cnpq",
            "titulo": "Monitoramento IoT para Data Centers",
            "subtitulo": "Sistema de Internet das Coisas para monitoramento térmico, presença e condições ambientais em ambientes computacionais críticos.",
            "imagem": "../images/geral/img8.png",
            "tags": "IoT|Data Center|Monitoramento|Telemetria|Grafana|Flask",
            "tipo": "Pesquisa aplicada / Sistema IoT",
            "dominio": "Internet das Coisas, data centers e ambientes críticos",
            "papel_tecnico": "Desenvolvimento, integração, visualização de dados e aplicação web",
            "complexidade": "Captura de sensores, telemetria, armazenamento, visualização, alertas e representação de planta técnica",
            "contexto": "O projeto foi desenvolvido durante uma bolsa de Iniciação Tecnológica vinculada ao CNPq e ao Centro Paula Souza. A proposta era monitorar temperatura, umidade relativa e presença de pessoas em data centers e ambientes computacionais críticos, operando em tempo real para apoiar a tomada de decisão em cenários sensíveis.",
            "arquitetura": "A solução conecta sensores e microcontroladores a uma cadeia de telemetria, tratamento, armazenamento e visualização. Além dos dashboards, foi desenvolvida uma ferramenta própria para representar a planta do data center conforme o padrão ANSI/TIA-942 e exibir as condições térmicas por ponto monitorado.",
            "arquitetura_topicos": "01 / sensores|02 / telemetria|03 / armazenamento|04 / visualização",
            "arquitetura_titulo": "Coleta ambiental|Transmissão dos dados|Série temporal|Painéis e planta técnica",
            "arquitetura_descricao": "Sensores capturam temperatura, umidade e presença em pontos críticos.|Microcontroladores transmitem os dados por protocolos de mensageria.|Os dados são armazenados para consulta histórica e análise operacional.|Dashboards e uma planta técnica exibem o comportamento térmico do ambiente.",
            "decisao_titulo": "Usar IoT em tempo real|Separar coleta e visualização|Criar planta própria",
            "decisao_descricao": "Ambientes críticos exigem leitura contínua e rápida das variáveis ambientais.|A separação entre sensores, armazenamento e visualização facilita manutenção e evolução.|A planta técnica permite leitura espacial das condições térmicas, indo além de gráficos tradicionais.",
            "tecnologias": "ESP32, SHT30, Arduino, MQTT, SMTP, Mosquitto, Python, Node-RED, InfluxDB, Flask, Grafana e Linux.",
            "tags_tecnologias": "ESP32|SHT30|Arduino|MQTT|Python|Node-RED|InfluxDB|Flask|Grafana|Linux",
            "atuacao": "Atuação na construção da solução IoT, integração entre sensores e camadas de aplicação, criação de visualização técnica e estruturação do fluxo de monitoramento.",
            "galeria": "../images/geral/img8.png|../images/geral/img9.png|../images/geral/img10.png|../images/geral/img11.png",
            "prox_projeto": "2"
        },

        "2": {
            "topico": "academic.project / cloud.iot",
            "titulo": "Trabalho de Graduação em Monitoramento Remoto",
            "subtitulo": "Extensão de um sistema IoT local para monitoramento remoto em nuvem de variáveis ambientais em data centers.",
            "imagem": "../images/projetos/imagem9.avif",
            "tags": "IoT|Cloud|AWS IoT Core|Data Center|Monitoramento|Grafana",
            "tipo": "Trabalho de Graduação / Sistema IoT em nuvem",
            "dominio": "Monitoramento ambiental remoto e computação em nuvem",
            "papel_tecnico": "Desenvolvimento, integração cloud, monitoramento e visualização de dados",
            "complexidade": "Integração entre camada física, telemetria local, nuvem, dashboards e monitoramento remoto em tempo real",
            "contexto": "O projeto foi apresentado como Trabalho de Graduação na Fatec Cruzeiro. Ele parte da base do sistema IoT desenvolvido no contexto do CNPq, mas adiciona a capacidade de monitoramento remoto por meio de computação em nuvem.",
            "arquitetura": "A solução conecta sensores ambientais a serviços locais e remotos, permitindo que os dados sejam enviados, armazenados e visualizados tanto localmente quanto em ambiente cloud, mantendo clareza operacional em tempo real.",
            "arquitetura_topicos": "01 / sensores|02 / rede local|03 / nuvem|04 / dashboard",
            "arquitetura_titulo": "Coleta ambiental|Comunicação local|Monitoramento remoto|Visualização em tempo real",
            "arquitetura_descricao": "Sensores capturam variáveis críticas do ambiente.|Os dados são transmitidos por WiFi e mensageria.|Serviços cloud recebem e disponibilizam os dados remotamente.|Dashboards exibem as medições com clareza operacional.",
            "decisao_titulo": "Expandir o monitoramento|Usar cloud para acesso remoto|Manter leitura em tempo real",
            "decisao_descricao": "O projeto precisava ir além da visualização local.|A nuvem permite acompanhamento remoto do ambiente monitorado.|A utilidade do sistema depende da atualização contínua das informações.",
            "tecnologias": "ESP32, SHT30, Arduino, WiFi, MQTT, SMTP, Mosquitto, Python, Node-RED, InfluxDB, InfluxDB Cloud, IoT Home, AWS IoT Core, Flask, Grafana e Linux.",
            "tags_tecnologias": "ESP32|SHT30|WiFi|MQTT|Python|Node-RED|InfluxDB Cloud|AWS IoT Core|Flask|Grafana|Linux",
            "atuacao": "Participação no desenvolvimento técnico, integração cloud, organização do fluxo de monitoramento e construção da solução apresentada como trabalho acadêmico.",
            "galeria": "../images/geral/img8.png|../images/projetos/imagem9.avif",
            "prox_projeto": "3"
        },

        "3": {
            "topico": "ai.ocr / document.analysis",
            "titulo": "OCR em Python",
            "subtitulo": "Aplicação de reconhecimento óptico de caracteres para extração, leitura e análise simples de conteúdo textual em imagens.",
            "imagem": "../images/geral/img12.png",
            "tags": "OCR|Python|Streamlit|Pytesseract|Regex|IA Aplicada",
            "tipo": "Aplicação de IA / OCR",
            "dominio": "Reconhecimento de caracteres e análise de documentos",
            "papel_tecnico": "Desenvolvimento da aplicação, extração textual e análise baseada em padrões",
            "complexidade": "Leitura de imagem, extração de texto, busca por padrões e análise semântica simplificada",
            "contexto": "O projeto demonstra o uso de OCR para identificar caracteres em imagens e permitir manipulações posteriores, como busca por padrões e análise de teor das palavras.",
            "arquitetura": "A aplicação recebe uma imagem como entrada, executa OCR, transforma o conteúdo visual em texto e aplica análises simples sobre o resultado, incluindo expressões regulares e contagem de palavras classificadas.",
            "arquitetura_topicos": "01 / entrada|02 / OCR|03 / análise|04 / resultado",
            "arquitetura_titulo": "Upload da imagem|Extração de texto|Busca por padrões|Exibição interpretada",
            "arquitetura_descricao": "O usuário envia uma imagem para análise.|O OCR identifica os caracteres presentes na imagem.|Regex e regras simples buscam datas, CPFs e palavras relevantes.|A interface apresenta o texto extraído e os indicadores calculados.",
            "decisao_titulo": "Usar OCR como base|Aplicar Regex|Demonstrar análise textual",
            "decisao_descricao": "O OCR transforma conteúdo visual em dados manipuláveis.|Regex permite localizar padrões específicos dentro do texto extraído.|A análise de palavras demonstra potencial para automação documental.",
            "tecnologias": "Python, Streamlit e Pytesseract.",
            "tags_tecnologias": "Python|Streamlit|Pytesseract|Regex|OCR",
            "atuacao": "Construção da aplicação, integração com OCR, definição das análises textuais e interface para demonstração do processamento.",
            "galeria": "../images/geral/img12.png|../images/geral/img13.png",
            "prox_projeto": "4"
        },

        "4": {
            "topico": "ai.routing / graph.search",
            "titulo": "Rotas Cidades",
            "subtitulo": "Algoritmo de IA para geração de rotas multiobjetivo em cenários de ajuda humanitária no Vale do Paraíba.",
            "imagem": "../images/projetos/imagem3.avif",
            "tags": "IA|Grafos|Rotas|Caixeiro Viajante|Streamlit|Python",
            "tipo": "Aplicação de IA / Algoritmos de rota",
            "dominio": "Busca em grafos, roteamento e otimização",
            "papel_tecnico": "Modelagem do problema, implementação do algoritmo e construção da interface",
            "complexidade": "Geração de rotas considerando múltiplos critérios, cidades reais, pontos de ajuda e atendimento hospitalar",
            "contexto": "O projeto é baseado na problemática do caixeiro viajante, aplicado a um cenário de ajuda humanitária. O algoritmo recebe uma cidade afetada por desastre e gera rotas para pontos de ajuda e atendimento hospitalar.",
            "arquitetura": "A solução representa cidades como nós de um grafo e conexões como possibilidades de deslocamento. O usuário define critérios de rota, e o algoritmo calcula caminhos considerando saltos, distância e objetivos distintos.",
            "arquitetura_topicos": "01 / cidades|02 / grafo|03 / critérios|04 / rota",
            "arquitetura_titulo": "Base territorial|Modelagem em grafo|Escolha do objetivo|Caminho calculado",
            "arquitetura_descricao": "O projeto usa cidades reais do Vale do Paraíba.|As cidades e conexões são representadas como estrutura de grafo.|O usuário escolhe se deseja otimizar saltos, distância ou outro critério.|O sistema retorna a rota mais adequada para o objetivo selecionado.",
            "decisao_titulo": "Usar região real|Aplicar problema clássico|Tratar múltiplos objetivos",
            "decisao_descricao": "A validação com cidades reais torna o projeto mais concreto.|O caixeiro viajante oferece uma base conceitual forte para roteamento.|O cenário exige mais de uma decisão: ajuda humanitária e atendimento hospitalar.",
            "tecnologias": "Python e Streamlit.",
            "tags_tecnologias": "Python|Streamlit|Grafos|Busca|Otimização",
            "atuacao": "Participação na modelagem da solução, implementação da lógica de rotas, estruturação dos dados e construção da interface de simulação.",
            "galeria": "../images/projetos/imagem3.avif|../images/geral/img14.png",
            "prox_projeto": "5"
        },

        "5": {
            "topico": "python.package / graph.search",
            "titulo": "WayPy Routing",
            "subtitulo": "Pacote Python para encontrar caminhos em grafos direcionados, com algoritmos clássicos de busca ponderada e não ponderada reunidos em uma API orientada a objetos.\n<button class='tag'><a href='https://pypi.org/project/waypy-routing/' target='_blank'>ACESSAR PROJETO</a></button>",
            "imagem": "../images/projetos/imagem3.png",
            "tags": "Python|Pacote|Grafos Direcionados|Busca|A*|Custo Uniforme",
            "tipo": "Pacote Python / Biblioteca de algoritmos",
            "dominio": "Busca de caminhos em grafos direcionados",
            "papel_tecnico": "Implementação da API, algoritmos de busca, empacotamento, testes e documentação",
            "complexidade": "Unificação de buscas ponderadas e não ponderadas em uma interface reutilizável, mantendo compatibilidade com a API original",
            "contexto": "O WayPy Routing é um pacote Python compacto para encontrar caminhos entre dois pontos em grafos direcionados. A biblioteca oferece algoritmos clássicos de busca por meio de uma API simples e orientada a objetos.",
            "arquitetura": "A classe Agent recebe grafos por listas de adjacência simples ou ponderadas. A partir dessa representação, a aplicação escolhe um método de busca e retorna o caminho encontrado; nas buscas ponderadas, o resultado também informa o custo total.",
            "arquitetura_topicos": "01 / grafo|02 / agente|03 / método|04 / resultado",
            "arquitetura_titulo": "Lista de adjacência|API orientada a objetos|Estratégia de busca|Caminho e custo",
            "arquitetura_descricao": "O grafo direcionado é definido com adjacências simples ou arestas ponderadas.|A classe Agent centraliza a criação e a execução das buscas.|O usuário seleciona um dos métodos disponíveis para o tipo de grafo.|A API retorna o caminho e, quando aplicável, seu custo total.",
            "decisao_titulo": "Separar tipos de busca|Oferecer API direta|Preservar compatibilidade",
            "decisao_descricao": "Métodos específicos atendem grafos ponderados e não ponderados.|Agent, find_path e find_weighted_path formam a interface recomendada para novos projetos.|Aliases e a classe Agente mantêm compatibilidade com a API original em português.",
            "tecnologias": "Python.",
            "tags_tecnologias": "Python|PyPI|BFS|DFS|Profundidade Limitada|Aprofundamento Iterativo|Busca Bidirecional|Custo Uniforme|Greedy|A*",
            "atuacao": "Desenvolvimento da API orientada a objetos, implementação dos oito métodos de busca, manutenção da compatibilidade com a interface original, testes, documentação e publicação do pacote.",
            "galeria": "../images/projetos/imagem3.png|../images/geral/img15.png",
            "prox_projeto": "6"
        },

        "6": {
            "topico": "machine.learning / decision.tree",
            "titulo": "Classificador de Obesidade",
            "subtitulo": "Interface baseada em árvore de decisão para classificação de nível de peso a partir de características físicas e hábitos de vida.",
            "imagem": "https://github.com/guilhermedonizetti/Classificador_Obesidade/blob/master/images/imagem1.png?raw=true",
            "tags": "Machine Learning|Árvore de Decisão|Weka|J48|Streamlit|Python",
            "tipo": "Aplicação de Machine Learning",
            "dominio": "Classificação supervisionada e saúde baseada em dados",
            "papel_tecnico": "Treinamento, interpretação do modelo, interface e implementação da classificação",
            "complexidade": "Conversão de respostas em atributos, aplicação de árvore de decisão e apresentação de classificação final",
            "contexto": "O projeto cria uma interface para classificar uma pessoa em categorias de peso a partir de 16 campos relacionados a características físicas e estilo de vida. O modelo foi construído com algoritmo J48 no Weka, usando dataset público.",
            "arquitetura": "O usuário preenche um formulário, as respostas são convertidas em valores numéricos, passam pelas condições da árvore de decisão e resultam em uma classe de peso.",
            "arquitetura_topicos": "01 / formulário|02 / atributos|03 / modelo|04 / classificação",
            "arquitetura_titulo": "Entrada do usuário|Transformação dos dados|Árvore de decisão|Categoria final",
            "arquitetura_descricao": "O usuário responde campos físicos e comportamentais.|As respostas são convertidas para atributos compatíveis com o modelo.|A árvore J48 percorre regras até encontrar uma folha.|A aplicação apresenta a categoria de classificação.",
            "decisao_titulo": "Usar árvore de decisão|Criar interface simples|Basear em dataset público",
            "decisao_descricao": "Árvores são interpretáveis e facilitam explicar a classificação.|A interface torna o modelo acessível a usuários não técnicos.|O dataset público permite validação e reprodutibilidade do estudo.",
            "tecnologias": "Python, Streamlit, Weka e J48.",
            "tags_tecnologias": "Python|Streamlit|Weka|J48|Machine Learning",
            "atuacao": "Construção da interface, uso do modelo de classificação e organização do fluxo de entrada, processamento e saída.",
            "galeria": "https://github.com/guilhermedonizetti/Classificador_Obesidade/blob/master/images/imagem1.png?raw=true",
            "prox_projeto": "7"
        },

        "7": {
            "topico": "api.rest / geographic.data",
            "titulo": "API Vale do Paraíba",
            "subtitulo": "API REST para disponibilização de latitude e longitude de cidades do Vale do Paraíba.",
            "imagem": "../assets/projetos/api-vale-paraiba.jpg",
            "tags": "API|Flask|REST|Geolocalização|Python|Heroku",
            "tipo": "API REST",
            "dominio": "Dados geográficos e integração entre aplicações",
            "papel_tecnico": "Desenvolvimento da API, estruturação dos endpoints e disponibilização dos dados",
            "complexidade": "Entrega de dados geográficos padronizados para consumo por aplicações externas",
            "contexto": "A API responde requisições GET para fornecer dados de latitude e longitude de cidades do Vale do Paraíba. Ela foi usada como suporte ao projeto Rotas Cidades.",
            "arquitetura": "A API expõe endpoints para consulta individual ou completa das cidades, permitindo que outras aplicações consumam os dados geográficos de forma simples.",
            "arquitetura_topicos": "01 / dados|02 / endpoint|03 / consumo|04 / integração",
            "arquitetura_titulo": "Base de cidades|Rotas HTTP|Resposta JSON|Uso em outro projeto",
            "arquitetura_descricao": "O conjunto contém cidades do Vale do Paraíba.|A API expõe requisições GET para consulta dos dados.|As respostas entregam latitude e longitude em formato consumível.|O projeto Rotas Cidades utiliza a API para alimentar cálculos.",
            "decisao_titulo": "Criar serviço simples|Separar dados da aplicação|Usar REST",
            "decisao_descricao": "O conjunto de dados é pequeno, então a API pode ser objetiva.|Separar dados permite reutilização em outros sistemas.|REST simplifica consumo por aplicações web e scripts.",
            "tecnologias": "Python, Flask, Postman, RESTful e Heroku.",
            "tags_tecnologias": "Python|Flask|REST|Postman|Heroku",
            "atuacao": "Criação da API, definição das rotas, organização dos dados e integração com o projeto de rotas.",
            "galeria": "../assets/projetos/api-vale-paraiba.jpg",
            "prox_projeto": "8"
        },

        "8": {
            "topico": "business.system / fiscal.automation",
            "titulo": "Emissão Automática de Notas Fiscais",
            "subtitulo": "Recurso para emissão automática de NFS-e e NFC-e a partir de vendas registradas em sistema de gestão.",
            "imagem": "https://raw.githubusercontent.com/guilhermedonizetti/Portofolio/master/static/images/diagrama_nota_fiscal.avif",
            "tags": "Notas Fiscais|NFS-e|NFC-e|Webhook|API|Automação Fiscal",
            "tipo": "Automação fiscal / Sistema de gestão",
            "dominio": "Fiscal, faturamento e integração com órgãos emissores",
            "papel_tecnico": "Desenvolvimento backend, integração fiscal, regras de emissão e tratamento de retornos",
            "complexidade": "Validação fiscal, geração de JSON, comunicação com SEFAZ e prefeituras, webhooks, logs e status de emissão",
            "contexto": "O recurso foi desenvolvido para emitir automaticamente notas fiscais de vendas cadastradas em um sistema de gestão. A emissão depende de dados do prestador, tomador, serviço ou produto e regras fiscais específicas.",
            "arquitetura": "O sistema identifica vendas pendentes de emissão, valida os dados fiscais necessários, gera o JSON, envia para SEFAZ ou prefeitura e atualiza o status conforme retorno via webhook.",
            "arquitetura_topicos": "01 / venda|02 / validação|03 / emissão|04 / retorno",
            "arquitetura_titulo": "Venda cadastrada|Dados fiscais conferidos|Envio ao órgão emissor|Atualização por webhook",
            "arquitetura_descricao": "A venda gera dados necessários para emissão da nota.|O sistema valida prestador, tomador, serviço, regime e dados obrigatórios.|O JSON é enviado para SEFAZ ou prefeitura conforme o tipo de nota.|O webhook atualiza status, logs, PDF e XML.",
            "decisao_titulo": "Automatizar emissão|Validar antes do envio|Tratar retornos diversos",
            "decisao_descricao": "A emissão manual gera esforço operacional e risco de atraso.|A validação reduz rejeições causadas por dados incompletos.|O sistema precisa lidar com aprovado, rejeitado, processando, cancelado e outros estados.",
            "tecnologias": "PHP, SQL, Postman e RESTful API.",
            "tags_tecnologias": "PHP|SQL|REST API|Postman|Webhook|NFS-e|NFC-e",
            "atuacao": "Desenvolvimento da lógica de emissão, integração com serviços fiscais, tratamento de retornos, controle de status e registros de operação.",
            "galeria": "https://raw.githubusercontent.com/guilhermedonizetti/Portofolio/master/static/images/diagrama_nota_fiscal.avif",
            "prox_projeto": "9"
        },

        "9": {
            "topico": "payment.integration / checkout",
            "titulo": "Pagamento Online",
            "subtitulo": "Integração com Checkout Transparente do Mercado Pago para geração de cobranças, pagamentos e controle de credenciais.",
            "imagem": "https://http2.mlstatic.com/storage/dx-devsite/docs-assets/images/api/api-integration-flowchart-cardform-pt.png?v=4.1.5-rc-5",
            "tags": "Pagamento Online|Mercado Pago|Checkout|PIX|Boleto|Cartão|API",
            "tipo": "Integração de pagamento",
            "dominio": "Pagamentos digitais, cobrança e transações online",
            "papel_tecnico": "Integração com API, segurança de credenciais, checkout e controle de status",
            "complexidade": "Geração de links, checkout transparente, múltiplos meios de pagamento, credenciais por unidade e status transacional",
            "contexto": "O recurso foi desenvolvido para gerar cobranças online a partir do processo de venda, permitindo pagamento por PIX, boleto, débito ou crédito com interface integrada ao padrão visual do sistema.",
            "arquitetura": "A venda gera um link de cobrança com dados pré-preenchidos. A página de pagamento se comunica com a API do Mercado Pago, processa o pagamento e apresenta o status ao cliente.",
            "arquitetura_topicos": "01 / venda|02 / cobrança|03 / pagamento|04 / status",
            "arquitetura_titulo": "Dados da venda|Link de pagamento|Checkout transparente|Retorno transacional",
            "arquitetura_descricao": "A venda fornece valor, cliente e descrição da compra.|O sistema gera uma página ou link de cobrança.|O cliente paga por PIX, boleto ou cartão.|A interface apresenta aprovado, rejeitado ou em processamento.",
            "decisao_titulo": "Usar checkout transparente|Proteger credenciais|Preservar experiência visual",
            "decisao_descricao": "O checkout transparente evita sensação de sair do sistema.|Tokens e IDs exigem armazenamento e comunicação segura.|A interface mantém consistência com o sistema da empresa.",
            "tecnologias": "PHP, JavaScript, SQL, Postman, API Checkout Transparente e conta Mercado Pago.",
            "tags_tecnologias": "PHP|JavaScript|SQL|Postman|Mercado Pago|API|PIX|Boleto|Cartão",
            "atuacao": "Desenvolvimento da integração de cobrança, controle de credenciais, página de pagamento, comunicação com API e tratamento do status transacional.",
            "galeria": "https://http2.mlstatic.com/storage/dx-devsite/docs-assets/images/api/api-integration-flowchart-cardform-pt.png?v=4.1.5-rc-5",
            "prox_projeto": "10"
        },

        "10": {
            "topico": "computer.vision / barcode",
            "titulo": "Leitor de Código de Barras",
            "subtitulo": "Aplicação para capturar imagens de códigos de barras e identificar valores associados ao padrão EAN13.",
            "imagem": "https://github.com/guilhermedonizetti/Leitor_Codigo_Barras/blob/master/images/codigo_barras.png?raw=true",
            "tags": "Visão Computacional|Código de Barras|OpenCV|Pyzbar|Streamlit|Python",
            "tipo": "Aplicação de visão computacional",
            "dominio": "Leitura de código de barras e automação de identificação",
            "papel_tecnico": "Captura de imagem, processamento visual e identificação de código",
            "complexidade": "Uso de webcam, captura de imagem, leitura de padrão EAN13 e associação de valores",
            "contexto": "O programa captura a imagem de um código de barras e identifica o valor associado a ele. A interface permite abrir a câmera, registrar uma imagem e processar o código.",
            "arquitetura": "A aplicação usa webcam ou imagem capturada, executa processamento visual para identificar o código EAN13 e retorna o valor associado.",
            "arquitetura_topicos": "01 / câmera|02 / captura|03 / processamento|04 / identificação",
            "arquitetura_titulo": "Entrada visual|Registro da imagem|Leitura do código|Valor associado",
            "arquitetura_descricao": "O usuário ativa a câmera ou fornece uma imagem.|A aplicação captura o frame com o código.|Bibliotecas de visão computacional processam a imagem.|O valor associado ao código é identificado e exibido.",
            "decisao_titulo": "Usar webcam|Aplicar padrão EAN13|Gerar imagens de teste",
            "decisao_descricao": "A webcam permite simular uso prático em pontos de venda.|EAN13 é um padrão comum em produtos comerciais.|As imagens geradas permitiram validar diferentes condições de leitura.",
            "tecnologias": "Python, Streamlit, OpenCV, Pyzbar, Barcode e webcam.",
            "tags_tecnologias": "Python|Streamlit|OpenCV|Pyzbar|Barcode|Webcam",
            "atuacao": "Construção da interface, processamento da imagem, leitura do código e validação com imagens geradas para teste.",
            "galeria": "https://github.com/guilhermedonizetti/Leitor_Codigo_Barras/blob/master/images/codigo_barras.png?raw=true",
            "prox_projeto": "11"
        },

        "11": {
            "topico": "data.visualization / weather.api",
            "titulo": "Previsão do Tempo",
            "subtitulo": "Aplicação para consulta meteorológica, visualização de temperaturas em gráfico e exportação da imagem do resultado.",
            "imagem": "../images/geral/img17.png",
            "tags": "Flask|JavaScript|ChartJS|API|Ajax|Visualização de Dados",
            "tipo": "Web app / Visualização de dados",
            "dominio": "Consulta meteorológica, APIs e gráficos dinâmicos",
            "papel_tecnico": "Backend Flask, integração com API, atualização dinâmica de gráficos e exportação visual",
            "complexidade": "Requisição assíncrona, recriação dinâmica de canvas, escala compartilhada e exportação de gráfico",
            "contexto": "O programa consulta dados meteorológicos de uma cidade e exibe temperaturas mínimas e máximas dos próximos dias em gráfico de linhas. Também permite exportar o gráfico em PNG.",
            "arquitetura": "A aplicação recebe uma cidade, consulta uma API externa, organiza os dados no backend e retorna ao frontend para geração dinâmica do gráfico com ChartJS.",
            "arquitetura_topicos": "01 / busca|02 / API|03 / gráfico|04 / exportação",
            "arquitetura_titulo": "Cidade selecionada|Consulta meteorológica|Renderização dinâmica|Download da imagem",
            "arquitetura_descricao": "O usuário seleciona uma cidade para consulta.|O backend consome a API HG Brasil e organiza os dados.|O frontend cria ou recria o gráfico com ChartJS.|O gráfico pode ser convertido em imagem e baixado.",
            "decisao_titulo": "Usar Ajax|Recriar canvas|Padronizar escala",
            "decisao_descricao": "Ajax evita recarregar a página a cada consulta.|O canvas precisa ser recriado para atualizar corretamente o gráfico.|A escala única facilita comparar temperaturas mínimas e máximas.",
            "tecnologias": "Python, Flask, JavaScript, ChartJS, HTML e API HG Brasil.",
            "tags_tecnologias": "Python|Flask|JavaScript|ChartJS|HTML|Ajax|API",
            "atuacao": "Implementação do backend, consumo da API, organização dos dados, atualização dinâmica do gráfico e exportação em imagem.",
            "galeria": "../images/geral/img17.png|../images/geral/img18.png|../images/geral/img19.gif",
            "prox_projeto": "12"
        },

        "12": {
            "topico": "data.visualization / mysql.dashboard",
            "titulo": "Zenith",
            "subtitulo": "Ferramenta para visualização local de dados a partir de bases MySQL, com gráficos configuráveis pelo usuário.",
            "imagem": "../assets/projetos/zenith.jpg",
            "tags": "PHP|MySQL|ChartJS|Dashboard|Visualização de Dados",
            "tipo": "Ferramenta de visualização de dados",
            "dominio": "Banco de dados, dashboards e visualização local",
            "papel_tecnico": "Desenvolvimento da interface, conexão com banco e geração de gráficos",
            "complexidade": "Conexão dinâmica com bases MySQL, seleção de tabelas, campos, agregações e atualização periódica",
            "contexto": "O Zenith foi desenvolvido para o evento Acelera da Fatec Cruzeiro com o objetivo de facilitar a visualização de dados para usuários sem domínio técnico em programação ou banco de dados.",
            "arquitetura": "O usuário informa dados de conexão MySQL, seleciona uma tabela, escolhe campos para eixos ou acumulação e define a frequência de atualização dos gráficos.",
            "arquitetura_topicos": "01 / conexão|02 / tabelas|03 / configuração|04 / gráfico",
            "arquitetura_titulo": "Banco MySQL|Leitura da estrutura|Campos e período|Visualização atualizada",
            "arquitetura_descricao": "O sistema recebe credenciais e tenta conexão com a base.|Ao conectar, retorna as tabelas disponíveis.|O usuário escolhe eixo X, eixo Y, agregação e frequência.|O gráfico é exibido e atualizado conforme configuração.",
            "decisao_titulo": "Não armazenar dados|Aceitar bases externas|Simplificar gráficos",
            "decisao_descricao": "O Zenith atua como camada de visualização, não como banco próprio.|A conexão com bases externas aumenta flexibilidade.|A interface reduz barreira para usuários não técnicos.",
            "tecnologias": "PHP, MySQL, ChartJS e Google Developer.",
            "tags_tecnologias": "PHP|MySQL|ChartJS|Google Developer|Dashboard",
            "atuacao": "Participação no desenvolvimento da ferramenta, conexão com banco, configuração de gráficos e visualização de dados.",
            "galeria": "../assets/projetos/zenith.jpg",
            "prox_projeto": "13"
        },

        "13": {
            "topico": "technical.course / web.platform",
            "titulo": "Plataforma para Construção Civil",
            "subtitulo": "Sistema web para aproximar profissionais da construção civil e pessoas interessadas em contratar serviços.",
            "imagem": "../assets/projetos/construcao-civil.jpg",
            "tags": "PHP|MySQL|HTML|CSS|JavaScript|Sistema Web",
            "tipo": "TCC Técnico / Plataforma web",
            "dominio": "Marketplace profissional e busca por prestadores",
            "papel_tecnico": "Desenvolvimento web, cadastro, busca e filtros",
            "complexidade": "Cadastro de profissionais, perfis, filtros por especialidade, estado e cidade",
            "contexto": "O projeto foi desenvolvido como TCC do curso técnico em Informática. A plataforma tinha como objetivo facilitar a busca por profissionais da construção civil com comodidade e competitividade.",
            "arquitetura": "Profissionais criam perfis com dados pessoais, cidade, especialidade e contatos. Usuários interessados aplicam filtros e visualizam uma lista de profissionais compatíveis.",
            "arquitetura_topicos": "01 / cadastro|02 / perfil|03 / busca|04 / contato",
            "arquitetura_titulo": "Conta profissional|Dados de atuação|Filtros de procura|Conexão entre partes",
            "arquitetura_descricao": "O profissional cria sua conta na plataforma.|O perfil reúne idade, cidade, especialidade e contato.|O contratante filtra por especialidade, estado e cidade.|A lista permite escolher e contatar o profissional.",
            "decisao_titulo": "Criar busca filtrada|Valorizar perfil profissional|Resolver demanda local",
            "decisao_descricao": "Filtros reduzem ruído e aceleram a contratação.|O perfil funciona como vitrine do prestador.|O problema é concreto e próximo da realidade do setor.",
            "tecnologias": "PHP, MySQL, HTML5, JavaScript e CSS.",
            "tags_tecnologias": "PHP|MySQL|HTML5|CSS|JavaScript",
            "atuacao": "Desenvolvimento do sistema, estrutura de cadastro, filtros de busca e organização da experiência da plataforma.",
            "galeria": "../assets/projetos/construcao-civil.jpg",
            "prox_projeto": "14"
        },

        "14": {
            "topico": "software.engineering / email.client",
            "titulo": "Sendex",
            "subtitulo": "Aplicação desktop para envio de e-mails via Gmail com agente SMTP local, logs, autenticação e anexos.",
            "imagem": "../assets/projetos/sendex.jpg",
            "tags": "Python|Tkinter|SMTP|Gmail|Logs|Desktop",
            "tipo": "Aplicação desktop / Envio de e-mails",
            "dominio": "Comunicação, SMTP e engenharia de software",
            "papel_tecnico": "Desenvolvimento da interface, autenticação, logs e envio de mensagens",
            "complexidade": "Envio controlado de e-mails, autenticação sob demanda, anexos e operação com baixa qualidade de internet",
            "contexto": "O Sendex foi desenvolvido nas disciplinas de Testes de Software e Laboratório de Engenharia de Software. O objetivo era criar uma ferramenta específica para envio de e-mails usando Gmail e agente SMTP local.",
            "arquitetura": "A aplicação recebe campos obrigatórios e opcionais de e-mail, autentica no agente SMTP apenas no momento do envio, registra logs e permite anexos.",
            "arquitetura_topicos": "01 / interface|02 / autenticação|03 / envio|04 / logs",
            "arquitetura_titulo": "Formulário de e-mail|Conexão SMTP|Entrega da mensagem|Registro operacional",
            "arquitetura_descricao": "O usuário informa destinatário, assunto, corpo e anexos.|A autenticação ocorre apenas quando necessário.|O SMTP local encaminha a mensagem ao Gmail.|Logs registram eventos e falhas do processo.",
            "decisao_titulo": "Autenticar sob demanda|Focar em tarefa específica|Operar com baixa internet",
            "decisao_descricao": "Login apenas durante envio reduz exposição da sessão.|A aplicação não tenta ser um cliente completo de e-mail.|O envio depende de internet apenas na etapa final com o servidor SMTP.",
            "tecnologias": "Python, Tkinter e sSMTP.",
            "tags_tecnologias": "Python|Tkinter|sSMTP|Gmail|Logs",
            "atuacao": "Participação no desenvolvimento da aplicação, interface de envio, autenticação, registros de log e suporte a anexos.",
            "galeria": "../assets/projetos/sendex.jpg",
            "prox_projeto": "15"
        },

        "15": {
            "topico": "ai.integration / whatsapp",
            "titulo": "Contatinho Inteligente",
            "subtitulo": "Integração entre WhatsApp e ChatGPT para facilitar consultas à inteligência artificial diretamente por mensagem.",
            "imagem": "../images/geral/img7.png",
            "tags": "WhatsApp|ChatGPT|Webhook|Laravel|API|IA Aplicada",
            "tipo": "Integração com IA / Automação conversacional",
            "dominio": "Mensageria, webhooks e inteligência artificial aplicada",
            "papel_tecnico": "Integração de APIs, tratamento de webhook e redirecionamento de mensagens",
            "complexidade": "Recebimento de eventos do WhatsApp, filtro de mensagens, requisição à IA e resposta automática ao usuário",
            "contexto": "O projeto integra WhatsApp e ChatGPT para permitir consultas à IA por meio de uma interface já conhecida pelo usuário. A ideia foi reduzir passos de acesso e aproveitar a familiaridade do WhatsApp.",
            "arquitetura": "Cada interação no WhatsApp dispara um webhook. O sistema filtra mensagens de texto, envia o conteúdo para a API de IA e retorna a resposta ao mesmo contato via API do WhatsApp.",
            "arquitetura_topicos": "01 / webhook|02 / filtro|03 / IA|04 / resposta",
            "arquitetura_titulo": "Evento recebido|Mensagem tratada|Consulta ao modelo|Envio ao WhatsApp",
            "arquitetura_descricao": "O WhatsApp envia um JSON com detalhes da interação.|O sistema ignora eventos irrelevantes e trata mensagens de texto.|A mensagem é enviada como payload para a API de IA.|A resposta é enviada de volta ao usuário pelo WhatsApp.",
            "decisao_titulo": "Usar WhatsApp como interface|Filtrar eventos|Automatizar resposta",
            "decisao_descricao": "A interface é popular e reduz barreira de entrada.|Nem todo evento do webhook é relevante para a conversa.|A automação cria uma experiência fluida de pergunta e resposta.",
            "tecnologias": "Laravel, API Chat OpenAI, API WhatsApp e InfinityFree.",
            "tags_tecnologias": "Laravel|OpenAI API|WhatsApp API|Webhook|PHP|IA",
            "atuacao": "Desenvolvimento da integração, tratamento do webhook, comunicação com API de IA e envio automático de respostas pelo WhatsApp.",
            "galeria": "../images/geral/img7.png",
            "prox_projeto": "16"
        },

        "16": {
            "topico": "computer.vision / facial.analysis",
            "titulo": "Análise Facial: Reconhecimento de Sono",
            "subtitulo": "Algoritmo de visão computacional para identificar sinais de sonolência em tempo real a partir de pontos faciais.",
            "imagem": "https://user-images.githubusercontent.com/121525620/220447427-338fb558-00c9-479c-a993-66dbe5852bb5.png",
            "tags": "Visão Computacional|MediaPipe|Python|Análise Facial|Sono|Tempo Real",
            "tipo": "Algoritmo de visão computacional",
            "dominio": "Análise facial, pontos de referência e detecção de sonolência",
            "papel_tecnico": "Implementação da lógica de análise facial, cálculo de distâncias e inferência de estado",
            "complexidade": "Captura em tempo real, landmarks faciais, cálculo euclidiano, abertura dos olhos, boca, piscadas e tempo de fechamento",
            "contexto": "O algoritmo captura frames de um rosto e tenta identificar se a pessoa está dormindo ou apresentando sinais de sonolência. Para isso, considera abertura dos olhos, abertura da boca, quantidade de piscadas e tempo.",
            "arquitetura": "A solução usa pontos faciais identificados em tempo real. Distâncias entre landmarks dos olhos e boca são calculadas continuamente para inferir fechamento, piscadas e possível estado de sono.",
            "arquitetura_topicos": "01 / captura|02 / landmarks|03 / métricas|04 / inferência",
            "arquitetura_titulo": "Frames do rosto|Pontos faciais|Cálculo de abertura|Estado de sono",
            "arquitetura_descricao": "A câmera captura imagens do rosto em tempo real.|A biblioteca identifica landmarks nos olhos e boca.|Distâncias euclidianas indicam abertura, fechamento e piscadas.|Se os sinais persistem por tempo definido, o sistema indica sonolência.",
            "decisao_titulo": "Usar landmarks faciais|Combinar olhos e boca|Considerar tempo",
            "decisao_descricao": "Pontos faciais permitem medir variações sutis na face.|Olhos e boca juntos reduzem inferências frágeis.|O tempo evita classificar piscadas rápidas como sono.",
            "tecnologias": "Python, MediaPipe, visão computacional e cálculo de distância euclidiana.",
            "tags_tecnologias": "Python|MediaPipe|Computer Vision|Landmarks|Distância Euclidiana",
            "atuacao": "Implementação da captura, análise dos pontos faciais, cálculo das métricas e lógica de inferência do estado de sono.",
            "galeria": "https://user-images.githubusercontent.com/121525620/220442839-976a834d-80b7-4339-aa23-d74ad2c7925c.png|https://user-images.githubusercontent.com/121525620/220448363-c86a5d94-b614-4509-94e0-9b963e6b743e.png|https://user-images.githubusercontent.com/121525620/220448526-2166ddda-179b-422e-b9fe-cce64a7ffc92.png|https://user-images.githubusercontent.com/121525620/220447427-338fb558-00c9-479c-a993-66dbe5852bb5.png",
            "prox_projeto": "17"
        },

        "17": {
            "topico": "indoor.navigation / graph.routing",
            "titulo": "Indoor Map",
            "subtitulo": "Sistema interativo de navegação em ambientes fechados, com visualização de plantas baixas, pontos de interesse pesquisáveis e cálculo de rotas.\n<button class='tag'><a href='https://github.com/guilhermednztt/indoor-map' target='_blank'>ACESSAR PROJETO</a></button>",
            "imagem": "https://raw.githubusercontent.com/guilhermednztt/indoor-map/main/assets/files/img1.png",
            "tags": "Mapa Indoor|Leaflet.js|Dijkstra|Grafos|Rotas|Pontos de Interesse",
            "tipo": "Aplicação web / Navegação indoor",
            "dominio": "Mapeamento de ambientes internos, orientação e busca de caminhos",
            "papel_tecnico": "Modelagem do mapa, implementação do grafo, cálculo de rotas e construção da interface interativa",
            "complexidade": "Conversão entre coordenadas da planta e do mapa, representação do ambiente em grafo, cálculo do menor caminho e renderização da rota",
            "contexto": "O Indoor Map foi desenvolvido para orientar pessoas em shopping centers e outras instalações de grande porte. A aplicação combina uma planta baixa interativa com locais pesquisáveis, pontos de interesse e rotas entre origem e destino, podendo ser usada também em aeroportos, hospitais, centros de exposição e eventos.",
            "arquitetura": "A planta baixa é renderizada pelo Leaflet.js com o sistema de coordenadas CRS.Simple. Corredores, portas e destinos formam um grafo bidirecional, cujas arestas recebem pesos calculados pela distância euclidiana. Ao selecionar origem e destino, o algoritmo de Dijkstra encontra o menor caminho, que é convertido em coordenadas do mapa e desenhado sobre a planta.",
            "arquitetura_topicos": "01 / planta|02 / grafo|03 / rota|04 / visualização",
            "arquitetura_titulo": "Mapa em coordenadas customizadas|Rede de circulação|Menor caminho|Orientação no ambiente",
            "arquitetura_descricao": "A planta baixa é exibida no Leaflet.js usando CRS.Simple e coordenadas baseadas em pixels.|Nós representam corredores, portas e destinos, enquanto links bidirecionais representam caminhos percorríveis.|O algoritmo de Dijkstra calcula a rota ótima com pesos derivados das distâncias euclidianas entre os nós.|O caminho é convertido para o sistema do mapa e exibido com linha, marcadores e orientações.",
            "decisao_titulo": "Usar Leaflet com CRS.Simple|Modelar circulação como grafo|Calcular pesos pelas coordenadas",
            "decisao_descricao": "O CRS.Simple permite tratar a planta baixa como mapa sem depender de latitude e longitude.|A representação em grafo separa os destinos visíveis dos caminhos realmente percorríveis.|O cálculo automático da distância euclidiana mantém os pesos coerentes com a geometria da planta.",
            "tecnologias": "JavaScript, HTML, CSS, Leaflet.js 1.9.4, CRS.Simple, grafos e algoritmo de Dijkstra.",
            "tags_tecnologias": "JavaScript|HTML|CSS|Leaflet.js|CRS.Simple|Dijkstra|Grafos",
            "atuacao": "Construção da aplicação web, configuração da planta interativa, modelagem dos nós e conexões, implementação do algoritmo de menor caminho e apresentação visual das rotas e pontos de interesse.",
            "galeria": "https://raw.githubusercontent.com/guilhermednztt/indoor-map/main/assets/files/img1.png|https://raw.githubusercontent.com/guilhermednztt/indoor-map/main/assets/medias/planta1.png",
            "prox_projeto": "1"
        }
    };

    /**
     * Definir o conteudo da pagina de acordo com o codigo informado
     */

    $("#descricaoProjeto").html(descricoes[cod].descricao);
    $("#tituloProjeto").html(descricoes[cod].titulo);
    $("#topico").html(descricoes[cod].topico);
    $("#subtitulo").html(descricoes[cod].subtitulo);
    $("#imagem_principal").html('<img src="'+descricoes[cod].imagem+'">');

    tags = descricoes[cod].tags.split("|")
    tags_span = ""
    for (i = 0; i < tags.length; i++) {
        tags_span += '<span class="tag">' + tags[i] + '</span>\n'
    }
    $("#tags").html(tags_span)

    $("#tipo").html(descricoes[cod].tipo);
    $("#dominio").html(descricoes[cod].dominio);
    $("#papel_tecnico").html(descricoes[cod].papel_tecnico);
    $("#complexidade").html(descricoes[cod].complexidade);
    $("#contexto").html(descricoes[cod].contexto);
    $("#arquitetura").html(descricoes[cod].arquitetura);

    cards_topico = descricoes[cod].arquitetura_topicos.split("|")
    cards_titulo = descricoes[cod].arquitetura_titulo.split("|")
    cards_descricao = descricoes[cod].arquitetura_descricao.split("|")
    cards_arquitetura = ""
    for (i = 0; i < cards_topico.length; i++) {
        cards_arquitetura += '<div class="project-arch-card"><span>'+cards_topico[i]+'</span><strong>'+cards_titulo[i]+'</strong><p>'+cards_descricao[i]+'</p></div>';
    }
    $("#cards_arquitetura").html(cards_arquitetura)

    decisao_titulo = descricoes[cod].decisao_titulo.split("|")
    decisao_descricao = descricoes[cod].decisao_descricao.split("|")
    decisao = ""
    for (i = 0; i < decisao_titulo.length; i++) {
        decisao += '<article class="project-decision-card"><span>decision_0'+(i+1)+'</span><h3>'+decisao_titulo[i]+'</h3><p>'+decisao_descricao[i]+'</p></article>';
    }
    $("#decisao").html(decisao)

    $("#tecnologias").html(descricoes[cod].tecnologias);

    tags_tecnologias = descricoes[cod].tags.split("|")
    tags_tecnologias_span = ""
    for (i = 0; i < tags.length; i++) {
        tags_tecnologias_span += '<span class="tag">' + tags_tecnologias[i] + '</span>\n'
    }
    $("#tags_tecnologias_span").html(tags_tecnologias_span);

    $("#atuacao").html(descricoes[cod].atuacao);

    galeria = descricoes[cod].galeria.split("|")
    imgs = ""
    for (i = 0; i < galeria.length; i++) {
        imgs += '<figure class="project-gallery-item project-gallery-item--contain"><img src="'+galeria[i]+'"></figure>'
    }
    $("#galeria").html(imgs);

    prox_projeto = descricoes[cod].prox_projeto;
    prox = '<a class="project-next-link" href="projeto.html?cod='+prox_projeto+'"><span>próximo projeto</span><strong>'+descricoes[prox_projeto].titulo+' →</strong></a>'
    $("#proximo_projeto").html(prox)


    $("#descricaoProjeto").show(1000);


    //================ Funcoes que aguardam algum evento=====================

    /**
     * Percorre o array de projetos para separar os que possui correspondencia
     * com a string digitada.
     */
    $("#buscarProjeto").on('click', function () {
        var texto = $("#projetoBuscar").val();
        var projetos = "<center><b>Resultados para:</b> " + texto + "</center><div class='container'><br><b>IA e Machine Learning</b><br>";
        var projetos_extras = "<b>Outros temas (não IA)</b><br>"; // projetos que nao sao de IA e M. Learning
        var cont = 0;

        // se existir texto digitado, faz a busca
        if (texto != '') {
            var length = Object.keys(descricoes).length;
            texto = texto.toUpperCase();

            for (var i = 1; i < length; i++) {
                var proj = (descricoes[i].descricao).toUpperCase();

                if (proj.includes(texto)) {
                    // verifica se eh um dos projetos que nao sao de IA
                    if (i >= 7 && i <= 15) {
                        projetos_extras += "&rarr; &nbsp; <a href='projeto.html?cod=" + i + "'>" + descricoes[i].titulo + "</a><br>";
                    } else { // projetos que sao de IA
                        projetos += "&rarr; &nbsp; <a href='projeto.html?cod=" + i + "'>" + descricoes[i].titulo + "</a><br>";
                    }
                    cont++;
                }
                projetos += "</ul>";
            }

            if (cont == 0) {
                projetos = "Nenhum projeto foi encontrado. Tente novamente usando <b>palavras chaves</b>.";
                projetos_extras = "";
            }

            // Exibir modal de resultados
            if (projetos.length > 0) {
                bootbox.alert({
                    message: projetos + "<br>" + projetos_extras,
                    callback: function () {
                        //
                    }
                })
            }

        }

    })

});

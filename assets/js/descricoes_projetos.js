$(document).ready(function () {

    /**
     * Ocultar DIV para surgir o conteudo lentamente
     */
    $("#descricaoProjeto").css("display", "none")

    /**
     * Pegar codigo (identificacao do projeto) o qual deve retornar a descricao
     */
    var cod = $("#numeroProjeto").val();
    if(cod == null || cod == ''){
        cod = "nenhumIDinformado";
    }

    /**
     * Criar array com as descricoes dos projetos associados a uma chave (numero)
     */
    var descricoes = {
        "nenhumIDinformado" : {
            "titulo" : "Ops... nenhum projeto encontrado",
            "descricao" : "<center>Favor, siga até a <a href='../index.html'>página inicial</a> e clique em um dos projetos.<br><br><img src='https://gifs.eco.br/wp-content/uploads/2022/09/gifs-de-foguete-3.gif' width='300' heigth='550'></img></center>"
        },
        "1" : {
            "titulo": "Ao Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)",
            "descricao": "<p>O projeto de pesquisa foi desenvolvido durante a bolsa de Iniciação Tecnológica do CNPq, executado pelo Centro Paula Souza. Consiste em um sistema de Internet das Coisas para monitoramento de temperatura, umidade relativa e presença de pessoas em <i>data centers</i> e ambientes computacionais críticos. O sistema opera em tempo real para atender a criticidade desses ambientes.<br><br>A operação inicia na captura das variáveis ambientais em campo através de sensores e microcontroladores. Os dados são transmitidos por telemetria, tratados, armazenados e conectados à diferentes formas de visualização de dados. Também, existe um sistema de alerta por e-mail para casos de anomalias.<br><br>Boa parte do funcionamento acontece entre camada de aplicação e armazenamento, portanto apenas as ferramentas de visualização de dados são capazes de serem observadas a olho. Com isso, nesse projeto desenvolvi uma ferramenta própria que representa a planta do <i>data center</i> seguindo o padrão ANSI/TIA-942 e exibe as condições térmicas em cada ponto monitorado dentro do ambiente.<br><br><b>Tecnologias usadas: </b>ESP32, SHT30, Arduíno, MQTT, SMTP, Mosquitto, Python, Node-RED, InfluxDB, Flask, Grafana e Linux.</p>"
        },
        "2" : {
            "titulo" : "Trabalho de Graduação",
            "descricao" : "<p>O projeto é o trabalho final entregue na Faculdade de Tecnologia do Estado de São Paulo (em Cruzeiro). O trabalho é um sistema de monitoramento de variáveis ambientais para <i>data centers</i>, semelhante ao <a href='cnpq_projeto.html'>projeto do CNPq</a>, porque na verdade o projeto entregue ao CNPq é a base deste.<br><br>O que há de diferente no meu Trabalho de Graduação então? O TG propôs a extensão do monitoramento local feito com Internet das Coisas para um monitoramento também remoto através da Computação em Nuvem. Através das ferramentas utilizadas foi possível o monitoramento também remoto em tempo real e com a mesma clareza que o local. O trabalho foi aprovado com nota 10 pela banca examinadora.<br><br><b>Participação no trabalho: </b><a href='https://github.com/SACRIER' target='_blank'>Luiz Fernando Rodrigues</a><br><b>Tecnologias usadas: </b>ESP32, SHT30, Arduíno, WiFi, MQTT, SMTP, Mosquitto, Python, Node-RED, InfluxDB, InfluxDB Cloud, IoT Home, AWS IoT Core, Flask, Grafana e Linux.</p>"
        },
        "3" : {
            "titulo" : "Optical Character Recognition (OCR) em Python",
            "descricao" : "<p>O programa utiliza da técnica de Optical Character Recognition (OCR), que é uma técnica da Inteligência Artificial para reconhecimento de caracteres em imagens. Essa técnica é desenvolvida há anos e, atualmente, fazer aplicações nesse segmento está cada vez mais simplificado, como pode ser observado no código do programa.<br><br>O programa espera uma imagem como entrada e realiza a busca dos caracteres. Após identificar, podemos manipular da forma que quisermos. O programa OCR Python dá uma pequena demonstração de análise de texto com dois objetivos:<br><li>Encontrar padrão: </li>o programa usa Regex para encontrar datas e CPFs na imagem. Com isso, qualquer outro padrão poderia ser buscado.<li>Analisar teor das palavras: </li>com base num conjunto de 30 palavras consideradas boas e más, o programa busca por essas palavras e calcula quantos por cento do texto da imagem é formado por elas.<br>Essas coisas são pequenas demonstrações de automatização de análise de conteúdo e outros.<br><br><b>Tecnologias usadas: </b>Python, Streamlit e Pytesseract.</p>"
        },
        "4" : {
            "titulo" : "Rotas Cidades",
            "descricao" : "<p>O Rotas é um programa de Inteligência Artificial baseado na problemática do caixeiro viajante.<br><blockquote>O caixeiro viajante é o indivíduo que deve percorrer todo o conjunto de cidades e voltar ao ponto de partida sem repetir a cidade.</blockquote><br>No caso do programa, o algoritmo recebe uma cidade destino que é um lugar que sofreu algum desastre e precisa de Ajuda Humanitária. Dentre as cidades com pontos de Ajuda Humanitária mais próxima, o programa gera a melhor rota considerando a quantidade de saltos (número de cidades), ou considerando a distância, entre outras formas. A escolha do que considerar fica a critério do usuário.<br><br>Da mesma forma, após chegar ao local que precisa da ajuda, o programa gera a rota que leva até a cidade que possui um ponto de atendimento hospitalar para esses cenários. Dessa forma o programa é multi objetivo.<br>Para fins de validação do algoritmo, o projeto implementa sobre uma área real que é o Vale do Paraíba, São Paulo-Brasil. Inclui 39 cidades.<br><br><b>Participação no trabalho: </b><a href='https://github.com/SACRIER' target='_blank'>Luiz Fernando Rodrigues</a><br><b>Tecnologias usadas: </b>Python e Streamlit.</p><br><a href='https://share.streamlit.io/guilhermedonizetti/ia_disciplina/index.py' target='_blank'><button class='primary button'>Acesse ao programa!</button></a>&nbsp;&nbsp;<a href='https://github.com/guilhermedonizetti/IA_disciplina' target='_blank'>código</a>"
        },
        "5" : {
            "titulo" : "WayPy - pacote",
            "descricao" : "<p>O pacote realiza buscas em grafo para tentar encontrar caminho entre dois pontos distintos, usando diferentes métodos. O tipo de problema que o WayPy se propõe a resolver são os que precisam encontrar uma saída a partir de um ponto específico. Então, encontrar rota entre duas cidades em um mapa é um problema que pode usar o pacote para resolver, o projeto <a href='https://share.streamlit.io/guilhermedonizetti/ia_disciplina/index.py' target='_blank'>Rotas Cidades</a> é um exemplo disso.<br><br>Outros problemas na área de Inteligência Artificial como encontrar a saída em um labirinto, encontrar caminho dentro de ambientes como supermercados e galpões, ou qualquer outra coisa semelhante, o WayPy é aplicável.<br>Os 8 métodos de busca implementados são por:<ul><li>Amplitude</li><li>Profundidade</li><li>Profundidade Limitada</li><li>Aprofundamento Iterativo</li><li>Bidirecional</li><li>A*</li><li>Greedy</li><li>Custo Uniforme</li></ul>Para usá-lo, é necessário a sua instalação:<br><code>pip3 install WayPy</code><br><br><b>Participação no trabalho: </b><a href='https://github.com/SACRIER' target='_blank'>Luiz Fernando Rodrigues</a><br><b>Tecnologias usadas: </b>Python.</p><br><a href='https://libraries.io/pypi/WayPy' target='_blank'><button class='primary button'>Acesse a página do pacote!</button></a>&nbsp;&nbsp;<a href='https://github.com/guilhermedonizetti/WayPy' target='_blank'>código</a>"
        },
        "6" : {
            "titulo" : "Classificador de Obesidade",
            "descricao" : "<p>O programa é uma interface para uma árvore de decisão que classifica uma pessoa em uma categoria, que são estas: peso insuficiente, peso normal, sobrepeso tipo I, sobrepeso tipo II, obesidade tipo I, obesidade tipo II e obesidade tipo III.<br><br>Para gerar a classificação correta, o usuário deve responder verdadeiramente ao formulário. No total são 16 campos que devem ser respondidos, relacionados à características físicas da pessoa (altura, idade, peso, sexo) e relacionadas ao estilo de vida (fumante ou não, meio de transporte que usa no dia a dia, entre outros).<br><br>As respostas são transformadas em valores numéricos e passam pelas condições da árvore de decisão até que termine dentro de uma categoria do peso.<br><br>A árvore foi construída usando o algoritmo J48 no software Weka, com um volume de 2.111 registros de dados em que 80% deles (1.689) foram usados para treino e os 20% restantes (422) foram usados para teste. Como resultado, o classificador obteve precisão de 93,4%.<br><br>O <i>dataset</i> usado pode ser encontrado no repositório de arquivos .arff do <a href='https://archive.ics.uci.edu/ml/datasets/Estimation+of+obesity+levels+based+on+eating+habits+and+physical+condition+' target='_blank'><i>UCI Machine Learning Repository</i></a>. A pesquisa que desenvolveu esse <i>dataset</i> pode ser encontrada na plataforma <a href='https://www.sciencedirect.com/science/article/pii/S2352340919306985?via%3Dihub' target='_blank'><i>ScienceDirect</i></a>.<br><br><b>Tecnologias usadas: </b>Python, Streamlit, Weka, J48.</p><br><a href='https://share.streamlit.io/guilhermedonizetti/classificador_obesidade/main.py' target='_blank'><button class='primary button'>Acesse ao programa!</button></a>&nbsp;&nbsp;<a href='https://github.com/guilhermedonizetti/Classificador_Obesidade' target='_blank'>código</a>"
        },
        "7" : {
            "titulo" : "API",
            "descricao" : "<p>A API possui uma função simples de responder às requisições GET para entregar dados de latitude e longitude de cidades do Vale do Paraíba.<br>É possível requisitar cidades individuais ou todas, de qualquer forma o tráfego é muito pequeno por conta do conjunto de cidades existentes serem igual a 39. Por esse motivo, se tornou a API usada pelo <a href='ia_rotas_cidades.html' class='icon'>Rotas Cidades</a> que realiza várias requisições a cada execução.<br><br><b>Tecnologias usadas: </b>Python, Flask, Postman, RESTful e Heroku.</p><br><a href='https://api-valeparaiba.herokuapp.com/' target='_blank'><button class='primary button'>Acesse ao programa!</button></a>&nbsp;&nbsp;<a href='https://github.com/guilhermedonizetti/API_ValeParaiba'>código</a>"
        },
        "8" : {
            "titulo" : "Notas Fiscais",
            "descricao" : "<p>Desenvolvi o recurso para emitir automaticamente as Notas Fiscais de cada venda cadastrada no sistema de gestão da <a href='https://www.autoestimamaistop.com/' target='_blank'>Mais Top Estética</a>. Durante o processo de venda, o recurso já separa os dados da transação que serão usados na emissão da Nota. Os dados coletados são referentes à unidade (prestador), ao serviço/produto e ao cliente (tomador). Em seguida, um algoritmo identifica no banco de dados as Notas que devem ser emitidas e executa a emissão automaticamente, em <i>cron job</i>.<br></p><center><figure><img src='https://raw.githubusercontent.com/guilhermedonizetti/Portofolio/master/static/images/diagrama_nota_fiscal.avif' alt='Diagrama Nota Fiscal' width='90%'><figcaption>Diagrama do Fluxo da Nota Fiscal.</figcaption></figure></center><p><br>O algoritmo desenvolvido verifica se o prestador e o tomador da Nota possuem todos os dados necessários para executar a emissão. Após isso, cria o JSon e envia os dados para a SEFAZ do estado em que a venda acontece (NFC-e), ou para a prefeitura do município (NFS-e).<br><br>Se a SEFAZ/Prefeitura aprovar ou rejeitar a emissão, o sistema será atualizado por <i>webhook</i>. Com isso, desenvolvi um algoritmo capaz de lidar com os diferentes retornos possíveis (aprovado, rejeitado, processando, cancelado, etc.), e executar tarefas como registro de logs, atualização do status da emissão, entre outros. Após a aprovação da Nota Fiscal, o PDF e o XML são disponibilizados automaticamente numa página de controle das Notas.<br><br>As unidades podem gerenciar os dados fiscais, como por exemplo: alíquota, regime tributário, código de serviço, razão social, entre outros.<br><blockquote><b>Obs.: Emitir Notas Fiscais é uma obrigação tributária de qualquer empresa que comercializa serviços e/ou produtos. Quem sonega, comete um crime. Assim, o recurso de emissão de NFS-e/NFC-e automático, além de ser mais prático e facilitado para a empresa, ajuda a mesma a se manter regularizada, se mostrando como um recurso de grande valor para sistemas de gestão e comercial.</b></blockquote><p><br>O maior desafio para desenvolver foi compreender a questão fiscal relacionado à emissão de Notas, assunto da área de Contabilidade. Através de conversas com Contadores por telefone e e-mail, consegui aprender e programei e revisei a eficiência do recurso. Atualmente, as unidades de diferentes estados do país emitem a NF por essa programação. Desde que o recurso entrou em Produção, todas as rejeições estão relacionadas apenas à irregularidades do prestador ou do tomador (CPF inválido, certificado digital vencido, entre outros), e não ao sistema.<br><br>Essa programação foi dessenvolvida para a empresa mencionada no começo, com isso não apresento mais detalhes ou imagens do resultado.<br><br><br><b>Tecnologias usadas: </b>PHP, SQL, Postman, RESTful API.</p>"
        },
        "9" : {
            "titulo" : "Pagamento Online",
            "descricao" : "<p>Trata-se de uma integração com uma conta Mercado Pago através da API Checkout Transparente. A API é disponibilizada pelo próprio banco para que desenvolvedores programem seu prórpio checkout online.<br><br>Programei para que no processo de venda, já fosse gerado um link de cobrança para ser enviado ao cliente. Na página de cobrança, alguns dados já são trazidos do banco de dados, como documento, nome e e-mail. A interface também exibe a descrição da compra e o valor. Após abrir o link de cobrança, o cliente pode pagar por QRCode ou código, em casos de pagamento por PIX. Se o pagamento for por boleto, um PDF é gerado na hora e também enviado no e-mail informado. Para pagamentos em Cartão, Débito ou Crédito, o cliente deve inserir seus dados de cartão e efetuar o pagamento.<br></p><center><figure><img src='https://http2.mlstatic.com/storage/dx-devsite/docs-assets/images/api/api-integration-flowchart-cardform-pt.png?v=4.1.5-rc-5' alt='Diagrama de Sequência - Pagamento por Cartão' width='90%'><figcaption>Diagrama de Sequência - Pagamento por Cartão. Fonte: Mercado Pago</figcaption></figure></center><p><br>O cliente conta com uma interface amigável que apresenta o status do pagamento, se aprovado, rejeitado ou em processamento. E esse foi um dos motivos principais em selecionar a ferramenta Transparente do Mercado Pago, pois a ideia é que a ferramenta seja 'transparente', isto é, não interferir no que o usuário está enxergando, permitindo manter os padrões visuais do sistema da empresa em todas as etapas do pagamento, sem dar a sensação de que está usando um sistema de terceiro.<br><br>O recurso que desenvolvi também inclui o controle das credenciais da conta de cada unidade da empresa. Para trazer os dados sensíveis, tais como tokens e IDs das contas, apliquei um nível maior de segurança ao armazená-los e comunicá-los. No formulário de cobrança também foi aplicado controle de acesso aos dados e criptografia. Além da própria segurança oferecida pelo SDK do Mercado Pago, o recurso em geral atendeu aos requisitos de configuração e segurança para operar em Produção e com isso apresenta alto índice de aprovação dos pagamentos.<br><br>O recurso em geral conta com:</p><li>Geração de links de cobrança</li><li>Página para controle de credenciais</li><li>Página de cobrança a ser enviada para o cliente</li><li>Integração segura com a conta do Mercado Pago</li><p><br>O Pagamento Online é um recurso desenvolvido para o sistema de gestão da empresa <a href='https://www.autoestimamaistop.com/' target='_blank'>Mais Top Estética</a>, por esse motivo não apresento a interface nem os detalhes da programação em geral.<br><br><br><b>Tecnologias usadas: </b>PHP, JavaScript, SQL, Postman, API Checkout Transparente e conta no Mercado Pago.</p>"
        },
        "10" : {
            "titulo" : "Leitor de Código de Barras",
            "descricao" : "<p>O programa tem o objetivo de capturar a imagem de um código de barras e identificar o valor ($) associado ao código. Desenvolvi uma interface onde o usuário pode optar por abrir a câmera ou não. Ao iniciar a câmera, o usuário pode registrar uma imagem do código de barras clicando em um botão. Quando fizer a captura da imagem, o programa faz o processamento do código e então destaca o valor dele.<br><br>Além de preço, muitas outras informações poderiam ser associadas ao código para que, no processo de venda, todas as informações do produto fossem identificadas com mais facilidade. O padrão de código de barras usado foi EAN13. Programei a geração de várias imagens com código de barras para testar o funcionamento do programa, em que na maioria dos casos a identificação foi bem sucedida, exceto em locais muito claros onde o contraste das cores preto e branco são menores.<br><br><b>Tecnologias usadas: </b>Python, Streamlit, OpenCV, Pyzbar, Barcode e webcam.</p><a href='https://github.com/guilhermedonizetti/Leitor_Codigo_Barras' target='_blank'>código</a>"
        },
        "11" : {
            "titulo" : "Previsão do Tempo",
            "descricao" : "<p>O programa realiza consulta de dados meteorológicos (previsão do tempo) para uma determinada cidade e exibe em um gráfico de linhas as temperaturas mínimas e máximas para os próximos 10 dias. Os dados utilizados são consumidos de uma API (HG Brasil).<br>Além de visualizar os dados, o usuário pode baixar uma imagem do gráfico em PNG como forma de exportar o conteúdo.<br><br>Ele funciona da seguinte forma: o usuário seleciona uma cidade e realiza a busca, o programa faz uma requisição Ajax a uma função do Python que consome a API e retorna a previsão, com o Python organizo os dados para serem exibidos (dados de datas, cidade/estado, temperaturas mínimas e máximas). Com o retorno da requisição o programa gera o gráfico de linhas e passa a exibir o botão de baixar imagem (do gráfico).<br>Através desse trabalho alguns desafios foram resolvidos, são eles:<br><li><b>Atualização do gráfico:</b></li> os gráficos feitos com ChartJS são gerados dentro de um elemento canvas HTML, esse elemento só pode ser criado com o mesmo ID uma vez na página; teoricamente, não é possível criar outro canvas ou atualizar. A medida adotada foi criar e destruir  o elemento canvas dinamicamente com JavaScript. Dessa forma, toda vez que consultar sobre uma cidade diferente, o programa destrói o gráfico atual e recria dando a sensação de estar atualizando e sem fazer <i>refresh</i> na página.<br><li><b>Escala única e igual:</b></li> geralmente, gráficos com duas linhas de valores diferentes adotam escalas diferentes (uma para cada linha), e costumam ser posicionadas uma escala à esquerda e outra à direita, conforme mostra a documentação da biblioteca ChartJS. Como meu objetivo era que ambas fossem exibidas em uma mesma escala, adotei a medida de incluir a menor e a maior temperatura nos vetores de mínima e máxima, e no menor valor tirei 5 e no maior adicionei 10 para que houvesse um espaço no gráfico que facilitasse a visualização. Esses valores adicionados a mais influenciam na escala, mas não são exibidos. Os dois vetores de temperatura passam a ter o mesmo limite mínimo e máximo e assim usam a mesma escala.<li><b>Exportar gráfico:</b></li> por padrão, os gráficos feitos com ChartJS não possuem opção nativa de serem exportados. Porém, como eu queria fazer a exportação da imagem gerada, adotei a medida de pegar o objeto do gráfico e converter para imagem através do base64 do JavaScript. O hash do resultado é usado como link do download no botão de baixar imagem.<li><b>Não atualizar a página:</b></li> como expliquei acima, para não atualizar a página recriando um elemento canvas, fiz a criação e destruição dinâmica pelo JavaScript. Porém, na requisição ao selecionar uma nova cidade, pelo comportamento comum de um formulário a página se atualiza. Para isso usei o Ajax passando o código IBGE da cidade e fiz requisições em uma rota do Flask que chamava a função que realiza a requisição na API.<br><br><b>Tecnologias usadas: </b>Python, Flask, JavaScript, ChartJS, HTML, HG Brasil (API).</p>"
        }
    }

    /**
     * Definir o conteudo da pagina de acordo com o codigo informado
     */
    $("#descricaoProjeto").html(descricoes[cod].descricao);
    $("#tituloProjeto").html(descricoes[cod].titulo);
    $("#descricaoProjeto").show(1000);

});
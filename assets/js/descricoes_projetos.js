$(document).ready(function () {

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
        "" : {
            "titulo" : "",
            "descricao" : ""
        },
        "" : {
            "titulo" : "",
            "descricao" : ""
        },
        "" : {
            "titulo" : "",
            "descricao" : ""
        },
        "" : {
            "titulo" : "",
            "descricao" : ""
        },
        "" : {
            "titulo" : "",
            "descricao" : ""
        },
        "" : {
            "titulo" : "",
            "descricao" : ""
        }
    }

    /**
     * Definir o conteudo da pagina de acordo com o codigo informado
     */
    $("#descricaoProjeto").html(descricoes[cod].descricao);
    $("#tituloProjeto").html(descricoes[cod].titulo);

});
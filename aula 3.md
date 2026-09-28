# Aula 3 — Algoritmos e Apresentação do Python

> **Curso:** Programação para Iniciantes — FMP  
> **Unidade:** Algoritmos  
> **Objetivo:** formalizar o conceito de algoritmo por meio de decomposição de rotinas diárias, compreender a natureza literal do computador, conhecer visualmente a linguagem Python em contraste com linguagens de sintaxe complexa e praticar a escrita manual de passos lógicos.

---

## 1\. O que é um algoritmo?

Nas aulas anteriores, vimos que programar exige pensamento estruturado antes de qualquer linha de código. A ferramenta central que organiza esse pensamento é o **algoritmo**.

> **Algoritmo é uma sequência finita, ordenada e não ambígua de passos que leva à realização de uma tarefa ou à solução de um problema.**

Um algoritmo eficaz possui três propriedades obrigatórias:

1. **Passos compreensíveis:** cada instrução deve ser clara, sem duplo sentido.  
2. **Ordem lógica:** as instruções seguem uma cronologia rigorosa; uma ação depende do resultado da anterior.  
3. **Finitude:** o processo precisa ter um início determinado, etapas intermediárias de processamento e um ponto de término obrigatório.

No cotidiano, receitas culinárias, manuais de montagem de móveis e guias passo a passo de primeiros socorros são exemplos práticos de algoritmos em linguagem natural.

---

## 2\. Algoritmos no cotidiano: o piloto automático

Sem perceber, os seres humanos executam sequências lógicas contínuas ao longo do dia. O cérebro humano automatiza tarefas repetitivas em um verdadeiro "piloto automático":

- **Atravessar uma rua movimentada:** aproximar-se do meio-fio, parar, olhar para a esquerda, olhar para a direita, avaliar a velocidade dos veículos, decidir se o tempo é suficiente e atravessar em linha reta.  
- **Fazer uma ligação telefônica:** pegar o smartphone, desbloquear a tela com senha ou biometria, abrir o aplicativo de contatos, buscar pelo nome desejado, pressionar o ícone de discagem e aproximar o aparelho do ouvido.  
- **Sacar dinheiro em um caixa eletrônico:** aproximar-se do terminal, inserir o cartão, aguardar a leitura do chip, selecionar a opção de saque, digitar o valor desejado, digitar a senha de segurança, retirar o comprovante, pegar as cédulas e recolher o cartão.

Nós realizamos essas ações quase sem pensar em cada fração de segundo. No entanto, máquinas e programas de computador não possuem intuição ou memória muscular: para eles, cada detalhe omitido representa uma falha potencial.

---

## 3\. Decomposição na prática: acordar e escovar os dentes

Quando decompomos uma atividade cotidiana trivial em etapas atômicas (indivisíveis), fica evidente a quantidade de comandos que executamos intuitivamente.

Considere a instrução geral: **“Acorde de manhã e vá escovar os dentes”**.

Para um ser humano familiarizado com a rotina, essa frase basta. Para uma execução lógica e detalhada, a sequência completa exige:

 1\. Ouvir o alarme do despertador.

 2\. Abrir os olhos.

 3\. Esticar o braço até a mesa de cabeceira e desligar o alarme.

 4\. Afastar o cobertor para o lado.

 5\. Mover o corpo para a lateral da cama e apoiar os dois pés no chão.

 6\. Ficar em pé com postura equilibrada.

 7\. Caminhar em direção à porta do quarto.

 8\. Abrir a porta e andar pelo corredor até a porta do banheiro.

 9\. Entrar no banheiro e acender o interruptor de luz.

10\. Caminhar até a frente da pia.

11\. Pegar a escova de dentes com uma das mãos pelo cabo.

12\. Pegar o tubo de pasta dental com a outra mão.

13\. Girar a tampa do tubo de pasta em sentido anti-horário até removê-la.

14\. Posicionar o bico do tubo sobre as cerdas da escova de dentes.

15\. Pressionar levemente a base do tubo até sair uma porção de pasta do tamanho de uma ervilha.

16\. Interromper a pressão sobre o tubo e apoiá-lo sobre a pia.

17\. Rosquear a tampa do tubo no sentido horário para fechá-lo.

18\. Abrir a torneira da pia.

19\. Passar as cerdas da escova rapidamente sob o fluxo de água para umedecê-las.

20\. Fechar a torneira.

21\. Levar a escova até a boca e encostar as cerdas nos dentes.

22\. Realizar movimentos circulares e de varredura por dois minutos, passando por todas as faces dos dentes e pela língua.

23\. Afastar a escova da boca e cuspir o excesso de espuma no ralo da pia.

24\. Abrir a torneira novamente.

25\. Colocar água na boca (com as mãos em concha ou usando um copo), fazer bochecho vigoroso e cuspir na pia.

26\. Posicionar a cabeça da escova sob a água corrente, removendo resíduos de espuma das cerdas.

27\. Fechar a torneira da pia.

28\. Guardar a escova no suporte correspondente.

29\. Pegar a toalha de rosto, secar a boca e as mãos.

30\. Desligar o interruptor de luz e sair do banheiro.

Se o passo 13 for ignorado (não abrir a tampa), o passo 15 falha por completo. A exatidão do resultado depende da precisão da ordem dada.

---

## 4\. O computador como uma entidade literal

Existe um jargão comum na computação que sintetiza o comportamento das máquinas:

> **O computador é uma entidade extremamente rápida, mas estritamente literal e desprovida de iniciativa: ele não faz nada além do que foi detalhadamente instruído.**

Diferente do ser humano, o computador não tem bom senso:

- **Não deduz intenções:** se você pedir para calcular a média de 3 notas, somar os valores e esquecer de ordenar a divisão por 3, ele entregará o resultado da soma sem desconfiar do equívoco.  
- **Não corrige instruções incompletas:** se a instrução for ambígua, ele executará a ambiguidade até travar ou gerar uma saída incorreta (*lixo entra, lixo sai*).  
- **Não pula etapas óbvias:** se uma porta estiver trancada e você não mandar a chave ser inserida e girada antes de empurrar a maçaneta, a execução simplesmente para.

Programar é o processo de estruturar comandos com tal grau de clareza que uma máquina literal seja capaz de chegar exatamente ao objetivo esperado.

---

## 5\. Estrutura padrão de um algoritmo textual

Antes de escrever linhas de código, os algoritmos são organizados em linguagem natural estruturada, respeitando o modelo clássico de processamento de dados:

┌─────────────────────────┐

│     ENTRADA DE DADOS    │  \-\> Informações necessárias que alimentam o processo

└───────────┬─────────────┘

            ↓

┌─────────────────────────┐

│      PROCESSAMENTO      │  \-\> Ações, cálculos, decisões e transformações

└───────────┬─────────────┘

            ↓

┌─────────────────────────┐

│      SAÍDA DE DADOS     │  \-\> Resultados apresentados ao usuário ou ao sistema

└─────────────────────────┘

### Exemplo: Preparação de suco de pacote

INÍCIO

  // 1\. Entrada de dados / Recursos

  1\. Pegar uma jarra com capacidade de 1 litro.

  2\. Adicionar 1 litro de água filtrada dentro da jarra.

  3\. Pegar 1 envelope de suco em pó do sabor desejado.

  4\. Pegar 1 colher grande de mexer.

  // 2\. Processamento

  5\. Cortar a parte superior do envelope de suco com as mãos ou tesoura.

  6\. Despejar todo o conteúdo do pó dentro da jarra com água.

  7\. Inserir a colher na jarra e mexer em círculos durante 30 segundos.

  8\. Verificar se ainda há pó concentrado no fundo da jarra.

  9\. Se houver pó no fundo, mexer por mais 15 segundos; caso contrário, retirar a colher.

  // 3\. Saída de dados

  10\. Servir o suco pronto em um copo.

FIM

---

## 6\. Apresentação da linguagem Python

Após desenhar o algoritmo no papel, precisamos traduzir essas ações para uma língua que o computador possa processar através de um interpretador: uma **linguagem de programação**.

No curso, utilizaremos a linguagem **Python**:

- **História e Criação:** foi concebida no final dos anos 1980 e lançada oficialmente em 1991 pelo matemático e programador holandês Guido van Rossum.  
- **Origem do Nome:** contrariando o senso comum, o nome não homenageia a serpente píton, mas sim o lendário grupo humorístico britânico *Monty Python* (da série *Monty Python's Flying Circus*), do qual o criador era fã.  
- **Linguagem de Alto Nível:** está muito distante dos circuitos eletrônicos e dos códigos binários da CPU, utilizando palavras e construções muito próximas do idioma inglês cotidiano.

Nesta aula, não abriremos editores de código nem executaremos programas práticos. O foco aqui é reconhecer a estrutura visual de um código.

---

## 7\. Filosofia do Python: simplicidade e legibilidade

A comunidade Python adota uma filosofia de engenharia de software baseada na clareza. O código deve ser tão legível que qualquer programador iniciante consiga entender o fluxo com facilidade.

Essa postura está resumida em um conjunto de diretrizes chamado *The Zen of Python* (escrito pelo desenvolvedor Tim Peters):

> - **Bonito é melhor que feio.** (*Beautiful is better than ugly.*)  
> - **Explícito é melhor que implícito.** (*Explicit is better than implicit.*)  
> - **Simples é melhor que complexo.** (*Simple is better than complex.*)  
> - **Legibilidade conta.** (*Readability counts.*)  
> - **Se a implementação é difícil de explicar, é uma má ideia.** (*If the implementation is hard to explain, it's a bad idea.*)

Por priorizar comandos diretos, palavras-chave intuitivas e dispensar elementos puramente burocráticos, o Python reduz o ruído visual e permite focar diretamente na lógica da solução.

---

## 8\. Amostragem: como é o formato de um código Python em comparação ao C++?

Para compreender visualmente o que significa "simplicidade e alto nível", compare os mesmos programas implementados em **C++** (linguagem de tipagem estática e sintaxe tradicional baseada em C) e em **Python**.

### Amostra 1: Exibir uma mensagem na tela ("Olá, mundo\!")

**Em C++:**

\#include \<iostream\>

int main() {

    std::cout \<\< "Olá, mundo\!" \<\< std::endl;

    return 0;

}

**Em Python:**

print("Olá, mundo\!")

---

### Amostra 2: Somar dois números e mostrar o resultado

**Em C++:**

\#include \<iostream\>

int main() {

    int numero1 \= 10;

    int numero2 \= 5;

    int soma \= numero1 \+ numero2;

    std::cout \<\< "Resultado: " \<\< soma \<\< std::endl;

    return 0;

}

**Em Python:**

numero1 \= 10

numero2 \= 5

soma \= numero1 \+ numero2

print("Resultado:", soma)

---

### Amostra 3: Tomada de decisão simples (verificar se é maior de idade)

**Em C++:**

\#include \<iostream\>

int main() {

    int idade \= 20;

    if (idade \>= 18\) {

        std::cout \<\< "Acesso permitido." \<\< std::endl;

    } else {

        std::cout \<\< "Acesso negado." \<\< std::endl;

    }

    return 0;

}

**Em Python:**

idade \= 20

if idade \>= 18:

    print("Acesso permitido.")

else:

    print("Acesso negado.")

### O que observar nessa comparação?

1. **Ausência de código burocrático:** em Python não é necessário importar bibliotecas básicas para imprimir algo simples, nem declarar a função inicial `int main()` ou retorno `return 0`.  
2. **Sem ponto e vírgula obrigatório:** o final de cada linha em Python indica naturalmente o fim da instrução.  
3. **Sem chaves `{}` para marcar blocos:** o Python utiliza apenas o recuo de margem (a **indentação**) para definir o que está dentro do `if` ou do `else`.

---

## 9\. Anatomia básica das instruções apresentadas

Desmontando as amostras de código em Python que acabamos de ver, identificamos os elementos fundamentais que compõem um programa:

| Componente | Exemplo no código | O que significa na prática? |
| :---- | :---- | :---- |
| **Comando de saída** | `print(...)` | Uma instrução pré-definida que solicita ao sistema operacional exibir algo na tela do computador. |
| **Texto / Cadeia de caracteres** | `"Olá, mundo!"` | Sequência literal de caracteres identificada pelo uso de aspas simples ou duplas. |
| **Identificadores (Variáveis)** | `numero1`, `idade` | Nomes atribuídos a espaços temporários de armazenamento na memória para guardar dados. |
| **Operador de atribuição** | `=` | Guarda o valor que está à direita no rótulo de memória indicado à esquerda (`numero1 = 10`). |
| **Operadores aritméticos** | `+`, `-`, `*`, `/` | Executam os cálculos matemáticos entre números. |
| **Operadores de comparação** | `>=`, `==`, `<`, `!=` | Testam relações lógicas entre dois valores, resultando em verdadeiro (*True*) ou falso (*False*). |
| **Estrutura de decisão** | `if` / `else` | Palavras-chave que indicam desvio de fluxo: "Se a condição for satisfeita, faça o bloco A; Senão, faça o bloco B". |
| **Dois-pontos (`:`)** | `if idade >= 18:` | Sinaliza o fechamento da condição e o início imediato de um novo bloco subordinado de comandos. |

---

## 10\. Exercício de fixação manual (Papel e Caneta)

Para internalizar a lógica sequencial sem distrações tecnológicas, realizaremos uma atividade **estritamente manual**, utilizando folha de papel e caneta ou lápis.

---

### Enunciado do Exercício

> **Tema:** Procedimento de substituição de uma lâmpada queimada no teto de um cômodo.  
>   
> **Cenário:** Você entra em um quarto escuro, aciona o interruptor da parede, mas a lâmpada do teto não acende. Você precisa resolver essa situação de forma segura e sistemática.  
>   
> **Sua tarefa:** Escreva um algoritmo textual completo e numerado, detalhando todas as ações físicas e lógicas necessárias desde o instante em que você nota o defeito até o momento em que a nova lâmpada é testada com sucesso e a antiga é descartada.

### Diretrizes e regras de avaliação:

1. **Presuma a literalidade de quem executa:** a pessoa ou máquina executora não tem iniciativa própria; instruções vagas como "troque a lâmpada com cuidado" são proibidas.  
2. **Obrigatoriedade de segurança e verificação física:**  
   - Garantir que o interruptor ou disjuntor esteja desligado antes do contato direto com o bocal elétrico.  
   - Posicionar e verificar a estabilidade do suporte (escada de segurança).  
   - Testar com cautela a temperatura da lâmpada queimada antes de aplicar força para desenroscá-la.  
3. **Validação do resultado:**  
   - Incluir a etapa explícita de religar a energia/interruptor para validar se a lâmpada nova acendeu.  
   - Definir o que fazer caso a lâmpada nova também não acenda (ex: verificar se está bem rosqueada).  
4. **Formatação obrigatória:**  
   - O algoritmo deve ter marcação explícita de `INÍCIO` e `FIM`.  
   - Conter no mínimo **12 passos numerados e sequenciais**.

---

## 11\. Fechamento da aula

### O que consolidamos hoje:

- **Conceito de algoritmo:** uma sequência finita, metódica e coerente de passos que visa a solucionar um problema específico.  
- **Decomposição cotidiana:** atos automáticos do nosso dia a dia são formados por múltiplos micropassos que precisam ser explicitados em computação.  
- **A literalidade da máquina:** o computador não possui dedução nem bom senso; ele requer comandos precisos para cada etapa da tarefa.  
- **Python como ferramenta:** uma linguagem criada para ser legível, direta e focada na expressão clara de algoritmos.  
- **Comparação visual com C++:** Python remove camadas pesadas de sintaxe burocrática, permitindo que o foco permaneça na lógica do problema.  
- **Estruturação no papel:** programar começa no entendimento do algoritmo em linguagem humana e na organização da sequência de passos lógicos.

---

## 12\. Próxima etapa do curso

Com os fundamentos lógicos e a visualização inicial do formato do código estabelecidos, na **Aula 4** iniciaremos a manipulação direta de dados na memória do computador:

- **Variáveis e constantes:** como reservar e nomear gavetas na memória RAM para guardar valores.  
- **Tipos de dados no Python:** números inteiros (`int`), números com casas decimais (`float`), textos (`str`) e valores lógicos (`bool`).  
- **Comportamento da tipagem dinâmica:** como o interpretador do Python reconhece automaticamente a natureza dos dados que manipulamos.
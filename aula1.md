# Aula 1 — Introdução à Programação e Pensamento Computacional

> **Curso:** Programação para Iniciantes  
> **Aula:** 01 — Introdução à Programação e Pensamento Computacional  
> **Objetivo:** compreender, de forma conceitual, o que é um computador, como ele representa e executa instruções e por que programação é necessária.

---

## 1. O que é programação?

Programar é **descrever, por meio de instruções, como um computador deve executar determinada tarefa**.

Um computador não possui intenção, bom senso ou capacidade de “adivinhar” o que queremos.

> **O computador é uma entidade extremamente rápida, mas essencialmente literal: ele executa instruções conforme foram especificadas.**

Se a instrução estiver incompleta, ambígua ou incorreta, o resultado poderá ser incorreto.

### Programação = instrução + lógica + resolução de problemas

Programar não é apenas aprender uma linguagem.

Antes da linguagem existe a capacidade de:

- compreender um problema;
- dividir o problema em partes;
- estabelecer uma sequência de passos;
- definir condições;
- identificar repetições;
- representar dados;
- transformar uma solução em instruções executáveis.

Isso nos leva ao conceito de **pensamento computacional**.

---

# 2. Pensamento computacional

Pensamento computacional é uma forma estruturada de analisar problemas para construir soluções que possam ser executadas por pessoas ou sistemas computacionais.

Alguns conceitos fundamentais:

### Decomposição
Dividir um problema grande em problemas menores.

### Reconhecimento de padrões
Identificar comportamentos ou estruturas que se repetem.

### Abstração
Concentrar-se nas informações relevantes e ignorar detalhes desnecessários naquele momento.

### Algoritmo
Definir uma sequência ordenada de passos para resolver um problema.

> **Antes de programar, precisamos saber o que queremos que o programa faça.**

---

# 3. Hardware e Software

Uma forma simples de compreender um computador é separar seus componentes em duas grandes categorias.

## Hardware

É a **parte física** do sistema.

Exemplos:

- CPU;
- memória RAM;
- SSD/HDD;
- placa-mãe;
- GPU;
- teclado;
- mouse;
- monitor;
- dispositivos de rede.

> **Hardware: aquilo que se chuta quando dá problema.**

A frase é uma brincadeira, mas ajuda a lembrar que hardware corresponde à parte física.

---

## Software

É o conjunto de **programas, instruções e dados** que orientam o funcionamento do hardware.

Podemos dividir o software em diferentes camadas.

### Firmware

Software gravado para controlar e inicializar determinado hardware.

Exemplos:

- BIOS;
- UEFI;
- firmware de SSDs;
- firmware de placas e dispositivos.

### Sistema Operacional

É o software responsável por fornecer uma camada de gerenciamento entre aplicações, usuário e hardware.

Exemplos:

- Windows;
- Linux;
- macOS;
- Android.

### Utilitários

Programas destinados a tarefas específicas de manutenção, configuração ou gerenciamento.

Exemplos:

- compactadores;
- ferramentas de diagnóstico;
- particionadores;
- gerenciadores de arquivos.

### Aplicativos

Programas destinados diretamente às tarefas do usuário.

Exemplos:

- navegador;
- editor de texto;
- editor de imagens;
- jogos;
- IDEs.

> **Software: aquilo que se xinga quando trava.**

---

## 3.1 Computador: hardware + software

De maneira simplificada:

**Sistema computacional = Hardware + Software**

O **Sistema Operacional não é sinônimo de computador**. Ele é uma das principais camadas de software que permitem utilizar e administrar os recursos do hardware.

Uma visão simplificada:

```text
┌─────────────────────────────┐
│          USUÁRIO            │
├─────────────────────────────┤
│        APLICATIVOS          │
├─────────────────────────────┤
│    SISTEMA OPERACIONAL      │
├─────────────────────────────┤
│          FIRMWARE           │
├─────────────────────────────┤
│          HARDWARE           │
└─────────────────────────────┘
```

---

# 4. O computador é “burro”?

Em um sentido computacional, podemos dizer que sim.

O computador não precisa compreender o objetivo humano da tarefa. Ele precisa **executar instruções válidas**.

Por exemplo, uma pessoa pode pensar:

> “Quero calcular a média de três notas.”

Para o computador, isso precisa ser transformado em uma sequência de operações:

```text
1. Receber a primeira nota
2. Receber a segunda nota
3. Receber a terceira nota
4. Somar as três notas
5. Dividir o resultado por 3
6. Exibir o resultado
```

Quanto mais próximo chegamos do hardware, mais detalhadas são as instruções.

Esse processo de transformar uma solução humana em instruções que uma máquina consegue executar é uma das bases da programação.

---

# 5. Modelo de Von Neumann

Uma forma clássica de compreender o funcionamento de um computador é o **modelo de arquitetura de Von Neumann**.

Em uma representação simplificada:

```text
        ENTRADA
           │
           ▼
     ┌─────────────┐
     │ PROCESSAMENTO│
     └─────────────┘
           │
           ▼
         SAÍDA
```

### Entrada

Dados são fornecidos ao sistema.

Exemplos:

- teclado;
- mouse;
- sensores;
- arquivos;
- rede.

### Processamento

A CPU executa operações sobre os dados de acordo com as instruções recebidas.

### Saída

O resultado do processamento é apresentado ou enviado para outro sistema.

Exemplos:

- monitor;
- impressora;
- arquivo;
- rede;
- atuador.

### E a memória?

No modelo de Von Neumann, **dados e instruções podem ser armazenados em uma memória comum**, permitindo que a CPU busque instruções e dados para executar os programas.

---

# 6. Como o computador representa informações?

Para nós, é natural trabalhar com números, letras, imagens e sons.

Para o computador, tudo precisa ser representado de maneira que os circuitos eletrônicos possam manipular.

A representação fundamental é o **sistema binário**.

---

# 7. Binário

O sistema decimal utiliza dez símbolos:

```text
0 1 2 3 4 5 6 7 8 9
```

O sistema binário utiliza apenas dois:

```text
0 1
```

Cada posição representa uma potência de 2.

Exemplo:

```text
1011₂

1 × 8
0 × 4
1 × 2
1 × 1
──────
   11₁₀
```

Portanto:

**1011₂ = 11₁₀**

---

## Bit e Byte

### Bit

É a menor unidade de informação digital.

Pode assumir dois estados:

```text
0
1
```

### Byte

Um byte possui **8 bits**.

```text
10110101
└─── 8 bits ───┘
      1 byte
```

A partir de bits e bytes podemos representar números, caracteres e outros tipos de dados.

---

# 8. Hexadecimal

Trabalhar diretamente com grandes sequências binárias pode ser pouco prático para seres humanos.

Por isso, o sistema hexadecimal é muito utilizado na computação.

Ele possui 16 símbolos:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Onde:

```text
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15
```

Cada dígito hexadecimal representa exatamente **4 bits**.

```text
Binário:      1010 1111
Hexadecimal:    A    F

1010 1111₂ = AF₁₆
```

Por isso o hexadecimal aparece frequentemente em:

- endereços de memória;
- dumps;
- depuração;
- programação de baixo nível;
- representação de bytes;
- identificadores técnicos.

---

# 9. Da máquina às linguagens de programação

Existe uma distância entre aquilo que o hardware executa e aquilo que um programador escreve.

Podemos visualizar essa evolução assim:

```text
HARDWARE
   │
   ▼
INSTRUÇÕES DE MÁQUINA
   │
   ▼
ASSEMBLY
   │
   ▼
LINGUAGENS DE MÉDIO NÍVEL
   │
   ▼
LINGUAGENS DE ALTO NÍVEL
```

Quanto mais alto o nível de abstração, menos precisamos pensar diretamente nos detalhes do hardware.

---

# 10. Linguagem de máquina

A CPU executa **instruções codificadas em linguagem de máquina**.

Em termos simplificados, são sequências de bits que representam operações reconhecidas pela arquitetura do processador.

O formato exato depende da arquitetura.

Por exemplo:

```text
CPU x86/x86-64
```

possui um conjunto de instruções diferente de:

```text
ARM
```

ou:

```text
RISC-V
```

Portanto, **o hardware determina quais instruções de máquina podem ser executadas diretamente.**

---

# 11. Assembly — x86 / x86-64

Assembly é uma representação simbólica das instruções de máquina de uma arquitetura.

Em vez de trabalhar diretamente com códigos binários, podemos escrever algo conceitualmente mais legível:

```asm
mov eax, 10
add eax, 20
```

Aqui aparecem elementos como:

- registradores;
- instruções;
- operandos;
- endereços;
- saltos;
- operações aritméticas e lógicas.

### x86 e x86-64

A família x86 é historicamente associada aos processadores Intel e AMD.

- **x86** → tradicionalmente associado ao ambiente de 32 bits;
- **x86-64 / AMD64** → extensão de 64 bits da arquitetura x86.

Assembly permite observar de forma muito mais próxima como um programa interage com a CPU.

---

# 12. Linguagens de médio nível

Não existe uma fronteira universal e formal que determine exatamente quais linguagens são “de médio nível”.

O termo é utilizado para descrever linguagens que oferecem **abstrações mais convenientes que Assembly**, mas ainda permitem maior controle sobre recursos do sistema e da memória.

Exemplos frequentemente associados a essa categoria:

- C;
- C++;
- Rust.

Características comuns:

- acesso relativamente próximo ao hardware;
- controle sobre memória;
- estruturas de dados;
- abstrações de programação mais poderosas que Assembly.

---

# 13. Linguagens de alto nível

Linguagens de alto nível possuem uma abstração maior em relação ao hardware.

O programador consegue expressar operações complexas utilizando construções mais próximas da lógica humana.

Exemplo conceitual:

```python
media = (nota1 + nota2 + nota3) / 3
```

Em vez de especificar manualmente cada operação realizada pelos registradores da CPU.

Exemplos:

- Python;
- JavaScript;
- Java;
- C#;
- Kotlin.

Isso não significa que o computador “entenda Python” diretamente.

O código precisa passar por mecanismos que o transformem ou interpretem de forma que o sistema consiga executá-lo.

---

# 14. Uma visão geral da execução

Uma simplificação útil é:

```text
Código-fonte
     │
     ▼
Compilador / Interpretador / Runtime
     │
     ▼
Instruções executáveis
     │
     ▼
CPU
     │
     ▼
Processamento
     │
     ▼
Resultado
```

A implementação exata depende da linguagem e do ambiente.

---

# 15. Memória: onde ficam dados e instruções?

Um computador possui diferentes tipos de memória e armazenamento.

Eles possuem características diferentes de:

- velocidade;
- capacidade;
- custo;
- volatilidade;
- proximidade da CPU.

Uma visão simplificada:

```text
        MAIS RÁPIDO
            ▲
            │
        REGISTRADORES
            │
          CACHE
            │
           RAM
            │
          SSD/HDD
            │
        MAIS LENTO
```

> Essa representação é apenas conceitual. A hierarquia real possui mais níveis e características.

---

## 15.1 Registradores

São pequenas áreas de armazenamento **dentro da CPU**.

São extremamente rápidas e utilizadas diretamente durante a execução das instruções.

Exemplos em x86-64:

```text
RAX
RBX
RCX
RDX
RSP
RBP
RIP
```

---

## 15.2 Cache

Memória muito rápida utilizada para manter dados e instruções que podem ser necessários pela CPU.

Normalmente encontramos níveis como:

```text
L1
L2
L3
```

Em geral:

**L1 → mais rápida e menor**

**L3 → maior e mais distante da CPU**

---

## 15.3 RAM

A memória RAM mantém temporariamente dados e programas em uso.

É uma memória **volátil**:

> Quando a alimentação é desligada, seu conteúdo normalmente é perdido.

---

## 15.4 Armazenamento

SSD e HDD são utilizados para armazenamento persistente.

Ao contrário da RAM, os dados permanecem armazenados após desligar o computador.

Exemplos:

- sistema operacional;
- programas;
- documentos;
- imagens;
- vídeos.

---

# 16. Por que tudo isso importa para programação?

Porque programação acontece em diferentes níveis de abstração.

Quando escrevemos:

```python
print("Olá, mundo!")
```

estamos muito distantes do hardware.

Por baixo dessa abstração existem várias camadas:

```text
Python
  ↓
Runtime / Bibliotecas
  ↓
Sistema Operacional
  ↓
Instruções de máquina
  ↓
CPU
  ↓
Memória / Dispositivos
  ↓
Hardware
```

O programador normalmente não precisa controlar cada transistor ou cada instrução da CPU.

A função das linguagens e das ferramentas de programação é justamente fornecer **níveis de abstração** que permitam resolver problemas sem precisar controlar manualmente todos os detalhes do computador.

---

# 17. Conectando tudo

Podemos resumir a aula em uma única sequência:

```text
PROBLEMA
   ↓
PENSAMENTO COMPUTACIONAL
   ↓
ALGORITMO
   ↓
CÓDIGO
   ↓
LINGUAGEM DE PROGRAMAÇÃO
   ↓
COMPILAÇÃO / INTERPRETAÇÃO / RUNTIME
   ↓
INSTRUÇÕES
   ↓
CPU + MEMÓRIA
   ↓
PROCESSAMENTO
   ↓
SAÍDA
```

E, em uma visão ainda mais ampla:

```text
┌──────────────────────────────┐
│           USUÁRIO            │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│          APLICAÇÃO           │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│      SISTEMA OPERACIONAL     │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│    FIRMWARE / DRIVERS        │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ HARDWARE: CPU / RAM / I/O    │
└──────────────────────────────┘
```

---

# 18. Fechamento da aula

## Conceitos que o aluno deve levar desta aula

- **Programação** é a construção de instruções para solucionar problemas.
- **Pensamento computacional** ajuda a transformar problemas em soluções estruturadas.
- **Hardware** é a parte física.
- **Software** é o conjunto de instruções e programas.
- O **Sistema Operacional** é uma camada de software que gerencia recursos do computador.
- Computadores trabalham fundamentalmente com **representação binária**.
- **Hexadecimal** é uma forma compacta de representar valores binários.
- **Assembly** fornece uma representação simbólica próxima das instruções da CPU.
- Linguagens de programação fornecem diferentes **níveis de abstração**.
- A memória possui uma **hierarquia**, desde registradores e cache até RAM e armazenamento.
- O modelo simplificado de **Entrada → Processamento → Saída** ajuda a compreender o funcionamento de sistemas computacionais.
- O computador executa instruções; **a lógica e a solução precisam ser definidas pelo programador**.

---

## Próxima etapa

A partir desses fundamentos, podemos começar a responder à pergunta:

> **Como transformar um problema em uma sequência de passos que um computador consiga executar?**

Esse será o ponto de partida para **algoritmos e lógica de programação**.

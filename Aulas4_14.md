# Aulas 4 a 14 — Programação para Iniciantes

## Sumário

- [Aula 4 — Variáveis, constantes e tipos de dados](#aula-4--variáveis-constantes-e-tipos-de-dados)
- [Aula 5 — Operadores e entrada, processamento e saída](#aula-5--operadores-e-entrada-processamento-e-saída)
- [Aula 6 — Estruturas condicionais](#aula-6--estruturas-condicionais)
- [Aula 7 — Decisões, condições compostas e depuração](#aula-7--decisões-condições-compostas-e-depuração)
- [Aula 8 — Estrutura de repetição `while`](#aula-8--estrutura-de-repetição-while)
- [Aula 9 — Estrutura de repetição `for` e `range()`](#aula-9--estrutura-de-repetição-for-e-range)
- [Aula 10 — Decisões e repetições combinadas](#aula-10--decisões-e-repetições-combinadas)
- [Aula 11 — Listas](#aula-11--listas)
- [Aula 12 — Resolução integrada de problemas](#aula-12--resolução-integrada-de-problemas)
- [Aula 13 — Projeto final: planejamento e desenvolvimento](#aula-13--projeto-final-planejamento-e-desenvolvimento)
- [Aula 14 — Projeto final: apresentação, testes e encerramento](#aula-14--projeto-final-apresentação-testes-e-encerramento)

---

# Aula 4 — Variáveis, constantes e tipos de dados

> **Objetivo:** Criar variáveis em Python, identificar seus tipos e utilizar nomes e atribuições adequados.

## 1. Retomada: do algoritmo ao armazenamento de informações (≈ 5 min)

Na aula anterior, os alunos conheceram a estrutura básica de um programa Python, incluindo `print()`, variáveis, operadores e estruturas condicionais.

Retome a ideia de que um programa recebe informações, processa esses dados e apresenta resultados.

**Fala sugerida:**

> “Quando um programa precisa guardar o nome de uma pessoa, a idade ou o valor de uma compra, onde essas informações ficam durante a execução? Hoje vamos estudar como o programa armazena e identifica esses dados.”

Apresente uma situação concreta: um programa que registra o nome, a idade e a média de um estudante.

## 2. O que é uma variável? (≈ 10 min)

Uma variável é um nome associado a um valor durante a execução do programa.

Uma analogia útil é imaginar uma sala com cadeiras identificadas. Cada cadeira representa um espaço onde podemos colocar uma informação. O nome da cadeira permite localizar o dado que está guardado nela.

```text
Nome da variável       Valor armazenado
---------------------------------------
nome                   "Marina"
idade                  19
media                  8.5
```

Em Python, criamos uma variável por meio de uma atribuição:

```python
nome = "Marina"
idade = 19
media = 8.5
```

Explique que o sinal `=` representa uma atribuição: o valor à direita é associado ao nome à esquerda.

Não confunda atribuição com igualdade matemática. Em uma expressão matemática, `=` afirma que dois lados possuem o mesmo valor. Em Python, `=` é utilizado para atribuir um valor a uma variável.

Demonstre a atualização de um valor:

```python
idade = 19
idade = 20

print(idade)
```

Saída:

```text
20
```

A segunda atribuição substitui o valor anteriormente associado à variável.

**Pergunta para a turma:**

> “Se a variável `idade` recebeu primeiro o valor 19 e depois o valor 20, qual deles será exibido?”

## 3. Regras de nomenclatura (≈ 10 min)

Os nomes das variáveis devem ser claros e respeitar as regras da linguagem.

### Regras fundamentais

- Podem conter letras, números e o caractere `_`.
- Não podem começar com número.
- Não podem conter espaços.
- Não podem utilizar palavras reservadas da linguagem.
- Diferenciam letras maiúsculas de minúsculas.

```python
nome = "Lucas"
idade_aluno = 18
nota1 = 7.5
```

Exemplos inválidos:

```python
# nome completo = "Lucas"  # Espaço no nome
# 2nota = 8.0              # Começa com número
# class = "ADS"            # Palavra reservada
```

Explique que os nomes `idade`, `Idade` e `IDADE` são diferentes para Python.

```python
idade = 18
Idade = 20

print(idade)
print(Idade)
```

Saída:

```text
18
20
```

### Convenção `snake_case`

Em Python, é comum utilizar letras minúsculas e separar palavras com `_`.

| Nome pouco descritivo | Nome mais claro |
|---|---|
| `x` | `idade_aluno` |
| `n` | `nome_completo` |
| `v` | `valor_compra` |
| `m` | `media_final` |

O nome deve indicar o significado do dado, não apenas sua posição ou tipo.

## 4. Tipos de dados primitivos (≈ 15 min)

Uma variável pode armazenar diferentes categorias de informação. Python identifica o tipo do valor atribuído.

| Tipo | O que representa | Exemplo |
|---|---|---|
| `int` | Número inteiro | `18` |
| `float` | Número com parte decimal | `7.5` |
| `bool` | Valor lógico | `True` |
| `str` | Texto | `"Marina"` |

### Inteiros: `int`

```python
idade = 18
quantidade = 5
saldo_pontos = 120
```

### Números decimais: `float`

```python
altura = 1.72
media = 8.5
preco = 19.90
```

Em Python, utiliza-se ponto para separar a parte inteira da parte decimal.

### Valores lógicos: `bool`

O tipo `bool` possui dois valores possíveis:

```python
aprovado = True
tem_desconto = False
```

Destaque que `True` e `False` começam com letra maiúscula.

### Textos: `str`

Textos são delimitados por aspas simples ou duplas.

```python
nome = "Marina"
curso = 'Análise e Desenvolvimento de Sistemas'
```

Números escritos entre aspas são textos:

```python
idade = 18
idade_texto = "18"
```

Embora visualmente semelhantes, as duas variáveis possuem tipos diferentes.

## 5. Tipagem dinâmica e função `type()` (≈ 10 min)

Python utiliza tipagem dinâmica. Isso significa que o tipo associado a uma variável pode mudar quando outro valor é atribuído a ela.

```python
dado = 10
print(type(dado))

dado = "dez"
print(type(dado))
```

Saída:

```text
<class 'int'>
<class 'str'>
```

Explique que a variável não fica permanentemente presa ao primeiro tipo utilizado.

A função `type()` permite consultar o tipo de um valor ou variável.

```python
nome = "Marina"
idade = 19
altura = 1.68
matriculado = True

print(type(nome))
print(type(idade))
print(type(altura))
print(type(matriculado))
```

Saída:

```text
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
```

**Pergunta para a turma:**

> “O valor `25` e o valor `"25"` são iguais para Python? O que muda entre eles?”

## 6. Constantes e convenções de escrita (≈ 5 min)

Uma constante representa um valor que, por convenção, não deve ser alterado durante a execução do programa.

Python não possui uma palavra-chave específica que torne uma variável imutável apenas por declará-la. A convenção é utilizar letras maiúsculas no nome.

```python
PI = 3.14159
TAXA_JUROS = 0.05
LIMITE_TENTATIVAS = 3
```

Explique que escrever o nome em maiúsculas é uma orientação para quem lê e mantém o código.

A biblioteca `math` disponibiliza o valor de pi:

```python
import math

print(math.pi)
```

A instrução `import math` permite acessar recursos matemáticos disponibilizados pela biblioteca padrão.

## 7. Comentários no código (≈ 5 min)

Comentários são textos destinados a explicar o código para pessoas. O interpretador não os executa como instruções.

O caractere `#` inicia um comentário de linha:

```python
# Dados básicos do estudante
nome = "Marina"
idade = 19
```

Também é possível escrever comentários ao lado de uma instrução:

```python
idade = 19  # Idade atual do estudante
```

Aspas triplas podem delimitar textos de várias linhas:

```python
"""
Programa de cadastro de estudante.
Armazena nome e idade.
"""
```

Explique que aspas triplas criam uma string multilinha. Quando não são atribuídas ou utilizadas, podem funcionar como texto explicativo, mas não são o mecanismo padrão de comentário. Para comentários, prefira `#`.

## 8. Exercício de fixação — Dados de um estudante (≈ 15 min)

> **Enunciado:** Crie um programa que armazene o nome, a idade, a altura e a situação de matrícula de um estudante. Exiba cada valor e seu tipo utilizando `type()`.

> **Objetivo:** Praticar atribuição, nomenclatura, tipos primitivos e consulta de tipos.

> **Conteúdos mobilizados:** Variáveis, `str`, `int`, `float`, `bool`, `print()` e `type()`.

Exemplo de saída:

```text
Nome: Marina
Tipo: <class 'str'>

Idade: 19
Tipo: <class 'int'>

Altura: 1.68
Tipo: <class 'float'>

Matriculada: True
Tipo: <class 'bool'>
```

**Condução do professor:**

1. Peça que os alunos escolham nomes claros para as variáveis.
2. Oriente-os a identificar o tipo adequado antes de escrever o código.
3. Solicite que executem o programa e confiram os resultados.
4. Verifique se compreenderam por que `"19"` seria `str`, enquanto `19` seria `int`.

## 9. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- Variáveis associam nomes a valores.
- O operador `=` realiza atribuição.
- Nomes de variáveis devem ser claros e respeitar as regras da linguagem.
- Python diferencia `int`, `float`, `bool` e `str`.
- A função `type()` permite consultar o tipo de um valor.
- A tipagem é dinâmica.
- Constantes são representadas por convenção com nomes em maiúsculas.
- Comentários ajudam a documentar o código.

### Preparação para a próxima aula

Na próxima aula, os alunos utilizarão variáveis em cálculos e aprenderão a receber dados digitados pelo usuário.

---

# Aula 5 — Operadores e entrada, processamento e saída

> **Objetivo:** Receber dados com `input()`, converter valores quando necessário, realizar operações e apresentar resultados.

## 1. Retomada: dados armazenados em variáveis (≈ 5 min)

Retome as variáveis e os tipos estudados na aula anterior.

**Fala sugerida:**

> “Já sabemos guardar informações no programa. Agora precisamos fazer algo com elas: calcular, comparar e produzir resultados.”

Apresente o problema de calcular o valor total de uma compra a partir da quantidade e do preço unitário.

## 2. Operadores aritméticos (≈ 15 min)

Os operadores aritméticos permitem realizar cálculos.

| Operador | Operação | Exemplo | Resultado |
|---|---|---|---|
| `+` | Adição | `8 + 3` | `11` |
| `-` | Subtração | `8 - 3` | `5` |
| `*` | Multiplicação | `8 * 3` | `24` |
| `/` | Divisão | `8 / 3` | `2.666...` |
| `//` | Divisão inteira | `8 // 3` | `2` |
| `%` | Resto da divisão | `8 % 3` | `2` |
| `**` | Potenciação | `2 ** 3` | `8` |

Demonstre cada operação:

```python
a = 8
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)
```

Explique que `/` produz uma divisão comum, enquanto `//` descarta a parte fracionária do quociente.

O operador `%` calcula o resto da divisão. Ele é útil, por exemplo, para verificar se um número é par:

```python
numero = 10

print(numero % 2)
```

Resultado:

```text
0
```

Se o resto da divisão por 2 for zero, o número é par.

## 3. Ordem das operações (≈ 8 min)

Python respeita a precedência dos operadores.

```python
resultado = 2 + 3 * 4
print(resultado)
```

Resultado:

```text
14
```

A multiplicação é realizada antes da adição.

Parênteses podem deixar a intenção explícita:

```python
resultado = (2 + 3) * 4
print(resultado)
```

Resultado:

```text
20
```

**Fala sugerida:**

> “O computador executa a expressão conforme as regras da linguagem. Quando queremos destacar uma parte do cálculo, utilizamos parênteses.”

## 4. Entrada de dados com `input()` (≈ 10 min)

A função `input()` permite receber uma informação digitada pelo usuário.

```python
nome = input("Digite seu nome: ")
print(nome)
```

Explique que `input()` retorna um valor do tipo `str`, mesmo quando o usuário digita números.

```python
idade = input("Digite sua idade: ")

print(type(idade))
```

Se o usuário digitar `20`, o tipo continuará sendo `str`.

## 5. Conversão de tipos (≈ 10 min)

Para realizar cálculos com dados digitados, é necessário converter o texto para um tipo numérico.

| Função | Conversão |
|---|---|
| `int()` | Converte para inteiro, quando possível |
| `float()` | Converte para número decimal |
| `str()` | Converte para texto |

Exemplo:

```python
idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura: "))

print(idade)
print(altura)
```

Para calcular a soma de dois números:

```python
numero1 = float(input("Primeiro número: "))
numero2 = float(input("Segundo número: "))

soma = numero1 + numero2

print("Resultado:", soma)
```

Explique que o programa espera que o usuário informe valores compatíveis com a conversão. Digitar letras onde se espera um número pode gerar um erro.

## 6. Entrada, processamento e saída (≈ 7 min)

Reforce o modelo utilizado desde as primeiras aulas:

```text
ENTRADA
   |
   v
PROCESSAMENTO
   |
   v
SAÍDA
```

Exemplo: cálculo da área de um retângulo.

- Entrada: largura e altura.
- Processamento: multiplicar largura por altura.
- Saída: apresentar a área.

```python
largura = float(input("Largura: "))
altura = float(input("Altura: "))

area = largura * altura

print("Área:", area)
```

## 7. Formatação de saída com `print()` (≈ 5 min)

É possível exibir textos e valores na mesma chamada:

```python
nome = "Marina"
idade = 19

print("Nome:", nome)
print("Idade:", idade)
```

Também é possível utilizar uma f-string:

```python
print(f"{nome} tem {idade} anos.")
```

Explique que o prefixo `f` permite inserir valores de variáveis dentro de uma string utilizando `{}`.

## 8. Exercício de fixação — Calculadora de compra (≈ 15 min)

> **Enunciado:** Desenvolva um programa que solicite o nome de um produto, sua quantidade e seu preço unitário. Calcule e exiba o valor total da compra.

> **Objetivo:** Integrar entrada de dados, conversão, variáveis, multiplicação e saída formatada.

> **Conteúdos mobilizados:** `input()`, `int()`, `float()`, variáveis, operadores aritméticos e `print()`.

Exemplo de entrada:

```text
Produto: Caderno
Quantidade: 3
Preço unitário: 12.50
```

Exemplo de saída:

```text
Produto: Caderno
Quantidade: 3
Total: R$ 37.50
```

**Condução do professor:**

- Oriente os alunos a identificar quais dados são textos, inteiros e decimais.
- Peça que escrevam primeiro a sequência entrada → processamento → saída.
- Verifique se converteram os valores numéricos antes da multiplicação.
- Discuta por que somar a quantidade ao preço não resolveria o problema.

## 9. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- Operadores aritméticos realizam cálculos.
- A precedência determina a ordem das operações.
- `input()` recebe dados como texto.
- `int()` e `float()` convertem textos numéricos.
- `print()` apresenta informações.
- Um programa pode ser organizado em entrada, processamento e saída.

### Preparação para a próxima aula

Na próxima aula, os alunos aprenderão a fazer o programa escolher caminhos diferentes conforme uma condição.

---

# Aula 6 — Estruturas condicionais

> **Objetivo:** Utilizar `if`, `else` e operadores relacionais para executar instruções conforme uma condição.

## 1. Retomada: programas que calculam e apresentam resultados (≈ 5 min)

Retome o programa de compra e pergunte:

> “E se quisermos conceder desconto quando o valor da compra ultrapassar determinado limite? Como o programa poderia escolher entre duas respostas?”

Explique que até agora os programas executaram instruções em sequência. Uma condição permite selecionar um caminho.

## 2. Comparações e operadores relacionais (≈ 10 min)

Operadores relacionais comparam valores e produzem um resultado lógico: `True` ou `False`.

| Operador | Significado |
|---|---|
| `==` | Igual a |
| `!=` | Diferente de |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual a |
| `<=` | Menor ou igual a |

Exemplos:

```python
print(10 > 5)
print(10 == 5)
print(10 != 5)
```

Saída:

```text
True
False
True
```

Destaque a diferença entre `=` e `==`.

- `=` atribui um valor.
- `==` compara dois valores.

## 3. Estrutura `if` (≈ 12 min)

A instrução `if` executa um bloco quando a condição é verdadeira.

```python
idade = 20

if idade >= 18:
    print("Maior de idade")
```

Explique os elementos:

- `if`: inicia a condição.
- `idade >= 18`: expressão avaliada.
- `:`: indica o início do bloco.
- Indentação: identifica as instruções pertencentes ao bloco.

Se a condição for falsa, o bloco não será executado.

```python
idade = 16

if idade >= 18:
    print("Maior de idade")

print("Programa encerrado")
```

Saída:

```text
Programa encerrado
```

## 4. Estrutura `if/else` (≈ 12 min)

Quando existem dois caminhos possíveis, podemos utilizar `else`.

```python
idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")
```

O bloco `if` é executado quando a condição é verdadeira. O bloco `else` é executado quando ela é falsa.

```text
          idade >= 18?
             /   \
           Sim   Não
            |     |
      Maior de   Menor de
       idade      idade
```

**Pergunta para a turma:**

> “Se a idade for exatamente 18, qual caminho será executado? Por quê?”

## 5. Estrutura `if/elif/else` (≈ 13 min)

Quando existem mais de duas possibilidades, podemos utilizar `elif`.

Exemplo: classificar uma nota.

```python
nota = float(input("Digite a nota: "))

if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

Explique que as condições são verificadas de cima para baixo. Quando uma condição é verdadeira, seu bloco é executado e as demais alternativas são ignoradas.

A ordem das condições é importante.

Exemplo de erro lógico:

```python
nota = 9

if nota >= 5:
    print("Recuperação")
elif nota >= 7:
    print("Aprovado")
```

A condição `nota >= 5` já é verdadeira para uma nota 9. Por isso, o programa não chega à condição seguinte.

Corrija a ordem:

```python
nota = 9

if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

## 6. Indentação e blocos de código (≈ 5 min)

Em Python, a indentação define quais instruções pertencem a cada bloco.

```python
idade = 20

if idade >= 18:
    print("Maior de idade")
    print("Pode seguir para a próxima etapa")

print("Fim")
```

As duas primeiras chamadas de `print()` pertencem ao `if`. A última está fora do bloco.

Demonstre que uma indentação incorreta pode causar erro de sintaxe ou alterar a lógica do programa.

## 7. Exercício de fixação — Classificação de nota (≈ 18 min)

> **Enunciado:** Crie um programa que receba a nota de um estudante e informe “Aprovado” quando a nota for maior ou igual a 7, “Recuperação” quando estiver entre 5 e 6,99, e “Reprovado” quando for menor que 5.

> **Objetivo:** Construir uma decisão com três caminhos e utilizar comparações numéricas.

> **Conteúdos mobilizados:** Variáveis, `input()`, `float()`, operadores relacionais, `if`, `elif`, `else` e `print()`.

Exemplos:

```text
Nota: 8.5
Resultado: Aprovado
```

```text
Nota: 6.0
Resultado: Recuperação
```

```text
Nota: 4.5
Resultado: Reprovado
```

**Condução do professor:**

1. Peça que os alunos definam os intervalos antes de programar.
2. Oriente-os a escrever primeiro a condição de aprovação.
3. Solicite testes com valores 7, 5 e 4,9.
4. Observe a ordem das condições e a indentação.

## 8. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- Condições permitem selecionar caminhos de execução.
- Operadores relacionais produzem resultados lógicos.
- `if` executa um bloco quando a condição é verdadeira.
- `else` representa o caminho alternativo.
- `elif` permite testar outras condições.
- A ordem das condições pode alterar o resultado.
- A indentação define os blocos em Python.

### Preparação para a próxima aula

Na próxima aula, os alunos combinarão condições, analisarão erros de lógica e aprenderão a testar diferentes situações.

---

# Aula 7 — Decisões, condições compostas e depuração

> **Objetivo:** Combinar condições, interpretar erros lógicos e testar programas com diferentes entradas.

## 1. Retomada: decisões em programas (≈ 5 min)

Retome a classificação de notas.

Pergunte:

> “E se um estudante só puder ser aprovado se tiver nota suficiente e frequência mínima? Uma única comparação seria suficiente?”

Explique que problemas reais frequentemente exigem mais de uma condição.

## 2. Operadores lógicos `and`, `or` e `not` (≈ 15 min)

Os operadores lógicos permitem combinar ou inverter condições.

| Operador | Significado | Resultado |
|---|---|---|
| `and` | E | Verdadeiro quando ambas as condições são verdadeiras |
| `or` | OU | Verdadeiro quando pelo menos uma condição é verdadeira |
| `not` | NÃO | Inverte o valor lógico |

### Operador `and`

```python
nota = 8
frequencia = 90

if nota >= 7 and frequencia >= 75:
    print("Aprovado")
else:
    print("Não aprovado")
```

Para entrar no bloco, as duas condições precisam ser verdadeiras.

### Operador `or`

```python
tem_ingresso = True
esta_na_lista = False

if tem_ingresso or esta_na_lista:
    print("Entrada autorizada")
else:
    print("Entrada não autorizada")
```

Basta uma das condições ser verdadeira.

### Operador `not`

```python
esta_chovendo = False

if not esta_chovendo:
    print("Pode sair")
```

`not` inverte o resultado lógico.

## 3. Tabelas-verdade (≈ 8 min)

Utilize as tabelas para demonstrar o comportamento dos operadores.

### `and`

| A | B | A and B |
|---|---|---|
| `True` | `True` | `True` |
| `True` | `False` | `False` |
| `False` | `True` | `False` |
| `False` | `False` | `False` |

### `or`

| A | B | A or B |
|---|---|---|
| `True` | `True` | `True` |
| `True` | `False` | `True` |
| `False` | `True` | `True` |
| `False` | `False` | `False` |

### `not`

| A | not A |
|---|---|
| `True` | `False` |
| `False` | `True` |

Explique que uma condição composta pode ser lida como uma frase lógica.

Exemplo:

```python
nota >= 7 and frequencia >= 75
```

Leitura:

> “A nota é maior ou igual a 7 E a frequência é maior ou igual a 75.”

## 4. Condições encadeadas e limites (≈ 10 min)

Demonstre como organizar faixas de valores.

```python
nota = float(input("Digite a nota: "))

if nota < 0 or nota > 10:
    print("Nota inválida")
elif nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

Explique que a primeira condição verifica se o valor está fora do intervalo esperado.

Destaque os casos de fronteira:

- Nota 0.
- Nota 4,99.
- Nota 5.
- Nota 6,99.
- Nota 7.
- Nota 10.
- Nota acima de 10.

Os valores de fronteira são importantes porque pequenos erros nos operadores podem mudar a classificação.

## 5. Depuração: encontrar e corrigir erros (≈ 12 min)

Depurar é investigar o comportamento de um programa para identificar e corrigir problemas.

Apresente três categorias:

| Categoria | Característica | Exemplo |
|---|---|---|
| Erro de sintaxe | O código não segue a gramática da linguagem | Esquecer `:` |
| Erro de execução | O programa inicia, mas falha durante a execução | Converter `"abc"` para `int` |
| Erro lógico | O programa executa, mas produz resultado incorreto | Condição na ordem errada |

Exemplo com erro lógico:

```python
nota = 8

if nota >= 5:
    print("Recuperação")
elif nota >= 7:
    print("Aprovado")
else:
    print("Reprovado")
```

Pergunte qual saída será exibida e por quê.

Depois, corrija:

```python
nota = 8

if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

Explique que o programa não “entende a intenção” do programador. Ele executa as condições na ordem escrita.

## 6. Estratégia de testes (≈ 10 min)

Apresente uma rotina simples para testar programas:

1. Identificar os resultados esperados.
2. Escolher entradas representativas.
3. Executar o programa.
4. Comparar o resultado obtido com o esperado.
5. Corrigir e repetir os testes.

Para a classificação de notas, utilize:

| Entrada | Resultado esperado |
|---|---|
| `8` | Aprovado |
| `7` | Aprovado |
| `6` | Recuperação |
| `5` | Recuperação |
| `4` | Reprovado |
| `-1` | Nota inválida |
| `11` | Nota inválida |

Destaque a importância de testar valores próximos aos limites.

## 7. Exercício de fixação — Validação de acesso (≈ 15 min)

> **Enunciado:** Desenvolva um programa que solicite a idade e pergunte se a pessoa possui autorização. A entrada será permitida quando a idade for maior ou igual a 18 ou quando a pessoa possuir autorização. Caso contrário, informe que a entrada não foi permitida.

> **Objetivo:** Utilizar operadores lógicos e estruturas condicionais para combinar informações.

> **Conteúdos mobilizados:** Variáveis, entrada de dados, conversão para inteiro, comparações, `or`, `if` e `else`.

Exemplo:

```text
Idade: 16
Possui autorização? (s/n): s
Entrada permitida
```

**Condução do professor:**

- Peça aos alunos que escrevam a regra em linguagem natural.
- Oriente-os a identificar as duas condições.
- Solicite testes com maior de idade sem autorização e menor de idade com autorização.
- Verifique se a condição foi construída com `or`, conforme a regra proposta.

## 8. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- `and`, `or` e `not` combinam ou invertem condições.
- Condições compostas representam regras com múltiplos critérios.
- Valores de fronteira devem ser testados.
- Erros podem ser de sintaxe, execução ou lógica.
- Depuração envolve observar, testar e corrigir.

### Preparação para a próxima aula

Na próxima aula, os alunos aprenderão a repetir instruções enquanto uma condição permanecer verdadeira.

---

# Aula 8 — Estrutura de repetição `while`

> **Objetivo:** Utilizar `while` para repetir instruções enquanto uma condição for verdadeira, controlando o encerramento do laço.

## 1. Retomada: decisões e repetição (≈ 5 min)

Retome as estruturas condicionais.

**Fala sugerida:**

> “Com `if`, o programa decide se executa um bloco. Mas como faríamos para solicitar uma senha novamente quando ela estiver errada, sem escrever várias vezes as mesmas instruções?”

Apresente a necessidade de repetir ações.

## 2. O que é uma estrutura de repetição? (≈ 8 min)

Uma estrutura de repetição permite executar um bloco de código várias vezes.

Sem repetição, seria necessário escrever instruções repetidas:

```python
print("Olá")
print("Olá")
print("Olá")
```

Com repetição, a mesma instrução pode ser executada várias vezes.

```python
contador = 0

while contador < 3:
    print("Olá")
    contador = contador + 1
```

Saída:

```text
Olá
Olá
Olá
```

Explique que o `while` verifica uma condição antes de cada execução do bloco.

## 3. Anatomia do `while` (≈ 12 min)

Estrutura geral:

```python
while condicao:
    instrucoes
```

Exemplo:

```python
contador = 1

while contador <= 5:
    print(contador)
    contador = contador + 1
```

Explique cada etapa:

1. A variável `contador` começa em 1.
2. O programa verifica se `contador <= 5`.
3. Se a condição for verdadeira, executa o bloco.
4. O contador é incrementado.
5. A condição é verificada novamente.
6. Quando a condição for falsa, o laço termina.

Demonstre o estado das variáveis:

| Iteração | Contador antes da impressão | Condição |
|---|---:|---|
| 1 | 1 | Verdadeira |
| 2 | 2 | Verdadeira |
| 3 | 3 | Verdadeira |
| 4 | 4 | Verdadeira |
| 5 | 5 | Verdadeira |
| Encerramento | 6 | Falsa |

## 4. Contador e atualização da variável (≈ 10 min)

Um laço precisa de uma condição que eventualmente se torne falsa.

```python
contador = 1

while contador <= 3:
    print(contador)
    contador += 1
```

O operador `+=` atualiza o valor da variável.

```python
contador += 1
```

É equivalente a:

```python
contador = contador + 1
```

Explique que o contador pode aumentar ou diminuir, dependendo da lógica do programa.

## 5. Laço infinito e erros comuns (≈ 10 min)

Um laço infinito ocorre quando a condição permanece verdadeira e o programa não alcança o encerramento esperado.

Exemplo:

```python
contador = 1

while contador <= 3:
    print(contador)
```

O contador nunca é alterado. A condição continua verdadeira.

Corrija:

```python
contador = 1

while contador <= 3:
    print(contador)
    contador += 1
```

Destaque os três elementos que devem ser verificados:

- Valor inicial.
- Condição de continuidade.
- Atualização da variável de controle.

**Pergunta para a turma:**

> “Se o contador começar em 1, mas a condição for `contador < 1`, o bloco será executado?”

## 6. Entrada controlada por `while` (≈ 10 min)

Uma aplicação comum é repetir uma solicitação até que o usuário informe um valor válido.

```python
senha = input("Digite a senha: ")

while senha != "python123":
    print("Senha incorreta")
    senha = input("Tente novamente: ")

print("Acesso autorizado")
```

Explique o fluxo:

```text
Solicita senha
     |
     v
Senha correta?
  /       \
Não       Sim
 |         |
Solicita   Acesso
novamente  autorizado
 |         |
 +----<----+
```

Destaque que a variável `senha` precisa receber um novo valor dentro do laço. Caso contrário, a condição não muda.

## 7. Acumuladores (≈ 10 min)

Um acumulador guarda um resultado que é atualizado a cada repetição.

Exemplo: somar os números de 1 a 5.

```python
contador = 1
soma = 0

while contador <= 5:
    soma = soma + contador
    contador += 1

print("Soma:", soma)
```

Resultado:

```text
Soma: 15
```

Explique a diferença:

- `contador` controla quantas repetições ocorreram.
- `soma` acumula os valores adicionados.

Tabela de acompanhamento:

| Contador | Soma antes | Soma depois |
|---:|---:|---:|
| 1 | 0 | 1 |
| 2 | 1 | 3 |
| 3 | 3 | 6 |
| 4 | 6 | 10 |
| 5 | 10 | 15 |

## 8. Exercício de fixação — Tentativas de senha (≈ 15 min)

> **Enunciado:** Crie um programa que solicite uma senha e permita até três tentativas. Se a senha estiver correta, exiba “Acesso autorizado”. Se as três tentativas forem incorretas, exiba “Acesso bloqueado”.

> **Objetivo:** Controlar um laço com contador, condição e decisão.

> **Conteúdos mobilizados:** Variáveis, `input()`, comparação, `while`, contador, `if` e `else`.

Exemplo de execução:

```text
Digite a senha: teste
Senha incorreta
Digite a senha: abc
Senha incorreta
Digite a senha: python123
Acesso autorizado
```

**Condução do professor:**

1. Peça que os alunos definam quando o laço deve continuar.
2. Oriente-os a criar um contador de tentativas.
3. Discuta como encerrar o laço quando a senha estiver correta.
4. Solicite um teste em que as três tentativas sejam incorretas.
5. Verifique se o programa não solicita uma quarta tentativa.

## 9. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- `while` repete enquanto a condição for verdadeira.
- O laço precisa de uma condição de encerramento.
- Contadores controlam repetições.
- Acumuladores guardam resultados progressivos.
- Laços infinitos podem ocorrer quando a condição nunca se torna falsa.

### Preparação para a próxima aula

Na próxima aula, os alunos utilizarão `for` e `range()` para percorrer sequências e executar repetições com quantidade definida.

---

# Aula 9 — Estrutura de repetição `for` e `range()`

> **Objetivo:** Utilizar `for` e `range()` para executar repetições controladas por uma sequência de valores.

## 1. Retomada: repetição com `while` (≈ 5 min)

Retome o exemplo de contagem da aula anterior.

```python
contador = 1

while contador <= 5:
    print(contador)
    contador += 1
```

Pergunte:

> “Se sabemos antecipadamente que queremos repetir cinco vezes, existe uma forma mais direta de escrever esse código?”

Apresente o `for`.

## 2. Estrutura `for` (≈ 10 min)

O `for` percorre os elementos de uma sequência.

```python
for numero in range(5):
    print(numero)
```

Saída:

```text
0
1
2
3
4
```

Explique que `range(5)` produz uma sequência de números que começa em 0 e termina antes de 5.

O bloco é executado uma vez para cada valor da sequência.

## 3. A função `range()` (≈ 15 min)

A função `range()` pode receber um, dois ou três argumentos.

### `range(fim)`

```python
for numero in range(5):
    print(numero)
```

Produz valores de 0 até 4.

### `range(inicio, fim)`

```python
for numero in range(1, 6):
    print(numero)
```

Produz valores de 1 até 5.

### `range(inicio, fim, passo)`

```python
for numero in range(2, 11, 2):
    print(numero)
```

Saída:

```text
2
4
6
8
10
```

O terceiro argumento define o passo da sequência.

Também é possível contar de trás para frente:

```python
for numero in range(5, 0, -1):
    print(numero)
```

Saída:

```text
5
4
3
2
1
```

Destaque que o valor final não é incluído.

| Expressão | Valores produzidos |
|---|---|
| `range(4)` | 0, 1, 2, 3 |
| `range(1, 5)` | 1, 2, 3, 4 |
| `range(2, 10, 2)` | 2, 4, 6, 8 |
| `range(5, 0, -1)` | 5, 4, 3, 2, 1 |

## 4. Repetições com quantidade definida (≈ 10 min)

Quando a quantidade de repetições é conhecida, `for` costuma deixar o código mais simples.

```python
for tentativa in range(3):
    print("Tentativa", tentativa + 1)
```

Saída:

```text
Tentativa 1
Tentativa 2
Tentativa 3
```

Explique que a variável `tentativa` recebe cada valor produzido pelo `range()`.

A contagem começa em 0, mas podemos apresentar `tentativa + 1` para exibir números iniciando em 1.

## 5. Acumuladores com `for` (≈ 10 min)

O `for` também pode ser utilizado para somar valores.

```python
soma = 0

for numero in range(1, 6):
    soma = soma + numero

print("Soma:", soma)
```

Resultado:

```text
Soma: 15
```

A variável `soma` começa em zero e recebe a cada repetição o valor acumulado mais o número atual.

Outro exemplo: calcular a média de três notas.

```python
soma = 0

for i in range(3):
    nota = float(input("Digite uma nota: "))
    soma += nota

media = soma / 3

print("Média:", media)
```

Explique que o laço solicita três notas, acumula os valores e calcula a média após o término da repetição.

## 6. Comparação entre `while` e `for` (≈ 8 min)

| `while` | `for` |
|---|---|
| Repete enquanto uma condição for verdadeira | Percorre uma sequência |
| Útil quando não se sabe previamente quantas repetições serão necessárias | Útil quando a sequência ou quantidade de repetições é conhecida |
| Geralmente exige atualização manual da variável de controle | A variável recebe automaticamente o próximo valor da sequência |

Exemplo com `while`:

```python
contador = 1

while contador <= 5:
    print(contador)
    contador += 1
```

Exemplo com `for`:

```python
for contador in range(1, 6):
    print(contador)
```

Explique que ambos podem produzir o mesmo resultado, mas o `for` é mais direto nesse caso.

## 7. Exercício de fixação — Tabuada (≈ 17 min)

> **Enunciado:** Crie um programa que solicite um número inteiro e exiba sua tabuada de 1 a 10 utilizando `for` e `range()`.

> **Objetivo:** Praticar repetição controlada e operações aritméticas.

> **Conteúdos mobilizados:** `input()`, `int()`, variáveis, multiplicação, `for`, `range()` e `print()`.

Exemplo de entrada:

```text
Digite um número: 7
```

Exemplo de saída:

```text
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

**Condução do professor:**

- Peça que os alunos identifiquem qual valor permanece fixo e qual muda.
- Oriente-os a utilizar `range(1, 11)`.
- Verifique se o limite final foi corretamente escolhido.
- Solicite que testem outro número.

## 8. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- `for` percorre uma sequência.
- `range()` gera uma sequência de números.
- O limite final de `range()` não é incluído.
- O passo pode controlar o intervalo entre valores.
- `for` é útil quando a quantidade de repetições é conhecida.
- Acumuladores podem ser utilizados dentro de laços.

### Preparação para a próxima aula

Na próxima aula, os alunos combinarão repetições e decisões para resolver problemas que exigem análise de cada valor processado.

---

# Aula 10 — Decisões e repetições combinadas

> **Objetivo:** Combinar estruturas condicionais e de repetição para analisar sequências de dados e produzir resultados.

## 1. Retomada: repetição e decisão (≈ 5 min)

Retome a tabuada com `for`.

Pergunte:

> “Como poderíamos percorrer os números de 1 a 10 e mostrar apenas aqueles que são pares?”

Explique que o laço permite percorrer os valores e a condição decide quais serão tratados de maneira especial.

## 2. Condição dentro de um laço (≈ 12 min)

Exemplo: exibir números pares de 1 a 10.

```python
for numero in range(1, 11):
    if numero % 2 == 0:
        print(numero)
```

Saída:

```text
2
4
6
8
10
```

Explique a execução:

1. O `for` fornece um número.
2. O `if` verifica se o resto da divisão por 2 é zero.
3. Se a condição for verdadeira, o número é exibido.
4. O laço recebe o próximo número.

Diagrama:

```text
Início
  |
  v
Próximo número
  |
  v
É par?
 /   \
Sim  Não
 |    |
Exibe |
 \    /
  v
Próximo número
```

## 3. Acumular valores que atendem a uma condição (≈ 12 min)

Exemplo: somar apenas os números pares de 1 a 10.

```python
soma = 0

for numero in range(1, 11):
    if numero % 2 == 0:
        soma += numero

print("Soma dos pares:", soma)
```

Resultado:

```text
Soma dos pares: 30
```

Explique que a variável `soma` só é atualizada quando a condição é verdadeira.

Tabela de acompanhamento:

| Número | É par? | Soma acumulada |
|---:|---|---:|
| 1 | Não | 0 |
| 2 | Sim | 2 |
| 3 | Não | 2 |
| 4 | Sim | 6 |
| 5 | Não | 6 |
| 6 | Sim | 12 |
| 7 | Não | 12 |
| 8 | Sim | 20 |
| 9 | Não | 20 |
| 10 | Sim | 30 |

## 4. Contar ocorrências (≈ 10 min)

Um contador pode registrar quantas vezes uma condição é verdadeira.

Exemplo: contar números divisíveis por 3 entre 1 e 20.

```python
quantidade = 0

for numero in range(1, 21):
    if numero % 3 == 0:
        quantidade += 1

print("Quantidade:", quantidade)
```

Resultado:

```text
Quantidade: 6
```

Explique a diferença entre contar ocorrências e somar valores:

- Contador: aumenta normalmente em uma unidade.
- Acumulador: adiciona valores que podem variar.

## 5. Entrada de vários valores (≈ 12 min)

Um programa pode solicitar várias informações dentro de um laço.

Exemplo: receber cinco notas e contar quantas são maiores ou iguais a 7.

```python
aprovados = 0

for i in range(5):
    nota = float(input("Digite uma nota: "))

    if nota >= 7:
        aprovados += 1

print("Quantidade de notas aprovadas:", aprovados)
```

Explique que o `for` controla a quantidade de notas recebidas e o `if` decide quando incrementar o contador.

O programa não precisa armazenar todas as notas se o objetivo for apenas contar quantas atendem à condição.

## 6. Erros comuns em estruturas combinadas (≈ 8 min)

### Indentação incorreta

```python
for numero in range(1, 6):
    if numero % 2 == 0:
        print(numero)
```

A impressão pertence ao `if`, que pertence ao `for`.

### Acumulador inicializado dentro do laço

Exemplo incorreto:

```python
for numero in range(1, 6):
    soma = 0
    soma += numero

print(soma)
```

A variável é reiniciada a cada repetição. O resultado final não representa a soma de todos os valores.

Correção:

```python
soma = 0

for numero in range(1, 6):
    soma += numero

print(soma)
```

Explique que contadores e acumuladores normalmente devem ser inicializados antes do laço quando precisam preservar o resultado entre as repetições.

## 7. Exercício de fixação — Soma dos pares (≈ 16 min)

> **Enunciado:** Crie um programa que solicite um número inteiro positivo e some todos os números pares de 1 até esse número. Ao final, exiba a soma.

> **Objetivo:** Integrar repetição, condição e acumulador.

> **Conteúdos mobilizados:** Entrada, conversão para inteiro, operadores aritméticos, `for`, `range()`, `if`, operador `%` e acumulador.

Exemplo de entrada:

```text
Digite um limite: 10
```

Exemplo de saída:

```text
Soma dos números pares: 30
```

**Condução do professor:**

1. Peça que os alunos identifiquem o intervalo a percorrer.
2. Oriente-os a verificar cada número com `% 2`.
3. Verifique se a soma começa em zero.
4. Solicite um teste com limite 6 e outro com limite 1.
5. Discuta o que ocorre quando o limite não possui números pares no intervalo.

## 8. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- Um laço pode conter uma estrutura condicional.
- Uma condição pode selecionar quais valores serão processados.
- Contadores registram ocorrências.
- Acumuladores guardam resultados progressivos.
- A posição da inicialização e a indentação alteram o comportamento do programa.

### Preparação para a próxima aula

Na próxima aula, os alunos aprenderão a armazenar vários valores em uma única estrutura: as listas.

---

# Aula 11 — Listas

> **Objetivo:** Criar listas, acessar seus elementos e utilizar operações básicas para armazenar e percorrer conjuntos de dados.

## 1. Retomada: processar vários valores (≈ 5 min)

Retome o exemplo de cinco notas.

Pergunte:

> “Se quisermos guardar todas as notas para consultá-las novamente, precisamos criar uma variável para cada uma?”

Apresente as listas como uma estrutura que permite armazenar vários valores em uma única variável.

## 2. O que é uma lista? (≈ 10 min)

Uma lista é uma coleção ordenada de elementos.

```python
notas = [8.0, 7.5, 9.0, 6.5]
```

A lista contém quatro valores. Os elementos são separados por vírgulas e delimitados por colchetes.

Uma lista pode armazenar textos:

```python
nomes = ["Ana", "Bruno", "Carla"]
```

Também pode armazenar elementos de tipos diferentes:

```python
dados = ["Ana", 19, 1.68, True]
```

Explique que, embora seja possível misturar tipos, listas com elementos de mesma finalidade costumam facilitar a organização do programa.

## 3. Índices e acesso aos elementos (≈ 10 min)

Cada elemento possui uma posição chamada índice. Em Python, os índices começam em zero.

```python
nomes = ["Ana", "Bruno", "Carla"]

print(nomes[0])
print(nomes[1])
print(nomes[2])
```

Saída:

```text
Ana
Bruno
Carla
```

Representação:

```text
Índice:    0        1        2
         +--------+--------+--------+
Lista:   | "Ana"  | "Bruno"| "Carla"|
         +--------+--------+--------+
```

Explique que tentar acessar um índice inexistente gera erro.

```python
nomes = ["Ana", "Bruno", "Carla"]

print(nomes[3])  # Índice inexistente
```

## 4. Alterar elementos (≈ 7 min)

É possível substituir um elemento utilizando seu índice.

```python
nomes = ["Ana", "Bruno", "Carla"]

nomes[1] = "Beatriz"

print(nomes)
```

Saída:

```text
['Ana', 'Beatriz', 'Carla']
```

Atribuir um novo valor a um índice existente altera o elemento daquela posição.

## 5. Tamanho da lista com `len()` (≈ 7 min)

A função `len()` retorna a quantidade de elementos.

```python
nomes = ["Ana", "Bruno", "Carla"]

print(len(nomes))
```

Resultado:

```text
3
```

Explique que, em uma lista com três elementos, os índices são 0, 1 e 2, mas o tamanho é 3.

Essa diferença é importante para percorrer listas sem ultrapassar seus limites.

## 6. Adicionar e remover elementos (≈ 10 min)

### Adicionar com `append()`

O método `append()` adiciona um elemento ao final da lista.

```python
nomes = ["Ana", "Bruno"]

nomes.append("Carla")

print(nomes)
```

Resultado:

```text
['Ana', 'Bruno', 'Carla']
```

### Remover com `remove()`

O método `remove()` remove a primeira ocorrência de um valor.

```python
nomes = ["Ana", "Bruno", "Carla"]

nomes.remove("Bruno")

print(nomes)
```

Resultado:

```text
['Ana', 'Carla']
```

Explique que `remove()` procura pelo valor informado. Se o valor não estiver na lista, ocorre um erro.

## 7. Percorrer uma lista com `for` (≈ 12 min)

É possível percorrer diretamente os elementos:

```python
nomes = ["Ana", "Bruno", "Carla"]

for nome in nomes:
    print(nome)
```

Saída:

```text
Ana
Bruno
Carla
```

Também é possível percorrer os índices:

```python
nomes = ["Ana", "Bruno", "Carla"]

for i in range(len(nomes)):
    print(i, nomes[i])
```

Saída:

```text
0 Ana
1 Bruno
2 Carla
```

Explique a diferença:

- `for nome in nomes` percorre diretamente os valores.
- `for i in range(len(nomes))` percorre os índices.

## 8. Listas numéricas e operações básicas (≈ 8 min)

Exemplo: calcular a soma de uma lista de notas.

```python
notas = [8.0, 7.5, 9.0]
soma = 0

for nota in notas:
    soma += nota

print("Soma:", soma)
```

Para calcular a média:

```python
media = soma / len(notas)
print("Média:", media)
```

Destaque que `len(notas)` representa a quantidade de elementos. Assim, o programa não precisa escrever manualmente o número de notas.

## 9. Exercício de fixação — Registro de notas (≈ 16 min)

> **Enunciado:** Crie um programa que receba cinco notas, armazene-as em uma lista e exiba todas as notas, a soma e a média.

> **Objetivo:** Utilizar listas para armazenar dados e percorrê-los com repetição.

> **Conteúdos mobilizados:** Variáveis, `input()`, `float()`, listas, `append()`, `for`, `range()`, acumulador, `len()` e `print()`.

Exemplo de entrada:

```text
Nota 1: 8
Nota 2: 7
Nota 3: 9
Nota 4: 6
Nota 5: 10
```

Exemplo de saída:

```text
Notas: [8.0, 7.0, 9.0, 6.0, 10.0]
Soma: 40.0
Média: 8.0
```

**Condução do professor:**

1. Oriente os alunos a criar uma lista vazia.
2. Peça que utilizem um laço para solicitar cinco notas.
3. Verifique se cada nota é adicionada com `append()`.
4. Oriente-os a percorrer a lista para calcular a soma.
5. Reforce o uso de `len()` para obter a quantidade de notas.

## 10. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- Listas armazenam vários elementos em uma única estrutura.
- Os índices começam em zero.
- `len()` retorna a quantidade de elementos.
- `append()` adiciona um elemento ao final.
- `remove()` remove a primeira ocorrência de um valor.
- `for` permite percorrer os elementos ou seus índices.
- Listas podem ser utilizadas para calcular somas e médias.

### Preparação para a próxima aula

Na próxima aula, os alunos aplicarão os conceitos estudados em problemas integrados, planejando a solução antes de programar.

---

# Aula 12 — Resolução integrada de problemas

> **Objetivo:** Planejar, implementar e testar soluções que combinem variáveis, entrada e saída, decisões, repetições e listas.

## 1. Retomada: ferramentas para resolver problemas (≈ 5 min)

Retome os conteúdos trabalhados:

- Variáveis e tipos.
- Entrada e saída.
- Operadores.
- Condições.
- Repetições.
- Listas.

Explique que problemas maiores podem ser resolvidos combinando estruturas já conhecidas.

**Fala sugerida:**

> “Não precisamos aprender uma nova instrução para cada problema. Precisamos aprender a escolher e combinar as instruções que já conhecemos.”

## 2. Estratégia de resolução (≈ 10 min)

Apresente uma sequência de trabalho:

1. Compreender o enunciado.
2. Identificar os dados de entrada.
3. Definir o resultado esperado.
4. Planejar o processamento.
5. Escolher as estruturas necessárias.
6. Escrever o código.
7. Testar com diferentes entradas.
8. Corrigir os problemas encontrados.

Utilize um problema simples: calcular a média de várias notas.

| Etapa | Decisão |
|---|---|
| Entrada | Quantidade de notas e valores |
| Processamento | Somar e dividir pela quantidade |
| Saída | Média calculada |
| Estruturas | Variáveis, lista, repetição e operações |

## 3. Exemplo integrado: média de notas (≈ 15 min)

Apresente o problema:

> “Receber três notas, armazená-las, calcular a média e informar se o estudante foi aprovado.”

Planejamento:

```text
Início
  |
  v
Criar lista de notas
  |
  v
Receber três notas
  |
  v
Calcular a média
  |
  v
Média >= 7?
 /       \
Sim      Não
 |        |
Aprovado  Não aprovado
  \       /
     Fim
```

Implementação:

```python
notas = []

for i in range(3):
    nota = float(input("Digite uma nota: "))
    notas.append(nota)

soma = 0

for nota in notas:
    soma += nota

media = soma / len(notas)

print("Média:", media)

if media >= 7:
    print("Aprovado")
else:
    print("Não aprovado")
```

Explique as partes do programa:

- A lista armazena as notas.
- O primeiro `for` recebe os valores.
- O segundo `for` calcula a soma.
- `len()` informa a quantidade de notas.
- `if/else` determina a mensagem final.

## 4. Exemplo integrado: soma dos pares (≈ 10 min)

Problema:

> “Receber um limite e somar os números pares desde 1 até esse limite.”

```python
limite = int(input("Digite o limite: "))
soma = 0

for numero in range(1, limite + 1):
    if numero % 2 == 0:
        soma += numero

print("Soma dos pares:", soma)
```

Destaque que `limite + 1` é utilizado porque o limite final de `range()` não é incluído.

Peça aos alunos que acompanhem manualmente a execução com limite 6.

## 5. Exemplo integrado: validação de senha (≈ 10 min)

Problema:

> “Solicitar uma senha até que o usuário informe a senha correta.”

```python
senha = input("Digite a senha: ")

while senha != "python123":
    print("Senha incorreta")
    senha = input("Tente novamente: ")

print("Acesso autorizado")
```

Retome a condição de continuidade e a atualização da variável dentro do laço.

Pergunte:

> “O que aconteceria se não solicitássemos uma nova senha dentro do `while`?”

## 6. Depuração e testes de mesa (≈ 10 min)

Apresente um código com erro:

```python
soma = 0

for numero in range(1, 6):
    if numero % 2 == 0:
        soma = numero

print(soma)
```

Pergunte:

> “O programa está somando todos os pares ou apenas guardando o último número par encontrado?”

Corrija:

```python
soma = 0

for numero in range(1, 6):
    if numero % 2 == 0:
        soma += numero

print(soma)
```

Explique que a diferença entre `soma = numero` e `soma += numero` é decisiva.

Utilize uma tabela de teste de mesa:

| Número | É par? | Soma |
|---:|---|---:|
| 1 | Não | 0 |
| 2 | Sim | 2 |
| 3 | Não | 2 |
| 4 | Sim | 6 |
| 5 | Não | 6 |

## 7. Exercício de fixação — Cadastro de salários (≈ 15 min)

> **Enunciado:** Desenvolva um programa que leia o nome e o salário de cinco funcionários. Ao final, informe a média salarial e o nome do funcionário com o maior salário.

> **Objetivo:** Resolver um problema integrado utilizando listas, repetição, comparação e acumuladores.

> **Conteúdos mobilizados:** Variáveis, `input()`, conversão numérica, listas, `append()`, `for`, `if`, soma, média e comparação.

Exemplo de entrada:

```text
Funcionário: Ana
Salário: 2500

Funcionário: Bruno
Salário: 3200

Funcionário: Carla
Salário: 2800

Funcionário: Diego
Salário: 4100

Funcionário: Elisa
Salário: 3000
```

Exemplo de saída:

```text
Média salarial: 3120.0
Maior salário: Diego — R$ 4100.00
```

**Condução do professor:**

1. Oriente os alunos a pensar como armazenar os nomes e salários.
2. Peça que identifiquem quais valores precisam ser acumulados.
3. Discuta como localizar o maior salário.
4. Sugira que testem valores iguais e salários em ordem crescente ou decrescente.
5. Observe se o programa compara corretamente todos os funcionários.

## 8. Fechamento da aula (≈ 5 min)

### Conceitos que o aluno deve levar desta aula

- Problemas integrados exigem planejamento.
- Variáveis, listas, condições e repetições podem trabalhar em conjunto.
- A solução deve ser testada com diferentes entradas.
- Testes de mesa ajudam a acompanhar valores e encontrar erros.
- A escolha correta das estruturas depende do problema.

### Preparação para a próxima aula

Na próxima aula, cada aluno ou grupo escolherá um problema simples para desenvolver como projeto final.

---

# Aula 13 — Projeto final: planejamento e desenvolvimento

> **Objetivo:** Planejar e iniciar um programa funcional que resolva um problema simples utilizando os conteúdos do curso.

## 1. Apresentação da proposta de projeto (≈ 8 min)

Explique que o projeto final será uma aplicação pequena, mas funcional, construída com os conceitos estudados.

O projeto deve demonstrar que o aluno consegue:

- Compreender um problema.
- Definir entradas e saídas.
- Planejar a lógica.
- Utilizar variáveis e tipos.
- Aplicar operadores.
- Utilizar decisões e repetições quando necessárias.
- Testar o comportamento do programa.
- Explicar como a solução funciona.

**Fala sugerida:**

> “O objetivo não é criar o programa mais complexo. É desenvolver uma solução pequena, compreensível e funcional, explicando as decisões tomadas durante a construção.”

## 2. Escolha do problema (≈ 10 min)

Apresente sugestões de projetos compatíveis com os conteúdos estudados.

| Projeto | Funcionalidade principal |
|---|---|
| Calculadora | Realizar operações aritméticas |
| Controle de notas | Registrar notas e calcular média |
| Caixa eletrônico simplificado | Consultar saldo e realizar operações simuladas |
| Jogo de adivinhação | Comparar tentativas com um número definido |
| Cadastro de produtos | Registrar produtos e preços |
| Tabuada interativa | Gerar tabuada de um número |
| Validação de senha | Verificar senha e controlar tentativas |
| Relatório de vendas | Registrar valores e calcular total ou média |

Oriente os alunos a escolher um problema que possa ser concluído no tempo disponível.

Evite ampliar o escopo durante o desenvolvimento. Um programa pequeno e concluído é preferível a uma ideia extensa que não funciona.

## 3. Definição do problema e dos requisitos (≈ 10 min)

Cada aluno ou grupo deve responder:

1. Qual problema o programa resolve?
2. Quem utilizará o programa?
3. Quais dados serão informados?
4. Quais resultados serão apresentados?
5. Quais cálculos ou decisões serão necessários?
6. Quais situações precisam ser testadas?

Exemplo: controle de notas.

| Elemento | Definição |
|---|---|
| Problema | Calcular a média de um estudante |
| Entrada | Nome e três notas |
| Processamento | Somar notas e dividir por três |
| Saída | Nome, média e situação |
| Decisão | Média maior ou igual a 7 |
| Testes | Notas altas, baixas e valores de fronteira |

## 4. Planejamento da lógica (≈ 12 min)

Antes de programar, os alunos devem descrever a solução em passos.

Exemplo de algoritmo para uma calculadora:

```text
1. Solicitar o primeiro número.
2. Solicitar o segundo número.
3. Solicitar a operação.
4. Verificar qual operação foi escolhida.
5. Calcular o resultado.
6. Exibir o resultado.
```

Representação da lógica:

```text
Início
  |
  v
Receber valores
  |
  v
Receber operação
  |
  v
Identificar operação
  |
  v
Calcular resultado
  |
  v
Exibir resultado
  |
  v
Fim
```

Oriente os alunos a identificar quais estruturas serão necessárias.

## 5. Organização do código (≈ 8 min)

Reforce práticas básicas de organização:

- Utilizar nomes descritivos.
- Manter a indentação consistente.
- Separar entrada, processamento e saída.
- Evitar repetir código sem necessidade.
- Inserir comentários quando ajudarem a explicar uma decisão.
- Executar o programa frequentemente durante o desenvolvimento.

Exemplo de organização:

```python
# Entrada
numero1 = float(input("Primeiro número: "))
numero2 = float(input("Segundo número: "))

# Processamento
resultado = numero1 + numero2

# Saída
print("Resultado:", resultado)
```

Explique que o código pode ser desenvolvido gradualmente, testando cada parte.

## 6. Desenvolvimento assistido (≈ 25 min)

Os alunos iniciam a implementação do projeto.

### Roteiro de acompanhamento

**Etapa 1 — Criar a estrutura inicial**

- Criar o arquivo Python.
- Definir o nome do projeto.
- Escrever as primeiras instruções.

**Etapa 2 — Implementar a entrada**

- Solicitar os dados necessários.
- Converter os valores quando necessário.
- Conferir os tipos utilizados.

**Etapa 3 — Implementar o processamento**

- Realizar os cálculos.
- Criar condições.
- Utilizar repetições quando fizerem parte do problema.

**Etapa 4 — Implementar a saída**

- Apresentar os resultados.
- Utilizar mensagens claras.
- Conferir se a saída corresponde ao problema.

**Etapa 5 — Testar**

- Executar o programa.
- Utilizar diferentes entradas.
- Identificar comportamentos incorretos.
- Corrigir os problemas encontrados.

### Perguntas para orientar os alunos

- “Qual informação o programa precisa receber?”
- “Qual resultado deve ser produzido?”
- “Essa parte precisa de uma condição ou de uma repetição?”
- “O que acontece se o usuário informar outro valor?”
- “Como você pode comprovar que o cálculo está correto?”
- “Qual é o menor conjunto de funcionalidades que torna o projeto utilizável?”

O professor deve atuar como orientador, ajudando os alunos a identificar problemas sem substituir integralmente suas decisões e implementações.

## 7. Verificação do andamento (≈ 5 min)

Cada aluno ou grupo deve verificar:

- O programa inicia?
- As entradas são recebidas corretamente?
- O processamento está implementado?
- A saída é compreensível?
- Existe ao menos um teste realizado?
- O projeto está dentro do escopo escolhido?

Caso o projeto ainda não esteja completo, oriente a priorização das funcionalidades essenciais.

## 8. Exercício de fixação

Não há exercício adicional. O desenvolvimento do projeto é a atividade prática da aula.

## 9. Fechamento da aula (≈ 2 min)

### Conceitos que o aluno deve levar desta aula

- Um projeto começa pela definição do problema.
- Requisitos ajudam a delimitar o que será desenvolvido.
- Planejar a lógica antes de programar reduz retrabalho.
- O desenvolvimento pode ser dividido em etapas.
- Testes devem ocorrer durante a implementação.

### Preparação para a próxima aula

Na próxima aula, os alunos concluirão os projetos, realizarão testes e apresentarão suas soluções.

---

# Aula 14 — Projeto final: apresentação, testes e encerramento

> **Objetivo:** Demonstrar o funcionamento do projeto, explicar sua lógica e avaliar a solução com base em critérios objetivos.

## 1. Organização das apresentações (≈ 5 min)

Explique a dinâmica de encerramento.

Cada aluno ou grupo deverá apresentar o projeto em aproximadamente 5 a 7 minutos, incluindo:

1. Problema escolhido.
2. Objetivo do programa.
3. Demonstração de funcionamento.
4. Explicação das principais estruturas utilizadas.
5. Testes realizados.
6. Dificuldades encontradas e soluções adotadas.

Oriente os apresentadores a priorizar a demonstração prática e a explicação da lógica.

## 2. Finalização e preparação do projeto (≈ 10 min)

Antes das apresentações, os alunos devem:

- Executar o programa.
- Verificar se o arquivo correto está aberto.
- Testar as funcionalidades principais.
- Conferir as mensagens exibidas.
- Identificar limitações conhecidas.
- Preparar uma explicação breve do funcionamento.

O professor pode circular pela sala e auxiliar na resolução de problemas que impeçam a demonstração.

## 3. Apresentação dos projetos (≈ 45 min)

Cada aluno ou grupo apresenta sua solução.

### Roteiro para cada apresentação

**1. Problema e objetivo**

O apresentador explica qual necessidade o programa atende.

**2. Demonstração**

O programa é executado com uma entrada representativa.

**3. Explicação do código**

O apresentador identifica as principais variáveis, operações, condições, repetições ou listas utilizadas.

**4. Testes**

O apresentador demonstra pelo menos um teste e explica o resultado esperado.

**5. Aprendizado**

O apresentador comenta uma dificuldade encontrada e como foi resolvida.

### Orientação para os colegas

Durante cada apresentação, os colegas devem observar:

- Se o programa resolve o problema anunciado.
- Se a entrada e a saída são compreensíveis.
- Se a lógica apresentada corresponde ao código.
- Se os testes demonstram o comportamento esperado.

O professor deve manter o foco no aprendizado e oferecer feedback específico, respeitoso e relacionado ao trabalho apresentado.

## 4. Feedback e avaliação dos projetos (≈ 10 min)

Utilize critérios observáveis para avaliar os projetos.

| Critério | O que observar |
|---|---|
| Funcionamento | O programa executa e realiza sua função principal |
| Clareza | O código e as mensagens são compreensíveis |
| Uso dos conceitos | O projeto utiliza adequadamente os conteúdos estudados |
| Tratamento de situações | O aluno considera entradas e situações relevantes |
| Testes | O programa foi executado com exemplos de entrada |
| Apresentação | O aluno explica o problema e a lógica da solução |

O feedback deve apontar evidências concretas.

Exemplos:

- “A condição de aprovação está clara e foi testada com valores de fronteira.”
- “A lista permitiu armazenar os registros sem criar uma variável para cada item.”
- “O programa funciona para a entrada demonstrada; vale testar também o caso em que o usuário informa um valor diferente.”

Evite avaliar apenas a complexidade do projeto. Considere o uso correto dos conceitos, a clareza da solução e a capacidade de explicar o próprio código.

## 5. Retrospectiva dos conteúdos (≈ 5 min)

Retome a sequência de aprendizagem:

```text
Pensamento computacional
        |
        v
Algoritmos e lógica
        |
        v
Variáveis e tipos
        |
        v
Operadores e entrada/saída
        |
        v
Decisões
        |
        v
Repetições
        |
        v
Listas
        |
        v
Resolução de problemas
        |
        v
Projeto final
```

Pergunte aos alunos:

- “Qual conceito foi mais útil no desenvolvimento do projeto?”
- “Qual dificuldade exigiu mais atenção?”
- “Como vocês testaram se o programa estava correto?”
- “O que fariam diferente se fossem ampliar o projeto?”

## 6. Próximos passos no estudo de programação (≈ 5 min)

Apresente conteúdos que podem ampliar os conhecimentos adquiridos:

| Próximo conteúdo | Para que serve |
|---|---|
| Dicionários | Armazenar dados associados a chaves |
| Funções | Organizar e reutilizar blocos de código |
| Arquivos | Ler e gravar informações de forma persistente |
| Tratamento de exceções | Tratar situações de erro durante a execução |
| Orientação a objetos | Organizar programas por meio de classes e objetos |
| Bibliotecas | Reutilizar funcionalidades disponibilizadas por outros módulos |

Explique que esses temas podem ser estudados progressivamente. Antes de ampliar a complexidade, é importante praticar os fundamentos com novos problemas.

## 7. Encerramento

A programação envolve compreender problemas, planejar soluções, escrever instruções, testar resultados e corrigir erros.

O projeto final demonstra a aplicação dos fundamentos estudados ao longo do curso. O próximo passo é continuar praticando, modificando os programas desenvolvidos e criando novas soluções.

## 8. Exercício de fixação

Não há exercício adicional. A apresentação, a demonstração e a avaliação do projeto constituem a atividade prática de encerramento.

## 9. Fechamento da aula

### Conceitos que o aluno deve levar desta aula

- Um programa deve ser apresentado a partir do problema que resolve.
- Demonstrar o funcionamento ajuda a verificar a solução.
- Explicar o código evidencia a compreensão da lógica.
- Testar diferentes entradas é parte do desenvolvimento.
- Feedback específico ajuda a identificar melhorias.
- Os fundamentos de programação podem ser ampliados com novos conteúdos e projetos.

### Encerramento do curso

Reconheça o trabalho realizado pelos alunos e reforce que a prática contínua é essencial para consolidar os conhecimentos de programação.

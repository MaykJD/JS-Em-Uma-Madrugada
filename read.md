## Java Script Em Uma Madrugada

**Segue o roteiro a baixo**

---

* Esse projeto foi desenvolvido em uma loucura que me deu. Pode ser que te ajude em algo (: Que a Força esteja com você !

---

1. **O que é Java Script ?**

* HTML - Corpo
* CSS - Ossos
* JAVASCRIPT - Cérebro 

---

2. **Comandos basicos no Console do navegador**

~~~JavaScript
document.body.innerHTML = "<h1>Hoje e dia " + dia.getDate() + "/" + dia.getMonth() + "/" + dia.getFullYear() + "</h1>";
~~~

* Da pra escrever ou InLine(No html) ou Separado em outro arquivo
* Se quer que o conteudo renderize antes da pagina ser renderizada coloca no Head, se não se coloca so Body
* No BODY o script atua em elementos visualização da pagina
* Bloquei de renderização de JS, pode deixar o site mais lento
* Http/2 Permite o navegador baixar varios arquivos paralelamente, por isso o melho jeito e referenciar após o fechamento da TAG Body
* | Carregamento **Imediato** -> Analise -> Js download -> Js Execução
* | Assincrono **"Async"** -> Arquivo baixado com html 
* | Adiar **"defer"** -> Só faz alguma coisa quando todo resto estiver carregado, no final !

3. **Regras Basicas da linguagem**

* Letras Maiusculas e Maiusuclas IMPORTAM ! Sensitive Case
* CamelCase 
* **Variavel,Função,Metodo MINUSCULAS**
* **Objeto é classe começam com letra maiusuclas**
* **Constantes letras MAIUSUCLAS**
* Espaço em branco importa (Para Humanos)
* Usar Ponto e Virgula (Fica mais Legivel o Código)

4. **Containers | Tipos de Dados**
* Como escrevr uma variavel ? -> **var variavel;**
* var numero -> 10 , 003 , 293.3
* var sring -> Tratar exeçoes \"assim\"; Trate como um texto qualquer

4. **Manupular dados**
* if (Condição) {} else {}
* ## theNumberIsMatch -> Atividade
* AND -> &
* OR -> ||

4. **Arrays**

* **USANDO ARRAYS:  
Array -> var array; -> array = [1, 2, 3]**

* Propriedades: O que se pode recuperar de um objeto 
* *Metodos*: Funçoes que pertencem ao objeto
* *Reverse*: Inverte array -> array.reverse()
* *shift*: Remove a primeira posição do array
* *unshift*: Adiciona um pu mais elementosna frente do array
* Pop: Remove the last value of teh array
* *Slice*: Copy the array 
* *indexOF*: procura algo após um indice especificado !
* *Join*: Junta os valores dentro ded um array e transforma em string separada por virgula

5. **Funçoes é Objetos**
* Funçoes nomeadas -> Quando chamamos
* funçoes anonimas -> Roda 1 vez ou é desencadeada pro alguma coisa
* IIFE -> No momento em que o navegador as encontra
* **ISODD**
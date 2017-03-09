# Teste Front-end - B2W - Victor Brosso (vbrosso@gmail.com)

## Tecnologias usadas


### Pré-processador: SASS
Arquivos scss: \stylesheets\scss

Foi usado a IDE ScoutApp para converter automaticamente os arquivos *.scss em *.css


## Precisando compilar os arquivos:
Foi usado o npm para instalar as dependências, pelo nodejs.


### Task manager: Grunt
1. /Gruntfile.js
2. /package.json
3. Plugins usados: grunt-contrib-uglify, grunt-contrib-cssmin, grunt-contrib-htmlmin


###Tarefas do Grunt: minifica o arquivos:
1. index.html --> index_prod.html
2. general.css --> general.min.css
3. funcoes.js --> funcoes.min.js 


## Observações do Build e considerações:
Desconsiderar (não avaliar) os arquivos e diretorios minificados gerados pelos plugins do Grunt:

1. ** index_prod.html**
2. ** style.min.css**
3. ** main.min.js**

Algumas mudanças foram feitas:
1. ** foi criado um json com o nome de mocky.json na raiz do projeto baseado na API fornecida, pois a thumb estava fora do ar :D**


#*Obrigado!*#





# Desafio Frontend BIT - SP

Para o teste, pedimos que seja entrega em até 3 dias, mas de acordo com a experiência e/ou ferramentas escolhidas por você, talvez precise de mais tempo para concluir o desafio, nos avise!

Para ajudá-lo, temos algumas dicas:

O layout do desafio é [esse](https://ucarecdn.com/a3d9551d-8bb1-4e58-b152-0832dbffd5a2/testeb2w.jpg)


Aqui temos o arquivo .psd para [download](https://drive.google.com/open?id=0BwJHZ1PdHAcGalV4U0NGTWMzSW8)

Aqui, o link para [API](http://www.mocky.io/v2/57dfec211000009020598073)

## Desafio:
Desenvolver a página seguindo o [layout](https://ucarecdn.com/a3d9551d-8bb1-4e58-b152-0832dbffd5a2/testeb2w.jpg), que atenda os seguintes critérios:
- Código HTML semântico
- Utilize alguma metodologia CSS e um pré-processador, de preferência Sass
- Faça que sua página tenha uma ótima experiência para o usuário, independente do dispositivo que ele esteja usando.
- Utilize o framework [React](https://facebook.github.io/react/)
- Utilize algum module bundler, seja [Webpack](https://webpack.github.io/) ou [Brunch](http://brunch.io/)
- O Javascript seja escrito utilizando as especificações do EcmaScript 2015 (ES6)
- Caso haja necessidade, pode utilizar um Task Manager. Sugerimos o [Gulp](http://gulpjs.com/)
- Seria ótimo se escrevesse testes unitários.

Crie um Fork desse repositório e nos envie um **pull request**

Não esqueça de ensinar como rodamos seu projeto :sunglasses:
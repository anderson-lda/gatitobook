# Gatitobook
Para funcionar juntamente com a API foi necessário instalar o Node versão 12.22.12 (v14 e v14 não funcionaram ambos)
angular/cli versão 13.3.9 instalado (globalmente)

## Comando de criação
ng new gatitobook --strict
onde o strict foi utilizado para haver mais verificações de tipo no projeto

## Bibliotecas instaladas
npm i bootstrap font-awesome
npm i jwt-decode

## Obs.:
necessário adicionar em styles do angular.json:
"./node_modules/bootstrap/dist/css/bootstrap.min.css",
"./node_modules/font-awesome/css/font-awesome.css"

## criação de serviços/componentes/módulos...
ng generate module home --routing
ng g c home
ng g c home/login
ng g m autenticacao
ng g s autenticacao/autenticacao
ng g m animais --routing
ng g c animais/lista-animais
ng g m componentes/mensagem
ng g c componentes/mensagem
ng g c home/novo-usuario
ng g s home/novo-usuario/novo-usuario
ng g interface home/novo-usuario/novo-usuario
ng g s home/novo-usuario/usuario-existe
ng g s autenticacao/token
ng g s autenticacao/usuario/usuario
ng g interface autenticacao/usuario/usuario
ng g m componentes/cabecalho
ng g c componentes/cabecalho
ng g m componentes/rodape
ng g c componentes/rodape
ng g c animais/animal
ng g m componentes/cartao
ng g c componentes/cartao
ng g s animais/animais
ng g interface animais/animais
ng g c animais/grade_fotos_animais
ng g guard autenticacao/autenticacao
ng g guard autenticacao/login
ng g c animais/detalhe-animal
ng g interceptor autenticacao/autenticacao
ng g c animais/detalhe-animal/comentarios
ng g s animais/detalhe-animal/comentarios/comentarios
ng g interface animais/detalhe-animal/comentarios/comentarios
ng g resolver animais/lista-animais/lista-animais
ng g m shared

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
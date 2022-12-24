# Gatitobook
Para funcionar juntamente com a API foi necessário instalar o Node versão 12.22.12 (v14 e v14 não funcionaram ambos)
angular/cli versão 13.3.9 instalado (aparece que localmente é a versão 11.2.19 por causa das adaptações do Node)

## Comando de criação
ng new gatitobook --strict
onde o strict foi utilizado para haver mais verificações de tipo no projeto

## Bibliotecas instaladas
npm i bootstrap font-awesome

## Obs.:
necessário adicionar em styles do angular.json:
"./node_modules/bootstrap/dist/css/bootstrap.min.css",
"./node_modules/font-awesome/css/font-awesome.css"

## criação de páginas
ng generate module home --routing
ng g c home
ng g c home/login
ng g m autenticacao
ng g s autenticacao/autenticacao

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# Artillery test suite

Progetto contente una collezione di tests da eseguire sulle API esposte.
Tutti i test sono basati su [Artillery.io](https://artillery.io/docs/getting-started/ "Artillery.io") e relativi plugins
[Artillery.io](https://artillery.io/docs/getting-started/ "Artillery.io")

## Esecuzione dei tests

### Prerequisiti
E' necessario avere installare i seguenti packages  
```javascript
 npm  -g artillery
```
```javascript
npm install -g artillery-plugin-expect
```
### Esecuzione

```bash
artillery run hello.yaml 
```

Si può eseguire abilitando il debug, in questo modo sarano visibili sia le requests che le responses
```bash
DEBUG=http,http:response artillery run hello.yaml
```
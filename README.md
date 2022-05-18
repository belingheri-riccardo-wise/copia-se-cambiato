# Copia al cambiamento

Semplice script che si occupa di copiare un file da una posizione all'altra quando rileva un cambiamento.
Invia una notifica una volta che ha copiato il file nella destinazione


## Pre-configurazione (una tantum)

### Installare node
Andare sul [sito ufficiale](https://nodejs.org/it/) e scaricare la versione LTS 

### Installare il pacchetto
Andare nella cartella e aprire un cmd/powershell e digitare il comando
``` sh
npm install
```

## Avvio
 Aprire il file `index.js` e valorizzare le variabili `filePathToCopy` e `destinazione`.
 ### `filePathToCopy` 
 E' il percorso assoluto di dove prendere il file, deve essere comprensivo di nome:
 ``` js
 const  filePathToCopy = "C:/wise/RS/W-Bro/W-BK/target/w-bk.war";
 ```
 ### `destinazione ` 
 E' il percorso di dove deve essere copiato il file
 ``` js
let destinazione = "C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps";
 ```
 #### path
 I path possono essere scritti con `/` o con `\\` come separatore tra le cartelle
## Esecuzione
Posizionarsi nella cartella di questo programma con un cmd/powershell 
``` sh
npm start
```


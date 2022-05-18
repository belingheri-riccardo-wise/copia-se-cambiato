const fs = require("fs");
const path = require("node:path");
const notifier = require("node-notifier");

const filePathToCopy = "C:/wise/RS/W-Bro/W-BK/target/w-bk.war";
let destinazione =
  "C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps";

console.log(`Guarda i cambiamnti di ${filePathToCopy}`);
const nomeFileCopiare = path.basename(filePathToCopy);
destinazione = path.join(destinazione, nomeFileCopiare);

console.debug("Copiare da:", filePathToCopy, " a ", destinazione);
const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

fs.watchFile(filePathToCopy, (curr, prev) => {
  if (fs.existsSync(filePathToCopy))
    fs.copyFile(filePathToCopy, destinazione, (err) => {
      if (err) {
        console.error(err);
        notifier.notify({
          title: `Errore`,
          message: String(err),
        });
      }
      console.info(new Date().toLocaleDateString("it-IT", options), "copiato!");
      notifier.notify({
        title: `Copiato ${nomeFileCopiare}`,
        message: `Il file è stato copiato nella Destinazione 🐱‍🏍`,
      });
    });
});

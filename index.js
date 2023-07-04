import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
     name:"URL",
     message:" Type your URL",
    },
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('url.png'));
fs.writeFile('URL.txt', url, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
//adding the url text file

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan nama file output: ', (namaFile) => {
  const data = fs.readFileSync('accounts.json', 'utf8');
  const jsonData = JSON.parse(data);

  const result = jsonData.map(item => {
    const [year, month, day] = item.birthday.split('-');
    return `${item.phone} | ${item.pin} | ${day}/${month}`;
  });

  const output = result.join('\n');

  console.log(output);

  // write the output to a file
  fs.writeFileSync(namaFile, output);

  rl.close();
});

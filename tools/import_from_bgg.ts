import bggXmlApiClient from 'bgg-xml-api-client';
import { default as minimist } from "minimist";
import * as he from 'he';
import * as fs from 'fs';
import * as path from 'path';

function help() {
  console.log(`import_from_bgg

usage: 
  import_from_bgg <username>
  Import a list of game owned by BGG user account <username>, converts to a wordlist, and writes the relevant .txt file in 'wordlists/<username>.txt'
`);
}

async function main() {
  const args = minimist(process.argv.slice(2), {});
  if (args._.length < 1) {
    help();
    process.exit(1);
  }
  const username = args._[0];
  
  const filename = path.join(path.dirname(__filename), '..', 'wordlists', `${username}.txt`);
  console.log(`Filename: ${filename}`);

  const { data } = await bggXmlApiClient.get('collection', { username: username, own: 1, excludesubtype: 'boardgameexpansion' });
  const names: string[] = data.item.map(d => {
    let name = d.name.text; // get the name from the data entry
    name = he.decode(name); // decode any HTML named and numerical character references
    name = name.replace(/\([^()]*\)/gi, ''); // remove things like "(second edition)"
    name = name.trim(); // remove any leading or trailing whitespace.
    return name;
  });

  console.log(`Found ${names.length} items from BGG`);
  console.log("Writing file...");
  await fs.promises.writeFile(filename, names.join('\n'));
  console.log(`Written to filename: ${filename}`);
  console.log("Done!");
}

main().then(console.log).catch(console.error);
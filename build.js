const TORRENTS_DIR = "torrents";
const OUTPUT_DIR = "output";
const META_FILE = "metadata.json"

import { spawn } from 'child_process';
import jsonfile from 'jsonfile';

let version = '';

spawn('cp', ['-r', TORRENTS_DIR, OUTPUT_DIR]);
spawn('mkdir', ['-p', OUTPUT_DIR])

jsonfile.readFile(META_FILE, (err, jsonData) => {
    if (err) throw err;

    version = jsonData['version'];
    console.log(`version: ${version}`)
    spawn('ln', ['-s', `client-${version}.torrent`, `${OUTPUT_DIR}/latest.torrent`]);
})

spawn('cp', [META_FILE, `${OUTPUT_DIR}/`])
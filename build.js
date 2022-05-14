const TORRENTS_DIR = "torrents";
const OUTPUT_DIR = "output";
const META_FILE = "metadata.json"

import { spawn } from 'child_process';
import jsonfile from 'jsonfile';

let version = '';
spawn('cp', ['-r', TORRENTS_DIR, OUTPUT_DIR]);
jsonfile.readFile(META_FILE, (err, jsonData) => {
    if (err) throw err;

    version = jsonData['version'];
})

const lasteFileName = `client-${version}.torrent`;
spawn('ln', ['-s', `${OUTPUT_DIR}/${lasteFileName}`, `${OUTPUT_DIR}/laste.torrent`]);
spawn('cp', [META_FILE, OUTPUT_DIR])
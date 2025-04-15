#!/usr/bin/node
import { spawn } from "child_process";
import { argv } from "process";
import fs from 'fs';

const PATH = "~/dev/projetos/";

const exec = (project) => {
    spawn(`vim`, [`${PATH}${project}/`], {stdio: 'inherit'});
};

// O parametro é a partir do 2

if (argv[2] == 'go') {
    exec(argv[3]);
};

// const checkDir = (project) => {
//     fs.readdir(PATH+project, (err, files) => {
//         if (err) {
//             console.error("Erro: Diretório não disponível ou encontrado! \n\n[LOG]: " + err);
//             return;
//         }

//         files.forEach(file => {
//             console.log(file);
//         });
//     });
// };

// checkDir(argv[2]);
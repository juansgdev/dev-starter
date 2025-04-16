#!/usr/bin/node
import { spawn } from "child_process";
import { argv, exit } from "process";

const PATH = "/home/juan/dev/projetos/";

const exec = (command, argument) => {
    const child = spawn(command, argument);

    child.stdout.on('data', (data) => {
        console.log(''+data);
    });

    child.stderr.on('data', (data) => {
        console.log(''+data);
    });
};

const writeExec = (command, argument) => {
    spawn(command, argument, {stdio: 'inherit'});
};

const map = (dir) => {
    const child = spawn('ls', [PATH+dir+'/']);

    child.stdout.on('data', (data) => {
        if (argv[2] == 'go') {
            writeExec('vim', [PATH+dir+'/'])
        }
    });

    child.stderr.on('data', (data) => {
        if (String(''+data).includes('ls: não foi possível')) {
            console.log('Erro: projeto não encontrado ou indiponível!');
            exit(1);
        } 
    });
};

map(argv[3]);

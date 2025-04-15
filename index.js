#!/usr/bin/node
import { spawn } from "child_process";
import { argv } from "process";

const exec = (project) => {
    spawn(`vim`, [`~/dev/projetos/${project}/`],{stdio: 'inherit'});
};

// O parametro é a partir do 2

if (argv[2] == 'go') {
    exec(argv[3]);
};
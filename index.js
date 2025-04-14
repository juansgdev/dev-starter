#!/usr/bin/node
import { spawn } from "child_process";
import { argv } from "process";

argv.forEach((val, index) => {
    console.log(val + index);
});

spawn('./vim');
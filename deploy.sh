#!/bin/bash
npm ci
ng build --prod 
ngh --dir=dist
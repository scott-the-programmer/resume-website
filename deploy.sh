#!/bin/bash
npm ci
npm run build
ng build --prod
ngh --branch=master --dir=dist
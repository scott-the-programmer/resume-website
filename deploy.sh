#!/bin/bash
npm ci
ng build --prod
ngh --branch=master --dir=dist
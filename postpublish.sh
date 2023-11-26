#!/usr/bin/env bash

lerna run --concurrency 1 --stream browser --since HEAD --exclude-dependents
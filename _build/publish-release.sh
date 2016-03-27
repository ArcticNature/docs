#!/bin/bash
# Build and publish the release edition of documents.
# This script is run from the SnowFox super-project.
set -e


# Variables.
OUT_PATH="out/dist/release/documents/served"
TARGET_PATH="documents/gh-pages"

# Build a fresh copy of the docs.
grunt clear:docs
grunt release:docs

# Copy them into the gh-pages subtree.
rm -rf ${TARGET_PATH}/*
cp --recursive --preserve=all ${OUT_PATH}/* ${TARGET_PATH}

cd "${TARGET_PATH}"
git add --all .
git commit -m "AUTOMATED: documents - update published version"
git push origin master

cd ..
git subtree push --prefix=gh-pages git@github.com:ArcticNature/docs.git gh-pages

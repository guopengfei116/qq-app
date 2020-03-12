#!/usr/bin/env bash
BRANCH=$1
IS_INSTALL=${2-false}
NPM_SOURCE=${3-"guahao"}
MODE=${4-"production"}

set_npm_source() {
  echo "==========set npm source: ${NPM_SOURCE}==========="

  if [ $NPM_SOURCE == "npm" ]; then
    npm config set registry https://registry.npmjs.org
    echo "--> npm config set registry https://registry.npmjs.org"
  elif [ $NPM_SOURCE == "taobao" ]; then
    npm config set registry https://registry.npm.taobao.org
    echo "--> npm config set registry https://registry.npm.taobao.org"
  else
    npm config set registry http://npm.guahao-inc.com
    echo "--> npm config set registry http://npm.guahao-inc.com"
  fi

  echo "==========set npm source: ${NPM_SOURCE}==========="
}

install() {
  echo "==========npm install start==========="
  npm install

  if [ $? != 0 ]
  then
    echo "--> npm install error"
    exit 1
  fi

  echo "==========npm install end==========="
}

build() {
  echo "==========npm build start==========="

  if [ $MODE == "test" ]; then
    npm run build-test
  else
    npm run build-pro
  fi

  if [ $? != 0 ]
  then
    echo "--> npm build error"
    exit 1
  fi

  echo "==========npm build end==========="
}

set_npm_source
if [ $IS_INSTALL == true ]
  then install
fi
build

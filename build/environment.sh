NODE_VERSION="12.16.1"

suRoot() {
  su qa
  echo env@test
  sudo su root
}

installNvm() {
  echo "--> nvm intstall start"
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

  if [ $? != 0 ]
  then
    echo "--> nvm intstall error"
    exit 1
  fi

  echo "--> nvm intstall end"
}

installNode() {
  echo "--> node intstall start"
  nvm install $NODE_VERSION
  nvm use $NODE_VERSION

  if [ $? != 0 ]
  then
    echo "--> node intstall error"
    exit 1
  fi

  echo "--> node intstall end, version ${NODE_VERSION}"
}

installPm2() {
  echo "--> pm2 intstall start"
  npm install pm2 -g --registry=https://registry.npm.taobao.org

  if [ $? != 0 ]
  then
    echo "--> pm2 intstall error"
    exit 1
  fi

  echo "--> pm2 intstall end"
}

suRoot
installNvm
installNode
installPm2

IP=`ifconfig -a | grep inet | grep -v inet6 | grep -v 127.0.0.1 | awk '{print $2}' | tr -d 'addr:'`
APP=$1
PORT=$2

stop() {
  pm2 delete $APP
}

checkPort() {
  if [ -z $PORT ]
  then
    echo "--> Please specify a port number"
    exit 1
  fi

  lsof -i:$PORT > /dev/null 2>&1
  if [ $? -eq 0 ]
  then
    echo "--> $PORT already in use"
    exit 1
  fi
}

install() {
  echo "--> npm install start"
  npm install

  if [ $? != 0 ]
  then
    echo "--> npm install error"
    exit 1
  fi

  echo "--> npm install end"
}

build() {
  echo "--> npm build start"
  npm run build

  if [ $? != 0 ]
  then
    echo "--> npm build error"
    exit 1
  fi

  echo "--> npm build end"
}

start() {
  echo "--> deploy start"
  pm2 start npm --name $APP -- run serve

  if [ $? != 0 ]
  then
    echo "--> deploy error"
    exit 1
  fi

  echo "--> deploy end"
}

run() {
  stop
  checkPort
  install
  build
  start
}

run

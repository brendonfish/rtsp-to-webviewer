# rtsp-to-webviewer

```
git clone https://Ray@bitbucket.org/Ray/ai-node-front.git
```

##Pre-requisites

- Make sure your node is >10.0, or upgrade node

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

##Node Package Installation##

```
npm install
```

- View RTSP Stream with Web

```
sudo apt-get install ffmpeg
```

visit http://localhost:8080/view-stream.html

##Start Node Server and fetch stream for display##

```
./node-start.sh
```


## Test Your Node Server & Start Your Development##

- Send test message to node

```
mosquitto_pub -h localhost -m "hello there" -t "ai-to-sys"
```

- Python client sample

See /python-client-sample folder





# rtsp-to-webviewer

rtsp-to-webviewer is a web server that displays a rtsp streaming video in a web page.

## Pre-requisites

- Make sure your node is >10.0, or upgrade node

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

- Node Package Installation

```
npm install
```

- Install FFMPEG

```
sudo apt-get install ffmpeg
```


## Start Node Server and fetch stream for display

- Start Server, and fetch video stream

```
./node-start.sh
```

- View the Sample Video

visit http://localhost:8080/view-stream.html

- You can edit node-start.sh to change video stream URL






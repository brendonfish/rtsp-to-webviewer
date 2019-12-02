
# cd ~/servers/ai-node-front

screen -dmS websocket-relay sh -c 'node websocket-relay.js supersecret 8081 8082; exec bash'

screen -dmS ai-front sh -c 'node index.js; exec bash'

ffmpeg -i rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov -f mpegts -codec:v mpeg1video -bf 0 -codec:a mp2 -r 30 http://localhost:8081/supersecret/

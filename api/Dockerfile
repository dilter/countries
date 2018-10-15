FROM node:8.7.0
ENV HOME=/home/app
ENV NODE_ENV=production
ENV ELASTICSEARCH_URI=https://elastic:3eNm2gMRp1avObzio7BJFjfP@573c6f76db50a53a9bf694a3c27c5a5b.us-east-1.aws.found.io:9243
COPY package.json $HOME/node_docker/
WORKDIR $HOME/node_docker
RUN npm install --silent --progress=false
COPY . $HOME/node_docker
CMD [ "npm", "start" ]
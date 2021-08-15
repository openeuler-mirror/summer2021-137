FROM nginx

MAINTAINER Edward Lee <freesky.edward@gmail.com>

RUN apt-get update && \
    apt install curl -y && \
    apt-get install git -y


ENV HUGO_VERSION=0.56.3

RUN mkdir -p /usr/local/src && \
    cd /usr/local/src && \
    curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz | tar -xz && \
    mv hugo /usr/local/bin/

RUN mkdir -p /src/website/
COPY . /src/website/

RUN mkdir -p /src/website/build && cd /src/website/build && \
    chmod +x ../script/sig-builder.sh && \
    ../script/sig-builder.sh && \
    find ../content/zh/sig/ -name "*.md" | grep -v "_index.md" | xargs rm && \
    cp *.md ../content/zh/sig/ && \
    find ../content/en/sig/ -name "*.md" | grep -v "_index.md" | xargs rm && \
    cp *.md ../content/en/sig/ && \
    cd .. && rm -rf ./build

RUN mkdir -p /src/website/doc_build && cd /src/website/doc_build && \
    chmod +x ../script/docs-builder.sh && \
    ../script/docs-builder.sh && cp -r ./content/* ../content/ && \ 
    cd /src/website && rm -fr ./doc_build && \ 
    /usr/local/bin/hugo -b / && \
    cp -rf /src/website/public/* /usr/share/nginx/html/ && \
    chmod -R 755 /usr/share/nginx/html 

ENV RUN_USER nginx
ENV RUN_GROUP nginx
EXPOSE 80
ENTRYPOINT nginx -g "daemon off;"

FROM node:10.12.0

RUN useradd --user-group --create-home admin

ENV HOME=/home/admin

WORKDIR $HOME/app

RUN npm config set save-prefix=''

RUN chown -R admin:admin $HOME

USER admin

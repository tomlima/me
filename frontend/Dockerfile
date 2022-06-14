FROM node:14 

ARG NODE_ENV

ENV HOST 0.0.0.0
ENV NODE_ENV=${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app 

COPY package*.json  ./ 

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
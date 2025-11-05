FROM node:22

COPY dist/ ./dist 
COPY node_modules ./node_modules
COPY package*json ./

EXPOSE 3000


CMD ["node", "dist/main"]
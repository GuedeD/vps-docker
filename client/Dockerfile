FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

# We use --host so it listens on all network interfaces (0.0.0.0)
# We use --port 5173 to force the specific port
CMD ["npm", "run", "preview", "--", "--host", "--port", "5173"]⁄
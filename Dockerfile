# Stage 0 - Build
FROM node:12-alpine as builder

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy contents
COPY . ./

# Build

RUN npm run build

# Stage 1 - Pack
FROM node:12-alpine

# Install requirements
RUN npm i -S serve
RUN yarn global add serve

COPY --from=builder ./build ./build

EXPOSE 5000

# Run application
ENTRYPOINT ["npm","run","prod"]

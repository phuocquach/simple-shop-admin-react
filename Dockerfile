FROM node:14.5.0 as react-build
EXPOSE 80
WORKDIR /app
COPY . ./
RUN yarn
CMD ["yarn start"]
#FROM nginx:stable-alpine
#COPY --from=react-build /app/build /usr/share/nginx/html


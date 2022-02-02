# node-express-typescript
#Api Routes example.

###Get all videos
GET /videos

###Get single videos
GET /video/61fa2c79b802ed554e757eb4

###Create Video
POST /video
Content-Type: application/json

{
    "url":"https://www.youtube.com/watch?v=y1ZqhQySFKw",
    "title":"Any Title",
    "description":"Any Description"
}

###Remove video
DELETE  /video/61fa2c79b802ed554e757eb1

###Update video
PUT  /video/61fa3636c97a1b34112f9b8d
Content-Type: application/json

{
    "title":"Updated Title"
}
![mongo](https://user-images.githubusercontent.com/20423639/152250447-894967fb-f035-4493-a896-575a2d02a601.PNG)

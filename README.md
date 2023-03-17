# YOUTUBE DOWNLOADER API

This is a Youtube Video Downloader API, where you can fetch info regarding youtube videos
and their download links

### `GET` `/youtube-video/:videoID`

| Parameter | Description                 |
| --------- | --------------------------- |
| videoID   | The ID of the youtube video |

## NodeJS example with axios

```javascript
import axios from "axios";

const API_URL = "http://localhost:3000/youtube-video/";
const video_id = "jMVhxBB3l0w";

const requestURL = `${API_URL}${video_id}`;

try {
  const response = await axios.get(requestURL);

  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

### Response:

```json
{
  "title": "Building The Extraordinary Using Only The Ordinary",
  "description": "Watch as I show...",
  "videoUrl": "https://www.youtube.com/watch?v=jMVhxBB3l0w",
  "videoId": "jMVhxBB3l0w",
  "videoLength": "397",
  "viewCount": "90853",
  "category": "Education",
  "publishDate": "2023-03-06",
  "channelName": "Hyperplexed",
  "subscriberCount": 421000,
  "channelUrl": "https://www.youtube.com/channel/UCmEzz-dPBVrsy4ZluSsYHDg",
  "thumbnails": [
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD1RAiJQ1_Ma2BNW60120VGVPww5g",
      "width": 168,
      "height": 94
    },
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYbPxjsuFdh7fXT2TAZbiJuy3L5Q",
      "width": 196,
      "height": 110
    },
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9jz74o2yEIqerfgiFmXpN7mKdFw",
      "width": 246,
      "height": 138
    },
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBe5g7hvVYaopiWKK-jBhbffRlz8Q",
      "width": 336,
      "height": 188
    },
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/maxresdefault.jpg",
      "width": 1920,
      "height": 1080
    }
  ],
  "videos": [
    {
      "quality": "360p",
      "width": 640,
      "height": 360,
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire ...",
      "contentLength": "17423524",
      "video_format": "mp4",
      "hasAudio": true
    },
    {
      "quality": "1440p60",
      "width": 2560,
      "height": 1440,
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire ...",
      "contentLength": "177881709",
      "video_format": "webm",
      "hasAudio": false
    }
  ],
  "audios": [
    {
      "quality": "AUDIO_QUALITY_MEDIUM",
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire= ...",
      "contentLength": "6416569",
      "audio_format": "mp4"
    },
    {
      "quality": "AUDIO_QUALITY_LOW",
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire ..."
      "contentLength": "3717240",
      "audio_format": "webm"
    },
  ],
  "status": "SUCCESS"
}
```

Only `videos` in the `720p` and `360p` are provided with an audio. As other quality formats does not come with audio in the video.
The `hasAudio` field is set to true on videos which contains audio by default.

### `GET` `/youtube-video/details/:videoID`

## NodeJS example with axios

```javascript
import axios from "axios";

const API_URL = "http://localhost:3000/youtube-video/details";
const video_id = "jMVhxBB3l0w";

const requestURL = `${API_URL}${video_id}`;

try {
  const response = await axios.get(requestURL);

  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

### Response:

```json
{
  "title": "Building The Extraordinary Using Only The Ordinary",
  "description": "Watch as I show...",
  "videoUrl": "https://www.youtube.com/watch?v=jMVhxBB3l0w",
  "videoId": "jMVhxBB3l0w",
  "videoLength": "397",
  "viewCount": "90853",
  "category": "Education",
  "publishDate": "2023-03-06",
  "channelName": "Hyperplexed",
  "subscriberCount": 421000,
  "channelUrl": "https://www.youtube.com/channel/UCmEzz-dPBVrsy4ZluSsYHDg",
  "thumbnails": [
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD1RAiJQ1_Ma2BNW60120VGVPww5g",
      "width": 168,
      "height": 94
    },
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYbPxjsuFdh7fXT2TAZbiJuy3L5Q",
      "width": 196,
      "height": 110
    },
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9jz74o2yEIqerfgiFmXpN7mKdFw",
      "width": 246,
      "height": 138
    },
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBe5g7hvVYaopiWKK-jBhbffRlz8Q",
      "width": 336,
      "height": 188
    },
    {
      "url": "https://i.ytimg.com/vi/jMVhxBB3l0w/maxresdefault.jpg",
      "width": 1920,
      "height": 1080
    }
  ]
}
```

The `videos` and `audios` fields are not present in the `/details` endpoint.

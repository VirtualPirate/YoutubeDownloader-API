# YOUTUBE DOWNLOADER API

This is a Youtube Video Downloader API, where you can fetch info regarding youtube videos
and their download links

#### `GET` /youtube-video

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| url       | The url link of the youtube video or the id |

## NodeJS example with axios

```javascript
import axios from "axios";

const API_URL = "http://localhost:3000/youtube-video/";
const video_id = "_2Ru-KfPpH0";

try {
  const response = await axios.get(API_URL, {
    params: {
      url: video_id,
    },
  });

  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

### Output:

```json
{
  "title": "Typical installation of Ubuntu vs Arch vs Gentoo Linux...",
  "videoLength": "215",
  "viewCount": "101678",
  "channelName": "Virbox",
  "subscriberCount": 18900,
  "thumbnails": [
    {
      "url": "https://i.ytimg.com/vi/_2Ru-KfPpH0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCC-J_lFzt7TixOCbRF8j-l7O5qhQ",
      "width": 168,
      "height": 94
    },
    {
      "url": "https://i.ytimg.com/vi/_2Ru-KfPpH0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAqHLkecNE91kP1t0owMIVhxkKfaw",
      "width": 196,
      "height": 110
    },
    {
      "url": "https://i.ytimg.com/vi/_2Ru-KfPpH0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDfKEEKZ8okIaJ7isWvA569Ui3LQ",
      "width": 246,
      "height": 138
    },
    {
      "url": "https://i.ytimg.com/vi/_2Ru-KfPpH0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBP4-s-LW-t0KKJSktJYIxRT4uN5g",
      "width": 336,
      "height": 188
    },
    {
      "url": "https://i.ytimg.com/vi_webp/_2Ru-KfPpH0/maxresdefault.webp",
      "width": 1920,
      "height": 1080
    }
  ],
  "channelUrl": "https://www.youtube.com/channel/UCCFVFyadjMuaR5O89yRToew",
  "videos": [
    {
      "quality": "720p",
      "width": 1280,
      "height": 720,
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire=1678817105&ei=8WIQZKLgHcysz7sPlrGvEA&ip=202.168.85.96&id=o-AIJgj-B9B0cLLX5KRQyTceUnmtFeq5ZYijuHB-RyslQ6&itag=22&source=youtube&requiressl=yes&mh=4P&mm=31%2C29&mn=sn-g5pauxapo-jj0e%2Csn-gwpa-h55y&ms=au%2Crdu&mv=m&mvi=3&pcm2cms=yes&pl=24&initcwndbps=692500&vprv=1&mime=video%2Fmp4&ns=tj7BtFpOMBEjAwBhnqJErmQL&cnr=14&ratebypass=yes&dur=214.993&lmt=1662665098403600&mt=1678795053&fvip=5&fexp=24007246&c=WEB&txp=5318224&n=qv6WP3lRtYrDdQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgKbFZXi0UYskJ-2jW4wWU30_vAfYVNumYrwAsd0afSvoCIDnmIj_lB01_2oIsIHEF0w0UaxMguChhKmLncCSbAidE&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKbA6neYP65uJ4Fh74SP1SReo3CNHbdDxi2ejrcmLw2xAiAlXGx80WHG9YnzTCcgXWneCdMtnhd1ijUDEZPBl7FKIA%3D%3D",
      "video_format": "mp4"
    },
    {
      "quality": "360p",
      "width": 640,
      "height": 360,
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire=1678817105&ei=8WIQZKLgHcysz7sPlrGvEA&ip=202.168.85.96&id=o-AIJgj-B9B0cLLX5KRQyTceUnmtFeq5ZYijuHB-RyslQ6&itag=18&source=youtube&requiressl=yes&mh=4P&mm=31%2C29&mn=sn-g5pauxapo-jj0e%2Csn-gwpa-h55y&ms=au%2Crdu&mv=m&mvi=3&pcm2cms=yes&pl=24&initcwndbps=692500&vprv=1&mime=video%2Fmp4&ns=tj7BtFpOMBEjAwBhnqJErmQL&cnr=14&ratebypass=yes&dur=214.993&lmt=1665353721619931&mt=1678795053&fvip=5&fexp=24007246&c=WEB&txp=5318224&n=qv6WP3lRtYrDdQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhANdDIvW-8nXlPpvgcY6MNZgsvi0Ld5ar9m_lA07TlRARAiAX1UdDuwb_TRjRfpnvSBtUFOXfjbxNPp2ve_6mAxGKjg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKbA6neYP65uJ4Fh74SP1SReo3CNHbdDxi2ejrcmLw2xAiAlXGx80WHG9YnzTCcgXWneCdMtnhd1ijUDEZPBl7FKIA%3D%3D",
      "video_format": "mp4"
    }
  ],
  "audios": [
    {
      "quality": "AUDIO_QUALITY_MEDIUM",
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire=1678817105&ei=8WIQZKLgHcysz7sPlrGvEA&ip=202.168.85.96&id=o-AIJgj-B9B0cLLX5KRQyTceUnmtFeq5ZYijuHB-RyslQ6&itag=251&source=youtube&requiressl=yes&mh=4P&mm=31%2C29&mn=sn-g5pauxapo-jj0e%2Csn-gwpa-h55y&ms=au%2Crdu&mv=m&mvi=3&pcm2cms=yes&pl=24&initcwndbps=692500&vprv=1&mime=audio%2Fwebm&ns=zW3fzDya7_C8Hxx5ZOWdV2wL&gir=yes&clen=3757350&dur=214.961&lmt=1662665034468199&mt=1678795053&fvip=5&keepalive=yes&fexp=24007246&c=WEB&txp=5318224&n=dLhwsy2NRL5C8g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgbO8CqByW6qce12AaZuSCOl_E2MoULwEz2AMlRjlTAYcCIHexJ5QkIdqJPYgnpBTU_cbe-dp6MibG26KqGvJQ4O5k&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKbA6neYP65uJ4Fh74SP1SReo3CNHbdDxi2ejrcmLw2xAiAlXGx80WHG9YnzTCcgXWneCdMtnhd1ijUDEZPBl7FKIA%3D%3D",
      "contentLength": "3757350",
      "audio_format": "webm"
    },
    {
      "quality": "AUDIO_QUALITY_MEDIUM",
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire=1678817105&ei=8WIQZKLgHcysz7sPlrGvEA&ip=202.168.85.96&id=o-AIJgj-B9B0cLLX5KRQyTceUnmtFeq5ZYijuHB-RyslQ6&itag=140&source=youtube&requiressl=yes&mh=4P&mm=31%2C29&mn=sn-g5pauxapo-jj0e%2Csn-gwpa-h55y&ms=au%2Crdu&mv=m&mvi=3&pcm2cms=yes&pl=24&initcwndbps=692500&vprv=1&mime=audio%2Fmp4&ns=zW3fzDya7_C8Hxx5ZOWdV2wL&gir=yes&clen=3480151&dur=214.993&lmt=1662665096888782&mt=1678795053&fvip=5&keepalive=yes&fexp=24007246&c=WEB&txp=5318224&n=dLhwsy2NRL5C8g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgGEec34w5Yu06BjL4HMo7OKGfNxXTzGJ-3OKl76XozygCIDxYIfJftSwGzhR8QDN3_LLrUYjb-0iSISWxDSTR_Oi9&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKbA6neYP65uJ4Fh74SP1SReo3CNHbdDxi2ejrcmLw2xAiAlXGx80WHG9YnzTCcgXWneCdMtnhd1ijUDEZPBl7FKIA%3D%3D",
      "contentLength": "3480151",
      "audio_format": "mp4"
    },
    {
      "quality": "AUDIO_QUALITY_LOW",
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire=1678817105&ei=8WIQZKLgHcysz7sPlrGvEA&ip=202.168.85.96&id=o-AIJgj-B9B0cLLX5KRQyTceUnmtFeq5ZYijuHB-RyslQ6&itag=250&source=youtube&requiressl=yes&mh=4P&mm=31%2C29&mn=sn-g5pauxapo-jj0e%2Csn-gwpa-h55y&ms=au%2Crdu&mv=m&mvi=3&pcm2cms=yes&pl=24&initcwndbps=692500&vprv=1&mime=audio%2Fwebm&ns=zW3fzDya7_C8Hxx5ZOWdV2wL&gir=yes&clen=1971065&dur=214.961&lmt=1662665034476351&mt=1678795053&fvip=5&keepalive=yes&fexp=24007246&c=WEB&txp=5318224&n=dLhwsy2NRL5C8g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgGOmih7VsvRcY3-DyDksbEZ4UwgYM-ANNiXGHPuKTObACIQCOPCQM2fN50QqYVZyYmjSKci-1UjBeN7itMOuWcZym-w%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKbA6neYP65uJ4Fh74SP1SReo3CNHbdDxi2ejrcmLw2xAiAlXGx80WHG9YnzTCcgXWneCdMtnhd1ijUDEZPBl7FKIA%3D%3D",
      "contentLength": "1971065",
      "audio_format": "webm"
    },
    {
      "quality": "AUDIO_QUALITY_LOW",
      "url": "https://rr3---sn-g5pauxapo-jj0e.googlevideo.com/videoplayback?expire=1678817105&ei=8WIQZKLgHcysz7sPlrGvEA&ip=202.168.85.96&id=o-AIJgj-B9B0cLLX5KRQyTceUnmtFeq5ZYijuHB-RyslQ6&itag=249&source=youtube&requiressl=yes&mh=4P&mm=31%2C29&mn=sn-g5pauxapo-jj0e%2Csn-gwpa-h55y&ms=au%2Crdu&mv=m&mvi=3&pcm2cms=yes&pl=24&initcwndbps=692500&vprv=1&mime=audio%2Fwebm&ns=zW3fzDya7_C8Hxx5ZOWdV2wL&gir=yes&clen=1506732&dur=214.961&lmt=1662665034494904&mt=1678795053&fvip=5&keepalive=yes&fexp=24007246&c=WEB&txp=5318224&n=dLhwsy2NRL5C8g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgYSZ2Mq6KFwyZo5YZGbAIYpW3yOyLnQFZrQ5tnD4XyfYCIQDwp0XtbsEx4emr1Qbh7LRhT9dhGEmIPpRMhcBh1tCTng%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKbA6neYP65uJ4Fh74SP1SReo3CNHbdDxi2ejrcmLw2xAiAlXGx80WHG9YnzTCcgXWneCdMtnhd1ijUDEZPBl7FKIA%3D%3D",
      "contentLength": "1506732",
      "audio_format": "webm"
    }
  ],
  "status": "SUCCESS"
}
```

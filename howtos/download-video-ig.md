<head>
<link rel="stylesheet" href="../resources/css/index.css">
</head>
<div class="content">

WIP, aka Work in progress.

I'll just put some notes here.
IG divide audio and video in two stream.

This is the ID of the video:

`10000000_569892721209012_4801565564916899559_n.mp4`

This is the ID of the audio:

`290992069_2556071167856476_3143432336037864725_n.mp4`

You just wait to know what is the last byte of the video and audio to change the `byteend`.

You can also try:

```
yt-dlp https://instagram.ftrn2-1.fna.fbcdn.net/v/t50.16885-16/10000000_569892721209012_4801565564916899559_n.mp4
yt-dlp https://instagram.ftrn2-1.fna.fbcdn.net/v/t50.16885-16/290992069_2556071167856476_3143432336037864725_n.mp4
```

Should work.

```
https://instagram.ftrn2-1.fna.fbcdn.net/v/t50.16885-16/10000000_569892721209012_4801565564916899559_n.mp4?_nc_ht=instagram.ftrn2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=5jjdKNGtOysAX8TbYvV&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCx2CVR6eqz-mX1u9WLpCnNEVjyWX2jfDfBVGTdCwLqOg&oe=63FBE25A&_nc_sid=1527a3&bytestart=0&byteend=67660521
```

<br>
```
https://instagram.ftrn2-1.fna.fbcdn.net/v/t50.16885-16/290992069_2556071167856476_3143432336037864725_n.mp4?_nc_ht=instagram.ftrn2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=xstVSMwXdFAAX8-Y7yO&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBWoZhb1sDpd8SHyjr5an05unwUXM_BaZLFB_0-65-bqQ&oe=63FBB3E1&_nc_sid=1527a3&bytestart=0&byteend=2306151
```

</div>

<head>
<link rel="stylesheet" href="../resources/css/index.css">
</head>
<div class="content">

1. download the yt-dlp from here: <a href="https://github.com/yt-dlp/yt-dlp" target="_blank">yt-dlp</a>
2. follow the commands inside the square

```bash
yt-dlp -F https://www.youtube.com/watch?v=fXJc2NYwHjw

# you'll get some info
#
# ID  EXT   RESOLUTION FPS CH │   FILESIZE  TBR PROTO │ VCODEC       VBR ACODEC      ABR ASR MORE INFO
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────
# 140 m4a   audio only      2 │   14.24MiB 127k https │ audio only       mp4a.40.2  127k 44k medium, m4a_dash
# 251 webm  audio only      2 │   16.72MiB 149k https │ audio only       opus       149k 48k medium, webm_dash

# to download use the ID
yt-dlp -f 140 https://www.youtube.com/watch?v=9BFOEqAULpo

```

DONE
</div>

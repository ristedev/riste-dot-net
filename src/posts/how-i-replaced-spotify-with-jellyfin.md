---
layout: layouts/post
title: I Replaced Spotify with My Own Self-Hosted Music Streaming Setup
date: 2025-08-04
category: tech
tags: post
excerpt: How I took control of my music by replacing Spotify with a self-hosted Jellyfin streaming setup.
---

For years, I used streaming platforms like Spotify and Apple Music. They were convenient, but over time I grew frustrated as albums disappeared, tracks got replaced with new versions, and the recommendations became increasingly repetitive and stale. Meanwhile, prices kept rising. Additionally, concerns about privacy and intrusive ads became harder to ignore.

It was time to take back control of my music collection and replaced Spotify with a self-hosted Jellyfin setup.

## My Setup

I run [Jellyfin](https://jellyfin.org/) on a local Ubuntu server. It is a [free and open-source platform](https://github.com/jellyfin/jellyfin) that lets me stream all my media, including music, without subscription fees or vendor lock-in. My music library is not massive, but it is curated and well organized. Unlike streaming services, where I was limited to compressed audio, my entire library is now in FLAC format, giving me much higher sound quality across all devices.

One of the best parts is having all my media in one place: movies, shows, and now music, all accessible through a single platform. The web interface covers all my needs on desktop. On mobile, I use the [Finamp](https://github.com/jmshrv/finamp) app, a Jellyfin client with a much cleaner and more modern interface. It is a big step up over the default Jellyfin app, and its development is very active. I can even play music directly on my TV using the dedicated Jellyfin client, which makes listening around the house effortless.

## Organizing My Library

To manage and tag my music, I use [Beets](https://beets.io/), a powerful command-line tool that automatically fetches metadata, artwork, lyrics, and genre information. It helps keep my library clean, consistent, and well organized.

With Beets in place, I no longer have to rely on whatever Spotify decides to show or hide. Everything in my collection is exactly how I want it, and nothing disappears overnight.

## Here is my Beets config, it’s simple but gets the job done:

```yaml
# import settings
import:
  copy: no                # do not copy files into the beets library folder; assume they're already in place
  incremental: yes        # avoid re-importing files already added to the beets database

# matching config for metadata
match:
  strong_rec_thresh: 0.06 # lower threshold for "strong" matches; default is 0.1

# enabled plugins
plugins:
  - fetchart              # downloads album artwork during import
  - lastgenre             # assigns genres using last.fm data
  - lyrics                # fetches lyrics for tracks
  - ftintitle             # moves featured artist info from artist field to title
  - duplicates            # detects duplicate tracks/albums
  - fromfilename          # extracts metadata from filenames when tags are missing
  - unimported            # lists files in the library folder not yet in the beets database

# "lastgenre" config
lastgenre:
  canonical: yes          # use canonical genre names (standardized)
  force: no               # do not overwrite existing genre tags
  source: artist          # use the artist name to look up genre instead of album/track name
  whitelist: ~/.config/beets/whitelist.yaml  # path to whitelist file limiting genres to allowed values
```

## Music Discovery

One unexpected benefit of leaving Spotify has been rediscovering how I find new music. Without a constant algorithm feeding me suggestions, I have gone back to reading music blogs, following small labels, watching live sessions, and listening to what friends are into. Music discovery now feels more personal, intentional, and rewarding.

## Supporting Artists

I have started buying albums directly again through sites like Bandcamp and even physical media when I can. Not only does this provide higher-quality files to work with, but it also puts more money directly into the hands of the people making the music. Streaming services often pay artists only fractions of a cent per stream.

Ownership also means albums do not vanish from my collection just because a licensing deal changes.

## Is This for Everyone?

Probably not. This setup takes some initial time and effort to configure. It assumes you are comfortable running a local server and managing your own files and backups. There is no "Discover Weekly" playlist or "AI" driven algorithm serving sponsored tracks paid for by the highest bidder.

If you are tired of losing access to the music you love, or want a more private, permanent alternative to streaming, Jellyfin is a great option.

I do not see myself going back.

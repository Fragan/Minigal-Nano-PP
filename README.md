Minigal Nano++
==============

This project is a fork of [Mingal Nano SSE](https://github.com/sebsauvage/MinigalNano).
It's optimized for free.fr personal pages.

Installation
============

* Place all the files in a directory on your server.
* Customize `config.php`
* Create the "photos" subdirectory and upload your photos.

Adding your photos
==================

* Simply add your photos to the `photos` directory.
* You can create as many subdirectories as you want.

Adding comments to your gallery and images
==========================================

* Create a simple text file named `metadata.txt` in the gallery's folder. For free.fr, the file must be encoded in ANSI or ISO-8859-1.
 * Add gallery's name : __title|My great gallery__
 * Add gallery's comment : __title|My great gallery@My comment__
 * Add image's title and comment : __image.jpg|The title::The caption__ (image.jpg must be the name of your image)

*__The caracters | (pipe) and @ are reserved for the application.__

* For example :<br>
title|Les chiens héhé...@Pleins de chiens.<br>
1.jpg|Chien endormi::kikinoué<br>
2.jpg|Snaps::joue à la baballe<br>
3.jpg|Spark:: le cleps<br>

Thumbnails
=========

You do not have to care about thumbnails: They are automatically created in the `thumbs` directory.
If some thumbnails are wrong, you can purge this directory: Thumbnails will be automatically re-created.

--------------------------------------------------

MiniGal Nano SSE is licensed under a Creative Commons Attribution-Share Alike.
https://creativecommons.org/licenses/by-sa/2.5/

--------------------------------------------------
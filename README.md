# Dyfolio

A minimal portfolio generator for programmers. Its name originates from dynamic portfolio generator. The tool makes it easier for programmers to generate their entire website, without touching any html or css files, and to update their data on the fly using only json files. The idea is that everytime you make a change in any json file the users browser will fetch the data on the next refresh and update the data acordingly.

## Motivation

I know that there are a lot of tools which allow you to customise and/or make a portfolio. However, every single one of them is bloated with stuff that you would not actually use when running a portfolio website for your programming projects (hi wordpress). That's why I decided to make a minimal one, in which the end-user would only update the data they actually need. 

The only thing that any Dyfolio's user is required to do is to change some data in json files, and that's it. The js scripts will fetch the data on the next refresh on the client's side, with the updated files and generate the entire htmls on the fly.

This is a very small-sized 'library'; it does not use any external apis or 3rd party plugins etc. I really wanted to go with React on this one but after some time I thought that it would be an overkill for such a minimal website and sticked to vanilla js (actually, everything was written in typescript and was compiled to js afterwards).

## But what are the results?

This is more less what you can do with this generator (I used some html in my jsons, to inject some links etc. but you can do it too, I will explain that part later, for the most part I have not done anything outside of the box here). <br>

<a href="http://filipmikina.pl">Click here</a> to check out my portfolio, generated with Dyfolio

## What do I download?

You can simply download this repository and update the information, however, I provided a more simple version in the 'release' tab on github (you can directly download it there or <a href="http://bit.ly/dyfolio">here</a>).

## Does it work on all browsers?

It should. I recommend using chrome or firefox, though. For testing etc. you can use either of them but when you use chrome to see the changes in any html file you must launch it with extra option (it will not be necessary when the files are on another host - chrome's policy is that you can't access file:// protocol while fetching the data, so this command is a little workaround - but do NOT use it outide of your own local host).

```
google-chrome --allow-file-access-from-files
```

# Adjusting Dyfolio to your needs

If you are familiar with json you should be okay adjusting the folio to your needs, if not I hope that the little tutorial below will help.

## Favicon

Let's start with something relatively easy - if you have your own favicon you can put it in the root folder (where all .html files are).

## Adding personal info

Simply open `/assets/jsons/about.json` in any text editor, that json should look like this:

```json
{
  "name": "your name",
  "email": "yourmail@gmail.com",
  "telVisible": "+48 999 999 999",
  "aboutMe": "Lorem...",
  "pageTitle": "your title"
}
```

The fields are self-explanatory. The "aboutMe" field will be displayed on your `about me page` (which is `about.html`). You can inject some html there, like I did, every tag will work, I provided decent look for tags like: `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>` `<p>` `<a>`. You can separate and add more 'air' to the look by passing `<br>` when necessary.

## Adding social links

This time open `/assets/jsons/socials.json`. This json will have an array of fields you need to update. It will look like this:

```json
[
  {
    "link": "https://github.com/fiffeek",
    "title": "github",
    "service": "github"
  }
]
```
Again, "link" and "title" fields are self-explanatory. In the field "service" you write the service name you want to link to (this is used to pick a proper icon). Current set of services supported is:
`github, linkedin, facebook, cv, leetcode, youtube, telegram, behance, devianart, dribble, dropbox, evernote, google-plus, instagram, pinterest, product-hunt, skype, slack, spotify, twitter, vimeo, wordpress`

## Adding work/related experience

Once again, access `assets/jsons/jobs.json`. You should see something similar to this one:

```json
[
  {
    "title": "Backend software developer",
    "timeframe": "10.2018 - 01.2019",
    "place": "SIO2project | Warsaw, Poland",
    "description": "Developing... "
  }
]
```
You can add more information in this format in the array. (the data is not ordered by the date you provided, it is a string afterall -> the first class you write here will appear as the first one on the site).

## Adding a project

Open `assets/jsons/projects.json`.

```json
[
  {
    "title": "rogue-like dungeon crawler",
    "date": "03.2019 - 06.2019",
    "imgUrl": "assets/img/fade.gif",
    "description": "In a team ..."
  }
]
```

This is by far most advanced customisation. For a specific project you need to upload the image you want to display to `/assets/img/`. Let's assume your image filename is `abc.gif` then you should write a class like this, and then add it to the array

```json
{
  "title": "ABC project",
  "date": "03.2019 - 06.2019",
  "imgUrl": "assets/img/abc.gif",
  "description": "In a team ..."
}
```
## HTML injection

As I mentioned above, to every description member of any json you should be able to inject some html like a link, I did it on my website, and added the css for links to accent the color.

## Styles

In `global.css` you can adjust the theme of the site, however I do recommend leaving it as it is, it fits the minimal style I wanted to show here

# Issues

Currently, the mobile website is not as scalable as it should be - it will be fixed soon. I also want to add the image in projects to be optional and if the image is provided for the user to choose whether they want to disply it horizontally or vertically.

# Typescript files

To compile typescript files, navigate to the /ts directory and use the command:

```bash
tsc -w -p .
```

I will add the script for that soon.

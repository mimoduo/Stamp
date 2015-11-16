#Stamp

Stamp is library for automating the email template workflow. By using Jade as a template engine, Stamp can reliably create templates that are both consistent and flexible.

##Features

* Gulp as a preprocessor
  * gulp-jade: html template engine
  * gulp-inline-css: inlines styles from an external stylesheet
  * gulp-inline-source: embeds styles from an external stylesheet
  * gulp-html2txt: converts compiled html templates into txt versions
  * gulp-livereload: automatically refresh the page after saving

* Jade as an HTML compiler
  * global jade: contains tools and regions for templates - pages
  * template jade: contains layouts and variables for pages
  * page jade: ability to override global & template variables & blocks
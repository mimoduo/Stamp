#Stamp

Stamp is library for automating the email template workflow. By using Jade as a template engine, Stamp can reliably create templates that are both consistent and flexible.

##Features

* **Gulp** as a preprocessor
  * _gulp-jade:_ html template engine
  * _gulp-inline-css:_ inlines styles from an external stylesheet
  * _gulp-inline-source:_ embeds styles from an external stylesheet
  * _gulp-html2txt:_ converts compiled html templates into txt versions
  * _gulp-livereload:_ automatically refresh the page after saving

* **Jade** as an HTML compiler
  * _global jade:_ contains tools and regions for templates down to pages
  * _template jade:_ contains layouts and variables for pages
  * _page jade:_ ability to override global & template variables & blocks
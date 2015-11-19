<img src="https://raw.githubusercontent.com/mimoduo/Stamp/master/stamps/global/images/logo.png" alt="Stamp logo of two mirrored triangles with the word Stamp sitting below" />

**Stamp** is library for automating the email template workflow using Jade and Gulp in unison.

##Features

**Gulp** as a preprocessor

* _gulp-jade:_ html template engine
* _gulp-inline-css:_ inlines styles from an external stylesheet
* _gulp-inline-source:_ embeds styles from an external stylesheet
* _gulp-html2txt:_ converts compiled html templates into txt versions
* _gulp-livereload:_ automatically refresh the page after saving

**Jade** as an HTML compiler

* _global jade:_ Global Level ~ configuration and tools for all templates
* _template jade:_ Template Level ~ can override global level, provides template to pages
* _page jade:_ Page Level ~ extends template level, can override global level and template level

##Getting Accustomed

_stamp/templates/sample-template/jade/template.jade_ is where the real hottness goes on. Each template folder created, in this example it is "sample-template", will be your stamp for multiple pages. Individual pages have the ability to override any variables or blocks that were inherited from either the global level or the template level.

##Installation

Make sure node is installed before attempting to install Stamp: https://nodejs.org/en/download/ Node is required as a package manager used in the following steps.

* Open up a terminal / command prompt
  * Type in: cd
  * Press the spacebar
  * Drag the folder "Stamp" into the terminal window
  * Press enter.
  * _The terminal will now operate within the Stamp folder_
* Type in: npm install
  * This will install all the modules necessary for gulp to run
  * OSX users may have to type in 'sudo npm install'
* Type in: gulp
  * This will run all gulp tasks + a watch task
  * gulp-livereload requires a browser extension: http://livereload.com/extensions/

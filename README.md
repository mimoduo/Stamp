#Stamp

Stamp is library for automating the email template workflow using Jade and Gulp in unison. Jade provides a templating system. Gulp provides

##Features

**Gulp** as a preprocessor

* _gulp-jade:_ html template engine
* _gulp-inline-css:_ inlines styles from an external stylesheet
* _gulp-inline-source:_ embeds styles from an external stylesheet
* _gulp-html2txt:_ converts compiled html templates into txt versions
* _gulp-livereload:_ automatically refresh the page after saving

**Jade** as an HTML compiler

* _global jade:_ contains mixins and regions for templates down to pages
* _template jade:_ contains layouts and variables for pages
* _page jade:_ ability to override global & template variables & blocks

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
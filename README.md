# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

###

Get running:

```
git clone https://github.com/maxstreifeneder/docu-test && npm install
```

To start serving the site locally:

```
npm start
```

### Landing Page Update

The landing page is a mixture of two files:

- **src/components/HomepageFeatures/index.js** (React component) and
- **src/pages/index.js**

Give it a try and update it to see what happens! Maybe we can/should integrate the UseCase solution diagram to give a good idea of the usecase at first sight?
(and to make UseCases look different - otherwise the impression would also be "I've been there already, I know the Usecase" even though it might be a different one)

### Adjusting Tutorials/doc

All files in the **docs** folder will appear in the Tutorial section.

- a directory will appear as a collapsable section
- The **sidebar_position** on top of each Markdown files determines where inside a section the menu item will appear.
- The sidebars might be adjustable (with more coding effort) in the sidebars.js file (root of the project)

### General site adjustments

- **docusaurus.config.js** defines the whole "container" (header, footer, etc.) of the site as well as base configuration
  -> Themes
  -> where to deploy the content to (GitHub repository: **organizationName** and **projectName**)

### Deployment

Using SSH:

```
$ USE_SSH=true npm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

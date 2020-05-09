# **A**ngular **P**roject **G**enerator (APG) 
### Setup complete angular PWA with one command
#### pre-release version

Command line interface (CLI) for angular 9.
It helps you to generate an robust angular project seed.
To get help just type:
```console
apg new --help
``` 

The generated app will have a lot of common features like:
 - Predefined pages/routes (Imprint, Login, ...)
 - Responsive layout
 - Basic PWA support
   - It contains manifest file and service worker configuration.
   - For more information see: https://angular.io/guide/service-worker-getting-started
 - Dynamic routes with AuthGuardCanActivate
 - Global data store via facade services (BehaviorSubject, Local Storage support) 
 - Usefull helpers like: 
   - AutofocusDirective
   - typesafe FormGroup
   - Version Indicator (shows build date)
   - Couterdown & countup component (for session timeout, ...)
 - Gherkin E2E test setup: chai, cucumber, jasmine, karma, protractor and predefined base steps (given, when, then)
 
 Coming soon:
 - Better description of used patterns
 - More Demo pages
 - Generator für common services (REST, Store, ...) 
 - Generator for dialog patterns (list & detail dialogs, drill down dialogs, ...)
 - Theme switcher for light and dark design
 - Predefined Deutsche Bahn and Deutsche Bank SCSS according to the company style guides 

![apg-cli](https://user-images.githubusercontent.com/11378781/80909867-f0209a00-8d2b-11ea-9fd4-2c8aff503f3d.png)

### Install apg
```console
npm i -g angular-project-generator@latest
```

### Show help
```console
apg --help 
apg new --help
apg generate --help
```

### Updating npm, angular cli
```console
apg update 
```

### Generating app:
```console
apg new -a MyApp -p app -cp ma

# Deutsche Bahn developer:
apg new -a click-n-ride -p app -cp cr -l deutschebahn -f

# Deutsche Bank developer:
apg new -a TradeFinder -p app -cp tf -l deutschebank

``` 

## Welcome dialog
<img src="https://user-images.githubusercontent.com/11378781/80910383-607cea80-8d2f-11ea-895f-5d3a8554fe23.png" width="50%">

## Login dialog
<img src="https://user-images.githubusercontent.com/11378781/80910331-1431aa80-8d2f-11ea-972a-db32feab08f2.png" width="50%">


The created app shell has a lot of complexity, which is not required for every project.
After generating the app: 
 - configure the behaviour in environment.ts
 - delete unnecessary routes, modules and mock data 

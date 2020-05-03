# **A**ngular **P**roject **G**enerator (APG) 
### Setup complete angular PWA with one command
#### pre-release version

Command line interface (CLI) for angular 9.
It helps you to generate an angular project by a short command.
To get help just type:
```console
apg new --help
``` 

The generated app will have a lot of common features like:
 - Pre-defined pages (Imprint, Login, ...)
 - Responsive layout
 - Dynamic routes with AuthGuardCanActivate
 - Global data store via facade services (BehaviorSubject, Local Storage support) 
 - Usefull helpers like: 
   - AutofocusDirective
   - typesafe FormGroup
   - Version Indicator (shows build date)
   - Couterdown & countup component (for session timeout, ...)
 
 Coming soon:
 - Better description of used patterns
 - Gherkin E2E test setup: chai, cucumber, jasmine, karma, protractor and predefined base steps (for given when then)
 - Generator für common services (REST, Store, ...) und typically dialog patterns (list & detail dialogs, drill down dialogs, ...). 

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
``` 

## Welcome dialog
![app-welcome](https://user-images.githubusercontent.com/11378781/80910383-607cea80-8d2f-11ea-895f-5d3a8554fe23.png)


## Login dialog
![app-login](https://user-images.githubusercontent.com/11378781/80910331-1431aa80-8d2f-11ea-972a-db32feab08f2.png)


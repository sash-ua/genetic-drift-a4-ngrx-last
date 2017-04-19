# 1.0.4 (2017-04-19)

### CHANGES

* Added unsubscription for observables when component destroyed.

# 1.0.3 (2017-04-13)

### CHANGES

* Migrate to Angular 4.1.0-beta.1, Angular Material 2.0.0-beta.3

# 1.0.2 (2017-04-11)

### CHANGES

* Reconfigured Protractor, Rollup

### BUG FIXES

* **InputValidatorService inputConds():** inability to input value if the first digit was lower of the start of the acceptable interval of possible values. Ex.: [2, 100], can't input 10.

* **SpecificService effPopSize1():** the possibility of divide by zero.

* **ComputationService bounchCoin1():** the possibility of divide by zero.


# 1.0.1 (2017-04-08)

### CHANGES

* Added production mode to store reducer.

* Configured Protractor, added some e2e tests.

# 1.0.0 (2017-04-07)

### CHANGES

* Migrate to Angular 4.1.0-beta.0

* **dom.service.ts:**

    - attrSetter() - add Renderer2 to args, can possible simple test methods with Renderer2 DI.

    - findHTMLElement() - added null handle (if there aren't proper tags among ancestors), add Renderer2 to args.

* Added some unit-tests.

# 1.0.0-beta.3 (2017-03-28)

### CHANGES

* Minor changes. Configured Karma + Jasmine, added some unit-tests.

# 1.0.0-beta.2 (2017-03-24)

### CHANGES

* Migrate to Angular 4.0.0
 
# 1.0.0-beta.1 (2017-03-23)

### CHANGES

* Migrate to Angular 4.0.0-rc.6

### Code Refactoring

* **CSS:** removed redundant css code


# 1.0.0-beta.0 (2017-03-22)

Initial commit
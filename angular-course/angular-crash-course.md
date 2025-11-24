# Angular Framework Essentials

## Syllabus

- [x] Setup Environment ✅ 2025-11-16
- [x] [[Internship_Syllabus/كورس النقاشة😅/Introduction To Web Development]] |  [Slides](https://miro.com/app/board/uXjVK5Ns3Ow=/) ✅ 2025-11-16
- [x] [[Internship_Syllabus/كورس النقاشة😅/HTML]] & [[Internship_Syllabus/كورس النقاشة😅/CSS]] ✅ 2025-11-17
- [x] Introduction to JavaScript |  [[TypeScript 😁]] ✅ 2025-11-23
- [ ] Introduction to **Angular**. | [Slides](https://docs.google.com/presentation/d/1dPPQyUnR43SgpTCf18ZIaoY-a3_u8VDd/edit?pli=1&slide=id.p1#slide=id.p1)
- [ ] let's Build your first Angular app
- [ ] Angular Structure project
- [ ] Components
- [ ] Templates, Interpolation and Directives
- [ ] Data Binding & Pipes
- [ ] Nested Components
- [ ] Component Inheritance
- [ ] Component lifecycle
- [ ] Services & Dependency Injection
- [ ] Retrieving Data using HTTP
- [ ] Dealing with Forms
- [ ] Navigation and Routing
---
## Perquisites:
1. Created an HTML web page by editing the HTML directly.
2. Programmed web site content in JavaScript.
3. Read Cascading Style Sheet (CSS) content and understand how selectors are used.
4. Used command-line instructions to perform tasks on your computer.

---
## Session-1-Introduction to web
1. intro to  [[Internship_Syllabus/كورس النقاشة😅/HTML]]
2. intro to [[Internship_Syllabus/كورس النقاشة😅/CSS]]

https://picsum.photos/
https://jsonplaceholder.typicode.com/

---
## Session-2-JS
- into to [[Internship_Syllabus/Frontend-Academy-Materials/lectures/04-javascript/JavaScript|JavaScript]]
---

## Session-2-Introduction to TypeScript
*GO* : [[TypeScript 😁]]

---
## Session-3-Introduction to Angular

1. Angular intro
2. Angular setup
3. Angular files
4. SPA technique / concept
5. Angular architecture
6. Project flow
7. Install `bootstrap` & `fontawesome`
---
### Angular Intro:
 Angular is a web framework based on Typescript it's  allow us to create SPA , dynamic web application  rely on client side develop by google.
it's have a lot of libraries to helpful on development area as like as handle API, Validation, Testing, DOM.

- AngularJS *vs* Angular 2 
- Angular CLI
- Angular Routing
---
### Angular Setup
#### Setup Your Local development environment

>[!NOTE] This step is only for your local environment!

1. **NodeJS**
	Angular requires an active LTS or maintenance LTS version of Node. Let's confirm your version of `node.js`.
	From a **Terminal** window:
    1. Run the following command: `node --version`
    2. Confirm that the version number displayed meets the requirements.
 2. **PNPM** | NPM Package Manager   -  [[use-pnpm- with-angular-CLI]] 
	 1.  `npm i -g pnpm`
	 2.  `pnpm -v`
3. **Angular CLI**
	- With `node.js` and `npm` installed, the next step is to install the [Angular CLI](https://angular.dev/tools/cli) which provides tooling for effective Angular development.
	- From a **Terminal** window run the following command: `npm install -g @angular/cli`.
	- `ng config -g cli.packageManager pnpm`
4. Install integrated development environment (IDE) :
	1. **VS Code** 
		1. Add Angular Language Service  extension
	2. WebStorm 
	3. Optional: set-up your AI powered IDE

---
### let's Build your first Angular app

```cmd
ng new first-app
---
ng generate component home
# or shorthand
ng g c home

```

---
### SPA Technique 
#### How Do Traditional Web Applications Work?
 ![[Traditional-Web-App.gif]]
 When you click on a link in a traditional web app, here’s what happens:

1. The browser makes an HTTP request to the server.
2. The server processes the request and responds with a new HTML page.
3. The entire page reloads, losing context of what the user was doing.

![[Traditional-Web-App-update.gif]]
#### Limitations of Traditional Web Applications

- **Slow User Experience**: Frequent page reloads make the interaction less smooth.
- **Increased Server Load**: The server has to serve full HTML pages repeatedly.
- **Less Fluid Navigation**: There’s always a noticeable delay between actions and responses.

---
#### What is the SPA technique 🤔

The general idea is that we **control the number of requests sent to the server** to manage the number of request and the number of refreshes that occur, which is achieved by the server sending each HTML file once with the first request.

![[SPA-Approach.gif]]

SPAs offer a modern, smooth, and efficient way of building web applications, especially when using Angular. With features like client-side routing, lazy loading, and operators for handling asynchronous events, Angular empowers developers to create high-performing SPAs.

![[SPA-Approach-update.gif]]

#### Benefits of SPA Over Traditional Web Apps

- **Speed**: SPAs load content dynamically, providing faster responses.
- **User Experience**: Smooth, app-like transitions without full-page reloads.
- **Efficiency**: SPAs minimize the number of requests sent to the server, which reduces the load.
#### Advantages and Disadvantages of Single Page Applications
---
##### Advantages of SPAs
1. Speed and Performance
2. Improved user experience
3. Single Page
4. Reduced load time
5. Reduced server load

##### Disadvantages of SPAs
1. Not great for SEO
2. Security issues : Cross-Site Request Forgery (CSRF) | Cross-Site Scripting (XSS)
3. Won't work without JavaScript
4. Heavy usage of browser resources
5. Possible memory leaks
6. Poorly-optimized code


 ***More...***
 - [Understanding Single Page Applications (SPA)](https://blog.stackademic.com/understanding-single-page-applications-spa-81ce8a660a8c)
 - [Single-Page Application Architecture](https://www.ramotion.com/blog/single-page-application-architecture/)
 
---

### Angular File Structure
#### Description
Components are the building blocks of Angular applications, encapsulating the template, logic, and styles to define a self-contained unit of the user interface.

[[angular-structure-files]]
![[angular-structure-files.png]]
Based on `first-app` project, here's the structure breakdown:
#### Root-level files

**Configuration files**
- **`angular.json`** – Angular CLI workspace config (build, serve, test settings for all apps/libs)
- **`package.json`** – npm/pnpm dependencies, scripts (`start`, `build`, `test`)
- **`tsconfig.json`** – Base TypeScript compiler options for the workspace
- **`tsconfig.app.json`** – TypeScript config for the application code
- **`tsconfig.spec.json`** – TypeScript config for test files
- **`.editorconfig`** – Code style rules (indentation, line endings) for editors
- **`.gitignore`** – Files/folders Git should ignore (`node_modules`, `dist`, etc.)

 **IDE helpers**
- **`.vscode/`** – VS Code workspace settings
  - `extensions.json` – Recommended extensions
  - `launch.json` – Debug configurations
  - `tasks.json` – Build/serve tasks

 `src/` – Application source code
##### Entry point
- **`main.ts`** – Bootstrap file that starts the Angular app
  ```typescript
  bootstrapApplication(App, appConfig)
  ```
  Loads the root component (App) with config.

- **`index.html`** – Single HTML page (SPA shell)
  - Contains `<app-root>` where Angular mounts the app

- **`styles.css`** – Global styles for the entire app

 `src/app/` – Main application module

Your app uses **standalone components** (modern Angular 18+ approach, no `NgModule`).
##### Core files
- **[app.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.ts:0:0-0:0)** – Root component
  ```typescript
  @Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })
  export class App {
    protected readonly title = signal('first-app');
  }
  ```
  - `selector` – HTML tag (`<app-root>`)
  - `imports` – Other components/directives used in template
  - `templateUrl` – HTML template file
  - `styleUrl` – Component-scoped CSS
  - `signal()` – Reactive state (Angular 18+ signals)

- **`app.html`** – Root component template 
- **`app.css`** – Root component styles
- **`app.spec.ts`** – Unit tests for [App](cci:2://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.ts:3:0-11:1) component (Jasmine/Karma)

##### Routing & config
- **`app.routes.ts`** – Route definitions
  ```typescript
  export const routes: Routes = [];
  ```
  Add routes like:
  ```typescript
  { path: 'home', component: HomeComponent }
  ```

- **[app.config.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.config.ts:0:0-0:0)** – Application-level providers
  ```typescript
  export const appConfig: ApplicationConfig = {
    providers: [
      provideBrowserGlobalErrorListeners(),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes)
    ]
  };
  ```
  - `provideRouter(routes)` – Enables routing
  - `provideZoneChangeDetection` – Change detection strategy
  - Add services, HTTP client, etc. here

`public/` – Static assets
- **`favicon.ico`** – Browser tab icon
- Put images, fonts, JSON files here (copied as-is to `dist/`)

 `node_modules/` – Dependencies
- Installed packages (Angular, TypeScript, dev tools)
- Never commit this (in `.gitignore`)

`dist/` – Build output (created after `ng build`)
- Production-ready files (HTML, JS bundles, CSS)
- Deploy this folder to a web server

---

### Typical workflow

#### Add a new component
```bash
ng generate component hello
# or shorthand
ng g c hello
```
Creates:
- `src/app/hello/hello.ts`
- `src/app/hello/hello.html`
- `src/app/hello/hello.css`
- `src/app/hello/hello.spec.ts`

Import it in [app.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.ts:0:0-0:0):
```typescript
import { HelloComponent } from './hello/hello';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent], // ← add here
  ...
})
```

#### Add a service
```bash
ng g service data
```
Creates `src/app/data.service.ts`. Provide it in [app.config.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.config.ts:0:0-0:0):
```typescript
providers: [
  DataService, // ← add here
  provideRouter(routes),
  ...
]
```
#### Add a route
In `app.routes.ts`:
```typescript
import { HelloComponent } from './hello/hello';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HelloComponent },
];
```

In `app.html`, add `<router-outlet></router-outlet>` to render routed components.

---



### Angular Architecture

Angular follows a **component-based architecture** with clear separation of concerns. Here's the conceptual model and how it maps to your project.
[[angular-architecture]]  | [[angular-crash-course-diagrams|angular-crash-course-diagrams]]
####   **component-based architecture**
- *Component tree:*
![[component-based.png]]

- **Example**

![[components.png]]

- **Component Core Blocks**
**Structure:**
- **Class** – TypeScript logic (state, methods)
- **Template** – HTML view
- **Styles** – CSS (scoped to component)
- **Metadata** – `@Component` decorator

![[component-arch.png]]

- **Example**

![[component-content.png]]

#### Component: 
- Scalable
- Reusable
- Selector `<Custom HTML Tag>`

---

### Key differences: Standalone vs NgModule

Your app uses **standalone** (modern):
- No `app.module.ts`
- Each component declares its own `imports: [...]`
- Providers go in [app.config.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.config.ts:0:0-0:0)

**Old NgModule style** (pre-Angular 14):
- `app.module.ts` with `@NgModule({ declarations, imports, providers })`
- All components declared in one place

---
### Summary

| File/Folder                                                                                                                                                        | Purpose                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| `src/main.ts`                                                                                                                                                      | App entry point                         |
| `src/index.html`                                                                                                                                                   | HTML shell                              |
| [src/app/app.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.ts:0:0-0:0)               | Root component                          |
| [src/app/app.config.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.config.ts:0:0-0:0) | App-level providers (routing, services) |
| `src/app/app.routes.ts`                                                                                                                                            | Route definitions                       |
| `angular.json`                                                                                                                                                     | CLI build/serve config                  |
| `package.json`                                                                                                                                                     | Dependencies & scripts                  |
| `tsconfig.*.json`                                                                                                                                                  | TypeScript compiler settings            |
| `public/`                                                                                                                                                          | Static assets                           |

---
### Install `bootstrap` & `fontawesome`
- [Angular Bootstrap Document](https://ng-bootstrap.github.io/#/getting-started)

```cmd
ng add @ng-bootstrap/ng-bootstrap
```

- [Angular Fontawesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome#angular-fontawesome)

```cmd
pnpm add @fortawesome/angular-fontawesome

ng add @fortawesome/angular-fontawesome@<version>
```
https://daisyui.com/docs/install/

---
## Session-4

- Template
- Interpolation
- Data Binding
- Directives
- Pipes
---
### Templates
inline, linked

```ts
import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  template: `
    <main>
       <!-- Transform the company name to title-case and
       transform the purchasedOn date to a locale-formatted string -->
<h1>Purchases from {{ company | titlecase }} on {{ purchasedOn | date }}</h1>
	    <!-- Transform the amount to a currency-formatted string -->
      <p>Total: {{ amount | currency }}</p>
    </main>
  `,
})
export class ShoppingCartComponent {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
```



---
### Interpolation
```ts
title : string = 'Hello from dark side.'
```

```html
<h2> {{ title }} </h2>
```

---
### Data Binding
- one way (Property binding, Event binding, Interpolation) 
- two way `[(ngModule)]="''"` | banana in a box
![[Data-binding.png]]
---
### Directives

![[Directives.png]]

The different types of Angular directives are as follows:

| Directive Types                                                                            | Details                                                                           |
| :----------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| [Components](https://angular.dev/guide/components)                                         | Used with a template. This type of directive is the most common directive type.   |
| [Attribute directives](https://angular.dev/guide/directives#built-in-attribute-directives) | Change the appearance or behavior of an element, component, or another directive. |
| [Structural directives](https://angular.dev/guide/directives/structural-directives)        | Change the DOM layout by adding and removing DOM elements.                        |

---
#### 1. Component Directives
Components are directives with templates. They're the building blocks of Angular applications.
	as like as a `Router` `Sevices` ,   is a components directive.
**Key Points:**
- Defined with `@Component` decorator
- Must have a template (inline or external)
- Can have their own styles
- Can receive data via `@Input()` and emit events via `@Output()`

**Example:** 
```typescript
@Component({
  selector: 'app-product',
  template: `<h2>{{title}}</h2>`,
  styles: [`h2 { color: blue; }`]
})
export class ProductComponent {
  @Input() title: string = '';
}
```

#### 2. Structural Directives
Change the DOM layout by adding or removing elements. They're prefixed with `*`.

##### @if()
Conditionally renders content.

**Syntax:**
```html
@if (condition) {
  <!-- Content to show when condition is true -->
}
```

**Example:**
```html
@if (item.isActive) {
  <button>Add to Cart</button>
}
```

##### @else
Optional block that renders when the `@if` condition is false.

**Example:**
```html
@if (item.isActive) {
  <button>Add to Cart</button>
} @else {
  <button disabled>Out of Stock</button>
}
```

##### @for()
Repeats a template for each item in a collection.

**Syntax:**
```html
@for (item of items; track item.id) {
  <!-- Template to repeat -->
}
```

**Example:**
```html
@for (product of products; track product.id) {
  <div>{{product.name}}</div>
}
```

##### @switch()
Similar to JavaScript's switch statement.

**Syntax:**
```html
@switch (expression) {
  @case (value1) { ... }
  @case (value2) { ... }
  @default { ... }
}
```

**Example:**
```html
@switch (product.status) {
  @case ('in-stock') {
    <span>In Stock</span>
  }
  @case ('out-of-stock') {
    <span>Out of Stock</span>
  }
  @default {
    <span>Check Availability</span>
  }
}
```

#### 3. Attribute Directives
Change the appearance or behavior of an element, component, or another directive.
- ngStyle and ngClass
**Key Points:**
- Defined with `@Directive` decorator
- Don't have templates
- Can listen to host element events
- Can modify DOM properties

 **Step 1:** Generate the Directive
```cmd
ng generate directive highlight --skip-tests
```

**Step 2:** Implement the Directive Logic
```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Default color is yellow
  @Input() appHighlight: string = 'yellow';
  // Optional default color when not hovering
  @Input() defaultColor: string = 'transparent';

  constructor(private el: ElementRef) {}

  // When mouse enters the element
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  // When mouse leaves the element
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor);
  }

  // Helper method to change the background color
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

**Step 3:** Use the Directive in a Component
- **Option 1:** In a standalone component
```ts
import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HighlightDirective],  // Import the directive
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class ProductComponent {
  // Component logic here
}
```

- **Option 2:** In a module (if not using standalone)
```ts
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    // other components
    HighlightDirective  // Add the directive to declarations
  ],
  // ...
})
export class AppModule { }
```

**Step 4:**  Use the Directive in Your Template
```html
<!-- Using default color (yellow) -->
<p appHighlight>Hover over me!</p>

<!-- Custom highlight color -->
<p [appHighlight]="'lightblue'">I'll be light blue on hover</p>

<!-- With default color (transparent when not hovering) -->
<p [appHighlight]="'lightgreen'" defaultColor="transparent">
  Green on hover, transparent by default
</p>
```

---
##### 1. ngStyle

`ngStyle` lets you set multiple inline styles dynamically.

###### Basic Syntax:
```html
<element [ngStyle]="{'styleName': 'value'}">
```
###### examples:
```html
<!-- Single style -->
<p [ngStyle]="{'color': 'red'}">Red text</p>

<!-- Multiple styles -->
<p [ngStyle]="{
  'color': textColor,
  'font-size.px': fontSize,
  'font-weight': isBold ? 'bold' : 'normal'
}">Dynamic styles</p>

<!-- Using component method -->
<p [ngStyle]="getTextStyles()">Styled text</p>
```

##### 2. ngClass

`ngClass` adds/removes CSS classes dynamically.
###### Basic Syntax:
```html
<element [ngClass]="{'className': condition}">
```
###### Example:
```html
<!-- Single class -->
<p [ngClass]="'highlight'">Highlighted text</p>

<!-- Multiple classes with conditions -->
<p [ngClass]="{
  'text-danger': hasError,
  'text-success': !hasError && isActive,
  'special': isSpecial
}">Conditional classes</p>

<!-- Array of classes -->
<p [ngClass]="['text-uppercase', 'fw-bold']">Uppercase and bold</p>
```

---
#### Key Differences:

| Type       | Changes DOM | Has Template | Example              |
| ---------- | ----------- | ------------ | -------------------- |
| Component  | Yes         | Yes          | `<app-product>`      |
| Structural | Yes         | No           | `*ngIf`, `*ngFor`    |
| Attribute  | No          | No           | `ngStyle`, `ngClass` |

#### Best Practices:
1. Use components for reusable UI elements
2. Use structural directives for conditional rendering or repeating templates
3. Use attribute directives for DOM manipulation and behavior
4. Prefer the new control flow (`@if`, `@for`, `@switch`) over `*ngIf`, `*ngFor` in new code
5. Keep directive logic focused and simple

#### Recap: 
1. Component directive
2. Structure directive
	- @if()
	- @else
	- @empty
	- @for()
	- @switch()
		- @case()
		- @defualt
3. Attribute directive
	- `ngClass`
	- `ngStyle`

---
### Pipes
- **Pipes** transform data in templates for display purposes, such as formatting dates, numbers, or filtering and sorting lists.

![[Pipes.png]]

[Pipe](https://angular.dev/guide/templates/pipes)

---
## Session-5
-  Data Sharing Between Angular Components
- Component Life Cycle
### Data Sharing Between Angular Components
- **Nested Component**
- **Share Date between Components ( Data Transfer )**
	- **Relation between components**
		- from parent to child - `@Input()`
		- from child to parent - `@Output() & EventEmitter<?>`
	- **Non-Relation between Components**
		- Services are a class component, can be injected into components of the application.

>[!TIPS]
> you can generate multiple components at once.
> ``` cmd
> for %n in (parent,child) do ng g c %n --skip-tests
> ```

- `for %n in (parent,child)` - Creates a loop that runs once for each item in the parentheses
- `do ng g c %n --skip-tests` - For each item, runs the Angular CLI command to generate a component
    - `%n` gets replaced with the current item (parent, then child)
    - `--skip-tests` prevents creating test files (`spec.ts`)
---
#### 1. Component Communication Methods

##### Parent to Child Communication
- **Method**: `@Input()` decorator
- **Direction**: Parent → Child
- **Use Case**: Passing data down to child components
- **Example**:
  ```typescript
  // Parent
  @Component({ template: `<app-child [data]="parentData"></app-child>` })
  export class Parent { parentData = "Hello"; }

  // Child
  @Component({...}) 
  export class Child { @Input() data: string; }
  ```

##### Child to Parent Communication
- **Method**: `@Output()` with `EventEmitter`
- **Direction**: Child → Parent
- **Use Case**: Notifying parent of events
- **Example**:
  ```typescript
  // Child
  @Component({...})
  export class Child {
    @Output() notify = new EventEmitter<string>();
    onClick() { this.notify.emit("Clicked!"); }
  }

  // Parent
  @Component({ template: `<app-child (notify)="onNotify($event)"></app-child>` })
  export class Parent { onNotify(msg: string) { console.log(msg); } }
  ```

##### Unrelated Components
- **Method**: Services
- **Direction**: Any-to-any
- **Use Case**: Sharing data between unrelated components
- **Example**:
  ```typescript
  // data.service.ts
  @Injectable({ providedIn: 'root' })
  export class DataService {
    private data = new BehaviorSubject<string>('Initial');
    currentData = this.data.asObservable();
    updateData(value: string) { this.data.next(value); }
  }

  // any.component.ts
  @Component({...})
  export class AnyComponent {
    constructor(private dataService: DataService) {
      this.dataService.currentData.subscribe(value => console.log(value));
    }
  }
  ```

#### 2. When to Use Each Method

| Method          | Best For                          | Complexity | Relationship      |
|-----------------|-----------------------------------|------------|-------------------|
| `@Input()`      | Simple data passing               | Low        | Parent → Child    |
| `@Output()`     | Child events                      | Low        | Child → Parent    |
| Services        | Complex state, multiple consumers | Medium     | Any relationship  |

#### 3. Best Practices

1. **Keep it simple**: Use `@Input`/`@Output` for direct relationships
2. **Use services** for shared state
3. **Unsubscribe** from observables to prevent memory leaks
4. **Keep services focused** on single responsibilities

#### 4. Common Pitfalls

- Forgetting to unsubscribe from observables
- Overusing services when simple `@Input` would suffice
- Creating circular dependencies between components
- Not handling errors in subscriptions

###  Component Life Cycle
- OnIniti
- OnChange
- OnDestroy

---
## Session-6

- Services & DI
- Routing
- Nested Routing
- Reactive Forms

```js
loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{3,5}[a-zA-Z]{3,5}$/),
    ]),
  });

  submitLoginForm(form: FormGroup) {
    console.log(form.value);
  }
```

```html
<div class="container">
  <div class="row">
    <h1 class="title">Login😎</h1>
    <form [formGroup]="loginForm" (ngSubmit)="submitLoginForm(loginForm)">
    
      <div class="mb-3 form-group">
        <label for="username" class="form-label">User Name</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="User Name"
          formControlName="userName"
        />
        @if(loginForm.get('userName')?.errors &&
        loginForm.get('userName')?.touched){
        <span class="alert alert-danger">
          @if(loginForm.get('userName')?.hasError('required')){
          <p class="alert alert-danger">Username is required</p>
          } @else if (loginForm.get('userName')?.hasError('minlength')) {
          <p class="alert alert-danger">Minimum length 5 characters</p>
          } @else if (loginForm.get('userName')?.hasError('maxlength')) {
          <p class="alert alert-danger">Maximum length 20 characters</p>
          }
        </span>
        }
      </div>

      <div class="mb-3 form-group">

        <label for="email" class="form-label">Email address</label>

        <input

          type="email"

          class="form-control"

          id="email"

          placeholder="email@example.com"

          formControlName="email"

        />

        @if(loginForm.get('email')?.errors &&

        loginForm.get('email')?.touched){

        @if(loginForm.get('email')?.hasError('required')){

        <p class="alert alert-danger">Email is required</p>

        } @else if (loginForm.get('email')?.hasError('email')) {

        <p class="alert alert-danger">Email is not vaild</p>

        }}
      </div>

      <div class="mb-3 form-group">

        <label for="password" class="form-label">Password</label>

        <input

          [type]="showPassword ? 'text' : 'password'"

          class="form-control"

          id="password"

          placeholder="Password"

          formControlName="password"

        />

        @if(loginForm.get('password')?.errors &&

        loginForm.get('password')?.touched){

  

        <span class="btn btn-primary" (click)="displayPassword()"

          >Show Password</span

        >

        <small class="text-danger">

          follow this pattern: (from 0 to 9) repeat from 3 to 5 times then (from

          aA to zA) repeat from 3 to 5 times

        </small>

        @if(loginForm.get('password')?.hasError('required')){

        <p class="alert alert-danger">Password is required</p>

        } @else if (loginForm.get('password')?.hasError('pattern')) {

        <p class="alert alert-danger">Minimum length 5 characters</p>

        } }

      </div>

      <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid">Login</button>

    </form>

  </div>

</div>
```


```ts
@Pipe({

  name: 'search',

  standalone: true,

})

export class SearchPipe implements PipeTransform {

  transform(items: Product[], searchTerm: string = ''): Product[] {

    if (!searchTerm.trim()) {

      return items;

    }

    return items.filter(

      (item) =>

        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||

        item.category.toLowerCase().includes(searchTerm.toLowerCase())

    );

  }

}
```


---
## Session-7

- Error Handling
- `ngContainer` & `ngTemplate` & `ngContent`
- Interceptors
- Guard
- Lazy loading

---
## Next Steps 🐱‍🏍 

- [Angular roadmap by angular love](https://angular.love/roadmap)
- [Angular 17 ](https://www.youtube.com/playlist?list=PLgU7izgeR2lwwNRNY4fYQf3GZawV-EGnW)
- [How to learn Program language](https://www.linkedin.com/pulse/%D8%A7%D8%B2%D8%A7%D9%89-%D8%A7%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%89-%D9%84%D8%BA%D8%A9-%D8%A8%D8%B1%D9%85%D8%AC%D9%87-%D8%A8%D8%B4%D9%83%D9%84-%D9%82%D9%88%D9%89-%D9%88%D8%A7%D9%83%D9%88%D9%86-%D9%85%D8%AA%D9%85%D9%83%D9%86-%D9%85%D9%86%D9%87%D8%A7-%D9%88%D9%81%D8%A7%D9%87%D9%85%D9%87%D8%A7-shaikoun/?trackingId=50P%2FW7%2FCTRiSqxdgU2utQA%3D%3D)
- [The Ultimate Guide To Angular Evolution Angular](https://houseofangular.io/the-ultimate-guide-to-angular-evolution/)
---

```
Trimed Flu 2 rep per day
Parofen 3 rep per day
Bradozen
```
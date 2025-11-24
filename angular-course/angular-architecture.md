
# Angular Architecture

Angular follows a **component-based architecture** with clear separation of concerns. Here's the conceptual model and how it maps to your project.

---

## Core Building Blocks

### 1. **Components** (UI Layer)
The fundamental building blocks of Angular apps. Each component controls a view (portion of the screen).

**Structure:**
- **Class** – TypeScript logic (state, methods)
- **Template** – HTML view
- **Styles** – CSS (scoped to component)
- **Metadata** – `@Component` decorator

**Example from your app:**

```@d:/Kareem Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.ts#1:12
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

- **`selector`** – Custom HTML tag (`<app-root>`)
- **`imports`** – Dependencies (other components, directives, pipes)
- **`templateUrl`** – External HTML file
- **`signal()`** – Reactive state (Angular 18+ signals for change detection)

**Component tree:**
```
App (root)
├── HeaderComponent
├── RouterOutlet (renders routed components)
│   ├── HomeComponent
│   └── AboutComponent
└── FooterComponent
```

---

### 2. **Templates** (View Layer)
HTML with Angular syntax extensions:

- **Interpolation** – `{{ title() }}`
- **Property binding** – `[disabled]="isLoading"`
- **Event binding** – `(click)="handleClick()"`
- **Two-way binding** – `[(ngModel)]="username"`
- **Directives** – `*ngIf | @IF`, `*ngFor | @For`, `[ngClass]`
- **Pipes** – `{{ date | date:'short' }}`

---

### 3. **Services** (Business Logic Layer)
Reusable classes for data fetching, state management, utilities. Injected via **Dependency Injection (DI)**.

**Example service:**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' }) // Singleton across app
export class DataService {
  constructor(private http: HttpClient) {}
  
  getUsers() {
    return this.http.get('/api/users');
  }
}
```

**Provide in [app.config.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.config.ts:0:0-0:0):**
```@d:/Kareem Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.config.ts#6:11
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
```

Add `provideHttpClient()` for HTTP, custom services, etc.

---

### 4. **Dependency Injection (DI)**
Angular's DI system provides instances to components/services.

**Inject a service:**
```typescript
export class App {
  private dataService = inject(DataService); // Modern inject()
  // or constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      console.log(users);
    });
  }
}
```

**Providers hierarchy:**
- **Root** – `providedIn: 'root'` (singleton, app-wide)
- **Component** – `providers: [MyService]` in `@Component` (new instance per component)

---

### 5. **Routing** (Navigation Layer)
Maps URLs to components.

**Routes definition:**
```@d:/Kareem Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.routes.ts#1:4
import { Routes } from '@angular/router';

export const routes: Routes = [];
```

**Add routes:**
```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserDetailComponent }, // Route params
  { path: '**', component: NotFoundComponent } // Wildcard
];
```

**Router outlet in template:**
```html
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet> <!-- Routed component renders here -->
```

**Lazy loading (code splitting):**
```typescript
{
  path: 'admin',
  loadComponent: () => import('./admin/admin').then(m => m.AdminComponent)
}
```

---

### 6. **Modules vs Standalone** (Organization Layer)

**Your app uses Standalone (modern Angular 18+):**
- No `NgModule`
- Each component declares its own `imports`
- Providers in [app.config.ts](cci:7://file:///d:/Kareem%20Khater/NTG-Summer-Training/Shrouk-Trainning-2026/session-2-angular-01/first-app/src/app/app.config.ts:0:0-0:0)

**Old NgModule approach:**
```typescript
@NgModule({
  declarations: [App, HomeComponent], // Components
  imports: [BrowserModule, RouterModule], // External modules
  providers: [DataService], // Services
  bootstrap: [App]
})
export class AppModule {}
```

---

## Angular Architecture Layers

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│  (Components + Templates + Styles)      │
│  - User interaction                     │
│  - Display data                         │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│         Business Logic Layer            │
│  (Services + State Management)          │
│  - Data fetching (HTTP)                 │
│  - Business rules                       │
│  - Shared state (signals, RxJS)         │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│         Data Layer                      │
│  (HTTP Client + APIs)                   │
│  - Backend communication                │
│  - Local storage                        │
└─────────────────────────────────────────┘
```

**Cross-cutting concerns:**
- **Routing** – Navigation between views
- **Dependency Injection** – Wiring services/components
- **Change Detection** – Updates UI when data changes
- **RxJS** – Reactive programming (Observables for async)

---

## Data Flow Patterns

### 1. **Unidirectional data flow (recommended)**
```
Parent Component
    │
    ├─ @Input() ──> Child Component (data down)
    │
    └─ @Output() <── Child Component (events up)
```

**Example:**
```typescript
// Parent
@Component({
  template: `<child [user]="currentUser" (delete)="onDelete($event)" />`
})
export class Parent {
  currentUser = { name: 'Alice' };
  onDelete(id: number) { /* ... */ }
}

// Child
@Component({ selector: 'child', template: `<button (click)="remove()">Delete</button>` })
export class Child {
  @Input() user!: User;
  @Output() delete = new EventEmitter<number>();
  
  remove() {
    this.delete.emit(this.user.id);
  }
}
```

### 2. **Reactive state with Signals (Angular 18+)**
```typescript
export class App {
  count = signal(0); // Writable signal
  doubled = computed(() => this.count() * 2); // Computed signal
  
  increment() {
    this.count.update(n => n + 1);
  }
}
```

**Template:**
```html
<p>Count: {{ count() }}</p>
<p>Doubled: {{ doubled() }}</p>
<button (click)="increment()">+1</button>
```

### 3. **RxJS Observables (async data)**
```typescript
export class App {
  users$ = this.http.get<User[]>('/api/users'); // Observable
}
```

**Template (async pipe):**
```html
<div *ngFor="let user of users$ | async">
  {{ user.name }}
</div>
```

---

## Change Detection

Angular detects when data changes and updates the DOM.

**Strategies:**
1. **Default** – Checks entire component tree on events
2. **OnPush** – Only checks when `@Input` changes or events fire (performance optimization)
3. **Signals** – Fine-grained reactivity (Angular 18+, automatic tracking)

**Your app config:**
```typescript
provideZoneChangeDetection({ eventCoalescing: true })
```
- **Zone.js** – Monkey-patches async APIs to trigger change detection
- **eventCoalescing** – Batches multiple events into one check

---

## Lifecycle Hooks

Components have lifecycle methods:

```typescript
export class MyComponent {
  ngOnInit() { /* After component initialized */ }
  ngOnChanges(changes: SimpleChanges) { /* When @Input changes */ }
  ngOnDestroy() { /* Before component destroyed (cleanup) */ }
  ngAfterViewInit() { /* After view rendered */ }
}
```

---

## Typical Angular App Architecture

```
src/
├── app/
│   ├── core/                    # Singleton services, guards, interceptors
│   │   ├── auth.service.ts
│   │   └── auth.guard.ts
│   ├── shared/                  # Reusable components, directives, pipes
│   │   ├── button/
│   │   └── pipes/
│   ├── features/                # Feature modules (lazy-loaded)
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   └── home.routes.ts
│   │   └── admin/
│   ├── app.ts                   # Root component
│   ├── app.config.ts            # Providers
│   └── app.routes.ts            # Routes
├── main.ts                      # Bootstrap
└── index.html                   # SPA shell
```

---

## Key Angular Concepts Summary

| Concept | Purpose | Example |
|---------|---------|---------|
| **Component** | UI building block | `@Component({ selector: 'app-header' })` |
| **Template** | HTML view with bindings | `{{ title }}`, `*ngIf`, `(click)` |
| **Service** | Business logic, data | `@Injectable({ providedIn: 'root' })` |
| **DI** | Provide dependencies | `inject(DataService)` |
| **Routing** | Navigation | `{ path: 'home', component: HomeComponent }` |
| **Signals** | Reactive state | `count = signal(0)` |
| **RxJS** | Async streams | `http.get().subscribe()` |
| **Pipes** | Transform data in templates | `{{ date \| date:'short' }}` |
| **Directives** | Modify DOM behavior | `*ngIf`, `*ngFor`, `[ngClass]` |

---

## Summary

Angular's architecture is built around:
1. **Components** (UI) + **Templates** (view) + **Styles** (CSS)
2. **Services** (business logic) injected via **DI**
3. **Routing** for navigation
4. **Reactive state** (signals/RxJS) for data flow
5. **Change detection** to sync model ↔ view

Your app uses the modern **standalone** approach with **signals** for reactivity, eliminating the need for NgModules and simplifying the architecture.
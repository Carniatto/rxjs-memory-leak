# RXJS memory leak

## Solution 1

Keep an array of your subscriptions and unsubscribe when the `OnDestroy` hook is invoked

```ts
subscriptions: Subscriptions[]

ngOnInit() {
  this.subscriptions = [
    source1$.subscribe(console.log),
    source2$.subscribe(console.log),
    source3$.subscribe(console.log)
  ]
}

ngOnDestroy() {
  this.subscriptions.forEach(
    subs => subs.unsubscribe()
  )
}
```

## Solution 2

Use a `subject` to emit when the `OnDestroy` hook is invoked and pipe the `takeUntil` operator in your subscriptions

```ts
destroy$: Subject

ngOnInit() {
  source1$
    .pipe(takeUntil(destroy$))
    .subscribe(console.log)

  source2$
    .pipe(takeUntil(destroy$))
    .subscribe(console.log)

  source3$
    .pipe(takeUntil(destroy$))
    .subscribe(console.log)
}

ngOnDestroy() {
  this.destroy$.next()
  this.destroy.complete()
}
```

## Solution 3

Use the `async` pipe as much as possible. This allows you to subscribe automatically in the template and will unsubscribe in component destruction. (tip: you can preprocess your data or log using the pipe operator)

```ts
ngOnInit() {
    pipedSource1 = source1$.pipe(tap(console.log))
    pipedSource2 = source2$.pipe(tap(console.log))
    pipedSource3 = source3$.pipe(tap(console.log))
}
```

```html
<div *ngIf="pipedSource1$ | async as source1">
  {{ source1 }}
</div>

<div *ngIf="pipedSource2$ | async as source2">
  {{ source2 }}
</div>

<div *ngIf="pipedSource3$ | async as source3">
  {{ source3 }}
</div>
```

/* * * ./app/comments/app.component.ts * * */
// Imports
import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    template: `
        <h1>Restaurants</h1>
        
        <comment-widget></comment-widget>
        `,
})
export class AppComponent { }

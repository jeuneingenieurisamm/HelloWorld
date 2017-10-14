import { Component, Input } from '@angular/core';


@Component({
    selector: 'first-comp', // => the selector used to add this component in the app.component.html
    templateUrl: './first-comp.component.html'  // => the associated template (view) of this component
})
export class FirstComponent {

    // The Input decorator tells Angular that this component needs a property of type string in order
    // to be displayed in the parent component (the app.component)
    // Later we will use the property binding to pass this needed property from the app.component (the parent)
    // to this component (the child)

    @Input() location: string;

}

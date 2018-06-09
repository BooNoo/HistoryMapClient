import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, BehaviorSubject } from "rxjs";

@Component({
    template: '',
})
export class FormComponent {
    @Input() form: FormGroup;

    public error = (selector: string, form?: FormGroup) => {
        let control = (form || this.form).get(selector);
        if (control) {
            return control.touched && control.invalid ? control.errors : false;
        } else {
            return false;
        }
    };

    public formValue(): Observable<any> {
        let subject = new BehaviorSubject(this.form.value);
        this.form.valueChanges.subscribe(x => subject.next(x));
        return subject;
    };
}

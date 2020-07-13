import React from "react";

import Input from "../../common-ui/input";
import Rating from "../../common-ui/rating";
import Textarea from "../../common-ui/textarea";
import Button from "../../common-ui/button";

import { Feedback } from "../../../redux/feedback/types/feedback";
import { validate as validateEmail } from "../../../helpers/email";

type Error = {
    name: string | null,
    email: string | null,
    comment: string | null,
    rating: string | null,
}

type FieldToBool = {
    name: boolean,
    email: boolean,
    comment: boolean,
    rating: boolean,
}
interface FormProps {
    onSubmit(form: Feedback): void;
}
interface FormState {
    form: Omit<Feedback, "id" | "createdAt">;
    errors: Error;
    isTouched: FieldToBool;
}

export class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);

        this.state = {
            form: {
                name: "",
                email: "",
                comment: "",
                rating: 0,
            },
            errors: {
                name: null,
                email: null,
                comment: null,
                rating: null,
            },
            isTouched: {
                name: false,
                email: false,
                rating: false,
                comment: false,
            },
        };
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.change(e.target.name as keyof FormState["form"], e.target.value);
    };

    onRatingChange = (value: number) => {
        this.change("rating", value);
    };

    change<T extends keyof FormState["form"]>(name: T, value: FormState["form"][T]) {
        this.setState(
            {
                form: {
                ...this.state.form,
                [`${name}`]: value,
                },
                isTouched: {
                ...this.state.isTouched,
                [`${name}`]: true,
                },
            },
            this.validate,
        );
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (this.validate()) {
            this.props.onSubmit({
                ...this.state.form,
                id: new Date().toISOString(),
                createdAt: new Date(),
            });

            this.setState({
                form: {
                    name: "",
                    email: "",
                    comment: "",
                    rating: 0,
                },
            });
        }
    };

    validateForm(): FormState["errors"] {
        const { name, email, comment } = this.state.form;
        const errors: FormState["errors"] = {
            name: null,
            email: null,
            comment: null,
            rating: null
        };

        if (!name) {
            errors.name = "Please enter your name";
        }

        if (!email || !validateEmail(email)) {
            errors.email = "Please enter your email";
        }

        if (!comment) {
            errors.comment = "Please enter the comment";
        }

        return errors;
    }

    validate = (): boolean => {
        const errors = this.validateForm();
        const keys = Object.keys(errors) as Array<keyof typeof errors>;
        const isValid = keys.every((key) => !errors[key]);

        this.setState({ errors });

        return isValid;
    };

    render() {
        const { form, errors, isTouched } = this.state;

        return (
        <form onSubmit={this.onSubmit}>
            <Input
                className="form-field"
                placeholder="Name"
                onChange={this.onChange}
                value={form.name}
                name="name"
                error={(isTouched.name && errors.name) ? errors.name : undefined }
            />

            <Input
                className="form-field"
                placeholder="Email"
                onChange={this.onChange}
                value={form.email}
                name="email"
                error={(isTouched.email && errors.email) ? errors.email : undefined }
            />

            <Textarea
                className="form-field"
                placeholder="Comment"
                onChange={this.onChange}
                value={form.comment}
                name="comment"
                error={(isTouched.comment && errors.comment) ? errors.comment : undefined }
            />

            <div className="text-center">
                <strong>Please you rate our service?</strong>
            </div>

            <Rating
                className="form-field flex-align__center"
                onChange={this.onRatingChange}
                value={form.rating}
                error={(isTouched.rating && errors.rating) ? errors.rating : undefined }
            />

            <Button type="submit" buttonText="Submit"/>
        </form>
        );
    }
}

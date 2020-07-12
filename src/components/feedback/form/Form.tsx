import React from "react";

import Input from "../../common-ui/input";
import Rating from "../../common-ui/rating";
import Textarea from "../../common-ui/textarea";
import Button from "../../common-ui/button";

import { Feedback } from "../../../redux/feedback/types/feedback";
import { validate as validateEmail } from "../../../helpers/email";

interface FormProps {
    onSubmit(form: Feedback): void;
}
interface FormState {
    form: Omit<Feedback, "id" | "createdAt">;
    errors: Record<keyof Omit<Feedback, "id" | "createdAt">, null | string>;
    isTouched: Record<keyof Omit<Feedback, "id" | "createdAt">, boolean>;
}

export class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      form: {
        name: "",
        email: "",
        rating: 0,
        comment: "",
      },
      errors: {
        name: null,
        email: null,
        rating: null,
        comment: null,
      },
      isTouched: {
        name: false,
        email: false,
        rating: false,
        comment: false,
      },
    };
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.change(e.target.name as keyof FormState["form"], e.target.value);
  };

  private onRatingChange = (value: number) => {
    this.change("rating", value);
  };

  private change<T extends keyof FormState["form"]>(name: T, value: FormState["form"][T]) {
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

  private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.submit();
  };

  private submit() {
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
          rating: 0,
          comment: "",
        },
      });
    }
  }

  private getValidationErrors(): FormState["errors"] {
    const { name, email, comment } = this.state.form;
    const errors: FormState["errors"] = {
      name: null,
      email: null,
      rating: null,
      comment: null,
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

  private validate = (): boolean => {
    const errors = this.getValidationErrors();
    const keys = Object.keys(errors) as Array<keyof typeof errors>;
    const isValid = keys.every((key) => !errors[key]);

    this.setState({ errors });

    return isValid;
  };

  public render() {
    const { form, errors, isTouched } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          className="form-field"
          placeholder="Name"
          onChange={this.onChange}
          value={form.name}
          error={(isTouched.name && errors.name) ? errors.name : undefined }
        />

        <Input
          className="form-field"
          placeholder="Email"
          onChange={this.onChange}
          value={form.email}
          error={(isTouched.email && errors.email) ? errors.email : undefined }
        />

        <Textarea
          className="form-field"
          placeholder="Comment"
          onChange={this.onChange}
          value={form.comment}
          error={(isTouched.comment && errors.comment) ? errors.comment : undefined }
        />

        <Rating
          className="form-field"
          onChange={this.onRatingChange}
          value={form.rating}
          error={(isTouched.rating && errors.rating) ? errors.rating : undefined }
        />

        <Button type="submit" buttonText="Submit"/>
      </form>
    );
  }
}

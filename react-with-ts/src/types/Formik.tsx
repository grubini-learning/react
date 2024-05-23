import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";

export type FormikAPI = {
  clear: () => void;
};

type FormikProps = PropsWithChildren<{ onSave: (data: unknown) => void }> &
  ComponentPropsWithoutRef<"form">;

export const Formik = forwardRef<FormikAPI, FormikProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear: () => {
          form.current?.reset();
        },
      };
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.entries(formData);

      onSave(data);
    };

    return <form onSubmit={handleSubmit} {...otherProps} ref={form}></form>;
  }
);

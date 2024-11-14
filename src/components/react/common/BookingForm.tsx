import { BookingFormFields } from "@/lib/constants/bookingFormFields";
import { InputFormFields } from "@/lib/constants/formFields";
import {
  BookingFormSchema,
  type BookingFormData,
} from "@/lib/schema/BookingFormSchema";
import { Button } from "@/lib/ui/button";
import { Calendar } from "@/lib/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/lib/ui/dialog";
import { Form, FormField, FormItem, FormLabel } from "@/lib/ui/form";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/lib/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTrigger } from "@radix-ui/react-dialog";
import clsx from "clsx";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import React, { useState, type ReactNode } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface BookingFormProps {
  children: ReactNode;
}

function BookingForm({ children }: BookingFormProps) {
  const form = useForm<BookingFormData>({
    mode: "all",
    resolver: zodResolver(BookingFormSchema),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = form;
  const [isSending, setIsSending] = useState<boolean>(false);

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    if (data) {
      setIsSending(true);

      setTimeout(() => {
        setIsSending(false);
        toast.success("The appointment has been successfully scheduled.", {
          className: "!bg-green-200",
          description: "Redirecting to home page...",
          duration: 5000,
        });
      }, 4000);

      setTimeout(() => {
        window.location.href = window.location.origin;
      }, 8000);
    }
    if (errors) {
      console.log(errors);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Set an appointment</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-4 gap-5 font-montserrat tracking-wider"
          >
            {BookingFormFields.map(
              ({ label, name, type, className, placeholder, inputClass }) => (
                <div key={name} className={`form-group ${className}`}>
                  <Label htmlFor={name}>{label}</Label>
                  {type === "date" ? (
                    <FormField
                      control={control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <Popover>
                            <PopoverTrigger className="col-span-4" asChild>
                              <Button
                                variant={"outline"}
                                className={clsx(
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon />
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      )}
                    />
                  ) : (
                    <Input
                      type={type}
                      id={name}
                      placeholder={placeholder}
                      className={inputClass}
                      error={errors[name]?.message}
                      {...register(name)}
                    />
                  )}
                </div>
              ),
            )}

            <DialogFooter className="col-span-4">
              <Button disabled={isSending || isSubmitSuccessful} type="submit">
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>{isSubmitSuccessful ? "Submitted" : "Submit"}</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default BookingForm;
